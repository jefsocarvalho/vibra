import type { Metadata } from "next";
import "../styles/globals.css";
import { cx } from "@/lib/utils";
import { Providers } from "@/components/providers";
import { fontDisplay, fontSans } from "@/styles/fonts";

export const metadata: Metadata = {
  title: "VIBRA",
  description: "Balance your emotional energy, elevate your vibration, and nurture positive habits."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cx("min-h-screen bg-lavender-50 text-slate-900 antialiased transition-colors", fontSans.variable, fontDisplay.variable)}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
