import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=vegas,newyork,sanfrancisco"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://media.cnn.com/api/v1/images/stellar/prod/180313182911-01-las-vegas-travel-strip.jpg?q=w_3418,h_2556,x_0,y_0,c_fill"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Vegas</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://www.travelandleisure.com/thmb/91pb8LbDAUwUN_11wATYjx5oF8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>New York</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://www.sftravel.com/sites/default/files/styles/horizontal_3_2/public/2022-08/golden-gate-bridge-bay-sunset.jpg.webp?itok=VaL3AjW2"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>San Francisco</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
