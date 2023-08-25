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
import { userLogin, userRegisteration } from "../redux/authSlice";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useState } from "react";

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, isLoading } = useSelector((state) => state["auth"]);
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const errorMessages = Object.values(errors);
  console.log(errorMessages);
  if (errorMessages.length !== 0) {
    toast.error(errorMessages[0]?.message);
  }

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleRegisteration = async (data) => {
    const response = await dispatch(userRegisteration(data));
    if (response.meta.requestStatus === "fulfilled") {
      navigate("/login", { replace: true });
    }
  };
  if (token) {
    return <Navigate to="/home" replace />;
  }
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <Card>
        <CardHeader
          floated={false}
          shadow={false}
          className="font-bold text-xl text-black py-4"
        >
          Create new Account
        </CardHeader>
        <CardBody className="p-4 w-screen max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md rounded-lg bg-primary text-white">
          <form
            onSubmit={handleSubmit(handleRegisteration)}
            className="flex flex-col gap-5"
            autoComplete="off"
          >
            <Input
              color="blue"
              label="Name"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name cannot be empty",
                },
              })}
            />
            <Input
              color="blue"
              label="Email"
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
              color="blue"
              label="Contact"
              {...register("contact", {
                required: {
                  value: true,
                  message: "Contact Number is required",
                },
                validate: {
                  isNumber: (fieldValue) => {
                    return Number(fieldValue) || "Enter a valid contact Number";
                  },
                  length: (fieldValue) => {
                    return (
                      fieldValue.length === 10 || "Enter 10 digit mobile number"
                    );
                  },
                },
              })}
            />
            <Input
              color="blue"
              label="Password"
              type={passwordVisible ? "text" : "password"}
              icon={
                passwordVisible ? (
                  <BsFillEyeSlashFill
                    className="cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <BsFillEyeFill
                    className="cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                )
              }
              {...register("password", {
                required: {
                  value: true,
                  message: "password cannot be empty",
                },
              })}
            />
            <Button className="bg-blue-800" type="submit">
              Register
            </Button>
          </form>
        </CardBody>
        <CardFooter className="py-4">
          Have an Account ?{" "}
          <Link to="/login" className="text-deep-orange-500 font-bold">
            Login Here
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
