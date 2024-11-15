import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const marcas = await prisma.marca.findMany();
      res.status(200).json(marcas);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar as marcas.' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}