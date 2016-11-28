<!-- contacts.vue -->
<template>
  <div>
    <h1>{{title}}</h1>
    <ul>
      <li v-for="co in contacts">{{co.name}}</li>
    </ul>
  </div>
</template>

<script>
module.exports = {
  name:"Contacts",
  data () {
    return {
      title:"My Contacts",
      contacts : [
        {name:"Joey"},
        {name:"Rachel"},
        {name:"Chandler"},
        {name:"Ross"},
        {name:"Phoebe"},
        {name:"Monica"}
      ]
    }
  }
};
</script>