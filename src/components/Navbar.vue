<template>
  <div class="navigation">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <router-link v-bind:to="{name: 'Index'}" class="navbar-brand">Smoothies App</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <router-link v-bind:to="{name: 'Index'}" class="nav-link">Smoothies App</router-link>
            </li>
            <li class="nav-item">
                <router-link v-bind:to="{name: 'AddSmoothie'}" class="nav-link">Add Smoothie</router-link>
            </li>
            <!-- <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown link
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </li> -->
            </ul>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
    name: 'Navbar'

}
</script>

<style>

</style>