import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function ReserveSpot() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isReserved, setIsReserved] = useState(false);
  const [licensePlate, setLicensePlate] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [spotType, setSpotType] = useState("Regular"); // Default spot type

  const openModal = () => {
    setModalIsOpen(true);
    setIsReserved(false); // Reset message when opening the modal
    setLicensePlate(""); // Reset fields when opening the modal
    setVehicleModel("");
    setSpotType("Regular");
  };

  const closeModal = () => setModalIsOpen(false);

  const handleReservation = () => {
    setIsReserved(true);
    setTimeout(() => {
      closeModal(); // Close the modal after showing the confirmation
    }, 1500); // Adjust timing as needed
  };

  return (
    <div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={openModal}
      >
        Reserve a Spot
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Reserve Spot Modal"
        className="relative mx-auto mt-24 bg-white p-8 rounded-lg shadow-lg max-w-lg w-full"
        overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-40 flex justify-center items-start"
      >
        {!isReserved ? (
          <>
            <h2 className="text-xl font-semibold mb-4">Choose Your Spot</h2>
            <button
              className="absolute top-4 right-4 text-gray-500 text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>

            <div className="space-y-4">
              <div>
                <label className="block text-lg font-medium">License Plate Number:</label>
                <input
                  type="text"
                  value={licensePlate}
                  onChange={(e) => setLicensePlate(e.target.value)}
                  className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter License Plate"
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-medium">Vehicle Model:</label>
                <input
                  type="text"
                  value={vehicleModel}
                  onChange={(e) => setVehicleModel(e.target.value)}
                  className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Vehicle Model"
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-medium">Spot Type:</label>
                <select
                  value={spotType}
                  onChange={(e) => setSpotType(e.target.value)}
                  className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Regular</option>
                  <option>Handicapped</option>
                  <option>Electric Vehicle</option>
                </select>
              </div>
              <div>
                <label className="block text-lg font-medium">Parking Duration:</label>
                <select className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>One-Time</option>
                  <option>Monthly</option>
                </select>
              </div>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-full"
                onClick={handleReservation}
              >
                Confirm Reservation
              </button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-green-600">Reservation Confirmed!</h2>
            <p className="mt-2 text-lg">Your spot has been successfully reserved.</p>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default ReserveSpot;
