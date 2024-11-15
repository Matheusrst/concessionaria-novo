import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="search-bar flex items-center space-x-2 border p-2 rounded">
      <input
        type="text"
        placeholder="Pesquisar carros"
        className="flex-grow p-1 border-none focus:outline-none"
      />
      <button className="text-gray-600 hover:text-gray-800">
        <Search size={20} /> {/* Ícone Search do Lucide */}
      </button>
    </div>
  );
};

export default SearchBar;
