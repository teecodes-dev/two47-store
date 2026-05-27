import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // LOAD LOGGED-IN USER
  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");

    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, []);

  // SIGN UP
  const signup = (data) => {
    // save registered account
    localStorage.setItem("registeredUser", JSON.stringify(data));

    // auto login after signup
    localStorage.setItem("currentUser", JSON.stringify(data));

    setUser(data);
  };

  // SIGN IN
  const signin = (email, password) => {
    const savedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (!savedUser) {
      return {
        success: false,
        message: "No account found",
      };
    }

    if (savedUser.email === email && savedUser.password === password) {
      localStorage.setItem("currentUser", JSON.stringify(savedUser));

      setUser(savedUser);

      return { success: true };
    }

    return {
      success: false,
      message: "Invalid credentials",
    };
  };

  // SIGN OUT
  const signout = () => {
    localStorage.removeItem("currentUser");

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        signin,
        signout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
