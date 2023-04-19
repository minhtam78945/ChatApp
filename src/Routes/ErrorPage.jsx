import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen flex-col gap-20">
        <div className="text-3xl">404</div>
        <div className="text-4xl">Not Found</div>
        <button className="text-black">
          <Link to="/">Go Home</Link>
        </button>
      </div>
    </>
  );
}

export default ErrorPage;
