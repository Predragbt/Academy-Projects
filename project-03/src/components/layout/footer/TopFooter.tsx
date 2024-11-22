import { useAppContext } from "../../../context/AppContext";
import { CustomMap } from "./CustomMap";
import { FooterForm } from "./FooterForm";

export const TopFooter = () => {
  const { layoutData, loading, error } = useAppContext();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!layoutData) return <div>No footer data</div>;

  return (
    <div className="py-12 bg-[#000] px-[120px] flex justify-between">
      <div className="border-r border-white pr-12 my-12">
        <img src="/assets/images/BigLogo.png" alt="Logo" />
        <div className="flex space-x-4 mt-12">
          <img src="/assets/images/partnerLogo1.png" alt="Partner Logo 1" />
          <img src="/assets/images/partnerLogo2.png" alt="Partner Logo 2" />
        </div>
        <img
          src="/assets/images/partnerLogo3.png"
          alt="Partner Logo 3"
          className="mt-12"
        />
      </div>
      <div className="flex my-16 pl-8">
        <div className="mr-8">
          <p className="text-white font-[700] text-[23px] mb-4">
            {layoutData.footer.topFooter[0].title}
          </p>
          <ul className="space-y-2 text-white">
            {layoutData.footer.topFooter[0].items.map((item, index) => (
              <li key={index} className="w-[120px] break-words text-xs">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mr-8">
          {/* Section 1 */}
          <p className="text-white font-[700] text-[23px] mb-4">
            {layoutData.footer.topFooter[1].title}
          </p>
          <ul className="space-y-2 text-white">
            {layoutData.footer.topFooter[1].items.map((item, index) => (
              <li key={index} className="break-words text-xs">
                {item}
              </li>
            ))}
          </ul>

          {/* Section 2 */}
          <p className="text-white font-[700] text-[23px] mb-4 mt-5">
            {layoutData.footer.topFooter[2].title}
          </p>
          <ul className="space-y-2 text-white">
            {layoutData.footer.topFooter[2].items.map((item, index) => (
              <li key={index} className="break-words text-xs">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          {/* Section 3 */}
          <p className="text-white font-[700] text-[23px] mb-4">
            {layoutData.footer.topFooter[3].title}
          </p>
          <ul className="space-y-2 text-white">
            {layoutData.footer.topFooter[3].items.map((item, index) => (
              <li key={index} className="break-words text-xs">
                {item}
              </li>
            ))}
          </ul>

          {/* Section 4 */}
          <p className="text-white w-[120px] font-[700] text-[23px] mt-5 mb-4">
            {layoutData.footer.topFooter[4].title}
          </p>
          <ul className="space-y-2 text-white">
            {layoutData.footer.topFooter[4].items.map((item, index) => (
              <li key={index} className="break-words text-xs">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="my-12 ml-8">
        <h2 className="text-white font-[700] text-[48px] mb-4">
          {layoutData.footer.topFooter[5].title.slice(0, 7)}
          <span className="text-[#FF6F0F] ml-4">
            {layoutData.footer.topFooter[5].title.slice(8)}
          </span>
        </h2>
        <div className="flex">
          <FooterForm />
          <CustomMap />
        </div>
      </div>
    </div>
  );
};
