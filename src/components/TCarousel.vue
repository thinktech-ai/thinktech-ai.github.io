<template>
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" class="active" aria-current="true"
              data-bs-slide-to="0"
              aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
    </div>

    <div class="carousel-inner ">
      <div class="carousel-item active" data-bs-interval="2000">
        <img src="@/assets/imgs/carousel/01.jpg" class="d-block w-100 carousel-image" alt="">
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ $t('carousel.title_1')}}</h5>
          <p>{{ $t('carousel.desc_1')}}</p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src="@/assets/imgs/carousel/02.jpg" class="d-block w-100 carousel-image" alt="">
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ $t('carousel.title_2')}}</h5>
          <p>{{ $t('carousel.desc_2')}}</p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src="@/assets/imgs/carousel/03.jpg" class="d-block w-100 carousel-image" alt="">
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ $t('carousel.title_3')}}</h5>
          <p>{{ $t('carousel.desc_3')}}</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script>
export default {
  name: 'TCarousel'
}
</script>
<style scoped>
/* 设置轮播图图片的高度 */
.carousel-image {
  height: 400px; /* 设置图片高度 */
  object-fit: cover; /* 确保图片覆盖整个容器而不失真 */
}


</style>