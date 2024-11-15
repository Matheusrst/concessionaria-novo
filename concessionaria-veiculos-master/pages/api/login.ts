import { NextApiRequest, NextApiResponse } from 'next';
import Cookie from 'js-cookie';

// Simulação de um banco de dados
const users = [
  { cpf: '12345678901', name: 'João Silva', password: 'senha123' }, // Exemplo de usuário
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { cpf, password } = req.body;

    // Verifica se o usuário existe e a senha está correta
    const user = users.find(user => user.cpf === cpf && user.password === password);

    if (user) {
      // Se encontrado, cria um cookie com o CPF do usuário
      Cookie.set('userCpf', user.cpf, { expires: 7 }); // Expira em 7 dias
      return res.status(200).json({ message: 'Login bem-sucedido' });
    } else {
      return res.status(401).json({ message: 'Usuário ou senha incorretos' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
