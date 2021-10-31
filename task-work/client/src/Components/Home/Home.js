import React, { useEffect, useState } from "react";
import Form from "../Form/Form";
import Photos from "../Photos/Photos";
import { useDispatch } from "react-redux";
import { getPhotos } from "../../Actions/photos";
const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-12 order-2 ">
            <Photos currentId={currentId} setCurrentId={setCurrentId} />
          </div>

          <div className="col-md-4 col-12 order-md-2 mt-5">
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
