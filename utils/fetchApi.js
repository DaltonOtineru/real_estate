import axios from 'axios';

// export const baseUrl = 'real-estate-usa.p.rapidapi.com';
export const baseUrl = 'https://bayut.p.rapidapi.com';
// /api/v1/properties

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': '9f4b41b5afmsh9f4145ddc2d733cp15736djsn3f74eeb42d44',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    },
  });
  return data;
};

export const options = {
  method: 'GET',
  url: 'https://real-estate-usa.p.rapidapi.com/api/v1/properties',
  params: { postal_code: '92071', limit: '8' },
  headers: {
    'X-RapidAPI-Key': '9f4b41b5afmsh9f4145ddc2d733cp15736djsn3f74eeb42d44',
    'X-RapidAPI-Host': 'real-estate-usa.p.rapidapi.com',
  },
};
