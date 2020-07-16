<template>
  <div
    id="carouselExampleFade"
    class="carousel slide carousel-fade"
    data-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="@/assets/info/1.png" class="d-block w-100" />
      </div>
      <div class="carousel-item">
        <img src="@/assets/info/2.png" class="d-block w-100" />
      </div>
      <div class="carousel-item">
        <img src="@/assets/info/3.png" class="d-block w-100" />
      </div>
      <div class="carousel-item">
        <img src="@/assets/info/4.png" class="d-block w-100" />
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleFade"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleFade"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style src="./style.css" scoped></style>
