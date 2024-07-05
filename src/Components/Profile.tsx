import { CircleUser, X } from "lucide-react";
import * as React from "react";

const Profile = ({
  openProfile,
  currentUser,
  setOpenProfile,
  getShipmentCount,
}: any) => {
  const [count, setCount] = React.useState<number>(0);

  React.useEffect(() => {
    const fetchShipmentCount = async () => {
      try {
        const countData = await getShipmentCount();
        setCount(countData);
      } catch (error) {
        console.error("Failed to fetch shipment count:", error);
      }
    };

    fetchShipmentCount();
  }, [getShipmentCount]);

  return openProfile ? (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-40 "
        onClick={() => setOpenProfile(false)}
      ></div>
      <div className="flex items-center min-h-screen px-4 py-8 ">
        <div className="relative w-full max-w-lg p-4 mx-auto bg-black rounded-md shadow-lg">
          <div className="flex justify-end">
            <button
              className="p-2 text-gray-400 rounded-md hover:bg-gray-800"
              onClick={() => setOpenProfile(false)}
            >
              <X className="text-white" />
            </button>
          </div>

          <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
            <div className="flex flex-col mb-3 rounded-full shadow-lg ">
              <CircleUser />
              <h2 className="mb-1 text-xl font-medium text-gray-200 dark:text-white">
                Welcome Trader
              </h2>
              <span className="text-sm text-gray-200">{currentUser}</span>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <h2 className="items-center cursor-pointer px-4 py-2 text-sm font-medium text-center text-white rounded-lg border-2">
                  Balance: 34 ETH
                </h2>

                <h2 className="inline-flex cursor-pointer items-center px-4 py-2 text-sm font-medium text-center text-white rounded-lg border-2">
                  Total Shipment : {count}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Profile;
