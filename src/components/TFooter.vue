<template>
  <div class="container bg-body-secondary">
    <footer class="pt-5">
      <div class="row">
        <div class="col-6 col-md-2 mb-3 offset-md-1">
          <h5>{{ $t('navbar.title') }}</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <router-link to="/home" class="nav-link p-0 text-muted">{{ $t('navbar.home') }}</router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link to="/home#features" class="nav-link p-0 text-muted">{{
                  $t('introduction.title')
                }}
              </router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link to="/price" class="nav-link p-0 text-muted">{{ $t('navbar.pricing') }}</router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link to="/contact" class="nav-link p-0 text-muted">{{ $t('navbar.contact') }}</router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link to="/about" class="nav-link p-0 text-muted">{{ $t('navbar.about') }}</router-link>
            </li>
          </ul>
        </div>

        <div class="col-6 col-md-2 mb-3">
          <h5>{{ $t('products.title') }}</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <router-link to="/bigdata/sql-lineage" class="nav-link p-0 text-muted">SQL Lineage</router-link>
            </li>
          </ul>
        </div>

        <div class="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>{{ $t('footer.subscribe_title') }}</h5>
            <p>{{ $t('footer.subscribe_desc') }}</p>
            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
              <label for="newsletter1" class="visually-hidden">{{ $t('common.email') }}</label>
              <input id="newsletter1" type="text" class="form-control" :placeholder="$t('common.email')">
              <button class="btn btn-primary" type="button">{{ $t('footer.subscribe') }}</button>
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