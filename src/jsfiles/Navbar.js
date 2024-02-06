import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
const MyNavbar = ({
  navname,
  Username = "null",
  AdminDepartment = "null",
  UserDepartment = "null",
}) => {
  // console.log({ Username }, { AdminDepartment });
  return (
    <div className="overallnavbar">
      <Navbar collapseOnSelect expand="lg" className=".bg-light navbarforadmin">
        <Container>
          <Navbar.Brand href="#home">Student info</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>

            {navname === "adminlogin" ? (
              <Nav>
                <NavLink to="/Admin">Admin</NavLink>
                <NavLink
                  to={`/Create?name=${Username}&Department=${AdminDepartment}`}
                >
                  NewStudent
                </NavLink>
                <NavLink to="/Showtable">Student</NavLink>
                <NavLink to="/ShowUserAdmin">AdminUser</NavLink>
                <NavLink to="/Filterstd">filterstd</NavLink>
                <NavLink to="/Filter2">Filter2</NavLink>
              </Nav>
            ) : (
              <Nav>
                <Nav.Link href="/">Back</Nav.Link>
                <Nav.Link
                  href={`/Create?name=${Username}&Department=${UserDepartment}`}
                >
                  NewStudent
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
