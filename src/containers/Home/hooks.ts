import { useEffect, useReducer, useState } from "react";
import { photoReducer } from "../../reducers/photo-grid";

export const useHome = () => {
  const [inputVal, setInputVal] = useState("'");

  const [state, dispatch] = useReducer(photoReducer, { images: [], favorites: [] });

  const [currentBGImg, SetCurrentBGImage] = useState(
    "https://unsplash.com/photos/E2XW7BvfRQg/download?ixid=M3w1NTc2NzV8MHwxfGFsbHw0fHx8fHx8Mnx8MTcwNjI1MzA3Nnw"
  );

  useEffect(() => {
    const fetchImage = () => {
      fetch(`https://api.unsplash.com/photos/?client_id=fa5Y6OZU9comBaFRB4RpokFp6cSF-H_Tm1SAyUsn2VI`)
        .then((res) => res.json())
        .then((res) => {
          const index = Math.floor(Math.random() * 10);

          SetCurrentBGImage(res[index].links.download);
          return;
        });
    };

    fetchImage();
  }, []);

  useEffect(() => {
    if (inputVal) {
      const fetchImage = () => {
        fetch(`https://api.unsplash.com//search/photos/?client_id=fa5Y6OZU9comBaFRB4RpokFp6cSF-H_Tm1SAyUsn2VI&query=${inputVal}`)
          .then((res) => res.json())
          .then((res) => {
            dispatch({
              type: "SET_IMAGE",
              payload: res.results,
            });
          });
      };

      fetchImage();
    }
  }, [inputVal]);

  const handleChange = (val: string) => {
    setInputVal(val);
  };

  return { handleChange, inputVal, state, dispatch, currentBGImg };
};
