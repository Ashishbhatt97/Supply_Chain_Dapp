"use client";
import { X } from "lucide-react";
import React, { useState } from "react";
import date from "../../public/date.svg";

const Form = ({
  setCreateShipmentModal,
  createShipmentModal,
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

  return createShipmentModal ? (
    <div className="fixed inset-0 z-10 overflow-y-auto ">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-90"
        onClick={() => setCreateShipmentModal(false)}
      ></div>

      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-lg p-4 mx-auto bg-black rounded-md shadow-lg">
          <div className="flex justify-end">
            <button
              className="p-2 text-gray-500 rounded-md hover:bg-gray-700"
              onClick={() => setCreateShipmentModal(false)}
            >
              <X color="white" />
            </button>
          </div>

          <div className="max-w-sm pl-6 py-1 space-y-3">
            <h4 className="text-xl font-bold text-gray-300">
              Track Shipment, Create Shipment
            </h4>
          </div>
          <p className="text-[12px] px-6 pb-3 text-gray-600">
            Efficiently Manage and Monitor Shipments for Seamless Product
            Tracking
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col  gap-3"
          >
            <div className="relative mt-3 px-6">
              <input
                type="text"
                placeholder="Receiver"
                className="w-full pl-5 pr-3 h-9 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={(e) =>
                  setShipment({
                    ...shipment,
                    receiver: e.target.value,
                  })
                }
              />
            </div>
            <div className="relative mt-3 px-6">
              <input
                type="date"
                placeholder="pickupTime"
                className="w-full pl-5 pr-3 h-9 text-gray-500 bg-black placeholder:bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={(e) =>
                  setShipment({
                    ...shipment,
                    pickupTime: e.target.value,
                  })
                }
              />
            </div>
            <div className="relative mt-3 px-6">
              <input
                type="number"
                placeholder="distance"
                className="w-full pl-5 pr-3 h-9 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={(e) =>
                  setShipment({
                    ...shipment,
                    distance: e.target.value,
                  })
                }
              />
            </div>
            <div className="relative mt-3 px-6">
              <input
                type="number"
                placeholder="price"
                className="w-full pl-5 pr-3 h-9 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={(e) =>
                  setShipment({
                    ...shipment,
                    price: e.target.value,
                  })
                }
              />
            </div>
            <div className="px-6">
              <button
                onClick={() => createItem()}
                className="block w-full mt-3
              py-3 font-medium text-sm text-center text-white bg-gray-800 rounded-lg hover:bg-gray-600 "
              >
                Create Shipment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : null;
};

export default Form;
