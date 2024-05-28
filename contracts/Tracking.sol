//SPDX-Identifier-Lincense:MIT
pragma solidity ^0.8.2;

contract Tracking {
    enum shipmentStatus {
        PENDING,
        IN_TRANSIT,
        DELIVERED
    }

    struct Shipment {
        address sender;
        address reciever;
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
        address reciever;
        uint256 pickupTime;
        uint256 deliveryTime;
        shipmentStatus status;
        bool isPaid;
        uint256 price;
        uint256 distance;
    }

    typeShipment[] typeShipments;
    event ShipmentCreated(
        address indexed swender,
        address indexed receiver,
        uint256 pickupTime,
        uint256 deliveryTime,
        uint256 distance,
        uint256 price
    );

    event ShipmentInTransit(
        address indexed swender,
        address indexed receiver,
        uint256 pickupTime
    );
    event ShipmentDelivered(
        address indexed swender,
        address indexed receiver,
        uint256 deliveryTime
    );

    event ShipmentPaid(
        address indexed swender,
        address indexed receiver,
        uint256 amount
    );

    constructor() {
        shipmentCounts = 0;
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
}
