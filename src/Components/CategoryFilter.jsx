// import React from "react";
// import SortDropdown from "./SortDropdown";

// const CategoryFilter = () => {
//   return (
//     <section className="flex justify-between">
//       <div>
//         <h2 className="text-gray-600 mb-3">FILTER BY CATEGORY</h2>
//         <div className="space-x-3">
//           <button className="border border-gray-500 rounded-2xl py-1 px-4 bg-orange-600">
//             All
//           </button>
//           <button className="border border-gray-500 rounded-2xl py-1 px-4 bg-orange-500">
//             Men
//           </button>
//           <button className="border border-gray-500 rounded-2xl py-1 px-4 bg-orange-400">
//             Women
//           </button>
//           <button className="border border-gray-500 rounded-2xl py-1 px-4 bg-orange-300">
//             Accessories
//           </button>
//           <button className="border border-gray-500 rounded-2xl py-1 px-4 bg-orange-200">
//             Shoes
//           </button>
//           <button className="border border-gray-500 rounded-2xl py-1 px-4 bg-orange-100">
//             Bags
//           </button>
//         </div>
//       </div>
//       <div>
//         <SortDropdown/>
//       </div>
//     </section>
//   );
// };

// export default CategoryFilter;

function CategoryFilter({ selectedCategory, onSelectCategory }) {
  const categories = [
    "All",
    "Electronics",
    "Fashion",
    "Furniture",
    "Beauty",
    "Sports",
    "Accessories",
  ];

  return (
    <div className="flex flex-col gap-2 text-gray-600">
      <span>FILTER BY CATEGORY</span>
      <div className="flex flex-wrap gap-2 ">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={` cursor-pointer h-10 px-3 rounded text-sm border transition ${
              selectedCategory === cat
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-700 hover:bg-orange-600 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;