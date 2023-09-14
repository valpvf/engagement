// const url =
//   'https://script.google.com/macros/s/AKfycbyxlJ7YtF4uiKRYsaX7Nyn-ckOwpD0JxBXl2iRoGErPLnhbfWisqEtgtRUzfhJViSQJ/exec';
// const queryParams = {
//   user_content_key:
//     'mvzyGmSX5pI4InC7bb12Zb1sMk-pL9V5h_NVWR2TGG4jZjEkzRRmvfXgj-5_q_awpeE3pKktwq3EwpTPltv9bqSmC0WvVeM5m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPZeeK5gCg2ZLA5xY_bt69ylP6EoTGqvP9ffFV40UnczmU0ddFX0clJovTEw3iurfZuGdyZET9AjmRpe7SKlWks4-TjRvL9cxA',
//   lib: 'Mh-ov8Z7pxaeIZrJ0HHhuCctsyLOaM_gI',
// };

// // Собираем URL с параметрами
// const queryString = new URLSearchParams(queryParams).toString();
// const fullURL = `${url}?${queryString}`;

// // Используем fullURL для отправки fetch-запроса
// export async function fetchProducts() {
//   fetch(fullURL)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Ошибка при запросе данных');
//       }
//       return response.json();
//     })
//     .then(data => {
//       products = data;
//       console.log('products', data);
//       return products;
//     })
//     .catch(error => {
//       console.error('Произошла ошибка:', error);
//     });
// }
// // В этом коде мы создаем объект queryParams, который содержит все параметры запроса. Затем мы используем URLSearchParams для преобразования этого объекта в строку параметров запроса и конкатенируем ее с основным URL.

// // Затем мы отправляем запрос с помощью fetch, обрабатываем успешное разрешение и ошибки, как показано в предыдущем ответе.

// // async function fetchProducts() {
// //   try {
// //     const response = await getDataApi();
// //     products = response.products;
// //     getProducts();
// //   } catch (error) {
// //     console.log(error);
// //   }
// // }
// console.log('fetchProducts()', fetchProducts());

import axios from 'axios';

const baseUrl =
  'https://script.google.com/macros/s/AKfycbyjtK8aeeVRpPDIvaO6kFScMxCO9aF8V21TUyWJ7DAmgi6rYRTd1nXj774CeE-iURAv/exec';

https: axios.defaults.baseURL = baseUrl;
const params = {
  // authorization:
  //   'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YzY3ZmUwOTk0ODA1NDMwMWNiNzVjNCIsImlhdCI6MTY5MDc5OTA4OCwiZXhwIjoxNjkwODg1NDg4fQ.icq2DWGjZjkzqmKkQYSiGOyZGFgCd95SjmT8JkID5QE',
  user_content_key:
    'mvzyGmSX5pI4InC7bb12Zb1sMk-pL9V5h_NVWR2TGG4jZjEkzRRmvfXgj-5_q_awpeE3pKktwq3EwpTPltv9bqSmC0WvVeM5m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPZeeK5gCg2ZLA5xY_bt69ylP6EoTGqvP9ffFV40UnczmU0ddFX0clJovTEw3iurfZuGdyZET9AjmRpe7SKlWks4-TjRvL9cxA',
  lib: 'Mh-ov8Z7pxaeIZrJ0HHhuCctsyLOaM_gI',
};

export const getDataApi = async () => {
  const res = await axios.get('', { params });
  return res.data;
};

export const postDataApi = async formBody => {
  try {
    const res = await axios.post('', formBody, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      // CORS не потрібно вказувати окремо, Axios автоматично опрацьовує CORS
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
