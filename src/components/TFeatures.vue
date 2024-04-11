<template>
  <div class="container px-4 py-5" id="featured-3">
    <h2 class="pb-2 border-bottom">{{ $t('introduction.title') }}</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="feature col">
        <div
            class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          <BIconCollection style="width: 1em; height: 1em" class="bi"/>
        </div>
        <h3 class="fs-2">{{ $t('introduction.title_1') }}</h3>
        <p>{{ $t('introduction.desc_1') }}</p>

      </div>
      <div class="feature col">
        <div
            class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          <BIconRocket style="width: 1em; height: 1em" class="bi"/>
        </div>
        <h3 class="fs-2">{{ $t('introduction.title_2') }}</h3>
        <p>{{ $t('introduction.desc_2') }}</p>
      </div>
      <div class="feature col">
        <div
            class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          <BIconRobot style="width: 1em; height: 1em" class=""/>
        </div>
        <h3 class="fs-2">{{ $t('introduction.title_3') }}</h3>
        <p>{{ $t('introduction.desc_3') }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TFeatures'
}
</script>

<script setup>
import {BIconCollection, BIconRobot, BIconRocket} from "bootstrap-icons-vue";
</script>