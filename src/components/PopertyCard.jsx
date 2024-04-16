import PropTypes from "prop-types";
import { BsBuildingsFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { TiHomeOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

function PopertyCard({ estate }) {
  const {
    id,
    estate_title,
    price,
    status,
    area,
    location,
    segment_name,
    image_url,
  } = estate;
  return (
    <>
      <div className="card p-6 border border-gray-300 bg-base-100 shadow-xl">
        <img
          className="rounded-2xl w-full h-[300px]"
          src={image_url}
          alt={estate_title}
        />
        <h2 className="mt-8 mb-5 font-semibold">{estate_title}</h2>
        <p className="flex items-center gap-3 text-2xl font-bold">
          <BsBuildingsFill size={20} /> {segment_name}
        </p>
        <div className="flex gap-6 mt-5">
          <small className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-300">
            <FaLocationDot /> {location}
          </small>
          <small className="flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-300">
            <TiHomeOutline /> {area}
          </small>
          <small className="px-3 py-1 rounded-full bg-rose-300">{status}</small>
        </div>
        <p className="text-xl my-5 font-medium">
          Price : <span className="text-green-600">{price}</span>
        </p>
        <div>
          <Link to={`${id}`} className="btn btn-primary w-full text-white">
            View Details
          </Link>
        </div>
      </div>
    </>
  );
}

PopertyCard.propTypes = {
  estate: PropTypes.object,
};

export default PopertyCard;
