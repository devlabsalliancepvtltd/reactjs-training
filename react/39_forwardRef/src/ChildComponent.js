import React from "react";

const ChildComponent = (props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
};

export default React.forwardRef(ChildComponent);
