import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="my-footer ">
      <p className="text-center py-3 my-0">
        <small>copyright &copy; {year}</small>
      </p>
    </footer>
  );
};

export default Footer;
