import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import PopertyLists from "../components/PopertyLists";

function Home() {
  const getPoperty = useLoaderData();
  const { estates } = getPoperty;
  console.log(estates);
  return (
    <>
      <h2>home</h2>
      <Banner />
      <PopertyLists estates={estates} />
    </>
  );
}

export default Home;
