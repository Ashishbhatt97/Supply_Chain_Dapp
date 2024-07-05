import React from "react";
const Services = ({
  setOpenProfile,
  setCompleteModal,
  setGetModal,
  setStartModal,
}: any) => {
  const team = [
    "COMP SHIPMENT",
    "GET SHIPMENT",
    "START SHIPMENT",
    "USER PROFILE",
    "SHIPMENTS COUNT",
    "SEND SHIPMENT",
  ];

  const openModalBox = (text: number) => {
    if (text === 1) {
      setCompleteModal(true);
    } else if (text === 2) {
      setGetModal(true);
    } else if (text === 3) {
      setStartModal(true);
    } else if (text === 4) {
      setOpenProfile(true);
    }
  };

  return (
    <>
      <section className="pb-14">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 1024:px-20">
          <div className="mt-12 ">
            <ul className="grid gap-8 500:grid-cols-2 700:grid-cols-3">
              {team.map((item, i) => {
                return (
                  <li key={i}>
                    <div
                      onClick={() => openModalBox(i + 1)}
                      className="w-full h-60 500:h-52 700:h-56 cursor-pointer"
                    >
                      <div className="w-full h-full bg-gray-900 text-white p-3 flex items-center justify-center font-bold text-2xl text-center">
                        {item}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
