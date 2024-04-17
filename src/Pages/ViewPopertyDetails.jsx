import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BsBuildingsFill } from "react-icons/bs";

function ViewPopertyDetails() {
  const { id } = useParams();
  const { estates } = useLoaderData();
  console.log(estates);
  const estate = estates.find((estate) => estate.id === parseInt(id));
  console.log(estate);
  const {
    estate_title,
    price,
    status,
    area,
    location,
    segment_name,
    image_url,
    description,
    facilities,
  } = estate;
  return (
    <>
      <div
        data-aos="fade-down"
        className="flex justify-between items-center gap-8"
      >
        <div className="w-1/2">
          <img
            className="w-full rounded-3xl object-cover lg:min-h-[530px]"
            src={image_url}
            alt=""
          />
        </div>
        <div className="w-1/2">
          <p className="font-medium text-xl">Poperty Name : {estate_title}</p>
          <div className="divider"></div>
          <p className="flex items-center gap-3 text-2xl font-bold">
            <BsBuildingsFill size={20} /> {segment_name}
          </p>
          <div className="divider"></div>
          <p className="text-gray-600">
            <span className="font-semibold text-black">Description : </span>
            {description}
          </p>
          <p className="font-semibold text-black mt-5">Facilities :</p>
          {facilities.map((data, index) => (
            <li className="ml-5 text-gray-600" key={index}>
              {data}
            </li>
          ))}
          <div className="divider"></div>
          <p className="font-medium">
            Area : <span className="font-normal">{area}</span>
          </p>
          <p className="font-medium">
            Location : <span className=" font-normal">{location}</span>
          </p>
          <p className="font-medium">
            Price : <span className=" font-normal">{price}</span>
          </p>
          <p className="font-medium">
            Status : <span className=" font-normal">{status}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default ViewPopertyDetails;
