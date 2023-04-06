import React, { useEffect, useState } from "react";
import Modal from "./Modal";

const Allorder = () => {
  const [orders, setOrder] = useState([]);
  const reverseOrder = orders.reverse();
  console.log(orders);
  useEffect(() => {
    fetch("http://localhost:5000/allorder")
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);
  //   console.log(orders);

  return (
    <div className="w-full">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Sl no
              </th>
              <th scope="col" className="px-6 py-3">
                Invoice number
              </th>
              <th scope="col" className="px-6 py-3">
                order Date
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>

              <th scope="col" className="px-6 py-3">
                QTY
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Ship to
              </th>

              <th scope="col" className="px-6 py-3">
                action
              </th>
            </tr>
          </thead>
          <tbody>
            {reverseOrder.map((order, i) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-32 p-4">{i + 1}</td>
                <td className="w-32 p-4">{order?.invoiceNumber}</td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {order?.date.slice(0, 10)}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {order?.types}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {order?.quantity}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  ৳ {order?.price}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  <span
                    className={`bg-green-500
                     ${order?.status === "processing" ? "bg-red-500" : ""}
                     ${order?.status === "complete" ? "bg-green-600" : ""}
                     ${order?.status === "onhold" ? "bg-slate-600" : ""}
                     p-1 rounded text-white`}
                  >
                    {order?.status}
                  </span>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {order?.address}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {/* The button to open modal */}
                  <a href={`#${order?._id}`} className="btn">
                    View
                  </a>
                  <Modal order={order}></Modal>
                </td>
                {/* <OrderDetails id={order._id} key={i}></OrderDetails> */}
              </tr>
            ))}
          </tbody>
        </table>
        {/* mdodal */}
      </div>
    </div>
  );
};

export default Allorder;
