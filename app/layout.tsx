import NavBar from "./components/Navbar";
import { Poppins } from "next/font/google";
import Footer from "./components/footer";
import ThemeProvider from "./components/themeProvider";
import FaviconVisibilityChange from "./components/FaviconVisibilityChange";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "700"] });

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
  // icons: { icon: [{ url: "/favicon.ico", type: "image/x-icon" }], apple: [{ url: "/apple-icon.png" }] },
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
    siteName: "chhatreshkhatri",
    type: "website",
  },
  twitter: {
    title: "Chhatresh Khatri | Portfolio",
    url: "https://www.chhatreshkhatri.com/",
    description:
      "Chhatresh Khatri Portfolio. Full stack Web Developer passionate about latest trends in the tech industry. Crafting innovation with code.",
    card: "summary_large_image",
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
  themeColor: "#191919",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} w-full min-h-screen flex flex-col bg-light text-darked dark:bg-dark dark:text-light`}>
        <ThemeProvider>
          <NavBar /> {children} <Footer />
          <FaviconVisibilityChange />
        </ThemeProvider>
      </body>
    </html>
  );
}
