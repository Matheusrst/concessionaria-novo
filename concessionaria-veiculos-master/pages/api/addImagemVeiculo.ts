import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { veiculoId, url, descricao } = req.body;

    try {
      const novaImagem = await prisma.imagemVeiculo.create({
        data: {
          veiculoId,
          url,
          descricao,
        },
      });
      res.status(201).json(novaImagem);
    } catch (error) {
      console.error("Erro ao adicionar a imagem:", error);
      res.status(500).json({ error: 'Erro ao adicionar a imagem.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
