/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const RequireAuth = () => {
  const { token } = useSelector((store) => store["auth"]);
  console.log(token)
  if (!token) {
    console.log(token)
    return <Navigate to={"/login"} replace />;
  }

  return (
    <div>
      <section>
        <Outlet />
      </section>
    </div>
  );
};
export default RequireAuth;
