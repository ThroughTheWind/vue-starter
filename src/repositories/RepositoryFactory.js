import ExampleRepository from "./ExampleRepository";
import ExampleMockRepository from "./ExampleMockRepository";

const repositories = {
  examples: ExampleRepository,
  examplesMock: ExampleMockRepository
  // other repositories ...
};

export const RepositoryFactory = {
  get: name => repositories[name]
};
