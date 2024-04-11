<template>
  <div class="container px-4 py-5" id="custom-cards">
    <h2 class="pb-2 border-bottom">{{ $t('products.title') }}</h2>
    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
             style="background-size: 30% 30%;"
             :style="'background-image: url(' + pic_sqllinage + '); '">
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 class="pt-3 mt-5 mb-4 display-6 lh-1 fw-bold">{{$t('products.sqlLineage')}}</h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img src="@/assets/logo.svg" alt="logo" width="32" height="32"
                     class="rounded-circle border border-white">
              </li>
              <li class="d-flex align-items-center me-3">
                <small>{{$t('products.sqlLineage_desc')}}</small>
              </li>

            </ul>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
             style="background-size: cover"
             :style="'background-image: url(' + pic_travelbot + ');'">
          <div class="d-flex flex-column h-100 p-5 pb-3  text-shadow-1" style="color: indianred">
            <h3 class="pt-3 mt-5 mb-4 display-6 lh-1 fw-bold">{{$t('products.travelbot')}}</h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img src="@/assets/logo.svg" alt="logo" width="32" height="32"
                     class="rounded-circle border border-white">
              </li>
              <li class="d-flex align-items-center me-3">
                <small>{{$t('products.travelbot_desc')}}</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
             :style="'background-image: url(' + pic_common + ');'">
          <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h3 class="pt-3 mt-5 mb-4 display-6 lh-1 fw-bold">{{$t('products.hadoopManager')}}</h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img src="@/assets/logo.svg" alt="logo" width="32" height="32"
                     class="rounded-circle border border-white">
              </li>
              <li class="d-flex align-items-center me-3">
                <small>{{$t('products.hadoopManager_desc')}}</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-4">
      <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
             :style="'background-image: url(' + pic_question + ');'">
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 class="pt-3 mt-5 mb-4 display-6 lh-1 fw-bold">{{$t('products.toBeReleased')}}</h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img src="@/assets/logo.svg" alt="logo" width="32" height="32"
                     class="rounded-circle border border-white">
              </li>
              <li class="d-flex align-items-center me-3">
                <small>{{$t('products.toBeReleased_desc')}}</small>
              </li>

            </ul>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
             :style="'background-image: url(' + pic_question + ');'">
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 class="pt-3 mt-5 mb-4 display-6 lh-1 fw-bold">{{$t('products.toBeReleased')}}</h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img src="@/assets/logo.svg" alt="logo" width="32" height="32"
                     class="rounded-circle border border-white">
              </li>
              <li class="d-flex align-items-center me-3">
                <small>{{$t('products.toBeReleased_desc')}}</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
             :style="'background-image: url(' + pic_question + ');'">
          <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h3 class="pt-3 mt-5 mb-4 display-6 lh-1 fw-bold">{{$t('products.toBeReleased')}}</h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img src="@/assets/logo.svg" alt="logo" width="32" height="32"
                     class="rounded-circle border border-white">
              </li>
              <li class="d-flex align-items-center me-3">
                <small>{{$t('products.toBeReleased_desc')}}</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TCoreProducts'
}
</script>

<script setup>
import pic_common from '@/assets/imgs/products/common.jpg'
import pic_question from '@/assets/imgs/products/question.jpg'
import pic_sqllinage from '@/assets/imgs/products/sqllinage.png'
import pic_travelbot from '@/assets/imgs/products/travelbot.png'
</script>
