import { useParams } from "react-router-dom";
import { ITEMS } from "../data/itemData";

function ItemDetails() {

  // const params = useParams();
  // console.log(params);

  const { id } = useParams();
  const item = ITEMS.find(
    (item) => item.id === id
  );
  // console.log(item);

  return (
    <>
      <main>
        <h1>ItemDetails Page</h1>
      </main>
      {/* <h3>{params.id}</h3> */}
      <h2>{item.title}</h2>
      <h3>{item.detail}</h3>
    </>
  );
}

export default ItemDetails;
