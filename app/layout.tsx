import NavBar from "@/app/components/Navbar";
import ThemeProviderWrapper from "@/app/components/ThemeProviderWrapper";
import FaviconVisibility from "@/app/components/FaviconVisibility";
import Footer from "@/app/components/Footer";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "700"], display: "swap" });

export const metadata = {
  title: "Chhatresh Khatri | Portfolio",
  description:
    "Chhatresh Khatri Portfolio. Full stack Web Developer passionate about latest trends in the tech industry. Crafting innovation with code.",
  keywords: [
    "Chhatresh Khatri",
    "Portfolio",
    "About",
    "Projects",
    "Full Stack Developer",
    "web Development",
    "Web Designer",
    "Website",
    "Code",
    "Innovation",
    "Next.JS",
    "frontend",
  ],
  icons: {
    shortcut: [{ url: "https://assets.chhatreshkhatri.com/icons/icon.svg" }],
    icon: [{ url: "https://assets.chhatreshkhatri.com/icon/favicon.ico" }],
    apple: ["https://assets.chhatreshkhatri.com/assets/apple-touch-icon.png"],
  },
  applicationName: "Chhatresh Khatri Portfolio",
  type: "website",
  authors: [{ name: "Chhatresh Khatri" }],
  metadataBase: new URL("https://www.chhatreshkhatri.com"),
  alternates: { canonical: "/" },
  category: "website",
  openGraph: {
    title: "Chhatresh Khatri | Portfolio",
    description:
      "Chhatresh Khatri Portfolio. Full stack Web Developer passionate about latest trends in the tech industry. Crafting innovation with code.",
    url: "https://www.chhatreshkhatri.com/",
    images: ["https://assets.chhatreshkhatri.com/icons/opengraph-image.png"],
    siteName: "chhatreshkhatri",
    type: "website",
  },
  twitter: {
    title: "Chhatresh Khatri | Portfolio",
    url: "https://www.chhatreshkhatri.com/",
    description:
      "Chhatresh Khatri Portfolio. Full stack Web Developer passionate about latest trends in the tech industry. Crafting innovation with code.",
    card: "summary_large_image",
    images: ["https://assets.chhatreshkhatri.com/icons/opengraph-image.png"],
    creator: "@chhatreshkhatri",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    noarchive: false,
    noimageindex: false,
    "max-video-preview": -1,
    "max-image-preview": "standard",
    "max-snippet": -1,
  },
};
export const viewport = { themeColor: "#191919" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} w-full min-h-screen flex flex-col bg-light text-darked dark:bg-dark dark:text-light`}>
        <ThemeProviderWrapper>
          <NavBar />
          <main className="w-full h-full flex items-center flex-col justify-center font-medium px-2 xxs:px-3 xs:px-6 md:px-12 lg:px-20 py-20 gap-y-8">
            {children}
          </main>
          <Footer />
        </ThemeProviderWrapper>
      </body>
      <FaviconVisibility />
    </html>
  );
}
