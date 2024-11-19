import PageHead from "@/app/components/PageHead";
import FaviconVisibility from "../components/FaviconVisibility";
import ProjectsData from "../components/ProjectsData";
export const metadata = {
  title: "Chhatresh Khatri | Projects",
  description: "Chhatresh Khatri Projects. Explore a collection of diverse projects,  discover their unique features and access relevant links for more information.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Chhatresh Khatri | Projects",
    description: "Chhatresh Khatri Projects. Explore a collection of diverse projects,  discover their unique features and access relevant links for more information.",
    url: "https://www.chhatreshkhatri.com/projects",
    siteName: "chhatreshkhatri",
    type: "website",
    images: [{ url: "./opengraph-image.png" }],
  },
  twitter: {
    title: "Chhatresh Khatri | Projects",
    url: "https://www.chhatreshkhatri.com/projects",
    description: "Chhatresh Khatri Projects. Explore a collection of diverse projects,  discover their unique features and access relevant links for more information.",
    card: "summary_large_image",
    creator: "@chhatreshkhatri",
    images: [{ url: "./opengraph-image.png" }],
  },
};
export default function Projects() {
  return (
    <>
      <PageHead text="Projects" />
      <ProjectsData />
      <FaviconVisibility />
    </>
  );
}
