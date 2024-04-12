<template>

  <main class="container">
    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
      <!--      <h1 class="display-4 fw-normal">Pricing</h1>-->
      <p class="fs-5 text-muted">
        {{
          $t('pricing.title')
        }}
      </p>
    </div>

    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">{{ $t('pricing.free') }}</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$0<small class="text-muted fw-light">/{{ $t('pricing.monthly') }}</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li v-for="item in 4">
                {{ $t(`pricing.free_policy.${item - 1}`) }}
              </li>

            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">{{$t('pricing.pro')}}</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$15<small class="text-muted fw-light">/{{ $t('pricing.monthly') }}</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li v-for="item in 4">
                {{ $t(`pricing.pro_policy.${item - 1}`) }}
              </li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-primary">Get started</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm border-primary">
          <div class="card-header py-3 text-bg-primary border-primary">
            <h4 class="my-0 fw-normal">{{$t('pricing.enterprise')}}</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$99<small class="text-muted fw-light"></small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li v-for="item in 4">
                {{ $t(`pricing.enterprise_policy.${item - 1}`) }}
              </li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-primary">Contact us</button>
          </div>
        </div>
      </div>
    </div>

    <h2 class="display-6 text-center mb-4">{{ $t('pricing.compare_plan') }}</h2>

    <div class="table-responsive">
      <table class="table text-center">
        <thead>
        <tr>
          <th style="width: 34%;"></th>
          <th style="width: 22%;">{{ $t('pricing.free') }}</th>
          <th style="width: 22%;">{{ $t('pricing.pro') }}</th>
          <th style="width: 22%;">{{ $t('pricing.enterprise') }}</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row" class="text-start">{{ $t('pricing.compare_plan_list.0') }}</th>
          <td>
            <BIconCheck2 class="t-icon"/>
          </td>
          <td>
            <BIconCheck2 class="t-icon"/>
          </td>
          <td>
            <BIconCheck2 class="t-icon"/>
          </td>
        </tr>
        <tr>
          <th scope="row" class="text-start">{{ $t('pricing.compare_plan_list.1') }}</th>
          <td>
            <BIconCheck2 class="t-icon"/>
          </td>
          <td>
            <BIconCheck2 class="t-icon"/>
          </td>
          <td>
            <BIconCheck2 class="t-icon"/>
          </td>
        </tr>
        </tbody>

        <tbody>
        <tr>
          <th scope="row" class="text-start">{{ $t('pricing.compare_plan_list.2') }}</th>
          <td>
            <BIconCheck2 class="t-icon"/>
          </td>
          <td>
            <BIconCheck2 class="t-icon"/>
          </td>
          <td>
            <BIconCheck2 class="t-icon"/>
          </td>
        </tr>
        <tr>
          <th scope="row" class="text-start">{{ $t('pricing.compare_plan_list.3') }}</th>
          <td></td>
          <td>
            <BIconCheck2 class="t-icon"/>
          </td>
          <td>
            <BIconCheck2 class="t-icon"/>
          </td>
        </tr>
        <tr>
          <th scope="row" class="text-start">{{ $t('pricing.compare_plan_list.4') }}</th>
          <td></td>
          <td>
            <BIconCheck2 class="t-icon"/>
          </td>
          <td>
            <BIconCheck2 class="t-icon"/>
          </td>
        </tr>
        <tr>
          <th scope="row" class="text-start">{{ $t('pricing.compare_plan_list.5') }}</th>
          <td></td>
          <td>
            <BIconCheck2 class="t-icon"/>
          </td>
          <td>
            <BIconCheck2 class="t-icon"/>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </main>

</template>
<script>

</script>

<script setup>
import {
  BIconCheck2,
} from "bootstrap-icons-vue";

</script>

<style scoped>

</style>