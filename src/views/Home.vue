<template>
  <div class="h-screen">
    <Navbar /> <Sidebar />
    <main class="h-full p-4">
      <Map />
    </main>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import Navbar from "./components/Navbar.vue";
import Map from "./components/Map.vue";
</script>
