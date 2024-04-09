<template>

  <main class="container">
    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h1 class="display-4 fw-normal">Pricing</h1>
      <p class="fs-5 text-muted">
        We have tailored our pricing strategy to ensure you receive the best value for your investment while enjoying
        unparalleled quality and performance.
      </p>
    </div>

    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Free</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$0<small class="text-muted fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Base service supported</li>
              <li>100 requests per day</li>
              <li>1 Team supported</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Pro</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$15<small class="text-muted fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Advanced service support</li>
              <li>Unlimited requests</li>
              <li>Unlimited Teams</li>
              <li>Customer service</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-primary">Get started</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm border-primary">
          <div class="card-header py-3 text-bg-primary border-primary">
            <h4 class="my-0 fw-normal">Enterprise</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$29<small class="text-muted fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Private deployment</li>
              <li>&nbsp;</li>
              <li>&nbsp;</li>
              <li>&nbsp;</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-primary">Contact us</button>
          </div>
        </div>
      </div>
    </div>

    <h2 class="display-6 text-center mb-4">Compare plans</h2>

    <div class="table-responsive">
      <table class="table text-center">
        <thead>
        <tr>
          <th style="width: 34%;"></th>
          <th style="width: 22%;">Free</th>
          <th style="width: 22%;">Pro</th>
          <th style="width: 22%;">Enterprise</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row" class="text-start">API Interface</th>
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
          <th scope="row" class="text-start">Team Work</th>
          <td><BIconCheck2 class="t-icon"/></td>
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
          <th scope="row" class="text-start">SQL Lineage</th>
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
          <th scope="row" class="text-start">Customer Service</th>
          <td></td>
          <td>
            <BIconCheck2 class="t-icon"/>
          </td>
          <td>
            <BIconCheck2 class="t-icon"/>
          </td>
        </tr>
        <tr>
          <th scope="row" class="text-start">Unpublished</th>
          <td></td>
          <td>
            <BIconCheck2 class="t-icon"/>
          </td>
          <td>
            <BIconCheck2 class="t-icon"/>
          </td>
        </tr>
        <tr>
          <th scope="row" class="text-start">Unpublished</th>
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