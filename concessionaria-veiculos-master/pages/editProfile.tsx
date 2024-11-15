import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Navbar from '../components/Navbar'; // Importe o componente Navbar
import styles from '../styles/perfil.module.css'; // Importação do CSS

const EditProfile: FC = () => {
  const router = useRouter(); // Para redirecionamento
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    cpf: '',
    registrationDate: '',
  });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Carregar os dados do perfil e a imagem armazenada no localStorage
  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem('userProfile') || '{}');
    const storedImage = localStorage.getItem('profileImage');

    if (storedProfile) {
      setProfileData(storedProfile);
    }
    if (storedImage) {
      setSelectedImage(storedImage);
    }
  }, []);

  // Função para lidar com a alteração dos dados de perfil
  const handleProfileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Função para lidar com o upload de imagem
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.result) {
          const base64Image = reader.result as string;
          setSelectedImage(base64Image);
          localStorage.setItem('profileImage', base64Image); // Salva no localStorage
        }
      };

      reader.readAsDataURL(file); // Converte o arquivo para uma URL base64
    }
  };

  // Função para salvar as alterações no localStorage
  const handleSaveChanges = () => {
    localStorage.setItem('userProfile', JSON.stringify(profileData)); // Salva as alterações no localStorage
    router.push('/perfil'); // Redireciona para a página de perfil
  };

  return (
    <>
      {/* Adicionando o Navbar */}
      <Navbar />

      <div className={styles['profile-container']}>
        <div className={styles['profile-header']}>
          <h1>Editar Perfil</h1>
          <Link href="/perfil">
            <button>Voltar para o Perfil</button>
          </Link>
        </div>

        <div className={styles['profile-info']}>
          <div className={styles['profile-image']}>
            <img
              src={selectedImage || '/images/default-profile.png'}
              alt="Imagem de Perfil"
              width={150}
              height={150}
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className={styles['upload-input']}
            />
          </div>

          <div className={styles['profile-details']}>
            <div>
              <label>Nome:</label>
              <input
                type="text"
                name="name"
                value={profileData.name}
                onChange={handleProfileChange}
                className={styles['profile-input']}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleProfileChange}
                className={styles['profile-input']}
              />
            </div>
            <div>
              <label>CPF:</label>
              <input
                type="text"
                name="cpf"
                value={profileData.cpf}
                onChange={handleProfileChange}
                className={styles['profile-input']}
              />
            </div>
            <div>
              <label>Data de Cadastro:</label>
              <input
                type="text"
                name="registrationDate"
                value={profileData.registrationDate}
                onChange={handleProfileChange}
                className={styles['profile-input']}
              />
            </div>
          </div>
        </div>

        <div className={styles['profile-actions']}>
          <button onClick={handleSaveChanges} className={styles['save-button']}>
            Salvar Alterações
          </button>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
