import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Chhatresh Khatri | Portfolio | Privacy-Policy ",
  description: "Privacy Policy for chhatreshkhatri.com Website and Its Subdomains.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Chhatresh Khatri | Portfolio | Privacy-Policy",
    description: "Privacy Policy for chhatreshkhatri.com Website and Its Subdomains.",
    url: "https://www.chhatreshkhatri.com/privacy-policy",
    siteName: "chhatreshkhatri",
    type: "website",
    images: [{ url: "../opengraph-image.png" }],
  },
  twitter: {
    title: "Chhatresh Khatri | Portfolio | Privacy-Policy",
    url: "https://www.chhatreshkhatri.com/privacy-policy",
    description: "Privacy Policy for chhatreshkhatri.com Website and Its Subdomains.",
    card: "summary_large_image",
    creator: "@chhatreshkhatri",
    images: [{ url: "../opengraph-image.png" }],
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};
const page = () => {
  return (
    <>
      <button className="flex items-center justify-center rounded p-0.5 bg-gradient-to-r from-blue1 to-yellow1">
        <h1 className="flex justify-center items-center font-semibold tracking-wider text-xl xxs:text-2xl md:text-3xl p-1 md:px-2 bg-buttonBg dark:bg-darked rounded">
          Privacy Policy
        </h1>
      </button>
      <div className="relative group rounded-lg p-3 xs:p-6 xs:px-10 py-6">
        <div className="absolute -inset-0 rounded-lg bg-gradient-to-r from-blue2/50 to-green2/50 opacity-20 transition duration-500 group-hover:opacity-50"></div>
        <div className="relative flex flex-col gap-1">
          <p className="text-xl xl:text-2xl font-semibold">Privacy Policy for This Website and Its Subdomains</p>
          <p>Effective Date: July 1,2023</p>
          <p>
            Thank you for visiting. At This Website and its subdomains, we value the privacy of our users and are committed to protecting it. This
            Privacy Policy outlines how This Website collects, uses, and discloses information when you use our website and its subdomains. By
            accessing and using our website, you consent to the practices described in this policy.
          </p>
          <p className="text-xl xl:text-2xl font-semibold ">1 Collection of Information</p>
          <p>
            1.1 Personal Information: This Website may collect personal information such as your name, email address, and other contact details when
            you voluntarily provide it to us, for example, when you submit inquiries, subscribe to our newsletters, or interact with our
            website&apos;s features.
          </p>
          <p>
            1.2 Usage Information: This Website may collect non-personal information about your interactions with our website, including your IP
            address, browser type, referring website, pages visited, and the time and date of each visit. This Website may use web analytics tools and
            technologies, such as cookies and similar technologies, to collect this information.
          </p>
          <p>
            1.3 Cookies: This Website uses cookies to enhance your browsing experience and collect information about how you use our website. Cookies
            are small text files that are stored on your device when you visit a website. You can control and manage cookies through your browser
            settings.
          </p>
          <p className="text-xl xl:text-2xl font-semibold">2 Use of Information</p>
          <p>
            2.1 Personal Information: This Website may use your personal information to respond to your inquiries, provide the requested services,
            send newsletters and updates, and improve our website and user experience. This Website may also use your personal information for
            administrative purposes, such as analyzing usage trends and enhancing our website&apos;s functionality.
          </p>
          <p>
            2.2 Usage Information: This Website may use the non-personal information collected through web analytics tools to analyze website usage,
            track trends, and gather demographic information. This helps This Website improve its website&apos;s content and functionality.
          </p>
          <p className="text-xl xl:text-2xl font-semibold">3 Disclosure of Information</p>
          <p>
            Third-Party Service Providers: This Website may share your personal information with third-party service providers who assist us in
            operating our website, conducting our business, or providing services to you. These service providers have access to your personal
            information only to perform specific tasks on our behalf and are obligated to protect your information.
          </p>
          <p className="text-xl xl:text-2xl font-semibold">4 Security</p>
          <p>
            This Website has implemented appropriate security measures to protect your information from unauthorized access, alteration, disclosure,
            or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure, and This
            Website cannot guarantee absolute security.
          </p>
          <p className="text-xl xl:text-2xl font-semibold">5 Age Restrictions</p>
          <p>This Website is safe for all age groups.</p>
          <p className="text-xl xl:text-2xl font-semibold">6 Worldwide Access</p>
          <p>
            This Website is accessible worldwide. By accessing and using our website, you acknowledge and agree that your information may be processed
            and stored in countries outside of your own.
          </p>
          <p className="text-xl xl:text-2xl font-semibold">7 Ads and Affiliate Links</p>
          <p>
            This Website may display advertisements and contain affiliate links. These third-party ads and links may collect information when you
            click on them or interact with them. Please review the respective privacy policies of those third-party websites and services for more
            information on their data collection and use practices.
          </p>
          <p className="text-xl xl:text-2xl font-semibold">8 Changes to this Privacy Policy</p>
          <p>
            This Website reserves the right to modify or update this Privacy Policy at any time. This Website will post the revised policy on its
            website with the updated effective date. This Website encourages you to review this Privacy Policy periodically to stay informed about how
            we collect, use, and protect your information.
          </p>
          <p className="text-xl xl:text-2xl font-semibold">Contact Us</p>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your information, please contact owner
            at <Link href={"mailto:contact@chhatreshkhatri.com"}>contact@chhatreshkhatri.com</Link>.
          </p>
          <p>This Privacy Policy applies to This Website and all its subdomains.</p>
          <p>If you do not agree with these policies, please discontinue use of this Website.</p>
          <p>Last updated: July 1, 2023</p>
        </div>
      </div>
    </>
  );
};

export default page;
