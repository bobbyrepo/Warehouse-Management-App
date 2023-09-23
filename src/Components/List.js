import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import SearchModal from "./SearchModal.js";
import AddModal from "./AddModal.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { searchByWarehouse } from "../redux/actions/searchByWarehouse.js";

// for notification
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function List() {
  let img = `https://source.unsplash.com/1600x900/?warehouse`;
  const data = useSelector((state) => state.warehouseData);
  const filteringData = useSelector((state) => state.searchByFilter);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [warehousesData, setWarehousesData] = useState(data); // for display List
  const [search, setSearch] = useState(""); // for search bar input
  const [searchedData, setSearchedData] = useState(""); // for search bar warehouses list
  const dispatch = useDispatch();

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

  //------- updating data from the store -------
  useEffect(() => {
    setWarehousesData(data);
    const filteredData = data.filter((warehouse) => {
      const spaceValid = warehouse.space_available >= filteringData.space;
      const cityValid =
        filteringData.cities.length === 0 ||
        filteringData.cities.includes(warehouse.city);
      const clusterValid =
        filteringData.cluster.length === 0 ||
        filteringData.cluster.includes(warehouse.cluster);

      return spaceValid && cityValid && clusterValid;
    });
    setWarehousesData(filteredData);
  }, [filteringData, data]);

  //------- display search modal when search-bar contains something ------
  useEffect(() => {
    search > 0 ? setIsSearchModalOpen(true) : setIsSearchModalOpen(false);
  }, [search]);

  //------- function to filter searched matching data -------
  const filtered = data.filter((data) =>
    data.name.toLowerCase().includes(search.toLowerCase())
  );

  //-------- setting filtered data for searched modal-------
  useEffect(() => {
    if (search.length > 0) {
      setIsSearchModalOpen(true);
    }
    setSearchedData(filtered);
  }, [search]);

  //--------- setting filtered data for warehouselist--------
  const handleSearch = () => {
    setWarehousesData(filtered);
    setIsSearchModalOpen(false);
  };

  return (
    <main className="flex flex-col gap-5 w-[65%] mb-40">
      <header>
        <div className=" flex items-top gap-3">
          <div className="relative w-full">
            {/*------ Search Input -------*/}
            <div className="relative flex w-full">
              <input
                className="w-full h-[40px] px-3 font-[500] text-xl border-2 border-gray-300 focus:outline-gray-300"
                type="text"
                value={search}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSearch();
                  }
                }}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div
                onClick={handleSearch}
                className="absolute flex items-center h-full end-0 px-2 text-3xl text-white  bg-red-500"
              >
                <FiSearch />
              </div>
            </div>
            {/*------ serachModal ------*/}
            <SearchModal
              search={search}
              searchedData={searchedData}
              isSearchModalOpen={isSearchModalOpen}
              setIsSearchModalOpen={setIsSearchModalOpen}
            />
          </div>

          <button
            onClick={(e) => setIsAddModalOpen(true)}
            className="flex items-center mb-0 px-5 py-[4px] font-medium text-xl border-[2px] border-red-500 rounded hover:bg-red-500 hover:text-white ease-out duration-200 "
          >
            <span className="text-xl hover:text-white">
              <IoMdAdd />
            </span>
            Add
          </button>
          <AddModal
            isAddModalOpen={isAddModalOpen}
            setIsAddModalOpen={setIsAddModalOpen}
            successNotify={successNotify}
            errNotify={errNotify}
          />
        </div>
      </header>
      <section>
        {/* ------- mapping all warehouses --------- */}
        {warehousesData.map((data) => (
          <div
            key={data.id}
            className="flex border-2 border-gray-300 hover:border-red-500 duration-300"
          >
            <div
              className="bg-div w-[160px]"
              style={{ backgroundImage: `url(${img})` }}
            ></div>

            <div className="px-6 py-4">
              <div className="flex gap-[10px]">
                <h1 className="font-medium text-xl mb-2">{data.name}</h1>
                {data.is_live && (
                  <div className="h-fit px-2 text-md font-[600] text-white rounded-lg bg-green-400">
                    Live
                  </div>
                )}
              </div>
              <div className="grid grid-cols-2 gap-x-8 text-lg">
                {/* <div className="w-[450px] flex flex-col gap-2"> */}
                <h2>
                  <strong className="font-[500]">Location</strong> : {data.city}
                </h2>
                <h2>
                  <strong className="font-[500]">Available Space</strong> :{" "}
                  {data.space_available}
                </h2>
                {/* </div> */}

                {/* <div className="flex flex-col gap-2"> */}
                <h2>
                  <strong className="font-[500]">Type</strong> : {data.type}
                </h2>
                <h2>
                  <strong className="font-[500]">Cluster</strong> :{" "}
                  {data.cluster}
                </h2>
                {/* </div> */}
              </div>
              {/*------ navigate to the warehouse details page ------*/}
              <Link to="/details">
                <button
                  onClick={(e) => {
                    searchByWarehouse(dispatch, data.id);
                  }}
                  className="mt-3 mb-0 px-5 py-1 font-medium text-xl border-[2px] border-red-500 rounded hover:bg-red-500 hover:text-white ease-out duration-200 "
                >
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </section>
      <section>
        {warehousesData.length <= 0 && (
          <div className="w-full  text-center mt-14 text-3xl font-[500]">
            No Match Found
          </div>
        )}
        <ToastContainer />
      </section>
    </main>
  );
}

export default List;
