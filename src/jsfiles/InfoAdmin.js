import { Link, useHistory, useLocation } from "react-router-dom";
import { useState, useEffect, useNavigation } from "react";
import "../css/index.css";
import axios from "axios";
import Navbar from "./Navbar.js";
const InfoAdmin = (props) => {
  const { state } = useLocation();
  const {
    Username,
    Password,
    AdminDepartment = "",
    AdminContactNo = "",
    admin = "",
    teacher = "",
    UserContactNo = "",
    UserDepartment = "",
  } = state;
  const [User, setUsers] = useState([]);
  const [isPending, setIsPending] = useState();
  const history = useHistory();
  const [CountInfo, setCountInfo] = useState([]);
  const [Count, setCount] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:5000/getCount", {
        params: {
          username: Username, // Assuming Username is a prop
        },
      })
      .then((res) => {
        setCountInfo(res.data);
      })
      .catch((err) => {
        console.log("client", err);
      });
  }, [Username]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getAllUsers")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);
  const DeleteUser = (id) => {
    axios
      .delete("http://localhost:5000/DeleteUsers/" + id)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="infoadminuser">
      <div className="bginfo">
        <div className="infouseradmin">
          <div className="useradmin">
            <center>
              <h1>Wellcome&#160;&#160;{admin}</h1>
            </center>
            {admin ? (
              <div>
                <label>{admin} Name:&#160;&#160;</label>
                {Username}
                <br></br>
                <label>{admin} Password:</label>&#160;&#160;{Password}
                <br></br>
                <label>Department </label>&#160;:&#160;{AdminDepartment}
                <br></br>
                <label>Contact No</label>&#160;:&#160;{AdminContactNo}
                <br></br>
              </div>
            ) : (
              <div>
                <label>
                  {teacher} Name&#160;:&#160;{Username}
                </label>
                <br></br>
                <label>{teacher} Password</label>&#160;:&#160;{Password}
                <br></br>
                <label>Department </label>&#160;:&#160;{UserDepartment}
                <br></br>
                <label>Contact No</label>&#160;:&#160;{UserContactNo}
                <br></br>
              </div>
            )}
          </div>
          <div className="navbarcontent">
            {admin ? (
              <div>
                <Navbar
                  navname="adminlogin"
                  Username={Username}
                  AdminDepartment={AdminDepartment}
                />

                <div className="user">
                  <div className="Showtable1">
                    <table className="custom-table">
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
                        {User.map((User) => (
                          <tr key={User._id}>
                            <td>{User.UserUsername}</td>
                            <td>{User.UserPassword}</td>
                            <td>{User.UserDepartment}</td>
                            <td>{User.UserContactNo}</td>
                            <td>
                              <Link to={`/UpdateUser/${User._id}`}>Update</Link>
                            </td>
                            <td>
                              <button onClick={(e) => DeleteUser(User._id)}>
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ) : (
              <div className="userstdcont">
                <Navbar
                  navname="teacherlogin"
                  Username={Username}
                  UserDepartment={UserDepartment}
                />
                <h3>Teacher total submited form is {CountInfo.length}</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoAdmin;
/* <section>
        <div class="row">
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="card">
              <div class="cover item-a">
                <h1>
                  Little<br></br>Bonsai
                </h1>
                <span class="price">$79</span>
                <div class="card-back">
                  <a href="#">Add to cart</a>
                  <a href="#">View detail</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="card">
              <div class="cover item-b">
                <h1>
                  Tropical<br></br>Leaf
                </h1>
                <span class="price">$35</span>
                <div class="card-back">
                  <a href="#">Add to cart</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="card">
              <div class="cover item-c">
                <h1>
                  Marijuana<br></br>Chill
                </h1>
                <span class="price">$155</span>
                <div class="card-back">
                  <a href="#">Add to cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>*/
