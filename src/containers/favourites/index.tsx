import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Favorites: React.FC = () => {
  const navigate = useNavigate();
  const { state: { favorites = [] } = {} } = useLocation();

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-1 flex-wrap p-5">
        {favorites.map((img: string) => (
          <img key={img} className="h-[200px] w-[200px] rounded-sm" alt={img} src={img} />
        ))}
      </div>

      <button onClick={() => navigate(-1)} className="w-fit">
        Go Home
      </button>
    </div>
  );
};

export default Favorites;
