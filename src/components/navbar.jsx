import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import { CgGitFork } from "react-icons/cg";
import {AiFillStar} from "react-icons/ai";
import Button from "react-bootstrap/Button";

export default function Navbar() {
  useEffect(() => {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-top nav-link");
    const bsCollapse = document.getElementById("navbarSupportedContent");

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const collapse = new window.bootstrap.Collapse(bsCollapse, {
          toggle: false,
        });
        collapse.hide();
      });
    });

    // Cleanup on unmount
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Art Gallery
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-top nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-top nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item" style={{marginRight:"10px"}}>
              <Link className="nav-top nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/mohdshariq-0033/Art-gallery-react-vite"
                target="_blank"
                className="fork-btn-inner"
                style={{height:"2.1em",marginTop:"3px"}}
              >
                <CgGitFork style={{ fontSize: "1.2em",marginBottom:"2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em",marginBottom:"2em" }} />
              </Button>
            </Nav.Item>
          </ul>
        </div>
      </div>
    </nav>
  );
}
