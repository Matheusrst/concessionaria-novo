import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// Definir uma interface para o carro, ajustando conforme os dados reais do projeto
interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  city: string;
  km: number;
  fuel: string;
  color: string;
  exchange: string;
  category: string;
  description: string;
  imageUrl: string;
  features: string[];
}

const CarDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [car, setCar] = useState<Car | null>(null);

  useEffect(() => {
    // Função para buscar o carro por ID; ajuste para o real endpoint do projeto
    const fetchCarDetails = async () => {
      try {
        const response = await fetch(`/api/cars/${id}`);
        const data = await response.json();
        setCar(data);
      } catch (error) {
        console.error("Erro ao buscar os detalhes do carro:", error);
      }
    };

    if (id) fetchCarDetails();
  }, [id]);

  if (!car) return <p className="text-center mt-10">Carregando detalhes do carro...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      {/* Título e Imagem do Carro */}
      <h1 className="text-3xl font-bold mb-4">{car.make} {car.model}</h1>
      <img src={car.imageUrl} alt={`${car.make} ${car.model}`} className="w-full h-80 object-cover rounded-md mb-6" />

      {/* Especificações do Carro */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <p><strong>Cidade:</strong> {car.city}</p>
        <p><strong>Ano:</strong> {car.year}</p>
        <p><strong>KM:</strong> {car.km.toLocaleString('pt-BR')} km</p>
        <p><strong>Câmbio:</strong> {car.exchange}</p>
        <p><strong>Categoria:</strong> {car.category}</p>
        <p><strong>Combustível:</strong> {car.fuel}</p>
        <p><strong>Cor:</strong> {car.color}</p>
        <p><strong>Aceita troca:</strong> {car.exchange}</p>
      </div>

      {/* Preço e Botão de Contato */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-bold text-green-600">R$ {car.price.toLocaleString('pt-BR')}</p>
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Entre em Contato
        </button>
      </div>

      {/* Descrição do Carro */}
      <h2 className="text-2xl font-semibold mb-2">Descrição</h2>
      <p className="text-gray-700 mb-6">{car.description}</p>

      {/* Características do Carro */}
      <div className="bg-gray-300 p-4 rounded-md">
        <h3 className="text-lg font-semibold mb-3">Descrição do veículo</h3>
        <ul className="grid grid-cols-2 gap-2 text-sm">
          {car.features.map((feature, index) => (
            <li key={index}>• {feature}</li>
          ))}
        </ul>
      </div>

      {/* Botão de Voltar */}
      <button
        onClick={() => router.back()}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Voltar
      </button>
    </div>
  );
};

export default CarDetails;
