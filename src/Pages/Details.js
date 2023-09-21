import React, { useState } from "react";
import EditModal from "../Components/EditModal.js";
import data from "../warehousesData.js";
const singleData = data[0];

function Details() {
  let img = `https://source.unsplash.com/1600x900/?warehouse`;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex gap-10  w-[80%] mx-auto mt-[60px]">
      <div
        className="bg-div w-[300px] h-[381px]"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="w-[1000px]">
        <div className="flex flex-col gap-4 text-2xl  ">
          <h2 className="font-[500] text-3xl mb-2">{singleData.name}</h2>
          <div>
            <div className="flex items-center gap-3">
              <h2 className="font-[500]">Status :</h2>
              {singleData.is_live == true ? (
                <button className="px-5 py-2 font-[500] text-3xl text-white bg-green-500 rounded-2xl">
                  Live
                </button>
              ) : (
                <button className="px-3 py-2 font-[500] text-xl text-white bg-red-500 rounded-2xl">
                  Not Live
                </button>
              )}
            </div>
          </div>
          <h2>
            <strong className="font-[500]">Location</strong> : {singleData.city}
          </h2>
          <h2>
            <strong className="font-[500]">Type</strong> : {singleData.type}
          </h2>
          <h2>
            <strong className="font-[500]">Cluster</strong> :{" "}
            {singleData.cluster}
          </h2>
          <h2>
            <strong className="font-[500]">Available Space</strong> :{" "}
            {singleData.space_available}
          </h2>
          {/*------ edit button ------*/}
          <button
            className="w-[180px] mt-4 py-2 font-medium text-[23px] border-[2.5px] border-red-500 rounded-xl hover:bg-red-500 hover:text-white ease-out duration-200"
            onClick={(e) => {
              setIsModalOpen(true);
              console.log("clicked");
            }}
          >
            Edit Details
          </button>
          <EditModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </div>
      </div>
    </div>
  );
}

export default Details;
