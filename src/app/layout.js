import "./globals.css";
import Header from "./components/header/header.jsx";

export const metadata = {
    title: "Косівський ліцей №2 імені Михайла Павлика",
    description:
        "Косівський ліцей №2 імені Михайла Павлика Косівської міської ради Косівського району Івано-Франківської облaсті",
};

export default function RootLayout({ children }) {
    return (
        <html lang="uk">
            <Header />
            <body>{children}</body>
        </html>
    );
}
