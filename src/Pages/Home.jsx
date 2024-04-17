import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import PopertyLists from "../components/PopertyLists";

function Home() {
  const getPoperty = useLoaderData();
  const { estates } = getPoperty;

  return (
    <>
      <Banner />
      <PopertyLists estates={estates} />
    </>
  );
}

export default Home;
