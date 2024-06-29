"use client";
import * as React from "react";
import * as components from "@/Components";
import { TrackingContext } from "@/Context/trackingContext";

export default function Home() {
  const {
    currentUser,
    createShipment,
    getAllShipment,
    completeShipment,
    startShipment,
    getShipmentCount,
    getShipment,
  }: any = React.useContext(TrackingContext);

  const [createShipmentModal, setCreateShipmentModal] =
    React.useState<Boolean>(false);
  const [openProfile, setOpenProfile] = React.useState<Boolean>(false);
  const [startModal, setStartModal] = React.useState<Boolean>(false);
  const [completeModal, setCompleteModal] = React.useState<Boolean>(false);
  const [getModal, setGetModal] = React.useState<Boolean>(false);

  // data state variable
  const [allShipmentData, setAllShipmentData] = React.useState<any>();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const allData = await getAllShipment();
        setAllShipmentData(allData);
      } catch (error) {
        console.error("Error fetching shipment data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <components.Services
        setOpenProfile={setOpenProfile}
        setCompleteModal={setCompleteModal}
        setGetModal={setGetModal}
        setStartModal={setStartModal}
      />

      <components.Table
        setCreateShipmentModal={setCreateShipmentModal}
        allShipmentData={allShipmentData}
      />

      <components.Form
        createShipmentModal={createShipmentModal}
        createShipment={createShipment}
        setCreateShipmentModal={setCreateShipmentModal}
      />

      <components.Profile
        openProfile={openProfile}
        setOpenProfile={setOpenProfile}
        currentUser={currentUser}
        getShipmentCount={getShipmentCount}
      />

      <components.CompleteShipment
        completeShipment={completeShipment}
        setCompleteModal={setCompleteModal}
        completeModal={completeModal}
      />

      <components.GetShipment
        getModal={getModal}
        setGetModal={setGetModal}
        getShipment={getShipment}
      />

      <components.StartShipment
        startModal={startModal}
        setStartModal={setStartModal}
        startShipment={startShipment}
      />
    </main>
  );
}
