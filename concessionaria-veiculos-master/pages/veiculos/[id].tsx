import { useState, useEffect } from "react";
import { useRouter } from "next/router";

interface Veiculo {
  id: number;
  marca: string;
  modelo: string;
  ano: number;
  preco: number;
}

export default function EditarVeiculo() {
  const router = useRouter();
  const { id } = router.query;

  const [veiculo, setVeiculo] = useState<Veiculo | null>(null);

  useEffect(() => {
    if (id) {
      // Simulação de busca de veículo por ID
      const veiculoFicticio: Veiculo = {
        id: parseInt(id as string),
        marca: "Ford",
        modelo: "Fiesta",
        ano: 2015,
        preco: 40000,
      };
      setVeiculo(veiculoFicticio);
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de atualização de veículo
    console.log("Veículo atualizado:", veiculo);
    router.push("/");
  };

  if (!veiculo) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>Editar Veículo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Marca: </label>
          <input
            type="text"
            value={veiculo.marca}
            onChange={(e) =>
              setVeiculo({ ...veiculo, marca: e.target.value })
            }
          />
        </div>
        <div>
          <label>Modelo: </label>
          <input
            type="text"
            value={veiculo.modelo}
            onChange={(e) =>
              setVeiculo({ ...veiculo, modelo: e.target.value })
            }
          />
        </div>
        <div>
          <label>Ano: </label>
          <input
            type="number"
            value={veiculo.ano}
            onChange={(e) =>
              setVeiculo({ ...veiculo, ano: parseInt(e.target.value) })
            }
          />
        </div>
        <div>
          <label>Preço: </label>
          <input
            type="number"
            value={veiculo.preco}
            onChange={(e) =>
              setVeiculo({ ...veiculo, preco: parseFloat(e.target.value) })
            }
          />
        </div>
        <button type="submit">Atualizar Veículo</button>
      </form>
    </div>
  );
}
