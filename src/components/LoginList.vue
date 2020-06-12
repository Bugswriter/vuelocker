<template>
  <div id="list-login">
    <h2 class="m-3">Your Logins</h2>
    <hr>
    <b-col cols="10">
      <b-card no-body class="mb-4">
        <b-card-header header-tag="header" class="p-0" role="tab">
          <b-button block v-b-toggle.accordion-1 variant="light" class="text-primary">chess.com</b-button>
        </b-card-header>
        <b-collapse id="accordion-1 visible" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text></b-card-text>
            <b-card-text>This is first login</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-4">
        <b-card-header header-tag="header" class="p-0 text-left" role="tab">
          <b-button block v-b-toggle.accordion-2 variant="light" class="text-primary">twitter.com</b-button>
        </b-card-header>
        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>This is second login</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-4">
        <b-card-header header-tag="header" class="p-0" role="tab">
          <b-button block v-b-toggle.accordion-3 variant="light" class="text-primary">facebook.com</b-button>
        </b-card-header>
        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>This is third Login</b-card-text>
          </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
    
</div>
</template>

<script type="text/javascript">
  export default {

  }
</script>

<style  scoped>

</style>
