import axios from 'axios';

async function searchCep(req, res) {
  try {
    const { cep } = req.body;

    const reqExternalAPI = axios.get(
      `https://ws.apicep.com/cep.json?code=${cep}`
    );
    reqExternalAPI.then((resp) => res.status(200).send(resp.data));
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export { searchCep };
