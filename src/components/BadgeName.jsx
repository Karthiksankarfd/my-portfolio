import React from "react";

const BadgeName = ({content,color}) => {
  return (
<div className={`${color === "white" ? "text-white" : "text-black"} flex items-center gap-3 border-2 rounded-full px-2 text-lg mb-2 w-fit`}>
  <div className="h-4 w-4 bg-green-500 rounded-full"></div> {content}
</div>
  );
};

export default BadgeName;
