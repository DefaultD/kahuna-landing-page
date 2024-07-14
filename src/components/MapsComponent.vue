<template>
  <div class="map-container">
    <div id="map" class="map" style="width: 100%; height: 400px;"></div>

  </div>
</template>

<script>
export default {
  name: 'MapComponent',
  mounted() {
    this.loadGoogleMapsApi().then(() => {
      this.initMap();
    }).catch((error) => {
      console.error('Erro ao carregar a API do Google Maps:', error);
    });
  },
  methods: {
    initMap() {
      const address = "Rua Capitão Pacheco e Chaves, 887, Vila Prudente, São Paulo, SP, Brasil";
      const geocoder = new google.maps.Geocoder();

      geocoder.geocode({ address: address }, (results, status) => {
        if (status === 'OK') {
          const location = results[0].geometry.location;

          const map = new google.maps.Map(document.getElementById('map'), {
            center: location,
            zoom: 18,
          });

          new google.maps.Marker({
            position: location,
            map,
            title: 'Academia Kahuna',
          });
        } else {
          console.error('Erro ao geocodificar o endereço:', status);
        }
      });
    },
    loadGoogleMapsApi() {
      return new Promise((resolve, reject) => {
        if (typeof google !== 'undefined' && google.maps) {
          resolve();
        } else {
          const script = document.createElement('script');
          script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAIGktF807475WDTiwfJSXpXtM5pjybbVc`;
          script.async = true;
          script.defer = true;
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        }
      });
    }
  }
};
</script>

<style scoped>
.map-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px; /* Espaço opcional entre o mapa e o endereço */
}

.map {
  width: 70%;
  height: 400px;
}

.address {
  width: 30%;
  padding-left: 10px;
}

#map {
  width: 100%;
  height: 100%;
}
</style>
