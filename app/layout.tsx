import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Prostore",
    description:
        "A simple e-commerce store built with Next.js 16, TypeScript, Tailwind CSS, and Prisma.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en" className={`${inter.className} h-full antialiased`}>
            <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
