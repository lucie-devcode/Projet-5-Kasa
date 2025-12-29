import Banner from "../Components/Banner/Banner";
import "./About.scss";
import aboutBanner from "../assets/images/photo-banner-about.png";
import Collapse from "../Components/Collapse/Collapse";

function About() {
  const aboutData = [
    {
      title: "Fiabilité",
      content: "Les annonces postées sur Kasa sont fiables et vérifiées.",
    },
    {
      title: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondamentales de Kasa.",
    },
    {
      title: "Service",
      content:
        "Nos équipes sont disponibles pour répondre à toutes vos questions.",
    },
    {
      title: "Sécurité",
      content: "La sécurité est notre priorité pour garantir un séjour serein.",
    },
  ];

  return (
    <main className="page-container">
      <Banner image={aboutBanner} hideText={true} />

      <section className="about-collapses">
        {aboutData.map((item, index) => (
          <Collapse key={index} title={item.title}>
            <p>{item.content}</p>
          </Collapse>
        ))}
      </section>
    </main>
  );
}

export default About;
