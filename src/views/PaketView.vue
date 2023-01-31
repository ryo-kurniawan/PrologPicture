<template>
  <div class="paket">
    <Navbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <div class="text-center">
            <h2>Daftar <strong>Paket</strong></h2>
          </div>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Cari Paket Favorit anda"
              aria-label="Cari"
              aria-describedby="basic-addon1"
              @keyup="searchPaket"
            />
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <b-icon-search></b-icon-search>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-4 mr-4 ml-4">
        <div class="col-md-4 mt-4" v-for="paket in pakets" :key="paket.id">
          <CardPaket :paket="paket" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import CardPaket from "@/components/CardPaket.vue";
import axios from "axios";

export default {
  name: "PaketView",
  components: {
    Navbar,
    CardPaket,
  },
  data() {
    return {
      pakets: [],
      search: "",
    };
  },
  methods: {
    setBestPakets(data) {
      this.pakets = data;
    },
    searchPaket() {
      axios
        .get("http://localhost:3000/pakets?q=" + this.search)
        .then((response) => this.setBestPakets(response.data))
        .catch((error) => console.log("Gagal :", error));
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/pakets")
      .then((response) => this.setBestPakets(response.data))
      .catch((error) => console.log("Gagal :", error));
  },
};
</script>

<style>
</style>