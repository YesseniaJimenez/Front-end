import { useState } from "react";
export default function App() {
  const [userName, setUserName] = useState("");
  const [edad, setEdad] = useState("");
  const [pokemonFav, setPokemonFav] = useState("");

  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangeEdad = (e) => setEdad(e.target.value);
  const onChangePokemon = (e) => setPokemonFav(e.target.value);

  const onSubmitForm = (e) => {
    e.preventDefault();
    setShow(true);
    /* const isUsernameValid = validateUserName(userName);
    const isPasswordValid = validatePassword(password);

    if (!isPasswordValid || !isUsernameValid) {
      alert("alguno de los datos ingresados no son correctos");
      console.log("datos cargados correctamente");
    } else {
      alert(`Bienvenido: ${userName}`);
      console.log("datos cargados incorrectamente");
    }*/
  };

  return (
    <div className="App">
      <h3>eres</h3>
      <form onSubmit={onSubmitForm}>
        {}
        <input
          type="text"
          placeholder="Nombre"
          value={Name}
          onChange={onChangeUserName}
        />

        <input
          type="text"
          placeholder="Edad"
          value={edad}
          onChange={onChangeEdad}
        />

        <input
          type="text"
          placeholder="Pkemon favorito"
          value={pokemonFav}
          onChange={onChangePokemon}
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

{
  show ? (
    <>
      <h3>Tu nombre es: {Name}</h3>
      <h4>tienes: {edad}</h4>
      <h3>tu pokemon favorito es:{pokemonFav}</h3>
    </>
  ) : null;
}
{
  show && (
    <>
      <h3>Tu nombre es: {persona.name}</h3>
      <h4>Cumplis años en: {persona.bday}</h4>
    </>
  );
}

/*const validatePassword = (password) => {
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
};*/
