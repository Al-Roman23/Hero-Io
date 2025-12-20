import { DiVisualstudio } from "react-icons/di";
import { useEffect, useState } from "react";
import appsData from "../../assets/apps.json";
import AppCard from "../../utils/AppCard";

const AllAppsPage = () => {
  const [apps, setApps] = useState([]);
  const [filteredApps, setFilteredApps] = useState([]);
  const [totalApps, setTotalApps] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [sort, setSort] = useState("size");
  const [order, setOrder] = useState("asc");
  const [searchText, setSearchText] = useState("");
  const limit = 10;

  useEffect(() => {
    let data = [...appsData];

    if (searchText) {
      data = data.filter((app) =>
        app.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (sort) {
      data.sort((a, b) => {
        if (order === "asc") return a[sort] - b[sort];
        return b[sort] - a[sort];
      });
    }

    setTotalApps(data.length);
    setTotalPage(Math.ceil(data.length / limit));

    const start = currentPage * limit;
    const end = start + limit;
    setApps(data.slice(start, end));
    setFilteredApps(data);
  }, [currentPage, sort, order, searchText]);

  const handleSelect = (e) => {
    const [sortKey, sortOrder] = e.target.value.split("-");
    setSort(sortKey);
    setOrder(sortOrder);
    setCurrentPage(0);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    setCurrentPage(0);
  };

  return (
    <div>
      <title>All Apps | Hero Apps</title>

      <div className="py-16">
        <h2 className="text-4xl font-bold text-center text-primary flex justify-center gap-3">
          Our All Applications
          <DiVisualstudio size={48} className="text-secondary" />
        </h2>
        <p className="text-center text-gray-400">
          Explore All Apps on the Market developed by us. We code for Millions!
        </p>
      </div>

      <div className="w-11/12 mx-auto flex flex-col-reverse lg:flex-row gap-5 items-start justify-between lg:items-end mt-10">
        <div>
          <h2 className="text-lg underline font-bold">
            ({totalApps}) Apps Found!
          </h2>
        </div>

        <form>
          <label className="input max-w-[300px] w-[300px] input-secondary flex items-center">
            <svg
              className="h-[1em] opacity-50 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </g>
            </svg>
            <input
              onChange={handleSearch}
              type="search"
              placeholder="Search Apps"
              className="w-full"
            />
          </label>
        </form>

        <div>
          <select onChange={handleSelect} className="select bg-white">
            <option selected disabled>
              Sort by
            </option>
            <option value="rating-desc">Ratings : High - Low</option>
            <option value="rating-asc">Ratings : Low - High</option>
            <option value="size-desc">Size : High - Low</option>
            <option value="size-asc">Size : Low - High</option>
            <option value="downloads-desc">Downloads : High - Low</option>
            <option value="downloads-asc">Downloads : Low - High</option>
          </select>
        </div>
      </div>

      <div className="w-11/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-5">
        {apps.length === 0 ? (
          <div className="col-span-full text-center py-10 space-y-10">
            <h2 className="text-6xl font-semibold opacity-60">No Apps Found</h2>
          </div>
        ) : (
          apps.map((app) => <AppCard key={app.id} app={app} />)
        )}
      </div>

      <div className="flex justify-center flex-wrap gap-3 py-10">
        {currentPage > 0 && (
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            className="btn"
          >
            Prev
          </button>
        )}

        {[...Array(totalPage).keys()].map((i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`btn ${i === currentPage ? "btn-primary" : ""}`}
          >
            {i + 1}
          </button>
        ))}

        {currentPage < totalPage - 1 && (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="btn"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default AllAppsPage;
