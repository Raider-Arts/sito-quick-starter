'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function QuickstarterDownloadPage() {
  const router = useRouter();

  useEffect(() => {
    const link = document.createElement("a");
    link.href = "/api/download/quickstarter";
    link.style.display = "none";

    document.body.appendChild(link);
    link.click();
    link.remove();

    const timer = setTimeout(() => {
      if (window.history.length > 1) {
        router.back();
      } else {
        router.replace("/");
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main style={{ padding: 32 }}>
      <p>Starting download...</p>
    </main>
  );
}
