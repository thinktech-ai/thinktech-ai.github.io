<template>
  <div class="container px-4 py-5" id="featured-3">
    <h2 class="pb-2 border-bottom">Introduction</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="feature col">
        <div
            class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          <BIconCollection style="width: 1em; height: 1em" class="bi"/>
        </div>
        <h3 class="fs-2">Innovation Leaders</h3>
        <p>ThinkTech is at the forefront of technological innovation, specializing in cutting-edge solutions that
          harness the power of big data and artificial intelligence. Our team of experts is dedicated to pushing the
          boundaries of what's possible, delivering advanced tools and platforms that transform the way businesses
          operate.</p>

      </div>
      <div class="feature col">
        <div
            class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          <BIconRocket style="width: 1em; height: 1em" class="bi"/>
        </div>
        <h3 class="fs-2">Data Mastery</h3>
        <p>Embracing the data-driven era, ThinkTech offers comprehensive SQL governance that ensures the efficient
          management and utilization of data assets. We provide actionable insights and strategies to help companies
          make informed decisions, optimize performance, and maintain a competitive edge in the market.</p>
      </div>
      <div class="feature col">
        <div
            class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          <BIconRobot style="width: 1em; height: 1em" class=""/>
        </div>
        <h3 class="fs-2">AI Empowerment</h3>
        <p>ThinkTech's AI Generator tools are revolutionizing the industry by automating complex processes and enhancing
          creativity. Our tools empower professionals to achieve more with less, fostering innovation and efficiency.
          With ThinkTech, businesses can leverage the full potential of artificial intelligence to drive growth and
          success.</p>
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