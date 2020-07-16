<template>
  <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" data-interval="10000">
        <img src="@/assets/story/story01.png" class="d-block w-100" />
      </div>
      <div class="carousel-item" data-interval="2000">
        <img src="@/assets/story/story02.png" class="d-block w-100" />
      </div>
      <div class="carousel-item">
        <img src="@/assets/story/story03.png" class="d-block w-100" />
      </div>
      <div class="carousel-item">
        <img src="@/assets/story/story04.png" class="d-block w-100" />
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleInterval"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleInterval"
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
