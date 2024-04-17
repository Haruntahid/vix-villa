import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import PopertyLists from "../components/PopertyLists";
import { Helmet } from "react-helmet-async";

function Home() {
  const getPoperty = useLoaderData();
  const { estates } = getPoperty;

  return (
    <>
      <Helmet>
        <title>vix-villa | Home</title>
      </Helmet>
      <Banner />
      <PopertyLists estates={estates} />
    </>
  );
}

export default Home;
