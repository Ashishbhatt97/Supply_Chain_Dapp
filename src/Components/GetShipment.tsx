"use client";

import { X } from "lucide-react";
import * as React from "react";

interface singleShipmentData {
  sender: string;
  receiver: string;
  pickupTime: number;
  deliveryTime: number;
  distance: number;
  price: number;
  status: boolean;
  isPaid: string;
}

const GetShipment = ({ getModal, setGetModal, getShipment }: any) => {
  const [index, setIndex] = React.useState<number>(0);
  const [singleShipmentData, setSingleShipmentData] =
    React.useState<singleShipmentData>();

  const getShipmentData = async () => {
    const getData = await getShipment(index);
    setSingleShipmentData(getData);
    console.log(getData);
  };

  console.log(singleShipmentData);

  const convertTime = (time: number) => {
    const newTime = new Date(time);
    const dataTime = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(newTime);
    return dataTime;
  };

  return getModal ? (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-40 "
          onClick={() => setGetModal(false)}
        ></div>

        <div className="flex items-center min-h-screen px-4 py-8 ">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-black rounded-md shadow-lg">
            <div className="flex justify-end">
              <button
                className="p-2 text-gray-400 rounded-md hover:bg-gray-800"
                onClick={() => setGetModal(false)}
              >
                <X className="text-white" />
              </button>
            </div>

            <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
              <h2 className="text-2xl font-medium text-gray-300">
                Product Tracking Details
              </h2>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col  gap-3"
              >
                <div className="relative mt-3">
                  <input
                    type="number"
                    placeholder="Id"
                    className="w-full pl-5 pr-3 h-9 text-gray-500 bg-transparent outline-none border focus:border-white/60 shadow-sm rounded-lg"
                    onChange={(e) => setIndex(Number(e.target.value))}
                  />
                </div>
                <button
                  onClick={() => getShipmentData()}
                  className="block w-full mt-3
               py-3 px-4 font-medium text-sm text-center text-white bg-gray-800 rounded-lg hover:bg-gray-600 "
                >
                  Start Shipping
                </button>
              </form>

              {singleShipmentData == undefined ? null : (
                <>
                  <div className="text-left">
                    <p>Sender : {singleShipmentData.sender.slice(0, 25)}...</p>
                    <p>
                      Receiver : {singleShipmentData.receiver.slice(0, 25)}...
                    </p>
                    <p>
                      Pickup Time : {convertTime(singleShipmentData.pickupTime)}
                    </p>
                    <p>
                      Delivery Time :
                      {convertTime(singleShipmentData.deliveryTime)}
                    </p>
                    <p>Distance :{singleShipmentData.distance}</p>

                    <p>Price :{singleShipmentData.price}</p>
                    <p>Status :{singleShipmentData.status}</p>
                    <p>
                      Paid :
                      {singleShipmentData.isPaid ? "Complete" : "Not Complete"}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default GetShipment;
