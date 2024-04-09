<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-xl">
      <a class="navbar-brand" href="/">
        <img src="../assets/logo.svg" alt="logo" width="24" height="24" class="d-inline-block align-text-top">
        ThinkTech
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/home" active-class="active" exact>Home</router-link>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Products
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item " to="/bigdata/sql-lineage" active-class="active" exact>SQL Lineage
                </router-link>
              </li>
<!--              <li>-->
<!--                <router-link class="dropdown-item " to="#" active-class="active" exact>Data Quality Analyze-->
<!--                </router-link>-->
<!--              </li>-->
<!--              <li>-->
<!--                <router-link class="dropdown-item " to="#" active-class="active" exact>Data Profiling</router-link>-->
<!--              </li>-->
<!--              <li>-->
<!--                <router-link class="dropdown-item " to="#" active-class="active" exact>Data Integration</router-link>-->
<!--              </li>-->
<!--              <li>-->
<!--                <hr class="dropdown-divider">-->
<!--              </li>-->
<!--              <li>-->
<!--                <router-link class="dropdown-item" to="#" active-class="active" exact>Dev Tools</router-link>-->
<!--              </li>-->
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/price" class="nav-link " active-class="active" exact>Pricing</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/contact" class="nav-link " active-class="active" exact>Contact</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/about" class="nav-link " active-class="active" exact>About</router-link>
          </li>

          <!--          <li class="nav-item">-->
          <!--            <a href="https://shenbinglife.github.io/" target="_blank" class="nav-link">Blog</a>-->
          <!--          </li>-->

        </ul>
        <form class="d-flex" role="search">
          <button class="btn  bi-globe"></button>
          <button class="btn  bi-search"></button>
          <button class="btn">Login</button>
        </form>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'TNavbar'
}
</script>
<style>
.navbar {
  border-bottom: 1px solid #dee2e6; /* 添加下边框，颜色为 #dee2e6 */
}

/* 为导航链接添加下划线 */
.navbar-nav .nav-link.active {
  border-bottom: 2px solid #007bff; /* 同样的下划线颜色 */
}

/* 如果你想要在悬停时也显示下划线，可以添加以下规则 */
.navbar-nav .nav-link:hover {
  border-bottom: 2px solid #007bff; /* 同样的下划线颜色 */
}

/* 为导航栏添加留白效果 */
.navbar {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.dropdown:hover>.dropdown-menu {

  display: block;
}

.dropdown>.dropdown-toggle:active {

  pointer-events: none;
}

</style>