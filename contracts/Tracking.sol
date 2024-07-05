// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract Tracking {
    enum shipmentStatus {
        PENDING,
        IN_TRANSIT,
        DELIVERED
    }

    struct Shipment {
        address sender;
        address receiver;
        uint256 pickupTime;
        uint256 deliveryTime;
        shipmentStatus status;
        bool isPaid;
        uint256 price;
        uint256 distance;
    }

    mapping(address => Shipment[]) public shipments;

    uint256 public shipmentCount;

    struct typeShipment {
        address sender;
        address receiver;
        uint256 pickupTime;
        uint256 deliveryTime;
        shipmentStatus status;
        bool isPaid;
        uint256 price;
        uint256 distance;
    }

    typeShipment[] typeShipments;
    event ShipmentCreated(
        address indexed sender,
        address indexed receiver,
        uint256 pickupTime,
        uint256 deliveryTime,
        uint256 distance,
        uint256 price
    );

    event ShipmentInTransit(
        address indexed sender,
        address indexed receiver,
        uint256 pickupTime
    );
    event ShipmentDelivered(
        address indexed sender,
        address indexed receiver,
        uint256 deliveryTime
    );

    event ShipmentPaid(
        address indexed sender,
        address indexed receiver,
        uint256 amount
    );

    constructor() {
        shipmentCount = 0;
    }

    function createShipment(
        address _receiver,
        uint256 _pickupTime,
        uint256 _distance,
        uint256 _price
    ) public payable {
        require(msg.value == _price, "Invalid Amount");
        Shipment memory shipment = Shipment(
            msg.sender,
            _receiver,
            _pickupTime,
            0,
            shipmentStatus.PENDING,
            false,
            _price,
            _distance
        );

        shipments[msg.sender].push(shipment);
        shipmentCount++;

        typeShipments.push(
            typeShipment(
                msg.sender,
                _receiver,
                _pickupTime,
                0,
                shipmentStatus.PENDING,
                false,
                _price,
                _distance
            )
        );

        emit ShipmentCreated(
            msg.sender,
            _receiver,
            _pickupTime,
            0,
            _distance,
            _price
        );
    }

    function startShipment(
        address _sender,
        address _receiver,
        uint256 _index
    ) public {
        Shipment storage shipment = shipments[_sender][_index];
        typeShipment storage type_Shipment = typeShipments[_index];

        require(shipment.receiver == _receiver, "Invalid Receiver");
        require(
            shipment.status == shipmentStatus.PENDING,
            "Shipment is already in transit"
        );

        shipment.status = shipmentStatus.IN_TRANSIT;
        type_Shipment.status = shipmentStatus.IN_TRANSIT;

        emit ShipmentInTransit(_sender, _receiver, shipment.pickupTime);
    }

    function completeShipment(
        address _sender,
        address _receiver,
        uint256 _index
    ) public {
        Shipment storage shipment = shipments[_sender][_index];
        typeShipment storage type_Shipment = typeShipments[_index];

        require(shipment.receiver == _receiver, "Invalid receiver");
        require(
            shipment.status == shipmentStatus.IN_TRANSIT,
            "Shipment is not in transit"
        );

        require(!shipment.isPaid, "Shipment already paid");

        shipment.status = shipmentStatus.DELIVERED;
        type_Shipment.status = shipmentStatus.DELIVERED;
        type_Shipment.deliveryTime = block.timestamp;
        shipment.deliveryTime = block.timestamp;

        uint256 amount = shipment.price;
        payable(shipment.sender).transfer(amount);
        shipment.isPaid = true;
        type_Shipment.isPaid = true;

        emit ShipmentDelivered(_sender, _receiver, shipment.deliveryTime);
        emit ShipmentPaid(_sender, _receiver, amount);
    }

    function getShipment(
        address _sender,
        uint256 _index
    )
        public
        view
        returns (
            address,
            address,
            uint256,
            uint256,
            uint256,
            uint256,
            shipmentStatus,
            bool
        )
    {
        Shipment memory shipment = shipments[_sender][_index];
        return (
            shipment.sender,
            shipment.receiver,
            shipment.pickupTime,
            shipment.deliveryTime,
            shipment.distance,
            shipment.price,
            shipment.status,
            shipment.isPaid
        );
    }

    function getShipmentsCount(address _sender) public view returns (uint256) {
        return shipments[_sender].length;
    }

    function getAllTransaction() public view returns (typeShipment[] memory) {
        return typeShipments;
    }
}
