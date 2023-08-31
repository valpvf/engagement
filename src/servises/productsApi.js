import axios from 'axios';

const baseUrl =
  'https://script.google.com/macros/s/AKfycbyxlJ7YtF4uiKRYsaX7Nyn-ckOwpD0JxBXl2iRoGErPLnhbfWisqEtgtRUzfhJViSQJ/exec';

axios.defaults.baseURL = baseUrl;
const params = {
  user_content_key:
    'mvzyGmSX5pI4InC7bb12Zb1sMk-pL9V5h_NVWR2TGG4jZjEkzRRmvfXgj-5_q_awpeE3pKktwq3EwpTPltv9bqSmC0WvVeM5m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPZeeK5gCg2ZLA5xY_bt69ylP6EoTGqvP9ffFV40UnczmU0ddFX0clJovTEw3iurfZuGdyZET9AjmRpe7SKlWks4-TjRvL9cxA',
  lib: 'Mh-ov8Z7pxaeIZrJ0HHhuCctsyLOaM_gI',
};

export const getDataApi = async () => {
  const res = await axios.get('', { params });
  return res.data;
};

let products = [];

async function fetchProducts() {
  try {
    const response = await getDataApi();
    products = response.products;
  } catch (error) {
    console.log(error);
  }
}
fetchProducts();
export function getProducts() {
  return products;
}
