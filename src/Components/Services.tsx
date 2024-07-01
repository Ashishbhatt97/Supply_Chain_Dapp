import React from "react";
import Image from "next/image";
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
      <section className="pt-12 pb-14">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="mt=12">
            <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {team.map((item, i) => {
                return (
                  <li key={i}>
                    <div
                      onClick={() => openModalBox(i + 1)}
                      className="w-full h-60 sm:h-52 md:h-56"
                    >
                      <div className="w-full h-full bg-gray-300 text-black p-3 flex items-center justify-center font-bold text-2xl text-center">
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
