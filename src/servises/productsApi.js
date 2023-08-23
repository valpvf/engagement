BASE_URL =
  'https://script.googleusercontent.com/macros/echo?user_content_key=JJIDav02XaC2-y4P9ohSVTJxyxvRWQW3bK2wa3vjtNQzG5VIn9imTDm8OmBicuIQcVaOEk9WQyBd03mdhqKTFnJB1z9QJLlsm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnD48J8nIhV-6LKXIIwy6m0h0kix1hzBizS4zUJy4mpzebf3Mg65w5hMdQdYRx9duhTPOqg7vMi0T5STNFEfLSC5revtnZ8zKBw&lib=Mh-ov8Z7pxaeIZrJ0HHhuCctsyLOaM_gI';

fetch(BASE_URL)
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  });
