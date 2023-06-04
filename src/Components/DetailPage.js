import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const DetailPage = () => {
  const { data } = useSelector((state) => state.detail);
  const navigation = useNavigate();

  console.log(data);
  return (
    <div className="details-list">
      <h1 className="heading">Details Page For Post With ID {data.id}</h1>
      {data && (
        <div key={data.id} className="box-container">
          <div>
            <img
              src={`https://picsum.photos/200?random=${data.id}`}
              alt="image"
            />
          </div>
          <div>
            <div>
              <strong>User Id:</strong> {data.id}
            </div>
            <div>
              <strong>Title: </strong>
              {data.title}
            </div>
            <div>
              <strong>Body: </strong>
              {data.body}
            </div>
          </div>
        </div>
      )}
      <button onClick={() => navigation("/")} className="back">
        back
      </button>
    </div>
  );
};

export default DetailPage;
