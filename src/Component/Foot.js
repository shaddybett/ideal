import React from "react";
import "./Style.css";

export default function Foot({ data }) {
  if (!Array.isArray(data)) {
   return null;
  }
  return (
    <div id="foot">
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <p>Description:{item.name}</p>
            <p>Date:{item.category}</p>
            <p>Amount</p>
          </div>
        ))}
      </div>
      <label>Description </label>
      <label>Date </label>
      <label>Amount </label>
    </div>
  );
}
