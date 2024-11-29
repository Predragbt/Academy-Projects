import { LocationProps } from "../../../pages/About";

interface Props {
  locations: LocationProps;
}

export const OurLocations = ({ locations }: Props) => {
  return (
    <div
      className="px-[120px] bg-cover bg-center flex flex-col py-[120px]"
      style={{
        backgroundImage: `url(${locations.img})`,
      }}
    >
      <p className="text-[75px] leading-[75px] font-[800] mb-14 text-white">
        <span className="">{locations.ourStory}{" "}</span>
        <span className="text-[#FF6F0F]">{locations.title}</span>
      </p>
      <div className="text-white flex w-full justify-between gap-10">
        {locations.data.map((location, index) => (
          <div key={index} className="border-b-2 border-[#FF6F0F] py-4 w-full">
            <p className="text-[32px] font-[600] mb-6">{location.country}</p>
            <img
              src="/assets/images/LocationPin.png"
              alt={location.country}
              className="mb-6"
            />
            <p>{location.address}</p>
            <p>{location.city}</p>
            <p>{location.postalCode}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
