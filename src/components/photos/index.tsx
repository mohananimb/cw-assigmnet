import React from "react";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface IProps {
  images: any;
  handleStarred: any;
}
const Photos: React.FC<IProps> = ({ images, handleStarred }) => {
  const navigate = useNavigate();

  const handleFavouriteImage = (link: string) => {
    if (images.favorites.includes(link)) {
      handleStarred({
        type: "REMOVER_FROM_FAVORITE",
        payload: link,
      });
    } else {
      handleStarred({
        type: "ADD_TO_FAVORITE",
        payload: link,
      });
    }
  };

  const handleMyFavorites = () => {
    navigate("/favorites", { state: { favorites: images.favorites } });
  };
  return (
    <>
      <div className="flex flex-col bg-white p-5 mt-5 rounded-sm">
        {images.favorites.length ? (
          <button onClick={handleMyFavorites} className="ml-auto w-fit mb-5">
            My Favorites
          </button>
        ) : null}
        <div className="flex flex-wrap gap-2">
          {images.images.map((img: any) => (
            <div className="relative">
              <img className="h-[200px] w-[200px] rounded-sm" key={img.id} alt={img.slug} src={img.links.download} />
              <FaHeart
                onClick={() => handleFavouriteImage(img.links.download)}
                className="absolute top-1 right-1 cursor-pointer"
                color={images.favorites.includes(img.links.download) ? "red" : "white"}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Photos;
