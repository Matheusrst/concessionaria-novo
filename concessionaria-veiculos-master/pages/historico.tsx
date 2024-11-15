import { FC, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';  // Importe o componente Navbar
import styles from '../styles/historico.module.css';  // Importação do CSS para a página de Histórico

interface Purchase {
  name: string;
  price: string;
  date: string;
}

const Historico: FC = () => {
  const [purchases, setPurchases] = useState<Purchase[]>([]);

  useEffect(() => {
    // Recupera as compras armazenadas no localStorage
    const storedPurchases = localStorage.getItem('purchases');
    if (storedPurchases) {
      setPurchases(JSON.parse(storedPurchases));
    }
  }, []);

  return (
    <>
      {/* Adicionando o Navbar */}
      <Navbar />

      <div className={styles['historico-container']}>
        <div className={styles['historico-header']}>
          <h1>Histórico de Compras</h1>
        </div>

        <div className={styles['historico-list']}>
          {purchases.length > 0 ? (
            purchases.map((purchase, index) => (
              <div key={index} className={styles['historico-item']}>
                <h3>Compra {index + 1} - {purchase.date}</h3>
                <p>Carro: {purchase.name}</p>
                <p>Preço: {purchase.price}</p>
                <p>Status: Finalizado</p>
              </div>
            ))
          ) : (
            <p>Você ainda não realizou nenhuma compra.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Historico;
