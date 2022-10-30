import React from "react";

export const UsersAccountTable = ({ users }) => {
  return (
    <div className="users-wrapper">
      <div className="container table-responsive px-md-5 px-3">
        <h2 className="my-4 text-white">List of accounts</h2>
        <table class="table table-light">
          <thead>
            <tr className="table-secondary">
              <th scope="col">Full Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Email Address</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Nationality</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={index}>
                <td>{`${user?.firstName}${" "}${user?.lastName}`}</td>
                <td>{user?.gender === "M" ? "Male" : user?.gender === "F" ? "Female" : user?.gender}</td>
                <td>{user?.emailAddress}</td>
                <td>{user?.mobileNumber}</td>
                <td>{user?.nationality}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
