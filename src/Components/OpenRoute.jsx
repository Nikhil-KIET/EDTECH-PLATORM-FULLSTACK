import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

export default function OpenRoute({ children }) {
  const loggedin = useSelector((state) => state.auth.isloggedin);
  const nav=useNavigate()
  console.log(loggedin);

  if (loggedin) {
    return children; // Render the child components if logged in
  } else {
    return <Navigate to="/login"  />; // Redirect to login if not logged in
  }
}
