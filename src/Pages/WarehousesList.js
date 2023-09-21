import React from "react";
import Filter from "../Components/Filter";
import List from "../Components/List";

function WarehousesList() {
  return (
    <div className="flex justify-center gap-10 mt-[40px]">
      <Filter />
      <List />
    </div>
  );
}

export default WarehousesList;
