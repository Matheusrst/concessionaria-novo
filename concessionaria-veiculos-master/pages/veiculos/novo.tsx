// pages/veiculos/novo.tsx
import { useState } from "react";
import { useRouter } from "next/router";

export default function NovoVeiculo() {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState(2021);
  const [preco, setPreco] = useState(0);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de cadastro
    const novoVeiculo = { marca, modelo, ano, preco };
    console.log("Veículo cadastrado:", novoVeiculo);
    router.push("/");
  };

  return (
    <div>
      <h1>Adicionar Novo Veículo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Marca: </label>
          <input
            type="text"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
          />
        </div>
        <div>
          <label>Modelo: </label>
          <input
            type="text"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
          />
        </div>
        <div>
          <label>Ano: </label>
          <input
            type="number"
            value={ano}
            onChange={(e) => setAno(parseInt(e.target.value))}
          />
        </div>
        <div>
          <label>Preço: </label>
          <input
            type="number"
            value={preco}
            onChange={(e) => setPreco(parseFloat(e.target.value))}
          />
        </div>
        <button type="submit">Cadastrar Veículo</button>
      </form>
    </div>
  );
}
