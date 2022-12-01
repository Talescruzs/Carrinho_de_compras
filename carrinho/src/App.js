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

  return (
    <div className="App">
      <h1>CARRINHO DA FORTE</h1>
      <table>
        <tr>
            <th>Nomes</th>
            <th>Valores</th>
        </tr>
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
          return <tr className="Sum">
            <td>valor total:</td>
            <td>{value.Total}</td>
          </tr>
        })}
      </table>
    </div>
  );
}

export default App;
