/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const RequireAuth = ( props ) => {
  const { token, role } = useSelector((store) => store["auth"]);
  console.log(props)
  if (!token) {
    return <Navigate to={"/login"} replace />;
  }
  return (
    <div>
      <section>
        {props[role] ? <Outlet /> : <Navigate to={"/unauthorized"} replace />}
        
      </section>
    </div>
  );
};
export default RequireAuth;
