import React, { useState, useEffect } from "react";
import Filebase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPhoto, updatePhoto } from "../../Actions/photos";

const Form = ({ currentId, setCurrentId }) => {
  const [photoData, setPhotoData] = useState({
    title: "",
    selectedImage: "",
  });
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  const photo = useSelector((state) =>
    // console.log(state.Photos)
    currentId ? state.Photos.find((p) => p._id === currentId) : null
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(
        updatePhoto(currentId, { ...photoData, name: user?.result?.name })
      );
      clear();
    } else {
      dispatch(createPhoto({ ...photoData, name: user?.result?.name }));
      clear();
    }
  };
  useEffect(() => {
    // console.log(photo);
    if (photo) {
      setPhotoData(photo);
      // console.log(photo);
    }
  }, [photo]);

  const clear = () => {
    setCurrentId(null);
    setPhotoData({
      title: "",
      selectedImage: "",
    });
  };

  if (!user?.result?.name) {
    return (
      <div className="container">
        <h3 className="text-center">"Please Login To Post a Photo"</h3>
      </div>
    );
  }
  // console.log(currentId);
  return (
    <>
      <form className="mt-2 mb-3" onSubmit={handleSubmit}>
        <h5
          className={
            currentId
              ? "display-3 badge-warning text-center"
              : "display-3 badge-primary text-center"
          }
        >
          {currentId ? "Edit" : "Create"}
        </h5>
        <div className="form-group">
          <label htmlFor="imageTitle">Title</label>
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Image Title"
            id="imageTitle"
            value={photoData.title}
            onChange={(e) =>
              setPhotoData({
                ...photoData,
                title: e.target.value,
              })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="imageUpload">Enter Image File</label>
          <hr />
          <Filebase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPhotoData({
                ...photoData,
                selectedImage: base64,
              })
            }
          />
        </div>
        <button type="submit" className="btn btn-primary mb-2 btn-block">
          Submit
        </button>
        <input
          type="reset"
          className="btn btn-danger btn-block"
          value="Clear All"
          onClick={clear}
        />
      </form>
    </>
  );
};

export default Form;
