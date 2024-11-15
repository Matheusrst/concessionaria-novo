import Image from 'next/image';

// Importando as imagens diretamente
import SeminovosImage from '../public/images/seminovos.png';
import UsadosImage from '../public/images/usados.png';
import HatchbackImage from '../public/images/hatchback.png';
import SedaImage from '../public/images/sedan.png';
import SuvImage from '../public/images/suv.png';

const categories = [
  { name: "Seminovos", img: SeminovosImage },
  { name: "Usados", img: UsadosImage },
  { name: "Hatchback", img: HatchbackImage },
  { name: "Sedã", img: SedaImage },
  { name: "SUV", img: SuvImage },
];

const CategoryCarousel = () => {
  return (
    <div className="category-carousel">
      {categories.map((category, index) => (
        <div key={index} className="category-item">
          <Image src={category.img} alt={category.name} width={100} height={100} className="category-image" />
          <p className="category-name">{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryCarousel;
