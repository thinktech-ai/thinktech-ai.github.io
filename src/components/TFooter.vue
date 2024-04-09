<template>
  <div class="container bg-body-secondary">
    <footer class="pt-5">
      <div class="row">
        <div class="col-6 col-md-2 mb-3 offset-md-1">
          <h5>Main</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><router-link to="/home" class="nav-link p-0 text-muted">Home</router-link></li>
            <li class="nav-item mb-2"><router-link to="/home#features" class="nav-link p-0 text-muted">Features</router-link></li>
            <li class="nav-item mb-2"><router-link to="/price" class="nav-link p-0 text-muted">Pricing</router-link></li>
            <li class="nav-item mb-2"><router-link to="/contact" class="nav-link p-0 text-muted">Contact</router-link></li>
            <li class="nav-item mb-2"><router-link to="/about" class="nav-link p-0 text-muted">About</router-link></li>
          </ul>
        </div>

        <div class="col-6 col-md-2 mb-3">
          <h5>Products</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><router-link to="/bigdata/sql-lineage" class="nav-link p-0 text-muted">SQL Lineage</router-link></li>
          </ul>
        </div>

        <div class="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
              <label for="newsletter1" class="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" class="form-control" placeholder="Email address">
              <button class="btn btn-primary" type="button">Subscribe</button>
            </div>
          </form>
        </div>
      </div>

      <div class="d-flex flex-column flex-sm-row justify-content-center py-4 my-4 border-top">
        <p>© 2023 ThinkTech, Inc. All rights reserved.</p>
        <ul class="list-unstyled d-flex">
          <li class="ms-3"><a class="link-dark" href="#">
            <BIconTwitter class="t-icon"/>
          </a></li>
          <li class="ms-3"><a class="link-dark" href="#">
            <BIconFacebook class="t-icon"/>
          </a></li>
          <li class="ms-3"><a class="link-dark" href="#">
            <BIconInstagram class="t-icon"/>
          </a></li>
        </ul>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'TFooter'
}
</script>

<script setup>
import {BIconTwitter, BIconInstagram, BIconFacebook} from "bootstrap-icons-vue";
</script>