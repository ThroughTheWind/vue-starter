<template>
  <div>
    <h1>Example component</h1>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { RepositoryFactory } from "@/repositories/RepositoryFactory";
const ExampleRepository = RepositoryFactory.get("examples");
export default {};
</script>