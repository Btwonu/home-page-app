import request from './request.js';
import { urlBuilder } from './utility.js';
import auth from './auth.js';

export default {
  url: 'dbUrl',
  async create(resource, item) {
    let { idToken } = await auth.getData();
    let url = urlBuilder(this.url, resource, null, idToken);

    try {
      let res = await request.post(url, item);
      return res;
    } catch (err) {
      console.error(err);
    }
  },
  async getAll(resource) {
    let url = urlBuilder(this.url, resource);
    let data = await request.get(url);
    let resourceArr = [];

    try {
      resourceArr = Object.keys(data).map((key) => {
        return {
          _id: key,
          ...data[key],
        };
      });
    } catch (error) {}

    return resourceArr;
  },
  async getOne(resource, id) {
    let url = urlBuilder(this.url, resource, id);

    let destinations = await request.get(url);
    return destinations;
  },
};
