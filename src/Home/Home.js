import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Docter from "./Doctorspage";
import Patient from "./Patient";
import Profile from "./Profile";
function Home() {

    const scrollIntoView = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };
  return (
    <>
      <div className="home__main">
        <div className="home__component">
          <div className="home__left">
            <div className="left__title">
              <h2
                style={{
                  fontSize: "18px",
                  padding: "10px",
                  borderBottom: "1px solid #000",
                }}
              >
                DEMO DOCTER APP
              </h2>

              <div className="left__component">
              <button
                  className="component__title"
                  onClick={() => scrollIntoView("doctors")}
                >
                  Doctors
                </button>
                <button
                  className="component__title"
                  onClick={() => scrollIntoView("patient")}
                >
                  Patient
                </button>
                <button
                  className="component__title"
                  onClick={() => scrollIntoView("profile")}
                >
                  Profile
                </button>
                <Link className="component__title" to="/">
                  Logout
                </Link>
              </div>
            </div>
          </div>

          <div className="home__right">
            <div className="right__heading">
<div>
    Docter Name
</div>
<div>
   Docter Phone Number
</div>
<div>
  Attendance
</div>

            </div>
          <div id="doctors">
              <Docter />
            </div>
            <div id="patient">
              <Patient />
            </div>
            <div id="profile">
              <Profile />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
