import React, {useState, useEffect} from "react";
import './App.css';
import Axios from "axios";
import Item from './components/item';

function App() {
  const [listItens, setListItens] = useState();
  const [sumItens, setSumItens] = useState();

  useEffect(()=>{
    Axios.get("http://localhost:3001/getItens").then((response)=>{
      setListItens(response.data);
    })
  }, []);
  useEffect(()=>{
    Axios.get("http://localhost:3001/getSum").then((response)=>{
      setSumItens(response.data);
    })
  }, []);

  // let sum = 0;
  // listItens.map.forEach(element => {
  //   sum += element.valor;
  // });
  return (
    <div className="App">
      <header className="App-header">
        {typeof listItens !== "undefined" &&
        listItens.map((value) =>{
          return <Item
          key={value.id}
          listItens={listItens}
          setListItens={setListItens}
          name = {value.nome}
          price = {value.valor}
          ></Item>;
        })}

        {typeof sumItens !== "undefined" &&
        sumItens.map((value) =>{
          return <div className="Sum">
            <p>valor total:</p>
            <p>{value.Total}</p>
          </div>
        })}
      </header>
    </div>
  );
}

export default App;
