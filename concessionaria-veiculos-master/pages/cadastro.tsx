import { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import styles from '../styles/cadastro.module.css';

const Cadastro = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cpf: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Armazenando os dados no localStorage
    localStorage.setItem('userProfile', JSON.stringify(formData));

    // Redirecionando para a página de perfil
    router.push('/perfil');
  };

  return (
    <>
      <Navbar />
      <div className={styles['form-container']}>
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles['form-group']}>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="cpf">CPF:</label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className={styles['submit-button']}>
            Cadastrar
          </button>
        </form>
      </div>
    </>
  );
};

export default Cadastro;
