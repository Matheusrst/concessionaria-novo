import { useState } from 'react';
import { useRouter } from 'next/router';

const AddCar = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [img, setImg] = useState('');
  const router = useRouter();

  const handleAddCar = () => {
    const newCar = {
      id: new Date().getTime(),  // Gerando um id único baseado no timestamp
      name,
      price,
      img,
    };

    // Salvando no localStorage
    const storedCars = JSON.parse(localStorage.getItem('cars') || '[]');
    storedCars.push(newCar);
    localStorage.setItem('cars', JSON.stringify(storedCars));

    // Redirecionando para a página principal
    router.push('/');
  };

  return (
    <div>
      <h1>Adicionar Carro</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Nome:
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Nome do Carro" 
          />
        </label>
        <label>
          Preço:
          <input 
            type="text" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            placeholder="Preço do Carro" 
          />
        </label>
        <label>
          Imagem (URL):
          <input 
            type="text" 
            value={img} 
            onChange={(e) => setImg(e.target.value)} 
            placeholder="URL da Imagem" 
          />
        </label>
        <button type="button" onClick={handleAddCar}>Adicionar</button>
      </form>
    </div>
  );
};

export default AddCar;
