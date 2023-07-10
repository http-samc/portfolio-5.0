import React from "react";

const Footer = () => {
  return (
    <footer className="my-4 border-t w-full max-[800px]:w-[90%] mx-auto">
      <p className="italic w-full text-center mt-4">
        made with <span className="not-italic">💙</span> &{" "}
        <span className="not-italic">☕️</span> by{" "}
        <span className="brand-gradient-text">smrth</span>
      </p>
    </footer>
  );
};

export default Footer;
