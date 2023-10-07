import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import UserInterface from "../interfaces/UserInterface";

const User: React.FC = () => {
  const [user, setUser] = useState<Omit<UserInterface, "id">>({
    username: "",
    pwd: "",
  });
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(user.username, user.pwd);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="container mt-5">
      <h1 className="d-flex justify-content-center">Memopus</h1>
      <form className="row justify-content-center" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <div className="mb-3">
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Username"
              value={user.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="pwd"
              className="form-control"
              placeholder="Password"
              value={user.pwd}
              onChange={handleChange}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default User;
