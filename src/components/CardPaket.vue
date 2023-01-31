<template>
  <div class="card shadow card-paket">
    <div class="img-box">
      <img
        :src="'assets/images/products/' + paket.gambar"
        class="card-img-top"
        alt="..."
      />
    </div>

    <div class="card-body">
      <h5 class="card-title">{{ paket.nama }}</h5>
      <p class="card-text">Harga : Rp. {{ paket.harga }}</p>
      <router-link
        :to="'/paket/' + paket.id"
        class="btn btn-primary float-right"
        ><b-icon-cart></b-icon-cart> Order
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardPaket",
  props: ["paket"],
};
</script>

<style>
</style>