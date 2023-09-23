import React, { useState, useMemo } from "react";
import EditModal from "../Components/EditModal.js";
import { useSelector } from "react-redux";

// for notification
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Details() {
  let img = `https://source.unsplash.com/1600x900/?warehouse`;
  const allWarehouses = useSelector((state) => state.warehouseData);
  const selectedId = useSelector((state) => state.searchByWarehouse.INIT_STATE);

  const selectedWarehouse = allWarehouses.filter(
    (warehouse) => warehouse.id === selectedId
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  //----------- notification -------------
  const successNotify = (val) => {
    toast.success(val, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const errNotify = (val) => {
    toast.error(val, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <main>
      <section>
        <div className="flex gap-10  w-[80%] mx-auto mt-[60px]">
          <div
            className="bg-div w-[300px] h-[381px]"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
          <div className="w-[1000px]">
            <div className="flex flex-col gap-4 text-2xl  ">
              <h2 className="font-[500] text-3xl mb-2">
                {selectedWarehouse[0].name}
              </h2>
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="font-[500]">Status :</h2>
                  {selectedWarehouse[0].is_live == true ? (
                    <button className="px-4 py-1 font-[500] text-2xl text-white bg-green-500 rounded-2xl">
                      Live
                    </button>
                  ) : (
                    <button className="px-4 py-1 font-[500] text-2xl text-white bg-red-500 rounded-2xl">
                      Not Live
                    </button>
                  )}
                </div>
              </div>
              <h2>
                <strong className="font-[500]">Location</strong> :{" "}
                {selectedWarehouse[0].city}
              </h2>
              <h2>
                <strong className="font-[500]">Type</strong> :{" "}
                {selectedWarehouse[0].type}
              </h2>
              <h2>
                <strong className="font-[500]">Cluster</strong> :{" "}
                {selectedWarehouse[0].cluster}
              </h2>
              <h2>
                <strong className="font-[500]">Available Space</strong> :{" "}
                {selectedWarehouse[0].space_available}
              </h2>
              {/*------ edit button ------*/}
              <button
                className="w-[180px] mt-4 py-2 font-medium text-[23px] border-[2.5px] border-red-500 rounded-xl hover:bg-red-500 hover:text-white ease-out duration-200"
                onClick={(e) => {
                  setIsModalOpen(true);
                }}
              >
                Edit Details
              </button>
              <EditModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                successNotify={successNotify}
                errNotify={errNotify}
              />
            </div>
          </div>
          <ToastContainer />
        </div>
      </section>
    </main>
  );
}

export default Details;
