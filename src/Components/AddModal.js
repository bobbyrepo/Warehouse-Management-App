import React, { useState } from "react";
import "../CSS/Modal.css";
import { useDispatch } from "react-redux";
import { addWarehouseData } from "../redux/actions/warehouseData";

function AddModal({
  isAddModalOpen,
  setIsAddModalOpen,
  successNotify,
  errNotify,
}) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [space, setSpace] = useState("");
  const [type, setType] = useState("");
  const [cluster, setCluster] = useState("");
  const [isLive, setIsLive] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !city || !space || !type || !cluster) {
      errNotify("Something is missing");
    } else if (isNaN(Number(space))) {
      // Check if 'space' is not a valid number
      errNotify("Space should be a valid number");
    } else {
      addWarehouseData(dispatch, {
        name: name,
        city: city,
        space_available: space,
        type: type,
        cluster: cluster,
        is_live: isLive,
      });
      setName("");
      setCity("");
      setSpace("");
      setType("");
      setCluster("");
      setIsLive("");
      successNotify("Added Successfully");
      setIsAddModalOpen(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center z-50 ${
        isAddModalOpen ? "" : "hidden"
      }`}
    >
      <div className="fixed inset-0 bg-gray-600 backdrop-blur-2xl opacity-40"></div>
      <div className="bg-white w-[80%] max-w-screen-md p-4 rounded-lg shadow-lg relative">
        <h2 className="text-xl font-semibold mb-1">Edit Warehouse Details</h2>
        <div className="bg-red-500 h-[3px] mb-4"></div>

        <form onSubmit={handleSubmit}>
          {/*-------- Edit name-------*/}
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
              className="w-full border rounded-md py-1 px-2 font-[500] text-[23px] text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="grid grid-cols-2 gap-6 mb-4">
            {/*-------- Edit City-------*/}
            <div className="">
              <label
                htmlFor="name"
                className="block text-[18px] font-medium text-gray-700"
              >
                City:
              </label>
              <input
                type="text"
                id="name"
                className="w-full border rounded-md py-1 px-2 font-[500] text-[23px] text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
            </div>
            {/*-------- Edit Space-------*/}
            <div className="">
              <label
                htmlFor="name"
                className="block text-[18px] font-medium text-gray-700"
              >
                Space:
              </label>
              <input
                type="text"
                id="name"
                className="w-full border rounded-md py-1 px-2 font-[500] text-[23px] text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                value={space}
                onChange={(e) => {
                  setSpace(e.target.value);
                }}
              />
            </div>
            {/*-------- Edit Type-------*/}
            <div className="">
              <label
                htmlFor="name"
                className="block text-[18px] font-medium text-gray-700"
              >
                Type:
              </label>
              <input
                type="text"
                id="name"
                className="w-full border rounded-md py-1 px-2 font-[500] text-[23px] text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                }}
              />
            </div>
            {/*-------- Edit Cluster-------*/}
            <div className="">
              <label
                htmlFor="name"
                className="block text-[18px] font-medium text-gray-700"
              >
                Cluster:
              </label>
              <input
                type="text"
                id="name"
                className="w-full border rounded-md py-1 px-2 font-[500] text-[23px] text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                value={cluster}
                onChange={(e) => {
                  setCluster(e.target.value);
                }}
              />
            </div>
          </div>
          {/*----- Toggle Live switch -----*/}
          <div className="mt-6 flex gap-4">
            <label
              htmlFor="name"
              className="text-[18px] font-medium text-gray-700"
            >
              Live:
            </label>
            <label className="switch">
              <input
                checked={isLive} // Set the checked attribute based on the isLive state
                onChange={(e) => setIsLive(!isLive)} // Handle checkbox changes
                type="checkbox"
                name=""
                id=""
              />
              <span className="slider round"></span>
            </label>
          </div>

          <div className="text-right font-bold text-lg">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-500"
            >
              Add
            </button>
            <button
              type="button"
              className="ml-2 px-4 py-2 bg-red-400 text-white rounded-md hover:bg-red-500"
              onClick={(e) => setIsAddModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddModal;
