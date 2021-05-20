import React from "react";

function Alert({ alert }) {
    console.log(`alert`, alert)
  return (
    <>
      {alert.show ? (
        <div className={`alert alert-${alert.type}`}>{alert.text}</div>
      ) : null}
    </>
  );
}

export default Alert;
