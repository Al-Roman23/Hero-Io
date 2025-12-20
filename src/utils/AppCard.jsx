import { FaStar } from "react-icons/fa6";
import { GrDownload } from "react-icons/gr";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  const { image, title, id, ratingAvg, downloads } = app;

  return (
    <Link
      to={`/apps/${id}`}
      className="card shadow-lg cursor-pointer bg-white hover:bg-base-200 hover:-translate-y-2 transition-all duration-200 p-4 gap-4 justify-around"
    >
      <figure className="pb-0">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover rounded-2xl"
        />
      </figure>

      <div>
        <p className="font-semibold text-center">{title}</p>
      </div>

      <div className="flex justify-between flex-wrap">
        <div className="badge badge-soft badge-success">
          <GrDownload /> {downloads}
        </div>
        <div className="badge badge-soft badge-secondary">
          <FaStar /> {ratingAvg}
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
