import { useState } from "react";
import { Link } from "react-router-dom";

import "boxicons";

function Navbar({ setShow, size }) {
  return (
    <>
      <div className="w-full py-8 bg-orange-300">
        <div className="w-10/12 mx-auto flex justify-between">
          <div className="text-4xl font-bold" onClick={() => setShow(true)}>
            e-COm
          </div>
          <div
            className="flex justify-between space-x-5"
            onClick={() => setShow(false)}
          >
            <div className="flex">
              <span className="text-black text-xl font-semibold">{size}</span>
              <box-icon type="solid" size="40px" name="cart-alt"></box-icon>
            </div>

            <Link to="/profile">
              <button>
                <box-icon
                  type="solid"
                  size="40px"
                  name="user-circle"
                ></box-icon>
              </button>
            </Link>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Navbar;
