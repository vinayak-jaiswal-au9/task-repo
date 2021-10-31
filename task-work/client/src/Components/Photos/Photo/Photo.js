import React from "react";
import { useDispatch } from "react-redux";
import { deletePhoto } from "../../../Actions/photos";
import moment from "moment";
const Photo = ({
  eachPhoto: { name, createdAt, title, selectedImage, _id },
  setCurrentId,
  eachPhoto,
  // currentId,
  // eachPhoto,
}) => {
  const dispatch = useDispatch();
  // console.log(eachPhoto);
  // console.log(_id);
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <>
      <div
        className="card mt-2 text-info border-info"
        style={{ width: "100%" }}
      >
        <img
          className="card-img-top"
          src={selectedImage}
          alt="Cardcap"
          style={{ maxHeight: "15rem" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>

          <h6 className="card-text">
            Posted By:-
            <span className="badge badge-dark">{name}</span>
          </h6>
          {user?.result?._id === eachPhoto?.creator && (
            <button
              className="btn btn-outline-danger btn-block p-2"
              onClick={() => dispatch(deletePhoto(_id))}
            >
              Delete
            </button>
          )}

          {user?.result?._id === eachPhoto?.creator && (
            <button
              className="btn btn-outline-warning btn-block p-2"
              onClick={() => setCurrentId(_id)}
            >
              Update
            </button>
          )}
          <hr />
          <small className="text-muted">
            Posted on{" "}
            <span className="badge badge-info">
              {moment(createdAt).format("MM/DD/ YY")}
            </span>
          </small>
        </div>
      </div>
    </>
  );
};

export default Photo;
