import { useState } from "react";
export default function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  const onSubmitForm = (e) => {
    e.preventDefault();

    const isUsernameValid = validateUserName(userName);
    const isPasswordValid = validatePassword(password);

    if (!isPasswordValid || !isUsernameValid) {
      alert("alguno de los datos ingresados no son correctos");
      console.log("datos cargados correctamente");
    } else {
      alert(`Bienvenido: ${userName}`);
      console.log("datos cargados incorrectamente");
    }
  };

  return (
    <div className="App">
      <h3>Iniciar Sesión</h3>
      <form onSubmit={onSubmitForm}>
        {}
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={userName}
          onChange={onChangeUserName}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChangePassword}
        />
        {}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

const validateUserName = (userName) => {
  const withoutSpaces = userName.trim();
  if (withoutSpaces.length > 2) {
    return true;
  } else {
    return false;
  }
};

const validatePassword = (password) => {
  const withoutSpaces = password.trim();
  const passwordArray = withoutSpaces.split("");
  const hasNumber = passwordArray.some((character) => {
    if (isNaN(character)) {
      return false;
    } else {
      return true;
    }
  });

  if (withoutSpaces.length > 5 && hasNumber) {
    return true;
  } else {
    return false;
  }
};
