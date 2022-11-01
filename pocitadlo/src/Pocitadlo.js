import React, { useState } from "react";

const Pocitadlo = (props) => {
  const pobchody = props.pobchody;
  const [count, setCount] = useState(0);

  return (
    <div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          {pobchody.map((obchod) => (
            <div className="obchod-nazev" key={obchod.id}>
              <h1>{obchod.title}</h1>
              <div className="my-5">
            <h2>{count}</h2>
            <button
              className="btn btn-success mx-3"
              onClick={() => setCount(count + 1)}
              disabled={count === obchod.limit}
            >
              Příchod
            </button>
            <button
              className="btn btn-danger mx-3"
              onClick={() => setCount(count - 1)}
              disabled={count === 0}
            >
              Odchod
            </button>
            <button
              className="btn btn-secondary mx-3"
              onClick={() => setCount(0)}
              disabled={count === 0}
            >
              Reset
            </button>
            
          </div>
            </div>
          ))}

         
        </div>
      </div>
    </div>
  );
};

export default Pocitadlo;
