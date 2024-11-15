import Image from 'next/image';

// Definindo o array com os caminhos das imagens e os nomes das marcas
const brands = [
  { name: 'Honda', img: '/icons/honda.png' },
  { name: 'Volkswagen', img: '/icons/volkswagen.png' },
  { name: 'Ford', img: '/icons/ford.png' },
  { name: 'Chevrolet', img: '/icons/chevrolet.png' },
  { name: 'Fiat', img: '/icons/fiat.png' },
  { name: 'Nissan', img: '/icons/nissan.png' },
  { name: 'Toyota', img: '/icons/toyota.png' },
];

const BrandList = () => {
  return (
    <div className="brand-list">
      {brands.map((brand, index) => (
        <div key={index} className="brand-item">
          <Image
            src={brand.img}
            alt={brand.name}
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>
      ))}
    </div>
  );
};

export default BrandList;
