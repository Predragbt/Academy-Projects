// TopHeader.tsx
import logo from "../../../assets/images/logo.png";
import languageIcon from "../../../assets/icons/LanguageIcon.png";
import { useAppContext } from "../../../context/AppContext";
import { Link } from "react-router-dom";

export const TopHeader = () => {
  const { language, toggleLanguage, layoutData, loading, error } =
    useAppContext();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!layoutData) return <div>No header data</div>;

  return (
    <div className="h-[64px] flex justify-between items-center px-[160px]">
      <div>
        <img src={logo} alt="Company logo" className="h-[40px]" />
      </div>

      <div className="flex items-center space-x-12">
        <div className="flex space-x-4">
          {layoutData.header.topLinks.map((link, index) => (
            <Link
              key={index}
              to={link.link}
              className="text-base font-semibold text-gray-700 hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center border border-gray-400 rounded w-[120px] h-[33px] pl-2 hover:cursor-pointer">
          <img
            src={languageIcon}
            alt="Language icon"
            className="w-[20px] h-[20px] mr-2"
          />
          <select
            value={language}
            onChange={(e) => toggleLanguage(e.target.value)}
            className="bg-transparent text-gray-700 font-medium p-0 pl-1 pr-2 border-none outline-none"
          >
            <option value="eng">ENG</option>
            <option value="mk">MK</option>
          </select>
        </div>
      </div>
    </div>
  );
};
