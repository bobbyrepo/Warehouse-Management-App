import React, { useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import data from "../warehousesData.js";

function List() {
  let img = `https://source.unsplash.com/1600x900/?warehouse`;
  return (
    <div className="flex flex-col gap-5 w-[65%] mb-40">
      {/*------ Search Input -------*/}
      <div className="relative flex">
        <input
          className="w-full h-[40px] px-3 font-[500] text-xl border-2 border-gray-300 focus:outline-gray-300"
          type="text"
        />
        <div className="absolute flex items-center h-full end-0 px-2 text-3xl text-white  bg-red-500">
          <FiSearch />
        </div>
      </div>
      {data.map((data) => (
        //------- mapping all warehouses ---------
        <div className="flex border-2 border-gray-300">
          <div
            className="bg-div w-[160px]"
            style={{ backgroundImage: `url(${img})` }}
          ></div>

          <div className="px-6 py-4">
            <div className="flex gap-[10px] items-center">
              <h1 className="font-medium text-xl mb-2">{data.name}</h1>
              {data.is_live && (
                <div className="px-2 text-md font-[600] text-white rounded-lg bg-green-400">
                  Live
                </div>
              )}
            </div>
            <div className="flex text-lg">
              <div className="w-[450px] flex flex-col gap-2">
                <h2>
                  <strong className="font-[500]">Location</strong> : {data.city}
                </h2>
                <h2>
                  <strong className="font-[500]">Available Space</strong> :{" "}
                  {data.space_available}
                </h2>
              </div>

              <div className="flex flex-col gap-2">
                <h2>
                  <strong className="font-[500]">Type</strong> : {data.type}
                </h2>
                <h2>
                  <strong className="font-[500]">Cluster</strong> :{" "}
                  {data.cluster}
                </h2>
              </div>
            </div>
            {/*------ navigate to the warehouse details page ------*/}
            <button className="mt-3 mb-0 px-5 py-1 font-medium text-xl border-[2px] border-red-400 rounded-xl hover:bg-red-400 hover:text-white ease-out duration-200 ">
              Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
