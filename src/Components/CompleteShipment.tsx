import { X } from "lucide-react";
import * as React from "react";

const CompleteShipment = ({
  completeModal,
  setCompleteModal,
  completeShipment,
}: any) => {
  const [completeShip, setCompleteShip] = React.useState({
    receiver: "",
    index: "",
  });

  const changeStatus = async () => {
    completeShipment(completeShip);
  };

  return completeModal ? (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className="fixed inset-0 w-full bg-black opacity-40 h-full"
        onClick={() => setCompleteModal(false)}
      ></div>

      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-lg p-4 mx-auto bg-black rounded-md shadow-lg">
          <div className="flex justify-end">
            <button
              className="p-2 text-gray-400 rounded-md hover:bg-gray-800"
              onClick={() => setCompleteModal(false)}
            >
              <X className="text-white" />
            </button>
          </div>

          <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
            <h4 className="text-3xl font-bold text-gray-100">
              Complete shipment
            </h4>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col  gap-3"
            >
              <div className="relative mt-3 px-6">
                <input
                  type="text"
                  placeholder="Receiver"
                  className="w-full pl-5 pr-3 h-9 text-gray-500 bg-transparent outline-none border focus:border-indigo-300 shadow-sm rounded-lg"
                  onChange={(e) =>
                    setCompleteShip({
                      ...completeShip,
                      receiver: e.target.value,
                    })
                  }
                />
              </div>

              <div className="relative mt-3 px-6">
                <input
                  type="text"
                  placeholder="Index"
                  className="w-full pl-5 pr-3 h-9 text-gray-500 bg-transparent outline-none border focus:border-indigo-300 shadow-sm rounded-lg"
                  onChange={(e) =>
                    setCompleteShip({
                      ...completeShip,
                      index: e.target.value,
                    })
                  }
                />
              </div>

              <button
                onClick={() => changeStatus()}
                className="block w-full mt-3
          py-3 font-medium text-sm text-center text-white bg-gray-800 rounded-lg hover:bg-gray-600 "
              >
                Change Status
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default CompleteShipment;
