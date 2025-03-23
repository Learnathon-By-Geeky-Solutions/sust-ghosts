import React from "react";
import CatalystLogo2 from "../../assets/CatalystLogo.png";

const Navbar = () => {
  return (
    <div className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-4">
      <div className="container">
        <div className="flex">
          <div className="flex">
            {/* <img src={CatalystLogo2} alt="" /> */}
            Catalyst
          </div>
          <div className="text-white">
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
