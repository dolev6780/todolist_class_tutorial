import React from "react";

export default function ToolTip({toolTip, text}) {
  return (
    <div>
      <div
        className={`${
          toolTip ? "" : "hidden"
        } absolute -top-[1.7rem] bg-neutral-800 px-2 rounded-md `}
      >
        <p>{text}</p>
      </div>
    </div>
  );
}
