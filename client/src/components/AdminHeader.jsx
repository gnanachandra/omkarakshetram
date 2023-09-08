import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import {
  Navbar,
  Typography,
} from "@material-tailwind/react";

export default function AdminHeader() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUserLogout = () => {
        dispatch(logoutUser());
        navigate("/login", { replace: true });
    };

    return (
        <div className="w-full bg-[#FF8C00]">
            <Navbar className="mx-auto w-screen shadow-none rounded-none border-none bg-[#FF8C00]">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <div className="flex items-center justify-center gap-4">
                        <img src="/logo.png" alt="Templelogo" className="h-12 w-16" />
                        <Typography
                            as="a"
                            href="#"
                            className="mr-4 cursor-pointer py-1.5 font-bold text-lg"
                        >
                            ఓంకార క్షేత్రం
                        </Typography>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={handleUserLogout}
                            className="hidden lg:block bg-deep-orange-600 text-white px-4 py-2 rounded-md hover:bg-deep-orange-700"
                        >
                            Logout
                        </button>
                        <button
                            onClick={handleUserLogout}
                            className="lg:hidden bg-deep-orange-600 text-white px-4 py-2 rounded-md hover:bg-deep-orange-700"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </Navbar>
        </div>
    );
}
