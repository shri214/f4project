import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/action/actionCreator";
import { details } from "../redux/action/detailsCreate";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const Home = () => {
  const { data, loading, error } = useSelector((state) => state.data);
  //   console.log(data, loading, error);
  const navigation = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  if (loading) {
    return <Spinner />;
  }
  //   console.log(data);
  if (error) {
    <h1>{error}</h1>;
  }

  function gettingInfo(val) {
    dispatch(details(val));
    console.log("passing value is ", val);
    navigation("/details");
  }

  return (
    <div className="container">
      {data.map((val) => (
        <div key={val.id} className="box" onClick={() => gettingInfo(val)}>
          <img
            src={`https://picsum.photos/200?random=${val.id}`}
            alt={`image ${val.id}`}
          />
          <p>User Id: {val.id}</p>
          <p className="title">Title:{val.title}</p>
          <p className="des">Body:{val.body}</p>
          <p className="read" onClick={() => gettingInfo(val)}>
            Read more ....
          </p>
        </div>
      ))}
    </div>
  );
};

export default Home;
