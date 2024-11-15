import { NextApiRequest, NextApiResponse } from "next";

let veiculos = [
  { id: 1, marca: "Ford", modelo: "Fiesta", ano: 2015, preco: 40000 },
  { id: 2, marca: "Chevrolet", modelo: "Onix", ano: 2020, preco: 60000 },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(veiculos);
  } else if (req.method === "POST") {
    const novoVeiculo = req.body;
    veiculos.push({ ...novoVeiculo, id: veiculos.length + 1 });
    res.status(201).json(novoVeiculo);
  }
}
