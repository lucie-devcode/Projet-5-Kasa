import Banner from "../Components/Banner/Banner";
import ApartmentGrid from "../Components/ApartmentGrid/ApartmentGrid";
import homeBanner from "../assets/images/photo-banner.png";

function Home() {
  return (
    <main className="page-container">
      <Banner image={homeBanner} />
      <ApartmentGrid />
    </main>
  );
}

export default Home;
