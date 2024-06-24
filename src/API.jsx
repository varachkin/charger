import axios from "axios";

// const serverIP = "http://0.0.0.0:6006"; 
const serverIP = "https://tardis.test.spaco.cloud/api/"

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxODYwMDYxNSwianRpIjoiNjIwMGVlODUtM2Q3NC00YjFkLWI5NmQtNDMwY2ExMDhlNWZiIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IiIsIm5iZiI6MTcxODYwMDYxNSwiZXhwIjoxNzIwNDAwNjE1LCJhdWQiOiJhbmRyemVqQHZlbmRvcm9ib3RpY3MuY29tIiwiY2xpZW50X2lkIjoyNywic2NvcGUiOiJQQjAxIn0.H8rpavkyliArvQjuPGWdwyUhsJBLk4rXLoQ0knZVNoI';


export const getRequest = (id) => {
  return axios
  .get(serverIP + `/v1/RFID/validation-RFID-card?card_number=${id}`)
  .then(function (response) {
    return response;
  })
  .catch(function (error) {
    return error;
  });
}


export const postRequest = (serial) => {
  return axios
  .post(serverIP + `/Transaction/`, {status: 'ok', serial})
  .then(response => {
    console.log('/qr',response)
    return response;
  })
  .catch(error => {
    console.log('/payment/start', error)
    return error;
  });
}


export const getStations = (id) => {
  return axios
  .get(serverIP + `v1/stations/${id}`, { 
    headers: {
      'Access-Control-Allow-Origin': 'Bearer ' + token,
      'accept': '*/*',
    } 
  })
  .then(function (response) {
    return response;
  })
  .catch(function (error) {
    return error;
  });
}
