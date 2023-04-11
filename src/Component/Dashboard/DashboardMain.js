import React, { useEffect, useState } from "react";

const DashboardMain = () => {
  const [total, setTotal] = useState([]);
  useEffect(() => {
    fetch("https://funnel-landing-page-server.vercel.app/allorder")
      .then((res) => res.json())
      .then((data) => setTotal(data));
  }, []);
  //on hold
  const [hold, setHold] = useState([]);
  console.log(hold);
  useEffect(() => {
    fetch("https://funnel-landing-page-server.vercel.app/onhold")
      .then((res) => res.json())
      .then((data) => setHold(data));
  }, []);

  // processing order
  const [processing, setProcessing] = useState([]);
  console.log(hold);
  useEffect(() => {
    fetch("https://funnel-landing-page-server.vercel.app/processing")
      .then((res) => res.json())
      .then((data) => setProcessing(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-5 justify-evenly gap-10">
        <div className="border border-2 bg-slate-200 shadow-md border-black py-10  w-full rounded-md text-center">
          <h1>Total Order</h1>
          {total?.length}
        </div>
        <div className="bg-[#14BF7D] text-white shadow-md font-bold  w-full rounded-md py-10 text-center">
          <h1>Complete Order</h1>1
        </div>
        <div className="bg-[#14BF7D] text-white shadow-md font-bold  w-full rounded-md py-10 text-center">
          <h1>Processing Order</h1>
          {processing?.length}
        </div>
        <div className="bg-[#FF9800] text-white shadow-md font-bold w-full rounded-md py-10 text-center">
          <h1>Hold Order</h1>
          {hold?.length}
        </div>
        <div className="bg-[#C93C12] text-white shadow-md font-bold w-full rounded-md py-10 text-center">
          <h1>Cancelled Order</h1>2
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
