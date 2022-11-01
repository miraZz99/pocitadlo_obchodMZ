import { useState } from 'react';
import Pocitadlo from './Pocitadlo';
import Hodiny from './Hodiny'

const Obchody = () => {
  const [albert, setAlbert] = useState([
    { title: 'Albert', limit: 40, id: 1,}
  ]);
  const [zara, setZara] = useState([
    { title: 'Zara', limit: 20, id: 2}
  ]);
  const [alza, setAlza] = useState([
    { title: 'Alza', limit: 30, id: 3}
  ]);

  return (
    <div className="obchody" align="center">
      <div className="hodiny">
      <Hodiny />
      <h3> Nyní je v obchodním centru  lidí</h3>
        <div className="Albert">
        <Pocitadlo pobchody={albert} />
        <Pocitadlo pobchody={zara}  />
        <Pocitadlo pobchody={alza}  />
        </div>
      </div>
    </div>
  )
}

export default Obchody;