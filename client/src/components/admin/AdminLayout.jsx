import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const AdminLayout = (props) => {
  const { token, role } = useSelector((store) => store["auth"]);
  console.log(props);
  if (!token) {
    return <Navigate to={"/login"} replace />;
  }
  return (
    <div>
      <Header />
      <section>
        {props[role] ? <Outlet /> : <Navigate to={"/unauthorized"} replace />}
      </section>
    </div>
  );
};

export default AdminLayout;
