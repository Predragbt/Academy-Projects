import { useAppContext } from "../../../context/AppContext";
import BigLogo from "../../../assets/images/BigLogo.png";
import partnerLogo1 from "../../../assets/images/partnerLogo1.png";
import partnerLogo2 from "../../../assets/images/partnerLogo2.png";
import partnerLogo3 from "../../../assets/images/partnerLogo3.png";
import { FooterForm } from "./FooterForm";

export const TopFooter = () => {
  const { layoutData, loading, error } = useAppContext();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!layoutData) return <div>No footer data</div>;

  return (
    <div className="h-[512px] bg-[#000] px-[160px] flex">
      <div className="border-r border-white pr-12 mr-20 my-12">
        <img src={BigLogo} alt="Logo" />
        <div className="flex space-x-4 mt-12">
          <img src={partnerLogo1} alt="Logo" />
          <img src={partnerLogo2} alt="Logo" />
        </div>

        <img src={partnerLogo3} alt="Logo" className="mt-12" />
      </div>
      <div className="flex mx-12 my-16">
        <div className="mr-12">
          <p className="text-white font-[700] w-[114px] text-[23px] mb-4">
            {layoutData.footer.topFooter[0].title}
          </p>
          <ul className="space-y-2 text-white">
            {layoutData.footer.topFooter[0].items.map((item, index) => (
              <li key={index} className="w-[114px] break-words text-xs">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mr-12">
          {/* Section 1 */}
          <p className="text-white font-[700] w-[114px] text-[23px] mb-4">
            {layoutData.footer.topFooter[1].title}
          </p>
          <ul className="space-y-2 text-white">
            {layoutData.footer.topFooter[1].items.map((item, index) => (
              <li key={index} className="w-[114px] break-words text-xs">
                {item}
              </li>
            ))}
          </ul>

          {/* Section 2 */}
          <p className="text-white font-[700] w-[116px] text-[23px] mb-4 mt-5">
            {layoutData.footer.topFooter[2].title}
          </p>
          <ul className="space-y-2 text-white">
            {layoutData.footer.topFooter[2].items.map((item, index) => (
              <li key={index} className="w-[114px] break-words text-xs">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          {/* Section 3 */}
          <p className="text-white font-[700] w-[114px] text-[23px] mb-4">
            {layoutData.footer.topFooter[3].title}
          </p>
          <ul className="space-y-2 text-white">
            {layoutData.footer.topFooter[3].items.map((item, index) => (
              <li key={index} className="w-[114px] break-words text-xs">
                {item}
              </li>
            ))}
          </ul>

          {/* Section 4 */}
          <p className="text-white font-[700] w-[200px] text-[23px] mt-5 mb-4">
            {layoutData.footer.topFooter[4].title}
          </p>
          <ul className="space-y-2 text-white">
            {layoutData.footer.topFooter[4].items.map((item, index) => (
              <li key={index} className="w-[114px] break-words text-xs">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="my-12 ml-12">
        <h2 className="text-white font-[700] text-[48px] mb-4">
          {layoutData.footer.topFooter[5].title.slice(0, 7)}
          <span className="text-[#FF6F0F] ml-4">
            {layoutData.footer.topFooter[5].title.slice(8)}
          </span>
        </h2>
        <div>
          <FooterForm />
          <div></div>
        </div>
      </div>
    </div>
  );
};
