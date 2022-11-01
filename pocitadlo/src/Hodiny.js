import React, { useEffect, useState } from "react";

function Hodiny() {
  const [hodinyState, setHodinyState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setHodinyState(date.toLocaleTimeString());
    }, 1000);
  }, []);


  return (

    <div style={{ fontSize: "55px", margin: "60px" }}>{hodinyState}</div>

  );
}

export default Hodiny;