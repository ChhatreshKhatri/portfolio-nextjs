import "./globals.css";
// import NavBar from "./components/nav";
import CustomNavbar from "./components/customNavbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chhatresh Khatri | Portfolio",
  description:
    "Hi, I'm Chhatresh Khatri. Full stack Web Developer and a self-motivated, initiative-taking, and an enthusiastic professional.",
  keywords: [
    "Portfolio, Chhatresh, Khatri, Web Developer, Web Development, Website, Code, reactjs, front end",
  ],
  sitename: "Dlouck",
  type: "website",
  authors: [{ name: "Chhatresh Khatri" }],
  metadataBase: new URL("https://www.chhatreshkhatri.com"),
  alternates: {
    canonical: "https://www.chhatreshkhatri.com/",
  },
  category: "website",
  icons: {
    icon: [
      { url: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "16x16 32x32", type: "image/x-icon" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/app.webmanifest",
  openGraph: {
    title: "Chhatresh Khatri | Portfolio",
    description:
      "Hi, I'm Chhatresh Khatri. Full stack Web Developer and a self-motivated, initiative-taking, and an enthusiastic professional.",
    url: "https://www.chhatreshkhatri.com/",
    siteName: "chhatreshkhatri",
    images: [
      {
        url: "/ck800x600.png",
        width: 800,
        height: 600,
      },
      {
        url: "/ck1200x630.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    title: "Chhatresh Khatri | Portfolio",
    url: "https://www.chhatreshkhatri.com/",
    description:
      "Hi, I'm Chhatresh Khatri. Full stack Web Developer and a self-motivated, initiative-taking, and an enthusiastic professional.",
    images: "/ck1200x630.png",
    card: "summary_large_image",
    creator: "@chhatreshkhatri",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-light w-full min-h-screen`}>
        {/* <NavBar /> */}
        <CustomNavbar />
        {children}
      </body>
    </html>
  );
}
