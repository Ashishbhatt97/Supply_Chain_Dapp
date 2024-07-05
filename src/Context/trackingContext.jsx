"use client";
import { ethers } from "ethers";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import tracking from "./Tracking.json";

const contractAddress = "0x7404e727D6F6c4665C4fA080b9b9F3f83a658781";
const contractABI = tracking.abi;

const fetchContract = (signerOrProvider) => {
  return new ethers.Contract(contractAddress, contractABI, signerOrProvider);
};

export const TrackingContext = React.createContext(null);

export const TrackingProvider = ({ children }) => {
  const DappName = "Product Tracking Dapp";
  const [currentUser, setCurrentUser] = useState("");

  const initializeProvider = useCallback(() => {
    const { ethereum } = window;
    if (!ethereum) {
      alert("Please install MetaMask!");
      return null;
    }
    return new ethers.providers.Web3Provider(ethereum);
  }, []);

  const getSigner = useCallback(() => {
    const provider = initializeProvider();
    return provider ? provider.getSigner() : null;
  }, [initializeProvider]);

  const connectWallet = useCallback(async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) return "Install MetaMask";

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentUser(accounts[0]);
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  }, []);

  const checkIfWalletConnected = useCallback(async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Please install MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      if (accounts.length) {
        setCurrentUser(accounts[0]);
      } else {
        console.log("No account found");
      }
    } catch (error) {
      console.error("Wallet not connected:", error);
    }
  }, []);

  const createShipment = useCallback(
    async (items) => {
      const { receiver, pickupTime, distance, price } = items;

      try {
        const signer = getSigner();
        if (!signer) return;

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
        console.error("Error creating shipment:", error);
      }
    },
    [getSigner]
  );

  const getAllShipment = useCallback(async () => {
    try {
      const provider = initializeProvider();
      if (!provider) return;

      const contract = fetchContract(provider);
      const shipments = await contract.getAllTransaction();

      return shipments.map((shipment) => ({
        sender: shipment.sender,
        receiver: shipment.receiver,
        price: ethers.utils.formatEther(shipment.price.toString()),
        pickupTime: shipment.pickupTime.toNumber(),
        deliveryTime: shipment.deliveryTime.toNumber(),
        distance: shipment.distance.toNumber(),
        isPaid: shipment.isPaid,
        status: shipment.status,
      }));
    } catch (error) {
      console.error("Error getting all shipments:", error);
    }
  }, [initializeProvider]);

  const getShipmentCount = useCallback(async () => {
    try {
      if (!window.ethereum) return "Install Metamask";

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const provider = new ethers.providers.JsonRpcProvider();
      const contract = fetchContract(provider);
      const shipmentCount = await contract.getShipmentCount(accounts[0]);
      return shipmentCount.toNumber();
    } catch (error) {
      console.error("Error getting shipment count:", error);
    }
  }, []);

  const completeShipment = useCallback(
    async (completeShip) => {
      const { receiver, index } = completeShip;

      try {
        const signer = getSigner();
        if (!signer) return;

        const contract = fetchContract(signer);
        const transaction = await contract.completeShipment(
          currentUser,
          receiver,
          index,
          {
            gasLimit: 300000,
          }
        );

        await transaction.wait();
        console.log("Shipment completed:", transaction);
      } catch (error) {
        console.error("Error completing shipment:", error);
      }
    },
    [currentUser, getSigner]
  );

  const getShipment = useCallback(
    async (index) => {
      try {
        const provider = initializeProvider();
        if (!provider) return;

        const contract = fetchContract(provider);
        const shipment = await contract.getShipment(currentUser, index);

        return {
          sender: shipment[0],
          receiver: shipment[1],
          pickupTime: shipment[2].toNumber(),
          deliveryTime: shipment[3].toNumber(),
          distance: shipment[4].toNumber(),
          price: ethers.utils.formatEther(shipment[5].toString()),
          status: shipment[6],
          isPaid: shipment[7],
        };
      } catch (error) {
        console.error("Error getting shipment:", error);
      }
    },
    [currentUser, initializeProvider]
  );

  const startShipment = useCallback(
    async (getProduct) => {
      const { receiver, index } = getProduct;

      try {
        const signer = getSigner();
        if (!signer) return;

        const contract = fetchContract(signer);
        const shipment = await contract.startShipment(
          currentUser,
          receiver,
          index
        );
        await shipment.wait();
        console.log("Shipment started:", shipment);
      } catch (error) {
        console.error("Error starting shipment:", error);
      }
    },
    [currentUser, getSigner]
  );

  useEffect(() => {
    checkIfWalletConnected();
  }, [checkIfWalletConnected]);

  const providerValue = useMemo(
    () => ({
      connectWallet,
      createShipment,
      getAllShipment,
      completeShipment,
      getShipment,
      startShipment,
      getShipmentCount,
      DappName,
      currentUser,
    }),
    [
      connectWallet,
      createShipment,
      getAllShipment,
      completeShipment,
      getShipment,
      startShipment,
      getShipmentCount,
      DappName,
      currentUser,
    ]
  );

  return (
    <TrackingContext.Provider value={providerValue}>
      {children}
    </TrackingContext.Provider>
  );
};
