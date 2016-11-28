<!-- baserouter.vue -->
<template>
  <div id="sparoot">
    <nav>
      <a href="#/">Home</a> |
      <a href="#/contacts">Contacts</a> |
      <a href="#/events">Events</a>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  module.exports = {
    name:"BaseRouter"
  };
</script>