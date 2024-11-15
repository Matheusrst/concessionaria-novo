import { NextApiRequest, NextApiResponse } from 'next';

const users: { cpf: string; name: string; password: string }[] = [];  // Banco de dados fictício

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { cpf, password, name } = req.body;

    console.log("Dados recebidos:", { cpf, password, name });

    // Verificação simples para cadastro
    if (users.find((user) => user.cpf === cpf)) {
      return res.status(400).json({ message: 'Usuário já cadastrado!' });
    }

    // Adiciona o novo usuário
    users.push({ cpf, password, name });
    return res.status(201).json({ message: 'Cadastro realizado com sucesso' });
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
