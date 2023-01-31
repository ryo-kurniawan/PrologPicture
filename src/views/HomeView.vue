<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <Hero />
      <!-- Best Pakets -->
      <div class="row mt-4">
        <div class="col">
          <h2>Best <strong>Pakets</strong></h2>
        </div>
        <div class="col">
          <router-link to="/paket" class="btn btn-sm btn-primary float-right">
            <b-icon-eye></b-icon-eye>
            Lihat Semua
          </router-link>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-md-4 mt-4" v-for="paket in pakets" :key="paket.id">
          <CardPaket :paket="paket" />
        </div>
      </div>
      <!-- Akhir Best Paket -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import CardPaket from "@/components/CardPaket.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    Navbar,
    Hero,
    CardPaket,
  },

  data() {
    return {
      pakets: [],
    };
  },
  methods: {
    setBestPakets(data) {
      this.pakets = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/best-pakets")
      .then((response) => this.setBestPakets(response.data))
      .catch((error) => console.log("Gagal :", error));
  },
};
</script>
