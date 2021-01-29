import React from "react";
import Directory from "../../components/directory/directory.component";
import "./homepage.styles.scss";
const HomePage = (props) => (
  <div className="homepage">
    <Directory />
    <div>{props.match.url}</div>
  </div>
);
export default HomePage;
