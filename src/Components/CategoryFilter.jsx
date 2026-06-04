
function CategoryFilter({ selectedCategory, onSelectCategory }) {
  const categories = [
    "All",
    "Shirts",
    "Hoodies",
    "Footwear",
    "Cap",
    "Joggers",
    "Trousers",
  ];

  return (
    <div className="flex flex-col gap-2 text-gray-600 dark:text-white">
      <span>FILTER BY CATEGORY</span>
      <div className="flex flex-wrap gap-2 ">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={` cursor-pointer h-10 px-3 rounded text-sm border transition ${
              selectedCategory === cat
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-700 hover:bg-amber-600 hover:text-white"
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