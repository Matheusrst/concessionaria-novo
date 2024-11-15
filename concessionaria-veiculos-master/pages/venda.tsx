import { useRouter } from 'next/router';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/venda.module.css';

const BuyCar = () => {
  const router = useRouter();
  const { id, name, price } = router.query;

  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  const handlePurchase = () => {
    const currentDate = new Date().toLocaleDateString('pt-BR');

    // Recupera compras existentes
    const storedPurchases = localStorage.getItem('purchases');
    const purchases = storedPurchases ? JSON.parse(storedPurchases) : [];

    // Adiciona a nova compra
    purchases.push({ name, price, date: currentDate });
    localStorage.setItem('purchases', JSON.stringify(purchases));

    setPurchaseSuccess(true);

    // Redirecionar após a compra
    setTimeout(() => {
      router.push('/historico');
    }, 2000);
  };

  if (!id || !name || !price) {
    return <p>Carregando...</p>;
  }

  return (
    <div className={styles.container}>
      <Navbar />
      <h1>Comprar Veículo</h1>
      <div className={styles.carDetails}>
        <p><strong>Veículo:</strong> {name}</p>
        <p><strong>Preço:</strong> {price}</p>
      </div>
      {purchaseSuccess ? (
        <p className={styles.successMessage}>Compra realizada com sucesso! Redirecionando...</p>
      ) : (
        <button onClick={handlePurchase} className={styles.buyButton}>
          Confirmar Compra
        </button>
      )}
    </div>
  );
};

export default BuyCar;
