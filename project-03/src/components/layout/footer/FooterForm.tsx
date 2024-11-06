import { useAppContext } from "../../../context/AppContext";
import { ButtonComponent } from "../../common/Button";

export const FooterForm = () => {
  const { layoutData, loading, error } = useAppContext();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!layoutData) return <div>No footer data</div>;

  return (
    <>
      <form className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder={layoutData.footer.topFooter[5].items[0]}
          className="w-[392px] h-[44px] border-b border-gray-300 bg-[#323232] text-white pl-2 hover:cursor-pointer outline-none"
        />
        <input
          type="text"
          placeholder={layoutData.footer.topFooter[5].items[1]}
          className="w-[392px] h-[44px] border-b border-gray-300 bg-[#323232] text-white pl-2 hover:cursor-pointer outline-none"
        />
        <textarea
          placeholder={layoutData.footer.topFooter[5].items[2]}
          rows={2}
          className="w-[392px] border-b border-gray-300 bg-[#323232] text-white pl-2 py-2 hover:cursor-pointer outline-none"
        />
        <div>
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            className="appearance-none bg-transparent border-2 border-white rounded-sm h-4 w-4 focus:outline-none relative
             checked:after:content-[''] checked:after:block checked:after:w-2 checked:after:h-3
             checked:after:border-r-2 checked:after:border-b-2 checked:after:border-white checked:after:transform 
             checked:after:rotate-45 checked:after:translate-x-[2px] checked:after:translate-y-[-1px]"
          />
          <label className="text-white ml-2 text-lg" htmlFor="checkbox">
            {layoutData.footer.newsletterCheckbox}
          </label>
        </div>
        <ButtonComponent
          text={layoutData.footer.submitButton}
          onClick={() => {}}
        />
      </form>
    </>
  );
};
