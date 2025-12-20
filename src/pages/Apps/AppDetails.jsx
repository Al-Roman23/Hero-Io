import { useEffect, useMemo, useState } from "react";
import { BiDownload } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { useLoaderData, useParams } from "react-router";
import ReviewChart from "../../utils/ReviewChart";
import NotFound from "../../utils/NotFound";
import frame from "../../utils/Confetti";
import { toast } from "react-toastify";

const AppDetails = () => {
  const app = useLoaderData();
  const { id } = useParams();
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const installedIds = JSON.parse(localStorage.getItem("apps")) || [];
    if (installedIds.includes(Number(id))) setIsInstalled(true);
  }, [id]);

  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = app || {};

  const finalRatings = useMemo(() => {
    if (!ratings) return [];
    return [...ratings].reverse();
  }, [ratings]);

  if (!app) return <NotFound message="App Is Not Found" />;

  const handleInstall = () => {
    const installedIds = JSON.parse(localStorage.getItem("apps")) || [];
    installedIds.push(Number(id));
    localStorage.setItem("apps", JSON.stringify(installedIds));
    setIsInstalled(true);
    toast.success(`Yahoo ⚡!!! ${title} Installed Successfully!`);
    frame(3);
  };

  return (
    <div className="w-11/12 mx-auto space-y-5 py-20">
      <title>{title || "404 - App Not Found"}</title>

      <div className="flex lg:flex-row flex-col gap-5 items-stretch">
        <div className="flex-1">
          <img
            src={image}
            className="rounded-xl shadow-2xl h-full"
            alt={title}
          />
        </div>

        <div className="flex-2">
          <div className="space-y-3 border-b-2 pb-4 border-secondary">
            <h2 className="text-primary text-3xl font-bold">{title}</h2>
            <p>
              Developed by{" "}
              <span className="text-secondary font-medium">{companyName}</span>
            </p>
          </div>

          <div className="py-5 flex justify-between items-center">
            <div className="stats stats-horizontal">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <BiDownload size={48} />
                </div>
                <div className="stat-title">Downloads</div>
                <div className="stat-value">{downloads}</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <FaStar size={48} />
                </div>
                <div className="stat-title">Average Ratings</div>
                <div className="stat-value">{ratingAvg}</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <MdReviews size={48} />
                </div>
                <div className="stat-title">Total Reviews</div>
                <div className="stat-value">{reviews}</div>
              </div>
            </div>
          </div>

          <div>
            {isInstalled ? (
              <button className="btn shadow-xl hover:shadow-2xl btn-xl disabled:opacity-80 bg-success btn-success text-white">
                Installed
              </button>
            ) : (
              <button
                onClick={handleInstall}
                className="btn shadow-xl hover:shadow-2xl btn-xl skeleton bg-success btn-success text-white"
              >
                Install Now ({size}MB)
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div>
        <h2 className="text-4xl font-bold text-primary mb-5">Ratings</h2>
        <ReviewChart ratings={finalRatings} />
      </div>

      <div className="divider"></div>

      <div>
        <h2 className="text-4xl font-bold text-primary mb-5">Description</h2>
        <div className="text-justify space-y-3 opacity-60">
          {description?.split("\n").map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
