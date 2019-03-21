import ExampleRepository from "./ExampleRepository";
import ExampleMockRepository from "./ExampleMockRepository";

//Get real repo or mock by checking VUE_APP_USE_MOCK set in .env file
const exampleRepository =
  process.env.VUE_APP_USE_MOCK == "true"
    ? ExampleMockRepository
    : ExampleRepository;

const repositories = {
  examples: exampleRepository
  // other repositories ...
};

export const RepositoryFactory = {
  get: name => repositories[name]
};
