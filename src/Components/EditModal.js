import React, { useState } from "react";
import data from "../warehousesData.js";
const singleData = data[0];

function EditModal({ isModalOpen, setIsModalOpen }) {
  const [editedName, setEditedName] = useState(singleData.name);

  const handleNameChange = (e) => {
    setEditedName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update the name with the editedName value
    // You can perform other actions like sending data to a server here

    // Close the modal
    setIsModalOpen(false);
  };

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center z-50 ${
        isModalOpen ? "" : "hidden"
      }`}
    >
      <div className="fixed inset-0 bg-gray-600 backdrop-blur-2xl opacity-40"></div>
      <div className="bg-white w-[80%] max-w-screen-md p-4 rounded-lg shadow-lg relative">
        <h2 className="text-xl font-semibold mb-1">Edit Warehouse Details</h2>
        <div className="bg-red-500 h-[3px] mb-4"></div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-[18px] font-medium text-gray-700"
            >
              Warehouse Name:
            </label>
            <input
              type="text"
              id="name"
              className="w-full border rounded-md py-1 px-2 text-[23px] text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
              value={editedName}
              onChange={handleNameChange}
            />
          </div>

          {/* Add more form fields here if needed */}

          <div className="text-right font-bold text-lg">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-500"
            >
              Save
            </button>
            <button
              type="button"
              className="ml-2 px-4 py-2 bg-red-400 text-white rounded-md hover:bg-red-500"
              onClick={(e) => setIsModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;
