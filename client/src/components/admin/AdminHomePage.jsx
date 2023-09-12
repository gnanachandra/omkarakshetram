import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { getUsers } from "../../redux/userSlice";

const AdminHomePage = () => {
  const { users } = useSelector((state) => state["user"]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  console.log(users);
  return (
    <div className="p-4 md:px-8">
      <Typography as="h2" className="text-xl font-bold">
        Users
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full w-full gap-10 mt-5">
        {users?.map((user, index) => {
          return (
            <Card key={index}>
              <CardBody className="text-black flex flex-col gap-2">
                <p>Name : {user.name}</p>
                <p>Contact : {user.contact}</p>
                <p>Email : {user.email}</p>
                <p>Created Date : {user.createdAt.split("T")[0]}</p>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default AdminHomePage;
