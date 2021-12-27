import "./PostPreview.css";
import { useState } from "react";
import { BiMap } from "react-icons/bi";

export default function PostPreview() {
  const [rating, setRating] = useState(5);
  return (
    <div className="postPreview">
      {/* This is a temporary placeholder it will be replaced with a 3d slider */}
      <img
        className="postPreview__image"
        src="https://images.unsplash.com/photo-1639059790587-95625e6b764c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="slider"
      />

      <div className="postPreview__details">
        <h1 className="postPreview__details--title">Spacious House</h1>
        <p className="postPreview__details--localization">
          <BiMap /> 25th st, Manouba, Tunis
        </p>

        <div className="postPreview__details--rating">
          {Array(rating)
            .fill()
            .map((star, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>

        <div className="postPreview__details__price">
          <h1 className="postPreview__details__price--value">550 DT</h1>
          <p className="postPreview__details__price--periode">/month</p>
        </div>
      </div>
    </div>
  );
}