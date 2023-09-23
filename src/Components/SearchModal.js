import React from "react";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { searchByWarehouse } from "../redux/actions/searchByWarehouse";
import { useDispatch } from "react-redux";

function SearchModal({
  isSearchModalOpen,
  setIsSearchModalOpen,
  searchedData,
}) {
  const dispatch = useDispatch();

  return (
    <main>
      <section>
        <div className="absolute w-full">
          {isSearchModalOpen &&
            searchedData.map((data) => (
              <Link key={data.id} to="/details">
                <div
                  onClick={(e) => {
                    searchByWarehouse(dispatch, data.id);
                  }}
                  className="bg-gray-100 hover:bg-red-500 hover:text-white grid grid-cols-2 px-5 py-1 duration-200 ease-out"
                >
                  <h2 className="text-lg font-[400]">{data.name}</h2>
                  <div className="flex justify-between items-center">
                    <h2>
                      <strong className="font-[500]">Available Space</strong> :{" "}
                      {data.space_available}
                    </h2>
                    {data.is_live && (
                      <div className="px-2 text-md font-[600] text-white rounded-lg bg-green-400">
                        Live
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          {isSearchModalOpen && searchedData.length <= 0 && (
            <div className="bg-gray-100 grid grid-cols-2 px-5 py-1">
              <h2 className="text-lg font-[500]">No Matches Found</h2>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default SearchModal;
