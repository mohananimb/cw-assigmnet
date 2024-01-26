export const photoReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return { ...state, favorites: [...state.favorites, action.payload] };

    case "REMOVER_FROM_FAVORITE":
      return { ...state, favorites: state.favorites.filter((link: string) => link !== action.payload) };

    case "SET_IMAGE":
      return { ...state, images: action.payload };
    default:
      break;
  }
};
