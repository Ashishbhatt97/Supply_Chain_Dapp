"use client";
import React, { useState } from "react";

const Form = ({
  setCreateShipmentModal,
  createShipmentModel,
  createShipment,
}: any) => {
  const [shipment, setShipment] = useState({
    receiver: "",
    pickupTime: "",
    distance: "",
    price: "",
  });

  const createItem = async () => {
    try {
      await createShipment(shipment);
    } catch (error) {
      console.log("Something went wrong while creating Item");
    }
  };

  return createShipmentModel ? (
    <div className="fixed inset-0 z-10 overflow-y-auto ">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-40"
        onClick={() => setCreateShipmentModal(false)}
      ></div>

      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
          <div className="flex justify-end">
            <button
              className="p-2 text-gray-500 rounded-md hover:bg-gray-100"
              onClick={() => setCreateShipmentModal(false)}
            >
              buu
            </button>
          </div>

          <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
            <h4 className="text-lg font-medium text-gray-600">
              Track Shipment, Create Shipment
            </h4>
          </div>
          <p className="text-[15px] text-gray-200">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
            reiciendis!
          </p>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="relative mt-3">
              <input
                type="text"
                placeholder="receiver"
                className="w-full pl-5 pr-3 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={(e) =>
                  setShipment({
                    ...shipment,
                    receiver: e.target.value,
                  })
                }
              />
            </div>
            <div className="relative mt-3">
              <input
                type="date"
                placeholder="pickupTime"
                className="w-full pl-5 pr-3 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={(e) =>
                  setShipment({
                    ...shipment,
                    pickupTime: e.target.value,
                  })
                }
              />
            </div>
            <div className="relative mt-3">
              <input
                type="number"
                placeholder="distance"
                className="w-full pl-5 pr-3 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={(e) =>
                  setShipment({
                    ...shipment,
                    distance: e.target.value,
                  })
                }
              />
            </div>
            <div className="relative mt-3">
              <input
                type="number"
                placeholder="price"
                className="w-full pl-5 pr-3 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={(e) =>
                  setShipment({
                    ...shipment,
                    price: e.target.value,
                  })
                }
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : null;
};

export default Form;
