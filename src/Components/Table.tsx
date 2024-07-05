import React from "react";

interface allShipmentDataFormat {
  sender: string;
  receiver: string;
  price: string;
  pickupTime: number;
  deliveryTime: number;
  distance: number;
  isPaid: boolean;
  status: number;
}

interface TableProps {
  setCreateShipmentModal: (value: boolean) => void;
  allShipmentData: allShipmentDataFormat[];
}

const Table: React.FC<TableProps> = ({
  setCreateShipmentModal,
  allShipmentData,
}) => {
  const convertTime = (time: number) => {
    const newTime = new Date().getTime();

    const dateTime = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(newTime);

    return dateTime;
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 700:px-9">
      <div className="items-start justify-between 700:flex 1024:mx-12">
        <div className="max-w-lg">
          <h3 className="text-gray-900 1024:text-3xl font-extrabold 300:text-2xl">
            Create Tracking
          </h3>
          <p className="text-gray-700 text-sm mt-2">
            Easily monitor and analyze the performance of your product listings
            to optimize sales and engagement.
          </p>
        </div>

        <div className="mt-3 500:mt-0 1024:mt-8">
          <button
            onClick={() => setCreateShipmentModal(true)}
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg md:inline-flex"
          >
            Add Tracking
          </button>
        </div>
      </div>

      {allShipmentData && (
        <div className="mt-12 mx-12 shadow-sm rounded-lg overflow-x-auto border-b border-x border-gray-700">
          <table className="w-full table-auto text-[12px] text-left">
            <thead className=" bg-gray-900 text-white">
              <tr>
                <th className="py-3 px-6">Shipment Id</th>
                <th className="py-3 px-6">Sender</th>
                <th className="py-3 px-6">Receiver</th>
                <th className="py-3 px-6">PickUp Time</th>
                <th className="py-3 px-6">Distance</th>
                <th className="py-3 px-6">Price</th>
                <th className="py-3 px-6">Delivery Time</th>
                <th className="py-3 px-6">Paid</th>
                <th className="py-3 px-6">Status</th>
              </tr>
            </thead>

            <tbody className="text-gray-900 divide-y">
              {allShipmentData?.map((shipment, index) => {
                return (
                  <tr key={index}>
                    <td className="px-6 py-4 font-medium whitespace-nowrap">
                      {index}
                    </td>
                    <td className="px-6 py-4 font-medium whitespace-nowrap">
                      {shipment.sender?.slice(0, 10)}...
                    </td>
                    <td className="px-6 py-4 font-medium whitespace-nowrap">
                      {shipment.receiver?.slice(0, 10)}...
                    </td>
                    <td className="px-6 py-4 font-medium whitespace-nowrap">
                      {convertTime(shipment.pickupTime)}
                    </td>
                    <td className="px-6 py-4 font-medium whitespace-nowrap">
                      {shipment.distance} KM
                    </td>
                    <td className="px-6 py-4 font-medium whitespace-nowrap">
                      {shipment.price}
                    </td>
                    <td className="px-6 py-4 font-medium whitespace-nowrap">
                      {shipment.deliveryTime}
                    </td>
                    <td className="px-6 py-4 font-medium whitespace-nowrap">
                      {shipment.isPaid ? "Completed" : "Not Complete"}
                    </td>
                    <td className="px-6 py-4 font-medium whitespace-nowrap">
                      {shipment.status === 0
                        ? "Pending"
                        : shipment.status === 1
                        ? "In Transit"
                        : "Delivered"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Table;
