"use client"

import React, { useState, useEffect} from "react";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useRouter().push;
  const [toggle, setToggle] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profilePicture, setProfilePicture] = useState("")

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const changeToggle = () => {
    if (window.scrollY >= 90 && window.innerWidth > 768) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  window.addEventListener("scroll", changeToggle);

  const handleGoToDashboard = () => {
    navigate("/dashboard")
  };

  const [bgChng, setBgChng] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBgChng(true);
      } else {
        setBgChng(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={toggle ? "navbar1 expanded" : "navbar1"}
      id={bgChng ? "bgchng" : ""}
      style={{ userSelect: "none" }}
    >
      <Link href="/">
        <img
          className="brand-logo logo"
          src="/random.png"
          alt="ask a place"
        />
      </Link>
      <div className="toggle-icon" onClick={handleToggle}>
        {toggle ? <ImCross size={20} /> : <GiHamburgerMenu size={25} />}
      </div>
      <ul className="links-nav">
        <li>
          {" "}
          <Link href="/">HOME</Link>
        </li>
        <li>
          <a onClick={()=>{
            document.getElementById("about")?.scrollIntoView();
          }}>ABOUT US</a>
        </li>
        <li>
          {" "}
          <Link href="/events">PLACES</Link>
        </li>
        <li>
          <Link href="/team">OUR TEAM</Link>
        </li>
        {isLoggedIn ? (
          <li>
            <div className="imgactivehlder" onClick={handleGoToDashboard}>
              <img
                className="profileactivesignin"
                src={profilePicture}
                alt="Profile Pic"
              />
            </div>
          </li>
        ) : (
          <li>
            <Link href="/signup">SIGN UP</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default Navbar;
