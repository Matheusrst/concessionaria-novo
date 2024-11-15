import Image from 'next/image';
import GolImage from '../public/images/gol.png';
import FoxImage from '../public/images/fox.png';
import OnixImage from '../public/images/onix.png';
import Hb20Image from '../public/images/hb20.png';
import EcosportImage from '../public/images/ecosport.png';

const topSellingCars = [
  { name: "Volkswagen Gol", img: GolImage },
  { name: "Volkswagen Fox", img: FoxImage },
  { name: "Chevrolet Onix", img: OnixImage },
  { name: "Hyundai HB20", img: Hb20Image },
  { name: "Ford Ecosport", img: EcosportImage },
];

const TopSellingCars = () => {
  return (
    <div className="top-selling-cars">
      {topSellingCars.map((car, index) => (
        <div key={index} className="car-item">
          <Image 
            src={car.img} 
            alt={car.name} 
            width={200} 
            height={120} 
            className="car-image" 
          />
          <p className="car-name">{car.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TopSellingCars;
