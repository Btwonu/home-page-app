export const getFormData = (form, inputs) => {
  const values = {};
  const formData = new FormData(form);

  console.log(inputs);
  inputs.forEach((i) => {
    values[i] = formData.get(i);
  });

  return values;
};

export const notify = (type, message) => {
  let ele;

  if (type == 'error') {
    ele = document.getElementById('error-box');
  }

  if (type == 'success') {
    ele = document.getElementById('success-box');
  }

  console.log(ele);

  ele.innerText = message;
  ele.style.display = 'block';

  setTimeout(() => {
    ele.style.display = 'none';
  }, 3000);
};

export const urlBuilder = (base, resource, id, token) => {
  return `${base}${resource ? '/' + resource : ''}${id ? '/' + id : ''}.json${
    token ? `?auth=${token}` : ''
  }`;
};
