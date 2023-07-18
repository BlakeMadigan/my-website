import Portfolio from "./sections/portfolio";
import Blog from "./sections/blog";
import About from "./sections/about";
import Contact from "./sections/contact";
import LandingPage from "./sections/landingPage";

export default function Page() {
  return (
    <>
      <LandingPage />
      <Blog />
      <Portfolio />
      <About />
      <Contact />
    </>
  );
}
