import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [products, setProducts] = useState([
    {
     code: 10,
      name: "Smart TV Led 50 Semp",
     description:
       "SK8300 4K HDR Android Wi-Fi 3 HDMI 2 USB Controle Remoto com atalhos Chromecast Integrado",
     price: 2299.99,
     discount: 190.99,
   },
   {
     code: 11,
     name: "Smartphone Samsung Galaxy A72 128GB",
     description:
       "4G Wi-Fi Tela 6.7 Dual Chip 6GB RAM Câmera Quádrupla + Selfie 32MP - Preto",
     price: 1988.4,
     discount: 87.89,
   },
   {
     code: 12,
     name: "Smartwatch Samsung Galaxy Watch Active",
     description:
       "4O Galaxy Watch Active é o smartwatch ideal para quem tem um estilo de vida ativo e saudável. Ele é leve, confortável e monitora diariamente suas atividades físicas, e os comportamentos de nível de stress e sono",
     price: 678.6,
     discount: 110.19,
   },
]);
  const [carrinho, setCarrinho] = useState([])

  const [codigo, setCodigo] = useState(0)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [discount, setDiscount] = useState(0)

  const addProd = () => {
    const newProd = { code: codigo, name: name, description: description, price: price, discount: discount }
    setProducts([...products, newProd])
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div classname='carrinho' >
          <h2>Carrinho</h2>
            <p>Valor total: {carrinho.reduce((acc, cur) => { return  acc + (cur.price - cur.discount)}, 0)}</p>
            <p>Valor economizado: {carrinho.reduce((acc, cur) => { return  acc + cur.discount}, 0)}</p>
        </div>
        <div className='formulario' >
          <h2>Cadastrar produtos:</h2>
          <input onChange={e => setCodigo(Number(e.target.value))} placeholder='Código do produto'/>
          <input onChange={e => setName(e.target.value)} placeholder='Nome do produto'/>
          <input onChange={e => setDescription(e.target.value)} placeholder='Descrição do produto'/>
          <input onChange={e => setPrice(Number(e.target.value))} placeholder='Preço do produto'/>
          <input onChange={e => setDiscount(Number(e.target.value))} placeholder='Desconto do produto'/>
          <button onClick={addProd}>cadastrar</button>
        </div>
        <div className='lista' >
          {
            products.map(item => <li key={item.code}>
              <p>Nome: {item.name}</p>
              <p>Descrição: {item.description}</p>
              <p>Preço: {item.price}</p>
              <p>Desconto: {item.discount}</p>
              <button onClick={() => setCarrinho([...carrinho, item])}>Adicionar no carrinho</button>
            </li>)
          }
        </div>
      </header>
    </div>
  );
}

export default App;
