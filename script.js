const obtenerValorInput = () => {
  let inputTexto = document.getElementById('input_personaje');
  let valor = inputTexto.value;
  peticionApi(valor);
};

const peticionApi = (input_personaje) => {
  const ts = '1725767060779';
  const apiKey = 'ae966bcdd75120c86d04c7e5e2925702';
  const hash = 'e764c37caa9529a793681307602328db';
  const baseUrl = 'https://gateway.marvel.com';
  const endpoint = `/v1/public/characters?ts=${ts}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${input_personaje}`;
  const url = `${baseUrl}${endpoint}`;
  console.log(url);

  axios
    .get(url)
    .then((res) => printData(res.data))
    .catch((err) => console.log(err));
};

const printData = (data) => {
  let respuesta = document.getElementById('show-info');
  const rutaImg = `${data.data.results[0].thumbnail.path}.${data.data.results[0].thumbnail.extension}`;
  respuesta.innerHTML = `
    <h2>${data.data.results[0].name}</h2>
    <img  id="imagePj" src="${rutaImg}">
    <label>Description: <h1>${data.data.results[0].description}</h1></label>
   
  `;
};
