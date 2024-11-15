import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import RecommendedCars from '../components/RecommendedCars';
import CarList from '../components/CarList';  // Importe o componente CarList
import Link from 'next/link';  
import '../styles/global.css';

const Home = () => {
  const [cars, setCars] = useState<any[]>([]);

  // Carregar carros do localStorage quando o componente for montado
  useEffect(() => {
    const storedCars = JSON.parse(localStorage.getItem('cars') || '[]');
    setCars(storedCars);
  }, []);

  // Função para excluir um carro
  const deleteCar = (id: number) => {
    // Filtra os carros para remover o carro com o ID especificado
    const updatedCars = cars.filter((car) => car.id !== id);
    setCars(updatedCars);

    // Atualiza o localStorage com a nova lista de carros
    localStorage.setItem('cars', JSON.stringify(updatedCars));
  };

  return (
    <div>
      <Navbar />
      <main>
        <SearchBar />
        <RecommendedCars />
        <CarList cars={cars} onDelete={deleteCar} />  {/* Passando a função onDelete */}

        {/* Adicionando o botão de navegação para a página de adicionar carros */}
        <div className="add-car-button-container">
          <Link href="/addCar">
            <button className="add-car-button">Adicionar Carro</button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
