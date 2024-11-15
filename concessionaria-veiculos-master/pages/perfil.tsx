import { FC, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';  // Importando o Link para navegação
import styles from '../styles/perfil.module.css';

const Perfil: FC = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    cpf: '',
    registrationDate: '',
  });
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    // Carregar os dados do perfil e imagem do localStorage
    const storedProfile = JSON.parse(localStorage.getItem('userProfile') || '{}');
    const storedImage = localStorage.getItem('profileImage');
    
    if (storedProfile) {
      setProfileData(storedProfile);
    }
    if (storedImage) {
      setProfileImage(storedImage);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles['profile-container']}>
        <div className={styles['profile-header']}>
          <h1>Meu Perfil</h1>
        </div>

        <div className={styles['profile-info']}>
          <div className={styles['profile-image']}>
            {/* Exibindo a imagem de perfil */}
            <img
              src={profileImage || '/images/default-profile.png'}
              alt="Imagem de Perfil"
              width={150}
              height={150}
            />
          </div>

          <div className={styles['profile-details']}>
            <div>
              <label>Nome:</label>
              <p>{profileData.name}</p>
            </div>
            <div>
              <label>Email:</label>
              <p>{profileData.email}</p>
            </div>
            <div>
              <label>CPF:</label>
              <p>{profileData.cpf}</p>
            </div>
            <div>
              <label>Data de Cadastro:</label>
              <p>{profileData.registrationDate || 'Data não informada'}</p>
            </div>
          </div>
        </div>

        {/* Botão para editar o perfil */}
        <div className={styles['profile-actions']}>
          <Link href="/editProfile">
            <button className={styles['edit-button']}>Editar Perfil</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Perfil;
