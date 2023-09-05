import "./globals.css";
import NavBar from "./components/Navbar";
import { Poppins } from "next/font/google";
import Footer from "./components/footer";
import ThemeProvider from "./components/themeProvider";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "700"],
});
export const metadata = {
  title: "Chhatresh Khatri | Portfolio",
  description:
    "Chhatresh Khatri Portfolio. Full stack Web Developer and a self-motivated, initiative-taking and an enthusiastic professional.",
  keywords: [
    "Chhatresh Khatri",
    "Chhatresh khatri Portfolio",
    "Full Stack",
    "Web Developer",
    "Web Designer",
    "Website",
    "Code",
    "React.JS",
    "Next.JS",
    "frontend",
    "Chhatresh About",
    "Chhatresh Projects",
  ],
  applicationName: "Chhatresh Khatri Portfolio",
  type: "website",
  authors: [{ name: "Chhatresh Khatri" }],
  metadataBase: new URL("https://www.chhatreshkhatri.com"),
  alternates: {
    canonical: "/",
  },
  category: "website",
  openGraph: {
    title: "Chhatresh Khatri | Portfolio",
    description:
      "Chhatresh Khatri Portfolio. Full stack Web Developer and a self-motivated, initiative-taking and an enthusiastic professional.",
    url: "https://www.chhatreshkhatri.com/",
    siteName: "chhatreshkhatri",
    type: "website",
  },
  twitter: {
    title: "Chhatresh Khatri | Portfolio",
    url: "https://www.chhatreshkhatri.com/",
    description:
      "Chhatresh Khatri Portfolio. Full stack Web Developer and a self-motivated, initiative-taking and an enthusiastic professional.",
    card: "summary_large_image",
    creator: "@chhatreshkhatri",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    noarchive: true,
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
      <body
        className={`${poppins.className} w-full h-screen flex flex-col bg-light text-dark dark:bg-dark dark:text-light`}
      >
        <ThemeProvider>
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
