import PopertyCard from "./PopertyCard";
import PropTypes from "prop-types";

function PopertyLists({ estates }) {
  return (
    <>
      <h2 className="text-4xl lg:text-6xl text-center font-bold my-10">
        Poperty List
      </h2>
      <div
        data-aos="fade-up"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {estates.map((estate) => (
          <PopertyCard estate={estate} key={estate.id} />
        ))}
      </div>
    </>
  );
}

PopertyLists.propTypes = {
  estates: PropTypes.array,
};

export default PopertyLists;
