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

      const allShipments = shipments.map((shipment: any) => ({
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

  // get Shipment Count function
  const getShipmentCount = async () => {
    try {
      if (window.ethereum) return "Install Metamask";

      const account = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const provider = new ethers.providers.JsonRpcProvider();
      const contract = fetchContract(provider);
      const shipmentCount = await contract.getShipmentCount(account[0]);
      return shipmentCount.toNumber();
    } catch (error) {
      console.log("error want, getting shipment");
    }
  };

  //Complete Shipment Function
  const completeShipment = async (completeShip: any) => {
    console.log(completeShip);

    const { receiver, index } = completeShip;

    try {
      if (!window.ethereum) return "install Metamask";

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);

      const signer = provider.getSigner();

      const contract = fetchContract(signer);

      const transaction = await contract.completeShipment(
        accounts[0],
        receiver,
        index,
        {
          gasLimit: 300000,
        }
      );

      transaction.wait();

      console.log(transaction);
    } catch (error) {
      console.log("something went wrong on completeShipment", error);
    }
  };

  const getShipment = async (index: any) => {
    console.log(index * 1);

    try {
      if (!window.ethereum) return "Install Metamask";

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      const provider = new ethers.providers.JsonRpcProvider();
      const contract = fetchContract(provider);
      const shipment = await contract.getShipment(accounts[0], index * 1);
      console.log(shipment);

      const singleShipment = {
        sender: shipment[0],
        receiver: shipment[1],
        pickupTime: shipment[2].toNumber(),
        deliveryTime: shipment[3].toNumber(),
        distance: shipment[4].toNumber(),
        price: ethers.utils.formatEther(shipment[5].toString()),
        status: shipment[6],
        isPaid: shipment[7],
      };

      return singleShipment;
    } catch (error) {
      console.log("Sorry No Shipment");
    }
  };

  // Start Shipment Function
  const startShipment = async (getProduct: any) => {
    const { receiver, index } = getProduct;

    try {
      if (!window.ethereum) return "Install Metamask";

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchContract(signer);

      const shipment = await contract.startShipment(
        accounts[0],
        receiver,
        index * 1
      );

      shipment.wait();
      console.log(shipment);
    } catch (error) {
      console.log("sorry no Shipment", error);
    }
  };
};


