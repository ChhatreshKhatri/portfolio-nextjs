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
    "Hi, I'm Chhatresh Khatri. Full stack Web Developer and a self-motivated, initiative-taking, and an enthusiastic professional.",
  keywords: [
    "Chhatresh Khatri, Portfolio, About, Projects, Web Developer, Web Development, Website, Code, React.JS, Next.JS, front end",
  ],
  applicationName: "Chhatresh Khatri",
  type: "website",
  authors: [{ name: "Chhatresh Khatri" }],
  metadataBase: new URL("https://www.chhatreshkhatri.com"),
  alternates: {
    canonical: "/",
  },
  category: "website",
  icons: {
    icon: [{ type: "image/svg+xml", url: "favicon.svg", sizes: "any" }],
    apple: [{ type: "image/png", url: "apple-icon.png", sizes: "180x180" }],
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
        url: "ck-1200x630.png",
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
    images: "/ck-1200x630.png",
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
    themeColor: "#191919"
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} h-full flex flex-col bg-light text-dark dark:bg-dark dark:text-light w-full min-h-screen`}
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
