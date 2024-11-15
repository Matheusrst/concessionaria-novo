import { NextApiRequest, NextApiResponse } from 'next';

interface Sale {
  id: number;
  vehicleId: string;
  buyerName: string;
  buyerCpf: string;
  saleDate: string;
}

let sales: Sale[] = []; // Array para armazenar as vendas em memória com tipo explícito

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { vehicleId, buyerName, buyerCpf, saleDate } = req.body;

    if (!vehicleId || !buyerName || !buyerCpf || !saleDate) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    const newSale: Sale = {
      id: sales.length + 1,
      vehicleId,
      buyerName,
      buyerCpf,
      saleDate,
    };

    sales.push(newSale); // Adiciona a venda ao array
    res.status(201).json(newSale);
  } else if (req.method === 'GET') {
    res.status(200).json(sales); // Retorna todas as vendas
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
