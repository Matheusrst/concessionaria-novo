import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Car {
  id: number;
  name: string;
  price: string;
  img: string;
}

interface CarListProps {
  cars: Car[];
  onDelete: (id: number) => void;  // Função para excluir um carro
}

const CarList: FC<CarListProps> = ({ cars, onDelete }) => {
  return (
    <div className="recommended-cars">
      <div className="car-list">
        {cars.length > 0 ? (
          cars.map((car) => (
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
                {/* Botão de compra */}
                <Link 
                  href={{
                    pathname: '/compra',
                    query: { id: car.id, name: car.name, price: car.price },
                  }}
                >
                  <button className="buy-button">Comprar</button>
                </Link>
                {/* Botão de exclusão */}
                <button 
                  onClick={() => onDelete(car.id)} 
                  className="delete-button"
                >
                  Excluir
                </button>
              </div>
            </div>
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default CarList;
