import React, { useState, useEffect } from "react";
import "../CSS/Modal.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { editWarehouseData } from "../redux/actions/warehouseData.js";

function EditModal({ isModalOpen, setIsModalOpen, successNotify, errNotify }) {
  const allWarehouses = useSelector((state) => state.warehouseData);
  const selectedId = useSelector((state) => state.searchByWarehouse.INIT_STATE);

  const selectedWarehouse = allWarehouses.filter(
    (warehouse) => warehouse.id === selectedId
  );
  const [name, setName] = useState(selectedWarehouse[0].name);
  const [city, setCity] = useState(selectedWarehouse[0].city);
  const [space, setSpace] = useState(selectedWarehouse[0].space_available);
  const [type, setType] = useState(selectedWarehouse[0].type);
  const [cluster, setCluster] = useState(selectedWarehouse[0].cluster);
  const [isLive, setIsLive] = useState(selectedWarehouse[0].is_live);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNaN(Number(space))) {
      // Check if 'space' is not a valid number
      errNotify("Space should be a valid number");
    } else {
      editWarehouseData(dispatch, {
        id: selectedWarehouse[0].id,
        name: name,
        city: city,
        space_available: space,
        type: type,
        cluster: cluster,
        is_live: isLive,
      });
      successNotify("Edited Successfully");
      setIsModalOpen(false);
    }
  };

  return (
    <main>
      <div
        className={`fixed inset-0 flex justify-center items-center z-50 ${
          isModalOpen ? "" : "hidden"
        }`}
      >
        <div className="fixed inset-0 bg-gray-600 backdrop-blur-2xl opacity-40"></div>
        <div className="bg-white w-[80%] max-w-screen-md p-4 rounded-lg shadow-lg relative">
          <header>
            <h2 className="text-xl font-semibold mb-1">
              Edit Warehouse Details
            </h2>
            <div className="bg-red-500 h-[3px] mb-4"></div>
          </header>

          <form onSubmit={handleSubmit}>
            <section>
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
            </section>
            <section>
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
                    className="w-full border rounded-md py-1 px-2  font-[500] text-[23px] text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
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
            </section>
            <section>
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
            </section>
            <footer>
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
                  onClick={(e) => {
                    setIsModalOpen(false);
                    setName(selectedWarehouse[0].name);
                    setCity(selectedWarehouse[0].city);
                    setSpace(selectedWarehouse[0].space_available);
                    setType(selectedWarehouse[0].type);
                    setCluster(selectedWarehouse[0].cluster);
                    setIsLive(selectedWarehouse[0].is_live);
                  }}
                >
                  Cancel
                </button>
              </div>
            </footer>
          </form>
        </div>
      </div>
    </main>
  );
}

export default EditModal;
