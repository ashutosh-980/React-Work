import React from "react";

// React.memo() --> Wrap the Component --> And then Component Re-Render tabhi hoga jab "props" change hoga , nhi toh Re-Render nhi hoga .

const ChildComponent = React.memo((props) => {
  console.log("Child Component got Re-Rendered");
  return (
    <div>
      <button onClick={props.handleClick}>{props.btnName}</button>
    </div>
  );
});

export default ChildComponent;


