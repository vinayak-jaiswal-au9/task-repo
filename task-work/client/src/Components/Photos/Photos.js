import React from "react";
import Photo from "./Photo/Photo";
import { useSelector } from "react-redux";

const Photos = ({ currentId, setCurrentId }) => {
  const selcetorPhotos = useSelector((state) => state.Photos);
  console.log(selcetorPhotos);

  return (
    <>
      {!selcetorPhotos ? (
        <h1 className="text-center text-primary">Loading...</h1>
      ) : (
        <div className="row">
          {selcetorPhotos.map(function (ele) {
            return (
              <div className="col-md-6 col-12 mb-2 mt-1" key={ele._id}>
                <Photo
                  eachPhoto={ele}
                  currentId={currentId}
                  setCurrentId={setCurrentId}
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Photos;
