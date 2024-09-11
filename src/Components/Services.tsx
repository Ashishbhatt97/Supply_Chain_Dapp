import React from "react";
const Services = ({
  setOpenProfile,
  setCompleteModal,
  setGetModal,
  setStartModal,
  ServicesRef,
}: any) => {
  const team = [
    "USER PROFILE",
    "GET SHIPMENT",
    "START SHIPMENT",
    "COMPLETE SHIPMENT",
  ];

  const openModalBox = (text: number) => {
    if (text === 1) {
      setOpenProfile(true);
    } else if (text === 2) {
      setGetModal(true);
    } else if (text === 3) {
      setStartModal(true);
    } else if (text === 4) {
      setCompleteModal(true);
    }
  };

  return (
    <>
      <section ref={ServicesRef} className="pb-14">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 1024:px-20">
          <div className="mt-6">
            <h3 className="py-6 text-center font-bold text-4xl">
              Services we offer
            </h3>
            <ul className="grid gap-8 500:grid-cols-2 700:grid-cols-4 ">
              {team.map((item, i) => {
                return (
                  <li key={i}>
                    <div
                      onClick={() => openModalBox(i + 1)}
                      className="w-full h-60 500:h-52 700:h-56 cursor-pointer"
                    >
                      <div className="w-full h-full rounded-lg bg-gray-900 text-white p-3 flex items-center justify-center font-bold text-2xl text-center shadow-xl">
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
