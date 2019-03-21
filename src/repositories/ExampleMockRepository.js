import _ from "lodash";

const examples = [
  {
    id: 0,
    name: "Example1"
  }
];

export default class {
  get() {
    return examples;
  }

  getExample(exampleId) {
    return _.find(examples, example => example.id == exampleId);
  }

  createExample(payload) {
    return examples.push(payload);
  }
}
