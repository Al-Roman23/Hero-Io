import { useEffect, useState } from "react";
import { GrInstall } from "react-icons/gr";
import { useLoaderData } from "react-router";
import InstallCard from "../../utils/InstallCard";
import { toast } from "react-toastify";

const MyInstallation = () => {
  const allApps = useLoaderData();
  const [myAppsIds, setMyAppsIds] = useState(
    JSON.parse(localStorage.getItem("apps")) || []
  );
  const [myApps, setMyApps] = useState([]);

  useEffect(() => {
    if (!Array.isArray(allApps)) return;
    const apps = myAppsIds
      .map((id) => allApps.find((app) => app.id === id))
      .filter(Boolean);
    setMyApps(apps);
  }, [allApps, myAppsIds]);

  const handleSort = (order) => {
    const sorted = [...myApps].sort((a, b) =>
      order === "asc" ? a.size - b.size : b.size - a.size
    );
    setMyApps(sorted);
  };

  const onUninstall = (id, title) => {
    const remaining = myApps.filter((app) => app.id !== id);
    setMyApps(remaining);
    const remainingIds = remaining.map((app) => app.id);
    localStorage.setItem("apps", JSON.stringify(remainingIds));
    setMyAppsIds(remainingIds);
    toast(`🗑️ ${title} un-installed from your Device!`);
  };

  return (
    <div className="px-5 lg:w-11/12 mx-auto py-10">
      <title>My Installations</title>

      <div>
        <h2 className="text-4xl font-bold text-center text-primary flex justify-center gap-3">
          Your Installed Apps
          <GrInstall size={48} className="text-secondary" />
        </h2>
        <p className="text-center text-gray-400">
          Explore all apps you installed from our platform.
        </p>
      </div>

      <div className="flex justify-between mt-10 sticky">
        <h2 className="text-lg underline text-secondary font-medium">
          {myApps.length} Apps Found
        </h2>
        <div>
          <select
            onChange={(e) => handleSort(e.target.value)}
            className="select bg-white"
          >
            <option selected disabled>
              Sort By Size
            </option>
            <option value="asc">Low - High</option>
            <option value="desc">High - Low</option>
          </select>
        </div>
      </div>

      <div className="divider"></div>

      <div className="grid grid-cols-1 gap-5">
        {myApps.map((app) => (
          <InstallCard key={app.id} app={app} onUninstall={onUninstall} />
        ))}
      </div>
    </div>
  );
};

export default MyInstallation;
