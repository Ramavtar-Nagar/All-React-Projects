import { Link } from "react-router-dom";
import {ITEMS} from "../data/itemData";
function Items() {
  return (
    <>
      <main>
        <h1>Items Page</h1>
      </main>

      {/* <ul>
        <Link to="item1">
          <li>Item-1</li>
        </Link>
        <Link to="item2">
          <li>Item-2</li>
        </Link>
        <Link to="item3">
          <li>Item-3</li>
        </Link>
        <Link to="item3">
          <li>Item-4</li>
        </Link>
      </ul> */}


      <ul>
        {ITEMS.map((item) => (
          <Link to={`/items/${item.id}`}>
            <li>{item.id}</li>
          </Link>
        ))}
      </ul>
    </>
  );
}

export default Items;
