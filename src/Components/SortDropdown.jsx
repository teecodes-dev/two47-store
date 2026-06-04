// import React from 'react'

// const SortDropdown = () => {
//   return (
//     <div>
//       <div>
//         <h2 className="text-gray-600 mb-3">SORT BY PRICE</h2>
//         <select className="border border-gray-500 rounded py-1 px-4">
//           <option value="Default">Default</option>
//           <option value=" decreasing">Low ($23.40-$82.50)</option>
//           <option value="middle">Medium ($90.00-$97.00)</option>
//           <option value="ascending">High ($102.00-$120.00)</option>
//         </select>
//       </div>
//     </div>
//   );
// }

// export default SortDropdown

function SortDropdown({ sortOrder, onSortChange }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-sm text-gray-600 dark:text-white font-medium">SORT BY PRICE</h2>

      <select
        value={sortOrder}
        onChange={(e) => onSortChange(e.target.value)}
        className="border border-gray-300 dark:text-black rounded px-3 py-2 bg-white text-sm focus:outline-none"
      >
        <option value="default">Default</option>
        <option value="low">Low → High</option>
        <option value="high">High → Low</option>
      </select>
    </div>
  );
}

export default SortDropdown;