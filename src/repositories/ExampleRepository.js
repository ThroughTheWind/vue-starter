import Repository from "./Repository";

const resource = "/examples";
export default class {
  get() {
    return Repository.get(`${resource}`);
  }

  getExample(exampleId) {
    return Repository.get(`${resource}/${exampleId}`);
  }

  createExample(payload) {
    return Repository.post(`${resource}`, payload);
  }
}
