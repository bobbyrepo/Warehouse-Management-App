import React, { useState, useEffect } from "react";
import { IoMdAdd } from "react-icons/io";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { searchByFilter } from "../redux/actions/SearchByFilter.js";

function Filter() {
  const data = useSelector((state) => state.warehouseData);
  const filteringData = useSelector((state) => state.searchByFilter);
  const citiesArray = [...new Set(data.map((item) => item.city))]; // cities array from all warehouses for Filter
  const clusterArray = [...new Set(data.map((item) => item.cluster))]; // cluster type array from all warehouses for Filter
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedCluster, setSelectedCluster] = useState([]);
  const [minSpace, setMinSpace] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    if (filteringData.cities.length > 0) {
      setSelectedCities(filteringData.cities);
    }
    if (filteringData.cluster.length > 0) {
      setSelectedCluster(filteringData.cluster);
    }
    if (filteringData.space) {
      setMinSpace(filteringData.space);
    }
  }, []);

  //----- Applying Filters -----
  const applyFilter = (e) => {
    searchByFilter(dispatch, {
      cities: selectedCities,
      cluster: selectedCluster,
      space: minSpace,
    });
  };

  //----- clearing Filters -----
  const clearFilter = (e) => {
    searchByFilter(dispatch, {
      cities: [],
      cluster: [],
      space: 1,
    });
    setSelectedCities([]);
    setSelectedCluster([]);
    setMinSpace(1);
  };

  //----- function to add selected items(city, cluster) for filtering -----
  const toggleSelection = (item, selectedState, setSelectedState) => {
    if (selectedState.includes(item)) {
      setSelectedState(
        selectedState.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      setSelectedState([...selectedState, item]);
    }
  };

  return (
    <main className="w-[20%] ">
      <div className="sticky top-[110px] border-2 border-gray-300 px-6 py-4">
        <header>
          <div className="flex items-center justify-between">
            <h1 className="font-medium text-2xl">Filters</h1>
            <button
              type="submit"
              onClick={clearFilter}
              className="mb-0 px-3 py-1 mb-2 font-medium text-lg border-[2px] border-red-500 rounded hover:bg-red-500 hover:text-white ease-out duration-200 "
            >
              Clear All
            </button>
          </div>
        </header>
        <section>
          <div className="bg-red-500 h-[3px] mt-1"></div>
          <h1 className="font-medium text-xl mt-8">Select City</h1>
          <div className="flex flex-wrap gap-3 mt-2">
            {citiesArray.map((data) => (
              <p
                key={data} // Add a unique key to each city
                className={`px-2 border-[2px] border-red-500 rounded-xl cursor-pointer duration-200 ${
                  selectedCities.includes(data) ? "bg-red-500 text-white" : ""
                }`}
                onClick={() =>
                  toggleSelection(data, selectedCities, setSelectedCities)
                }
              >
                {data}
              </p>
            ))}
          </div>
        </section>
        <section>
          <h1 className="font-medium text-xl mt-8">Space Available</h1>
          <div className="flex items-center gap-2 mt-2">
            <label
              htmlFor="minSpace"
              className="text-[18px] font-medium text-gray-700"
            >
              Min :
            </label>
            <input
              type="number"
              id="minSpace"
              min="1"
              value={minSpace}
              onChange={(e) => {
                // Extract the entered value and convert it to a number
                const newValue = parseFloat(e.target.value);

                // Check if the value is a valid number and greater than or equal to 1
                if (!isNaN(newValue) && newValue >= 1) {
                  setMinSpace(newValue); // Update the state with the valid value
                } else {
                  setMinSpace(1);
                }
              }}
              className="w-[160px] border rounded-md py-2 px-2 text-[20px] text-gray-700 leading-tight focus:outline-none focus:border-red-500"
            />
          </div>
        </section>
        <section>
          <h1 className="font-medium text-xl mt-8">Select Cluster Type</h1>
          <div className="flex flex-wrap gap-3 mt-2">
            {clusterArray.map((data) => (
              <p
                key={data} // Add a unique key to each city
                className={`px-2 border-[2px] border-red-500 rounded-xl cursor-pointer duration-200 ${
                  selectedCluster.includes(data) ? "bg-red-500 text-white" : ""
                }`}
                onClick={() =>
                  toggleSelection(data, selectedCluster, setSelectedCluster)
                }
              >
                {data}
              </p>
            ))}
          </div>
        </section>
        <footer>
          <button
            type="submit"
            onClick={applyFilter}
            className="mt-6 mb-4 w-full mb-0 px-5 py-1 font-medium text-xl border-[2px] border-red-500 rounded hover:bg-red-500 hover:text-white ease-out duration-200 "
          >
            Apply
          </button>
        </footer>
      </div>
    </main>
  );
}

export default Filter;
