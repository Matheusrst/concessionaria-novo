import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/pages.module.css';  // Importando o arquivo de CSS

const Cadastro = () => {
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [isRegistered, setIsRegistered] = useState(false); // Estado para controlar o redirecionamento
    const router = useRouter();
  
    const handleCadastro = async (e: React.FormEvent) => {
      e.preventDefault();
  
      console.log("Enviando dados para o cadastro:", { cpf, password, name });
  
      const response = await fetch('/api/cadastro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cpf, password, name }),
      });
  
      const data = await response.json();
  
      console.log("Resposta da API:", data);
  
      if (response.ok) {
        setIsRegistered(true); // Define o estado para disparar o redirecionamento
      } else {
        setError(data.message);
      }
    };
  
    // Redireciona quando o cadastro for bem-sucedido
    useEffect(() => {
      if (isRegistered) {
        console.log('Cadastro bem-sucedido, redirecionando...');
        router.push('/');
      }
    }, [isRegistered, router]);  // Executa quando isRegistered mudar
  
    return (
      <div className={styles.container}>
        <h1 className={styles.header}>Cadastro</h1>
        <form onSubmit={handleCadastro}>
          <div className={styles['input-group']}>
            <label htmlFor="name">Nome</label>
            <input 
              type="text" 
              id="name"
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          <div className={styles['input-group']}>
            <label htmlFor="cpf">CPF</label>
            <input 
              type="text" 
              id="cpf"
              value={cpf} 
              onChange={(e) => setCpf(e.target.value)} 
              required 
            />
          </div>
          <div className={styles['input-group']}>
            <label htmlFor="password">Senha</label>
            <input 
              type="password" 
              id="password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          {error && <div className={styles.error}>{error}</div>}
          <button type="submit" className={styles.button}>Cadastrar</button>
        </form>
      </div>
    );
  };
  
  export default Cadastro;
