import _ from "lodash";

const examples = [
  {
    id: 0,
    name: "Example1"
  }
];

export default class {
  get() {
    return Promise.resolve(examples);
  }

  getExample(exampleId) {
    return Promise.resolve(
      _.find(examples, example => example.id == exampleId)
    );
  }

  createExample(payload) {
    return Promise.resolve(examples.push(payload));
  }
}
