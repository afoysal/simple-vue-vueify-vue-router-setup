<!-- events.vue -->
<template>
  <div>
    <h1>{{title}}</h1>
    <ul>
      <li v-for="ev in events">{{ev.name}}</li>
    </ul>
  </div>
</template>

<script>
module.exports = {
  name:"Events",
  data () {
    return {
      title:"Current events",
      events : [
        {name:"Ev 1"},
        {name:"Ev 2"},
        {name:"Ev 3"},
        {name:"Ev 4"},
        {name:"Ev 5"},
        {name:"Ev 6"}
      ]
    }
  }
};
</script>