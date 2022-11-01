import { useState } from 'react';
import Pocitadlo from './Pocitadlo';
import Hodiny from './Hodiny'


const Obchody = () => {
  const [albert, setAlbert] = useState([
    { title: 'Albert', limit: 40, quantity: 0, id: 1,}
  ]);
  const [zara, setZara] = useState([
    { title: 'Zara', limit: 20, quantity: 0, id: 2}
  ]);
  const [alza, setAlza] = useState([
    { title: 'Alza', limit: 30, quantity: 0, id: 3}
  ]);
  
  return (
    <div className="obchody" align="center">
      <div className="hodiny">
      <Hodiny />
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