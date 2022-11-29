import { useState, useContext } from "react";
import "./profile.css";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { FiSettings } from "react-icons/fi";
import avatar from "../../assets/avatar.png";
import { AuthContext } from "../../contexts/auth";

export default function Profile() {
  const { user, signOut } = useContext(AuthContext);
  const [nome, setNome] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);

  return (
    <div>
      <Header />
      <div className="content">
        <Title name="Meu Perfil">
          <FiSettings size={25} />
        </Title>
        <div className="container">
          <form className="form-container">
            <label className="label-avatar">
              <span>
                <fiUpload color="fff" size={25} />
              </span>
              <input type="file" accept="image/*" />
              <br />
              {avatarUrl === null ? (
                <img
                  src={avatar}
                  width="250"
                  height="250"
                  atlt="Foto de perfil do usuario"
                />
              ) : (
                <img
                  src={avatarUrl}
                  width="250"
                  height="250"
                  atlt="Foto de perfil do usuario"
                />
              )}
            </label>
            <label>Nome</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <label>Email</label>
            <input type="text" value={email} diseble={true} />
            <button type="submit">Salvar</button>
          </form>
          <div className="container">
            <button className="logout-btn" onClick={() => signOut()}>
              Sair
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
