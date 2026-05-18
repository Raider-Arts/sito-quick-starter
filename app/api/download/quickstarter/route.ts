// app/api/download/quickstarter/route.ts

import { track } from '@vercel/analytics/server';
import { readFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  const fileName = 'Aurora Mankinds Horizon - Quickstarter.pdf';

  const filePath = path.join(process.cwd(), 'public', 'downloads', fileName);

  console.log('Download route called');
  console.log('Looking for file:', filePath);
  console.log('File exists:', existsSync(filePath));

  if (!existsSync(filePath)) {
    return Response.json(
      {
        error: 'PDF file not found',
        expectedPath: filePath,
      },
      { status: 404 }
    );
  }

  // Do not let analytics failure break the download
  track('quickstarter_download', {
    file: fileName,
    source: 'download_button',
  }).catch((error) => {
    console.error('Vercel analytics tracking failed:', error);
  });

  const fileBuffer = await readFile(filePath);

  return new Response(new Uint8Array(fileBuffer), {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${fileName}"`,
      'Content-Length': fileBuffer.length.toString(),
      'Cache-Control': 'no-store',
    },
  });
}
