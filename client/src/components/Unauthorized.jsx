import { Button } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  const { role } = useSelector((state) => state["auth"]);
  return (
    <div className="h-screen bg-black text-white w-full flex flex-col gap-6 items-center justify-center font-bold">
      UNAUTHORIZED
      <Link to={`/${role}`} replace>
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
};

export default Unauthorized;
