import PageHead from "@/app/components/PageHead";

import FaviconVisibility from "../components/FaviconVisibility";
import About from "../components/AboutData";

export const metadata = {
  title: "Chhatresh Khatri | About",
  description: "Chhatresh Khatri About. Full Stack developer skilled in diverse tech including C/C++, Java, HTML5, CSS3, JavaScript, React.js, Next.js, and more.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Chhatresh Khatri | About",
    description: "Chhatresh Khatri About. Full Stack developer skilled in diverse tech including C/C++, Java, HTML5, CSS3, JavaScript, React.js, Next.js, and more.",
    url: "https://www.chhatreshkhatri.com/about",
    siteName: "chhatreshkhatri",
    type: "website",
    images: [{ url: "./opengraph-image.png" }],
  },
  twitter: {
    title: "Chhatresh Khatri | About",
    url: "https://www.chhatreshkhatri.com/about",
    description: "Chhatresh Khatri About. Full Stack developer skilled in diverse tech including C/C++, Java, HTML5, CSS3, JavaScript, React.js, Next.js, and more.",
    card: "summary_large_image",
    creator: "@chhatreshkhatri",
    images: [{ url: "./opengraph-image.png" }],
  },
};



export default function Page() {
  
  return (
    <>
      <PageHead text="About" />
      <About />
      <FaviconVisibility />
    </>
  );
}
