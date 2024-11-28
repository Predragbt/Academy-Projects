import { AiOutlineWarning } from "react-icons/ai";

export const GlobalErrorPage = () => {
  return (
    <div className="text-center py-24">
      <AiOutlineWarning className="text-red-500 text-[64px] mb-6 mx-auto" />
      <h1 className="text-[36px] font-bold mb-4">Page Not Found</h1>
      <p className="text-[24px] font-[600] mb-6">
        Sorry, the page you're looking for doesn't exist.
      </p>
    </div>
  );
};
