import Banner from "../Components/Banner/Banner";
import "./About.scss";
import aboutBanner from "../assets/images/photo-banner-about.png";

function About() {
  return (
    <>
      <main className="page-container">
        <Banner image={aboutBanner} hideText={true} />
        <div className="description">
          <h2>Fiabilité</h2>
          <h2>Respect</h2>
          <h2>Service</h2>
          <h2>Sécurité</h2>
        </div>
      </main>
    </>
  );
}
export default About;
