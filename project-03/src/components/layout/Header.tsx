import logo from "../../assets/images/logo.png";
import languageIcon from "../../assets/icons/LanguageIcon.png";
import { useAppContext } from "../../context/AppContext";

export const Header = () => {
  const { language, toggleLanguage } = useAppContext();

  return (
    <header>
      <div
        style={{
          height: "64px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <img src={logo} alt="Company logo" />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid black",
            width: "105px",
            height: "33px",
            paddingLeft: "9px",
            outline: "none",
          }}
        >
          <img
            src={languageIcon}
            alt="Language icon"
            style={{ width: "24px", height: "24px", marginRight: "8px" }}
          />
          <select
            value={language}
            onChange={(e) => toggleLanguage(e.target.value)}
            className="form-select"
            style={{ padding: "4px 8px", border: "none" }}
          >
            <option value="eng">ENG</option>
            <option value="mk">MK</option>
          </select>
        </div>
      </div>
    </header>
  );
};
