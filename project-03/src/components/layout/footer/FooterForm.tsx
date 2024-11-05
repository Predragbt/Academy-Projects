import { useAppContext } from "../../../context/AppContext";

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
          placeholder={`${layoutData.footer.topFooter[5].items[0]}`}
          className="w-[392px] h-[44px] border border-gray-400 rounded pl-2 hover:cursor-pointer"
        />
        <input
          type="text"
          placeholder={`${layoutData.footer.topFooter[5].items[1]}`}
          className="w-[392px] h-[44px] border border-gray-400 rounded pl-2 hover:cursor-pointer"
        />
        <input
          type="text"
          placeholder={`${layoutData.footer.topFooter[5].items[2]}`}
          className="w-[392px] h-[44px] border border-gray-400 rounded pl-2 hover:cursor-pointer"
        />
      </form>
    </>
  );
};
