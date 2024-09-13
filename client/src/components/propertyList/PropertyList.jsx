import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");

  const images = [
    "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
    "https://g5-assets-cld-res.cloudinary.com/image/upload/q_auto,f_auto,c_fill,g_center,h_667,w_1000/v1575582535/g5/g5-c-iqbdxrhy-acco-management-co-client/g5-cl-57b5veikk-parkwood/uploads/14Parkwood062living_xl0svo.jpg",
    "https://images.unsplash.com/photo-1617859047452-8510bcf207fd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzb3J0c3xlbnwwfHwwfHx8MA%3D%3D",
    "https://t4.ftcdn.net/jpg/03/70/64/43/360_F_370644357_MDF4UXLAXTyyi2OyuK66tWW9cA2f8svL.jpg",
    "https://t4.ftcdn.net/jpg/05/75/66/45/360_F_575664510_p3VZPFfdqZtzCAjfJ4kJuU5OUYR4NsSx.jpg"
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
