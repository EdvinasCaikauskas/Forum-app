import React from "react";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>Forum for open minded</h1>
          <p>
            By joining and using these forum, you agree that you have read and
            will follow the rules and guidelines set for these peer discussion
            groups. You also agree to reserve forum discussions for topics best
            suited to the medium. This is a great medium with which to solicit
            the advice of your peers, benefit from their experience, and
            participate in an ongoing conversation.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
