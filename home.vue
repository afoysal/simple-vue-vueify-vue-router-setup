<!-- home.vue -->
<template>
  <div>
    <h1>{{title}}</h1>
    <p>{{description}}</p>
  </div>
</template>

<script>
module.exports = {
  name:"Home",
  data () { 
    return {
      title:"Sample vue router setup",
      description:"Made it as simple as possible"
    }
  }
};
</script>