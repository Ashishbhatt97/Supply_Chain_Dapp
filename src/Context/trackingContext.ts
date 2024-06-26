import React, { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import tracking from "./Tracking.json";
import { Web3Modal } from "@web3modal/ethers";

const ContractAddress = "";
const ContractABI = tracking.abi;

//Fetching the contract
const fetchContract = (signerOrProvider: any) => {
  new ethers.Contract(ContractAddress, ContractABI, signerOrProvider);
};

export const TrackingContext = React.createContext(null);

export const TrackingProvider = ({ children }: any) => {
  const DappName = "product Tracking Dapp";
  const [currentUser, setCurrentUser] = useState("");

  const providerOptions = {};

  //
  const createShipment = async (items: any) => {
    console.log(items);

    const { receiver, pickupTime, distance, price } = items;

    try {
      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchContract(signer);

      const createItem = await contract.createShipment(
        receiver,
        new Date(pickupTime).getTime(),
        distance,
        ethers.utils.parseUnits(price, 18),
        {
          value: ethers.utils.parseUnits(price, 18),
        }
      );

      await createItem.wait();
      console.log("Shipment created", createItem);
    } catch (error) {
      console.log("error", error);
    }
  };

  //get All shipment function

  const getAllShipment = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider();
      const contract = fetchContract(provider);
      const shipments = await contract.getAllTransactions();
      const allShipments = shipments.map((shipment) => ({
        sender: shipment.sender,
        receiver: shipment.receiver,
        price: ethers.utils.formatEther(shipment.price.toString()),
        pickupTime: shipment.pickupTime.toNumber(),
        deliveryTime: shipment.deliveryTime.toNumber(),
        distance: shipment.distance.toNumber(),
        isPaid: shipment.isPaid,
        status: shipment.status,
      }));

      return allShipments;
    } catch (error) {
      console.log("error", error);
    }
  };
};
