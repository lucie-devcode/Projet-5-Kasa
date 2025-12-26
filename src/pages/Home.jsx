import Banner from "../Components/Banner/Banner";
import ApartmentGrid from "../Components/ApartmentGrid/ApartmentGrid";
import homeBanner from "../assets/images/photo-banner.png";

function Home() {
  return (
    <div className="page-container">
      <Banner image={homeBanner} />
      <ApartmentGrid />
    </div>
  );
}

export default Home;
