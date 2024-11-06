import { Link } from "react-router-dom";
import { useAppContext } from "../../../context/AppContext";

export const BottomFooter = () => {
  const { layoutData, loading, error } = useAppContext();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!layoutData) return <div>No footer data</div>;
  return (
    <div className="h-[64px] flex justify-between items-center px-[120px]">
      <div>
        {layoutData.footer.bottomFooter.map((link, index) => (
          <Link to="#" key={index} className="text-base mr-12">
            {link.name}
          </Link>
        ))}
      </div>
      <div className="font-[700]">&copy; Cyberware Global Defense</div>
    </div>
  );
};
