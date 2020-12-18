import regeneratorRuntime from 'regenerator-runtime';

const request = async (method, url, body) => {
  let options = {
    method,
  };

  if (body) {
    body = JSON.stringify({ ...body, returnSecureToken: true });

    Object.assign(options, {
      headers: {
        'content-type': 'application/json',
      },
      body,
    });
  }

  let res = await fetch(url, options);
  let data = await res.json();

  return data;
};

export default {
  get: request.bind(this, 'GET'),
  post: request.bind(this, 'POST'),
  put: request.bind(this, 'PUT'),
  patch: request.bind(this, 'PATCH'),
  delete: request.bind(this, 'DELETE'),
};
