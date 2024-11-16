import Header from "../ui/Header/Header";
import MailList from "../ui/MailList/MailList";
import PropertyType from "../ui/ProprtyType/PropertyType";
import TrendingDestination from "../ui/TrendingDestination/TrendingDestination";
import FeaturedPlaces from "../ui/FeaturedPlaces/FeaturedPlaces";

function HomePage() {
  return (
    <div>
      <Header />
      <TrendingDestination />
      <PropertyType />
      <FeaturedPlaces />
      <MailList />
    </div>
  );
}

export default HomePage;
