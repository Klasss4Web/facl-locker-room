import React, { useState } from "react";
import { useEffect } from "react";
import { Form } from "../components/Form";
import { Loading } from "../components/Loading";
import { UsersAccountTable } from "../components/UsersAccountTable";
import { getUsers } from "../service/getUsers";

export const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const allUsers = JSON.parse(localStorage.getItem("users")) || users;

  useEffect(() => {
    getUsers(setLoading, setUsers);
  }, []);
  
  return loading ? (
    <Loading />
  ) : (
    <div className="d-md-flex">
      <UsersAccountTable users={allUsers} />
      <Form setUsers={setUsers} />
    </div>
  );
};
