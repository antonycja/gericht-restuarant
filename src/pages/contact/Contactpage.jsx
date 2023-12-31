import { Helmet } from "react-helmet";
import "./contactpage.css";
import ImageOverlay from "../../components/ImageOverlay/ImageOverlay";
import NewsletterPage from "../home/NewsletterSection/NewsletterPage";
import HeroSection from "./HeroSection/HeroSection";

export default function Contactpage() {
  const meta = {
    title: "Gericht restaurant contact page built by codeant",
    description:
      "The contact page with the link to every other page on this gericht restaurant website built by codeant. Contact information is available on this page.",
    canonical: "https://codeantrestaurant.netlify.app/contact",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "restaurent ,gericht,codeant,antonycja,capetown",
      },
    },
  };
  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta
          name="description"
          content={meta.description}
        />
        <link
          rel="canonical"
          href={meta.canonical}
        />
        <meta charSet={meta.meta.charset} />
        <meta
          name="keywords"
          content={meta.meta.name.keywords}
        />
      </Helmet>

      <main className="contact-page">
        <ImageOverlay />
        <HeroSection />
        <NewsletterPage />
      </main>
    </>
  );
}
