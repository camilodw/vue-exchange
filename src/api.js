const url = "https://api.coincap.io/v2";

function getAssets() {
  return (
    fetch(`${url}/assets?limit=20`)
      //obtengo los datos en formato json
      .then((res) => res.json())
      //obtengo el contenido de data
      .then((res) => res.data)
  );
}
export default {
  getAssets,
};
