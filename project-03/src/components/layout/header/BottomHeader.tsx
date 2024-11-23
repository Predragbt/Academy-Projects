import { Link, useLocation } from "react-router-dom";
import { useAppContext } from "../../../context/AppContext";
import { useEffect, useState } from "react";
import { HeaderPopUp } from "./HeaderPopUp"; // Adjust the path to your HeaderPopUp component

export const BottomHeader = () => {
  const { layoutData, loading, error } = useAppContext();
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);

  // Ensure useEffect is always called
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : !layoutData ? (
        <div>No header data</div>
      ) : (
        <>
          <div className="h-[104px] flex justify-between items-center px-[150px] bg-[#323232] text-white">
            {/* Primary Navigation Links */}
            <div className="flex items-center space-x-12">
              {layoutData.header.navigation.primary.map((link) =>
                link.name === "Services" || link.name === "Услуги" ? (
                  <button
                    key={link.link}
                    onClick={() => setShowPopup(true)}
                    className={`text-base font-semibold text-[16px] hover:text-[#FF6F0F] ${
                      (link.link === "services" &&
                        location.pathname === "services") ||
                      (location.pathname.startsWith(link.link) &&
                        link.link !== "services")
                        ? "text-[#FF6F0F]"
                        : "text-white"
                    }`}
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.link}
                    to={link.link}
                    className={`text-base font-semibold text-[16px] ${
                      (link.link === "/" && location.pathname === "/") ||
                      (location.pathname.startsWith(link.link) &&
                        link.link !== "/")
                        ? "text-[#FF6F0F]"
                        : "text-white"
                    } hover:text-[#FF6F0F]`}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>

            {/* Secondary Navigation Links */}
            <div className="flex items-center space-x-8">
              {layoutData.header.navigation.secondary.map((link, index) => (
                <Link
                  key={link.link}
                  to={link.link}
                  className={`text-base font-semibold text-[16px] ${
                    link.link === location.pathname
                      ? "text-[#FF6F0F]"
                      : "text-white"
                  } hover:text-[#FF6F0F] ${
                    index === 0 ? "border border-[#FF6F0F] px-6 py-2" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Popup Component */}
          {showPopup && <HeaderPopUp onClose={() => setShowPopup(false)} />}
        </>
      )}
    </>
  );
};
