import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./styles/styles.scss";
import Menu from "@/widgets/Menu/Menu";

export const metadata: Metadata = {
    title: "Клементьев Данил | Frontend разработчик",
    description: "Сайт портфолио Клементьева Данила по frontend разработке.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className="antialiased"
            >
                <Menu/>
                {children}
            </body>
        </html>
    );
}
