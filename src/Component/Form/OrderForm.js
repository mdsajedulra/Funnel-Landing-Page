import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderForm = () => {
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [delivary, setDelivary] = useState("50");
  const spanRef = useRef(null);
  const navigate = useNavigate();
  const date = new Date();
  const handleForm = async (event) => {
    event.preventDefault();
    const price = spanRef.current.textContent;

    const form = event.target;
    const name = form.name.value;
    const address = form.address.value;
    const number = form.number.value;
    const types = form.types.value;

    // const price = 550;
    const quantity = 1;

    const orderDetails = {
      invoiceNumber,
      name,
      address,
      number,
      types,
      quantity,
      price,
      date,
      status: "processing",
    };
    console.log(orderDetails);
    console.log(orderDetails);
    fetch("http://localhost:5000/addorder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(orderDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.acknowledged === true) {
          navigate("/thankyou", { replace: true });
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row">
      <form
        className="w-full"
        // id="form"
        onSubmit={(event) => handleForm(event)}
      >
        <div className="ml-2">আপনার নামঃ</div>
        <input
          required
          name="name"
          className="p-2 rounded-lg m-2 w-10/12"
          placeholder="আপনার নাম লিখুন"
        />
        <div className="ml-2">আপনার ঠিকানাঃ</div>
        <input
          required
          name="address"
          className="p-2 rounded-lg m-2 w-10/12"
          placeholder="আপনার সম্পূর্ন ঠিকানা লিখুন"
        />
        <div className="ml-2">আপনার ফোন নাম্বারঃ</div>
        <input
          name="number"
          required
          className="p-2 rounded-lg m-2 w-10/12"
          placeholder="আপনার ফোন নাম্বার লিখুন"
        />
        <div className="ml-2">কত পিস নিতে চানঃ</div>
        <input
          name="quantity"
          required
          className="p-2 rounded-lg m-2 w-10/12"
          type="number"
          defaultValue={1}
        />
        <div className="ml-2">আপনি কোন সাবানটি নিতে চাচ্ছেনঃ</div>
        <select
          name="types"
          className="p-2 rounded-lg m-2 w-10/12"
          id="countries"
        >
          <option value="cinnamon">দারুচিনি সাবান বার</option>
          <option value="charcoal">কয়লা সাবান বার</option>
          <option value="liquorice">যষ্টিমধু ও তুলশি সাবান বার</option>
        </select>
        <div>
          <input
            className="m-2"
            type="radio"
            id="huey"
            name="drone"
            value="50"
            defaultChecked
            onClick={(e) => setDelivary(e.target.value)}
          />
          <label htmlFor="huey">Inside Dhaka</label>
        </div>

        <div>
          <input
            className="m-2"
            type="radio"
            id="dewey"
            name="drone"
            value="100"
            onClick={(e) => setDelivary(e.target.value)}
          />
          <label htmlFor="dewey">Outside Dhaka</label>
        </div>
        <input
          type="submit"
          value="Please Order"
          className=" text-white bg-orange-600 p-3 rounded-lg mt-5 mr-5 w-full "
        />
      </form>
      <div className="w-full">
        <table className="w-full text-left mr-4">
          <thead>
            <tr className="border-b border-dashed border-black">
              <th className="w-8/12">Product</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dashed border-black m-5">
              <td>Soap</td>
              <td>৳480</td>
            </tr>

            <tr>
              <td>Subtotal</td>
              <td>৳480</td>
            </tr>

            <tr className="border-b border-dashed border-black m-5">
              <td>Shiping</td>
              <td>৳ {delivary}</td>
            </tr>

            <tr className=" border-black m-5">
              <td>Total</td>
              <td>
                ৳
                <span ref={spanRef}>
                  {parseInt(delivary ? delivary : 0) + 480}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderForm;
