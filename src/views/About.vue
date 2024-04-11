<template>
  <main class="container px-4 py-5">
    <h2 class="mb-4">{{ $t('about.mission') }}</h2>
    <p class="lead">
      {{
        $t('about.mission_desc')
      }}
    </p>

    <h2 class="mb-4">{{ $t('about.values') }}</h2>
    <p class="lead">
      {{ $t('about.values_desc') }}
    </p>
    <ul class="list-unstyled">
      <li class="mb-2" v-for="item in 4">{{ $t(`about.values_list.${item - 1}`) }}</li>
    </ul>


    <h2 class="mb-4">{{ $t('about.service') }}</h2>
    <div class="row">
      <div class="col-md-6" v-for="item in 4">
        <h4>{{ $t(`about.service_list.${item - 1}.title`) }}</h4>
        <p>{{ $t(`about.service_list.${item - 1}.desc`) }}</p>
      </div>

    </div>

    <h2 class="mb-4">{{ $t('about.touch') }}</h2>
    <div class="contact-info">
      <p>{{ $t('about.touch_desc') }}</p>
      <ul class="list-unstyled">
        <li><i class="fas fa-phone"></i> {{ $t('common.phone') }}: +86 18014856340</li>
        <li><i class="fas fa-envelope"></i>
          {{ $t('common.email') }}: <a href="mailto:shenbinglife@163.com">shenbinglife@163.com</a>
        </li>
        <li><i class="fas fa-map-marker-alt"></i> {{ $t('common.address') }}: {{ $t('about.touch_addr') }}</li>
      </ul>
    </div>
  </main>
</template>
<script setup>
</script>

<style scoped>
h2 {
  color: #007bff;
}

.lead {
  font-size: 1.25rem;
}

.team-member {
  margin-top: 2rem;
}

.service-icon {
  color: #6c757d;
}

.contact-info {
  background-color: #e9ecef;
  padding: 1rem;
  border-radius: 5px;
  margin-top: 2rem;
}
</style>