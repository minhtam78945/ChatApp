import { Outlet, useNavigate } from "react-router-dom";

function Protected({ children }) {
  const navigate = useNavigate();
  if (!localStorage.getItem("accessToken")) {
    navigate("/login");
    return;
  }
  return <Outlet />;
}

export default Protected;
