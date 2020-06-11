<template>
<div class="home">
  <b-list-group class="mt-3">
    <b-list-group-item>
      <img src="https://luxuryactivist.com/wp-content/uploads/1passwordLogo.png" alt="Nigglocker Logo" width="80px">
      <h1>NiggLocker</h1>
    </b-list-group-item>
    <b-list-group-item>
      <router-link to="/">Home</router-link>
    </b-list-group-item>
    <b-list-group-item>
      <router-link to="/createlogin">Create New Login</router-link>
    </b-list-group-item>
    <b-list-group-item>
      <router-link to="/loginlist">Your Logins <b-badge variant="success">24</b-badge></router-link>
    </b-list-group-item>
    <b-list-group-item>
      <router-link to="/settings">Settings</router-link>
    </b-list-group-item>
  </b-list-group>
  <footer class="m-3">
    - made with 💖 by <b-link href="https://github.com/bugswriter">@bugswriter</b-link>
  </footer>
</div>
</template>

<script>
// @ is an alias to /src
</script>
