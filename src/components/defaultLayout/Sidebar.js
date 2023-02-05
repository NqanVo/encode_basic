import React from "react";
import { Link, useHref } from "react-router-dom";

const Sidebar = () => {
  let hrefType = useHref().split("/")[1];
  if (!hrefType) {
    hrefType = "ceasar";
  }
  const Types = (hrefType, type) => {
    switch (hrefType) {
      case type:
        return "border-[#BCE29E]/10 bg-[#BCE29E]";
      default:
        return "border-black/10";
    }
  };
  return (
    <nav className="w-full md:w-2/5 xl:w-1/5 flex flex-col gap-4 px-4 xl:px-0">
      <h3 className="font-medium text-xl">Types:</h3>
      <ul className="overflow-x-scroll md:overflow-x-visible flex flex-row md:flex-col gap-4 font-medium text-center capitalize">
        <Link to="/ceasar">
          <li
            className={`${Types(
              hrefType,
              "ceasar"
            )} block py-2 px-4 w-max md:w-full shadow-md border rounded-full`}
          >
            ceasar
          </li>
        </Link>
        <Link to="/single-table-replacement">
          <li
            className={`${Types(
              hrefType,
              "single-table-replacement"
            )} block py-2 px-4 w-max md:w-full shadow-md border rounded-full`}
          >
            Single table replacement
          </li>
        </Link>
        <Link to="/multi-tables-replacement">
          <li
            className={`${Types(
              hrefType,
              "multi-tables-replacement"
            )} block py-2 px-4 w-max md:w-full shadow-md border rounded-full`}
          >
            Multi tables replacement
          </li>
        </Link>
        <Link to="/rc-4">
          <li
            className={`${Types(
              hrefType,
              "rc-4"
            )} block py-2 px-4 w-max md:w-full shadow-md border rounded-full`}
          >
            RC-4
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default React.memo(Sidebar);
