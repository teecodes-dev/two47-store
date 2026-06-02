import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // LOAD SESSION USER
  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) setUser(JSON.parse(currentUser));
  }, []);

  // SIGN UP (MULTI USER SAFE)
  const signup = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find((u) => u.email === data.email);

    if (existingUser) {
      return { success: false, message: "User already exists" };
    }

    const newUser = {
      ...data,
      role: "user",
    };

    const updatedUsers = [...users, newUser];

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    setUser(newUser);

    return { success: true };
  };

  // SIGN IN
  const signin = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (!foundUser) {
      return {
        success: false,
        message: "Invalid credentials",
      };
    }

    localStorage.setItem("currentUser", JSON.stringify(foundUser));
    setUser(foundUser);

    return {
      success: true,
      user: foundUser, // 👈 IMPORTANT ADDITION
    };
  };

  // SIGN OUT
  const signout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, signup, signin, signout, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
