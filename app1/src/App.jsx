import { useState } from "react"

function App() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");

  const [messagem, setMessage] = useState("message");

  function verficaCampos(e){
    e.preventDefault()

    if(nome == ""){
      setMessage("Digite o nome")
    }

    if(telefone == ""){
      setMessage("Digite o Telefone")
    }

    if(endereco == ""){
      setMessage("Digite o Endereço")
    }
  }

  return (
    <div>
      <header className="nav">
        <img className="logo" src="/logo.png" alt="" />
        <img src="/shop-car.png" alt="" />
      </header>

      <div className="ctx-prinpal">
        <form className="form-1">
          <h1>Pedidos</h1>

          <div className="item-input">
            <label>Nome</label>
            <input type="text" placeholder="nome" 
            value={nome} onChange={ e => setNome(e.target.value) } />
          </div>

          <div className="item-input">
            <label>Telefone</label>
            <input type="text" placeholder="telefone"
            value={telefone} onChange={ e => setTelefone(e.target.value) } />
          </div>

          <div className="item-input">
            <label>Endereço</label>
            <input type="text" placeholder="endereço" value={endereco}
            onChange={ e => setEndereco(e.target.value)}
            />
          </div>

          <button onClick={verficaCampos}>Enviar</button>

          <h3> { messagem } </h3>

        </form>

        <img src="/pizza.png" className="img-principal" alt="" />
      </div>

    </div>
  )
}

export default App
