let login = (userName, password) => {
  if (userName !== "admin" || password !== "radical") {
    console.log('incorect credz');
  } else {
    console.log('Correct credz');
  }
}

export default login;