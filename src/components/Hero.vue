<template>
  <div class="hero">
    <!-- Desktop -->
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Capture Your Moment</strong> <br />
                with Us
              </h2>
              <p>Ayo segera pesan paket favorit Anda</p>
              <router-link to="/paket" class="btn btn-sm btn-primary">
                <b-icon-arrow-right></b-icon-arrow-right>
                Order Sekarang
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="text-center">
            <img src="../assets/images/hero3.svg" alt="" style="width: 70%" />
          </div>
        </div>
      </div>
    </div>
    <!-- Mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="col-md-6 mb-3">
          <div class="text-center">
            <img src="../assets/images/hero3.svg" alt="" style="width: 70%" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Capture Your Moment</strong> <br />
                with Us
              </h2>
              <p>Ayo segera pesan paket favorit Anda</p>
              <router-link to="/paket" class="btn btn-sm btn-primary">
                <b-icon-arrow-right></b-icon-arrow-right>
                Order Sekarang
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroComponent",
};
</script>

<style>
</style>