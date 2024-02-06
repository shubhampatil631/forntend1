import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/index.css";

const ShowUserAdmin = () => {
  const [isPending, setIsPending] = useState(false);
  const [Users, setUsers] = useState([]);
  const [Admins, setAdmins] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getAllUsers")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .post("http://localhost:5000/getAllAdmin")
      .then((result) => setAdmins(result.data))
      .catch((err) => console.log(err));
  }, []);
  const DeleteAdmin = (id) => {
    axios
      .delete("http://localhost:5000/DeleteAdmin/" + id)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  const DeleteUser = (id) => {
    axios
      .delete("http://localhost:5000/DeleteUsers/" + id)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  return (
    <div className="adminuser">
      <div className="Showtable1">
        <table className="custom-table">
          <thead>
            <tr>
              <th>AdminUsername</th>
              <th>AdminPassword</th>
              <th>AdminDepartment</th>
              <th>AdminContactNo</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Admins.map((Admin) => (
              <tr key={Admin._id}>
                <td>{Admin.AdminUsername}</td>
                <td>{Admin.AdminPassword}</td>
                <td>{Admin.AdminDepartment}</td>
                <td>{Admin.AdminContactNo}</td>
                <td>
                  <Link to={`/UpdateAdmin/${Admin._id}`}>Update</Link>
                </td>
                <td>
                  <button onClick={(e) => DeleteAdmin(Admin._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="Showtable1">
        <table border={1}>
          <thead>
            <tr>
              <th>TeacherUsername</th>
              <th>TeacherPassword</th>
              <th>TeacherDepartment</th>
              <th>TeacherContactNo</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Users.map((User) => (
              <tr key={User._id}>
                <td>{User.UserUsername}</td>
                <td>{User.UserPassword}</td>
                <td>{User.UserDepartment}</td>
                <td>{User.UserContactNo}</td>
                <td>
                  <Link to={`/UpdateUser/${User._id}`}>Update</Link>
                </td>
                <td>
                  <button onClick={(e) => DeleteUser(User._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowUserAdmin;
