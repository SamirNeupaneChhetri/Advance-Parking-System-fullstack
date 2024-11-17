import React, { useState } from "react";
import Modal from "react-modal";
import { FaCheckCircle } from "react-icons/fa";

Modal.setAppElement("#root");

function ReserveSpot() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isReserved, setIsReserved] = useState(false);
  const [licensePlate, setLicensePlate] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [spotType, setSpotType] = useState("Regular");
  const [parkingDuration, setParkingDuration] = useState("One-Time");
  const [errorMessage, setErrorMessage] = useState("");

  const openModal = () => {
    setModalIsOpen(true);
    setIsReserved(false);
    setErrorMessage("");
    setLicensePlate("");
    setVehicleModel("");
    setSpotType("Regular");
    setParkingDuration("One-Time");
  };

  const closeModal = () => setModalIsOpen(false);

  const isValidLicensePlate = (plate) => /^[A-Z]{2}\s\d{3}(\s[A-Z]{1,2})?$/.test(plate.toUpperCase());

  const isValidVehicleModel = (model) => /^[A-Za-z0-9\s]+$/.test(model);

  const handleReservation = () => {
    if (!licensePlate || !vehicleModel) {
      setErrorMessage("Please fill in all fields.");
      return;
    }
    if (!isValidLicensePlate(licensePlate)) {
      setErrorMessage("Enter a valid Finnish license plate number.");
      return;
    }
    if (!isValidVehicleModel(vehicleModel)) {
      setErrorMessage("Enter a valid vehicle model.");
      return;
    }

    setIsReserved(true);
    setErrorMessage("");

    setTimeout(() => {
      closeModal();
    }, 1500);
  };

  return (
    <div className="flex justify-center mt-10">
      <button
        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
        onClick={openModal}
      >
        Reserve a Spot
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Reserve Spot Modal"
        className="relative mx-auto mt-24 bg-white p-8 rounded-lg shadow-2xl max-w-md w-full"
        overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center"
      >
        {!isReserved ? (
          <>
            <h2 className="text-2xl font-semibold text-center text-blue-900 mb-6">
              Reserve Your Spot
            </h2>
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>

            {errorMessage && (
              <p className="text-red-500 text-center mb-4">{errorMessage}</p>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-lg font-medium text-gray-700">
                  License Plate Number:
                </label>
                <input
                  type="text"
                  value={licensePlate}
                  onChange={(e) => setLicensePlate(e.target.value)}
                  className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  placeholder="e.g., AB 123 CD"
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-700">
                  Vehicle Model:
                </label>
                <input
                  type="text"
                  value={vehicleModel}
                  onChange={(e) => setVehicleModel(e.target.value)}
                  className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  placeholder="Enter Vehicle Model"
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-700">
                  Spot Type:
                </label>
                <select
                  value={spotType}
                  onChange={(e) => setSpotType(e.target.value)}
                  className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                >
                  <option>Regular</option>
                  <option>Handicapped</option>
                  <option>Electric Vehicle</option>
                </select>
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-700">
                  Parking Duration:
                </label>
                <select
                  value={parkingDuration}
                  onChange={(e) => setParkingDuration(e.target.value)}
                  className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                >
                  <option>One-Time</option>
                  <option>Monthly</option>
                </select>
              </div>
              <button
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg w-full mt-5 hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
                onClick={handleReservation}
              >
                Confirm Reservation
              </button>
            </div>
          </>
        ) : (
          <div className="text-center space-y-4">
            <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-3 animate-bounce" />
            <h2 className="text-2xl font-semibold text-green-600">
              Reservation Confirmed!
            </h2>
            <p className="mt-2 text-md">Your spot has been successfully reserved.</p>

            <div className="mt-4 p-4 border border-gray-200 rounded-lg shadow-inner bg-gray-50">
              <h3 className="text-lg font-semibold mb-2 text-indigo-600">Reservation Details:</h3>
              <ul className="space-y-1 text-gray-600">
                <li><strong>License Plate:</strong> {licensePlate}</li>
                <li><strong>Vehicle Model:</strong> {vehicleModel}</li>
                <li><strong>Spot Type:</strong> {spotType}</li>
                <li><strong>Parking Duration:</strong> {parkingDuration}</li>
              </ul>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default ReserveSpot;
