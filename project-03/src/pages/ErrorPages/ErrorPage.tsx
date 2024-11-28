import { Link } from "react-router-dom";

export const ErrorPage = ({ statusCode }: { statusCode?: number }) => {
  const message =
    statusCode === 500
      ? "Oops! Something went wrong on our end."
      : "We couldn't find the page you were looking for.";

  return (
    <div className="text-center py-24">
      <h1 className="text-[48px] font-bold mb-4">{statusCode || 404}</h1>
      <p className="text-[24px] font-[600]">{message}</p>
      <Link
        to="/"
        className="mt-6 inline-block text-[18px] font-medium text-blue-500 hover:underline"
      >
        Go back to Home
      </Link>
    </div>
  );
};
