import { NextApiRequest, NextApiResponse } from 'next';
import Cookies from 'js-cookie';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Remover o cookie de autenticação
    Cookies.remove('userCpf', { path: '/' });

    res.status(200).json({ message: 'Logout realizado com sucesso' });
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
