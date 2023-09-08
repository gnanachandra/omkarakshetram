import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/authSlice";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Loading from "./Loading";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, isLoading,role } = useSelector((state) => state["auth"]);
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const errorMessages = Object.values(errors);
  console.log(errorMessages);
  if (errorMessages.length !== 0) {
    toast.error(errorMessages[0]?.message);
  }

  const handleLogin = async (data) => {
    const response = await dispatch(userLogin(data));
    if (response.meta.requestStatus === "fulfilled") {
      navigate(`/${response.payload.user.role}`, { replace: true });
    }
  };
  if (token) {
    return <Navigate to={`/${role}`} replace/>
  }
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <Card className="text-black shadow-sm">
        <CardHeader
          floated={false}
          shadow={false}
          className="font-bold text-xl text-black py-4"
        >
          Login to your Account
        </CardHeader>
        <CardBody className="p-4 w-screen max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm rounded-lg bg-primary text-white">
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="flex flex-col gap-5"
          >
            <Input
              required
              label="Enter Email "
              color="blue"
              {...register("email", {
                required: {
                  value: true,
                  message: "Enter email",
                },
                validate: {
                  matchPattern: (v) => {
                    return (
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                      "Email is Invalid"
                    );
                  },
                },
              })}
            />
            <Input
              type="password"
              required
              label="Enter Password "
              color="blue"
              {...register("password", {
                required: {
                  value: true,
                  message: "Enter a password",
                },
              })}
            />
            <Button className="bg-blue-800" type="submit">
              Login{" "}
            </Button>
          </form>
        </CardBody>
        <CardFooter className="py-4">
          Don&apos;t have an Account ?{" "}
          <Link to="/register" className="text-deep-orange-500 font-bold">
            Register Here
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
