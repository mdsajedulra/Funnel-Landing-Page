import React from "react";
import ReactPixel from "react-facebook-pixel";

const Thankyou = () => {
  ReactPixel.track("Purchase", {
    value: "",
    currency: "BDT",
  });
  return (
    <div>
      <h1 className="text-5xl text-center mt-40">
        Thank you for purches, we will contact you very soon
      </h1>
    </div>
  );
};

export default Thankyou;
