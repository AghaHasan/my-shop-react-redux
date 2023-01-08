import React from "react";

export default function Spinner() {
  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-md-5"></div>
        <div className="col-md-2">
          <div className="spinner-border text-primary" role="status"></div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
}
