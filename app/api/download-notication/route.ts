import {NextRequest, NextResponse} from "next/server";
import nodemailer from "nodemailer";

function getIpAddress(request: NextRequest) {
    const forwardedFor = request.headers.get("x-forwarded-for");

    if (forwardedFor) {
        return forwardedFor.split(",")[0]?.trim() ?? "IP non disponibile";
    }

    return request.headers.get("x-real-ip") ?? "IP non disponibile";
}

function getBrowser(userAgent: string) {
    if (/edg/i.test(userAgent)) return "Microsoft Edge";
    if (/chrome|crios/i.test(userAgent)) return "Google Chrome";
    if (/firefox|fxios/i.test(userAgent)) return "Mozilla Firefox";
    if (/safari/i.test(userAgent) && !/chrome|crios|android/i.test(userAgent)) return "Safari";
    if (/opr|opera/i.test(userAgent)) return "Opera";

    return "Browser non riconosciuto";
}

function getDeviceType(userAgent: string) {
    if (/tablet|ipad/i.test(userAgent)) return "Tablet";
    if (/mobile|iphone|ipod|android/i.test(userAgent)) return "Mobile";
    if (/windows|macintosh|linux/i.test(userAgent)) return "Desktop";

    return "Dispositivo non riconosciuto";
}

export async function POST(request: NextRequest) {
    try {
        const ipAddress = getIpAddress(request);
        const userAgent = request.headers.get("user-agent") ?? "User-Agent non disponibile";
        const browser = getBrowser(userAgent);
        const deviceType = getDeviceType(userAgent);
        const downloadedAt = new Date().toLocaleString("it-IT", {
            dateStyle: "full",
            timeStyle: "medium",
        });

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT ?? 587),
            secure: Number(process.env.SMTP_PORT) === 465,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.DOWNLOAD_NOTIFICATION_FROM,
            to: process.env.DOWNLOAD_NOTIFICATION_TO,
            subject: "Nuovo download del Quickstarter",
            text: [
                "È stato effettuato un nuovo download del file Quickstarter.",
                "",
                `Data e ora: ${downloadedAt}`,
                `Indirizzo IP: ${ipAddress}`,
                `Browser: ${browser}`,
                `Tipo dispositivo: ${deviceType}`,
                "",
                `User-Agent completo: ${userAgent}`,
            ].join("\n"),
            html: `
                <h2>Nuovo download del Quickstarter</h2>
                <p>È stato effettuato un nuovo download del file Quickstarter.</p>
                <ul>
                    <li><strong>Data e ora:</strong> ${downloadedAt}</li>
                    <li><strong>Indirizzo IP:</strong> ${ipAddress}</li>
                    <li><strong>Browser:</strong> ${browser}</li>
                    <li><strong>Tipo dispositivo:</strong> ${deviceType}</li>
                </ul>
                <p><strong>User-Agent completo:</strong></p>
                <p>${userAgent}</p>
            `,
        });

        return NextResponse.json({success: true});
    } catch (error) {
        console.error("Errore durante l'invio della mail di notifica download:", error);

        return NextResponse.json(
            {success: false},
            {status: 500}
        );
    }
}