<template>
  <div id="mapid" class="h-3/5 w-3/4 min-h-[350px] ml-auto z-30"></div>
</template>

<script setup>
// DON'T load Leaflet components here!
// Its CSS is needed though, if not imported elsewhere in your application.
import leaflet from "leaflet";
import { onMounted, ref } from "vue";

let mymap;
onMounted(() => {
  mymap = leaflet.map("mapid").setView([51.505, -0.09], 13);

  leaflet
    .tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmVydHluIiwiYSI6ImNsOWloMm9lcjA5YjkzcG1vOTZ2M3NhNG4ifQ.ugwxffbBDeEoPt8ve354wQ",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1IjoiYmVydHluIiwiYSI6ImNsOWloMm9lcjA5YjkzcG1vOTZ2M3NhNG4ifQ.ugwxffbBDeEoPt8ve354wQ",
      }
    )
    .addTo(mymap);
  addMarker([51.505, -0.11]);
});

const resultMarker = ref(null);
const addMarker = (coords) => {
  // If there is already a marker, remove it. Only allow 1
  if (resultMarker.value) {
    mymap.removeLayer(resultMarker.value);
  }
  const customMarker = leaflet.icon({
    iconUrl: "map-marker-area.svg",
    iconSize: [35, 35], // size of the icon
  });
  resultMarker.value = leaflet
    .marker([coords[0], coords[1]], {
      icon: customMarker,
    })
    .addTo(mymap);
  mymap.setView([coords[0], coords[1]], 13);
};
</script>
