import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { modeloId, ano, preco, especificacao } = req.body;

    try {
      const novoVeiculo = await prisma.veiculo.create({
        data: {
          modeloId,
          ano,
          preco,
          especificacao,
        },
      });
      res.status(201).json(novoVeiculo);
    } catch (error) {
      console.error("Erro ao adicionar o veículo:", error);
      res.status(500).json({ error: 'Erro ao adicionar o veículo.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
