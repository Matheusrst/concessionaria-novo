import { useState } from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

// Importe as imagens diretamente
import CivicImage from '../public/images/civic.png';
import CorollaImage from '../public/images/corolla.png';
import JettaImage from '../public/images/jetta.png';
import BydImage from '../public/images/byd.png';
import AudiA5Image from '../public/images/audi.png';

type Car = {
  id: number;
  name: string;
  price: string;
  img: string | StaticImageData; // Permitir tanto string quanto StaticImageData
};

const RecommendedCars = () => {
  // Lista de carros recomendados, já adicionados
  const [recommendedCars, setRecommendedCars] = useState<Car[]>([
    { id: 1, name: "Honda Civic", price: "R$ 108.900", img: CivicImage },
    { id: 2, name: "Toyota Corolla", price: "R$ 198.900", img: CorollaImage },
    { id: 3, name: "Volkswagen Jetta", price: "R$ 228.490", img: JettaImage },
    { id: 4, name: "BYD King", price: "R$ 187.800", img: BydImage },
    { id: 5, name: "Audi A5", price: "R$ 359.990", img: AudiA5Image },
  ]);

  // Função para excluir um carro da lista
  const deleteCar = (id: number) => {
    const updatedCars = recommendedCars.filter((car) => car.id !== id);
    setRecommendedCars(updatedCars);
  };

  return (
    <div className="recommended-cars">
      {recommendedCars.length > 0 ? (
        recommendedCars.map((car) => (
          <div key={car.id} className="recommended-car-item">
            <Image 
              src={car.img} 
              alt={car.name} 
              width={200} 
              height={120} 
              className="car-image" 
            />
            <div className="car-info">
              <h3 className="car-name">{car.name}</h3>
              <p className="car-price">{car.price}</p>
              <Link
                href={{
                  pathname: '/venda',
                  query: {
                    id: car.id,
                    name: car.name,
                    price: car.price,
                  },
                }}
                passHref
              >
                <button className="view-more-button">
                  Comprar
                </button>
              </Link>

              {/* Botão para excluir o carro */}
              <button
                onClick={() => deleteCar(car.id)} 
                className="delete-button"
              >
                Excluir
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Não há carros disponíveis.</p>
      )}
    </div>
  );
};

export default RecommendedCars;
