import React from "react";

const About = () => {
  let myStyle = {
    backgroundColor: "lightGreen",
    height: "30rem",
    width: "80%",
    marginLeft: "10%",
    padding: "15%",
  };
  return (
    <div className="text-center" style={myStyle}>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. At fugit nemo
        non animi delectus explicabo libero cum eum odit veniam voluptate, minus
        adipisci officia eius dolorum distinctio omnis numquam cumque ullam
        vitae necessitatibus illum.
      </p>
    </div>
  );
};

export default About;
