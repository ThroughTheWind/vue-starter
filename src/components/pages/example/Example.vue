<template>
  <div>
    <h1>Example component</h1>
    <br>
    <router-link to="/example">Default component</router-link>
    <br>
    <router-link to="/example/child">Child component</router-link>
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