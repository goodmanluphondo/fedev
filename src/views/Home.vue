<template>
  <div class="content">
    <div class="container">
      <ProjectDetails />
      <ProjectDisplay />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectDetails from "@/components/ProjectDetails.vue";
import ProjectDisplay from "@/components/ProjectDisplay.vue";

export default {
  name: "Header",
  components: {
    ProjectDetails,
    ProjectDisplay
  }
};
</script>
