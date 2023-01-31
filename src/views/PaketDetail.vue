<template>
  <div class="detail">
    <Navbar />
    <div class="container">
      <!-- Breadcrumb -->
      <div class="row mt-5">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-dark">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-light">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/paket" class="text-light">Paket</router-link>
              </li>
              <li class="breadcrumb-item text-light active" aria-current="page">
                {{ paket.nama }}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <!-- Detail Paket -->
      <div class="row mt-3">
        <div class="col-md-4 d-flex justify-content-center">
          <div class="img-detail-box">
            <img
              :src="'assets/images/products/' + paket.gambar"
              class="detail-image shadow"
              alt="..."
            />
          </div>
        </div>
        <div class="col-md-8 mt-3">
          <h2>
            <strong>{{ paket.nama }}</strong>
          </h2>
          <hr />
          <h5>
            Harga : <strong>Rp. {{ paket.harga }}</strong>
          </h5>
          <form class="mt-3">
            <div class="form-group">
              <label for="jumlah_order">Jumlah Pesan</label>
              <input type="number" class="form-control" />
            </div>
            <div class="form-group">
              <label for="keterangan">Keterangan</label>
              <textarea
                name="keterangan"
                class="form-control"
                placeholder="Keterangan spt : Outdoor, Indoor .."
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary float-right">
              <b-icon-cart3></b-icon-cart3>
              Order
            </button>
          </form>
          >
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
  name: "PaketDetailView",
  components: {
    Navbar,
  },
  data() {
    return {
      paket: [],
      search: "",
    };
  },
  methods: {
    setPaket(data) {
      this.paket = data;
    },
    searchPaket() {
      axios
        .get("http://localhost:3000/pakets?q=" + this.search)
        .then((response) => this.setPaket(response.data))
        .catch((error) => console.log("Gagal :", error));
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/pakets/" + this.$route.params.id)
      .then((response) => this.setPaket(response.data))
      .catch((error) => console.log("Gagal :", error));
  },
};
</script>

<style>
</style>