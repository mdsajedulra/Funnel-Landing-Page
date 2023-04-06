import React from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const Modal = ({ order }) => {
  async function createOrder() {
    const apiKey = process.env.SAPIKEY;
    const secretKey = process.env.SSECRETKEY;
    const url = "https://portal.steadfast.com.bd/api/v1/create_order";

    const data = {
      invoice: order?.invoiceNumber,
      recipient_name: order?.name,
      recipient_phone: order?.number,
      recipient_address: order?.address,
      cod_amount: order?.price,
      note: order?.quantity + " pics " + order?.types,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Api-Key": apiKey,
        "Secret-Key": secretKey,
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, options);
    const responseData = await response.json();

    console.log(responseData);
  }

  const uploadData = () => {
    console.log("data");
  };
  // handle order state

  const handleOrderstate = (event) => {
    console.log(event.target.value);
    const orderstate = event.target.value;
    const orderId = order?._id;
    fetch("http://localhost:5000/updateorderstate", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orderstate, orderId }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          toast.success("Order Update Successfully");
        }
      });
  };

  return (
    <div className="modal" id={order?._id}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">Order #{order?.invoiceNumber}</h3>
        <div className="flex gap-6 justify-between">
          <div>
            <div className="py-1">
              <h1>Billing Details</h1>
              <p>Name: {order?.name}</p>
              <p>Address: {order?.address}</p>
            </div>
            <div className="py-1">
              <h1>Phone</h1>
              <p>
                <Link to={`tel:${order?.number}`}>{order?.number}</Link>
              </p>
            </div>
          </div>
          <div>
            <select
              className="rounded-lg"
              onChange={handleOrderstate}
              name="orderstate"
              defaultValue={order?.status}
            >
              <option value="processing">Processing</option>
              <option value="complete">Complete</option>
              <option value="onhold">On Hold</option>
            </select>
          </div>
        </div>
        <div className="py-1">
          <h1>Product Details</h1>
          <div>
            <table className="w-full">
              <tr>
                <th className="border text-center">Product</th>
                <th className="border text-center">Quantity</th>
                <th className="border text-center">Total</th>
              </tr>
              <tr>
                <td className="border text-center">{order?.types}</td>
                <td className="border text-center">{order?.quantity}</td>
                <td className="border text-center">{order?.price}</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="modal-action">
          <a href="#" className="btn btn-sm">
            Close
          </a>
          <button className="btn btn-accent btn-sm" onClick={uploadData}>
            Upload Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
