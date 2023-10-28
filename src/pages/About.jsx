import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function About() {
  return (
    <Card>
      <div>
        <h1>About this Project</h1>
        <h3>This is a task tracker application built using React</h3>
        <Link to="/">
          <h4>Go Back to Home Page</h4>
        </Link>
      </div>
    </Card>
  );
}

export default About;
