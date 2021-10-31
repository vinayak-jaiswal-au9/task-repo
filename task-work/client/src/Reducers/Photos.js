import {
  ADD_DATA,
  DELETE_DATA,
  FETCH_DATA,
  UPDATE_DATA,
} from "../ConstantActions/actionTypes";

const reducer = (photos = [], action) => {
  switch (action.type) {
    case FETCH_DATA:
      // console.log(action.payload);
      return action.payload;
    case ADD_DATA:
      return [...photos, action.payload];
    case UPDATE_DATA:
      const sol= photos.map((eachState) => {
        console.log(eachState);
        return eachState._id === action.payload._id
          ? action.payload
          : eachState;
      });
      return sol
    case DELETE_DATA:
      return photos.filter((eachState) => eachState._id !== action.payload);
      
    default:
      return photos;
  }
};
export default reducer;
