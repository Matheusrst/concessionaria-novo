import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if  (req.method === 'POST') {
        const { nome, logoUrl } = req.body;

        try {
            const novaMarca = await prisma.marca.create({
                data: {
                    nome,
                    logoUrl,
                },
            });
            res.status(201).json(novaMarca)
        } catch (error) {
            console.error("Erro ao adicionar a marca", error);
            res.status(500).json({ error: 'Erro ao adicionar a marca.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end('Método ${req.method} não permitido');
    }
}