const BASE_URL = 'https://nomoreparties.co/v1/wff-cohort-20';

const apiRoutes = {
  user: 'users/me',
  cards: 'cards',
  likes: 'likes',
};

const headers = {
  Authorization: 'bb3229f7-cdd2-4122-84c2-8b42b479bc03',
  'Content-Type': 'application/json',
};

const checkData = (data) => {
  if (data.ok) {
    return data.json();
  } else {
    return Promise.reject(`Error: ${data.status}`);
  }
};

function request(endpoint, options) {
  return fetch(`${BASE_URL}/${endpoint}`, options).then(checkData);
}

export const getCards = () => {
  return request(apiRoutes.cards, {
    method: 'GET',
    headers,
  });
};

export const postCard = (name, link) => {
  return request(apiRoutes.cards, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      name,
      link,
    }),
  });
};

export const deleteCardApi = (id) => {
  return request(`${apiRoutes.cards}/${id}`, {
    method: 'DELETE',
    headers,
  });
};

export const getUserInfo = () => {
  return request(apiRoutes.user, {
    method: 'GET',
    headers,
  });
};

export const patchUser = (name, about) => {
  return request(apiRoutes.user, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      name,
      about,
    }),
  });
};

export const addLikeCard = (id) => {
  return request(`${apiRoutes.cards}/${apiRoutes.likes}/${id}`, {
    method: 'PUT',
    headers,
  });
};

export const deleteLikeCard = (id) => {
  return request(`${apiRoutes.cards}/${apiRoutes.likes}/${id}`, {
    method: 'DELETE',
    headers,
  });
};

export const patchAvatar = (avatar) => {
  return request(`${apiRoutes.user}/avatar`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({ avatar: avatar }),
  });
};
