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
};
