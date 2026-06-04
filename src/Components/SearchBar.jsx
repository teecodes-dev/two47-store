// import React from "react";
// import { FaSearch } from "react-icons/fa";
// import { MdClose } from "react-icons/md";

// function SearchBar({ searchQuery, onSearchChange }) {
//   return (
//     <div className="search-bar">
//       <div className="search-input-wrapper">
//         <span className="search-icon">🔍</span>
//         <input
//           type="text"
//           placeholder="Search products, categories..."
//           value={searchQuery}
//           onChange={(e) => onSearchChange(e.target.value)}
//           className="search-input"
//         />
//         {searchQuery && (
//           <button
//             className="clear-btn"
//             onClick={() => onSearchChange("")}
//             title="clear search"
//           >✖️</button>
//         )}
//       </div>
//     </div>

//     <div className="border  border-gray-500 flex items-center bg-red gap-5 my-5 rounded-full py-2 px-4 w-full">
//         <FaSearch/>
//         <input
//           type="text"
//           placeholder="Search products, categories..."
//           value={searchQuery}
//           onChange={(e) => onSearchChange(e.target.value)}
//           className="border-0 outline-none focus:outline-none focus:ring-0 w-full "
//         />
//         {searchQuery && (
//           <button
//             className="clear-btn"
//             onClick={() => onSearchChange("")}
//             title="clear search"
//           >
//             <MdClose/>
//           </button>
//         )}

//     </div>
//   );
// }

// export default SearchBar;

import { FaSearch } from "react-icons/fa";
import { MdClose } from "react-icons/md";

function SearchBar({ searchQuery, onSearchChange }) {
  return (
    <div className="flex items-center gap-3 border border-gray-300 rounded-full px-4 py-2 w-full `md:w-125` shadow-sm bg-white">
      <FaSearch className="text-gray-500" />

      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full outline-none dark:text-black"
      />

      {searchQuery && (
        <MdClose
          className="cursor-pointer text-black hover:text-black"
          onClick={() => onSearchChange("")}
        />
      )}
    </div>
  );
}

export default SearchBar;