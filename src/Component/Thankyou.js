import React from "react";
import ReactPixel from "react-facebook-pixel";
import { Link } from "react-router-dom";

const Thankyou = () => {
  ReactPixel.track("Purchase", {
    value: 480,
    currency: "BDT",
  });
  return (
    <div>
      <h1 className="text-5xl text-center mt-40">
        Thank you for purches, we will contact you very soon
        <Link className="btn" to="/">
          Back to Home
        </Link>
      </h1>
    </div>
  );
};

export default Thankyou;
