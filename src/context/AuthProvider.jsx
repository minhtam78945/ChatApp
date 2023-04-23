import { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";
export const AuthContenxt = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  const auth = getAuth();
  useEffect(() => {
    // Login with Gooogle
    const unSubrices = auth.onIdTokenChanged((user) => {
      console.log({ user });
      if (user?.uid) {
        setUser(user);
        setLoading(false);
        localStorage.setItem("accessToken", user.accessToken);
        return;
      }
      setLoading(false);
      setUser({});
      localStorage.clear();
      navigate("/login");
    });
    return () => {
      unSubrices();
    };
  }, [auth]);

  return (
    <AuthContenxt.Provider value={{ user, setUser }}>
      {isLoading ? <Spin /> : children}
    </AuthContenxt.Provider>
  );
}

export default AuthProvider;
