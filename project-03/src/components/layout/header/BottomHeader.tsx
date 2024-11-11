// BottomHeader.tsx
import { Link, useLocation } from "react-router-dom";
import { useAppContext } from "../../../context/AppContext";

export const BottomHeader = () => {
  const { layoutData, loading, error } = useAppContext();
  const location = useLocation();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!layoutData) return <div>No header data</div>;

  return (
    <div className="h-[104px] flex justify-between items-center px-[150px] bg-[#323232] text-white">
      <div className="flex items-center space-x-12">
        {layoutData.header.navigation.primary.map((link) => (
          <Link
            key={link.link}
            to={link.link}
            className={`text-base font-semibold text-[16px] ${
              (link.link === "/" && location.pathname === "/") ||
              (location.pathname.startsWith(link.link) && link.link !== "/")
                ? "text-[#FF6F0F]"
                : "text-white"
            } hover:text-[#FF6F0F]`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Secondary Navigation Links */}
      <div className="flex items-center space-x-8">
        {layoutData.header.navigation.secondary.map((link, index) => (
          <Link
            key={link.link}
            to={link.link}
            className={`text-base font-semibold text-[16px] ${
              link.link === location.pathname ? "text-[#FF6F0F]" : "text-white"
            } hover:text-[#FF6F0F] ${
              index === 0 ? "border border-[#FF6F0F] px-6 py-2" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
