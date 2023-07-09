import React from "react";

const Footer = () => {
  return (
    <footer className="my-4 mx-auto">
      <p className="italic">
        made with <span className="not-italic">💙</span> &{" "}
        <span className="not-italic">☕️</span> by{" "}
        <span className="font-mono not-italic bg-clip-text text-transparent brand-gradient">
          smrth
        </span>
      </p>
    </footer>
  );
};

export default Footer;
