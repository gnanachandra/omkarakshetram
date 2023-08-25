import { useDispatch, useSelector } from "react-redux";
import { Button, Card } from "@material-tailwind/react";
import { logoutUser } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state["auth"]);
  const navigate = useNavigate();
  const handleUserLogout = () => {
    dispatch(logoutUser());
    navigate("/login", { replace: true });
  };
  return (
    <div className="flex items-center justify-center h-screen w-screen flex-wrap">
      <Card className="text-black p-5">
        <h2 className="font-bold text-lg text-center mb-5">
          You are Logged In
        </h2>
        {Object.keys(user).map((key, index) => {
          return (
            key != "password" && 
            <p key={index} className="text-gray-800 font-semibold flex-wrap">
              {key} : {user[key]}
            </p>
          );
        })}
        <Button onClick={handleUserLogout} className="w-fit bg-red-500 mt-5">Logout</Button>
      </Card>
    </div>
  );
};

export default HomePage;
