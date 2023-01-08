import React, { useEffect, useState } from "react";
import Spinner from "../../UI/Spinner";
import CreateItem from "./CreateItem/CreateItem";
import Item from "./Item";

export default function Items() {
  const [showForm, setShowForm] = useState(false);
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getItems = () => {
    setLoading(true);
    setItems([]);

    fetch(
      "https://food-order-app-react-4cdcc-default-rtdb.firebaseio.com/Items.json"
    )
      .then((respone) => {
        return respone.json();
      })
      .then((data) => {
        for (const [key, value] of Object.entries(data)) {
          setItems((prevState) => {
            return [
              ...prevState,
              {
                id: key,
                name: value.name,
                price: value.price,
                description: value.description,
              },
            ];
          });

          setLoading(false);
        }
      });
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="container">
      <div className="card mt-2">
        <div className="card-body">
          <div className="row">
            <button
              className="btn btn-primary mt-2"
              onClick={() => {
                setShowForm((prevState) => !prevState);
              }}
            >
              Create Item
            </button>
            {showForm && <CreateItem refreshItems={getItems}></CreateItem>}
          </div>
        </div>
      </div>
      {isLoading && <Spinner></Spinner>}
      <div className="mt-2">
        {items.map((i) => {
          return <Item key={i.id} item={i}></Item>;
        })}
      </div>
    </div>
  );
}
