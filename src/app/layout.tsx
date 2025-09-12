import { DM_Serif_Text, Anek_Telugu } from "next/font/google";
import ThemeProviderWrapper from "./components/ThemeProviderWrapper";
import GlobalStylesProvider from "./components/GlobalStyleProvider";
import BtnZap from "./components/BtnWhatsApp";



const title = DM_Serif_Text({
  weight: "400",
  variable: "--font-title",
  subsets: ["latin"],
  style: ["normal", "italic"]
});

const anektelugo = Anek_Telugu({
  variable: "--font-text",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${title.variable} ${anektelugo.className}`}>
        <ThemeProviderWrapper>
          <GlobalStylesProvider />
          <BtnZap />
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
