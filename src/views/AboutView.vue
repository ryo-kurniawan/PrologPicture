<template>
  <div class="tentang">
    <Navbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <div class="text-center">
            <h2>Tentang <strong>Kami</strong></h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "AboutView",
  components: {
    Navbar,
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