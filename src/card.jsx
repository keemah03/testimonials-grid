import React from "react";

function Card({
  name,
  style,
  image,
  textcolor = "text-black",
  color,
  text,
  subtext,
}) {
  return (
    <div className={style + " shadow-xl p-5 rounded-md "}>
      <div className="flex gap-2 items-center">
        <img src={image} alt="" className="rounded-full h-8" />
        <div>
          <p className={color}>{name}</p>
          <p className={textcolor + " text-xs"}>Verified Graduate </p>
        </div>
      </div>
      <p className={color + " text-xl mb-4"}>{subtext}</p>

      <p className={textcolor + " text-xs"}>{text}</p>
    </div>
  );
}

export default Card;
