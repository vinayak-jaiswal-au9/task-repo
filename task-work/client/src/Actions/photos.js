import * as api from "../api";
import {
  ADD_DATA,
  DELETE_DATA,
  FETCH_DATA,
  UPDATE_DATA,
} from "../ConstantActions/actionTypes";
//Action
export const getPhotos = () => async (dispatch) => {
  try {
    const { data } = await api.fetchData();
    dispatch({
      type: FETCH_DATA,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPhoto = (photoData) => async (dispatch) => {
  try {
    const { data } = await api.createData(photoData);
    dispatch({ type: ADD_DATA, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePhoto = (id, updateData) => async (dispatch) => {
  try {
    const { data } = await api.updateData(id, updateData);
    // console.log(data);
    dispatch({
      type: UPDATE_DATA,
      payload: data,
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const deletePhoto = (id) => async (dispatch) => {
  try {
    await api.deleteData(id);
    dispatch({
      type: DELETE_DATA,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};


