import React, { useState } from "react";
import Alert from "../../../UI/Alert";

export default function CreateItem(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [showSuccessAlert, setSuccessAlert] = useState(false);
  const [showErrorAlert, setErrorAlert] = useState(false);

  const isFormValid = name.trim().length > 0 && price > 0;

  const addItemHandler = async (event) => {
    event.preventDefault();

    const newItem = {
      name,
      price,
      description,
    };

    const response = await fetch(
      "https://food-order-app-react-4cdcc-default-rtdb.firebaseio.com/Items.json",
      {
        method: "POST",
        body: JSON.stringify(newItem),
      }
    );

    if (response.status === 200) {
      setSuccessAlert(true);
    } else {
      setErrorAlert(true);
    }

    setTimeout(() => {
      setSuccessAlert(false);
      setErrorAlert(false);

      setName('');
      setPrice('');
      setDescription('');
      
      props.refreshItems();
    }, 1000);
  };

  return (
    <div className="container mt-2">
      {showSuccessAlert && (
        <Alert classes="alert alert-success">Item created successfully!</Alert>
      )}
      {showErrorAlert && (
        <Alert classes="alert alert-danger">Unable to create item!</Alert>
      )}

      <div className="row">
      <h4>Create Item Form</h4>
        <form className="p-2">
          <div className="form-group">
            <label>Name *</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Price *</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button
            disabled={!isFormValid}
            type="submit"
            className="btn btn-primary mt-2"
            onClick={addItemHandler}
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
}
