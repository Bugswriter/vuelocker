<template>
<div id="list-login">
  <h2 class="m-3">Your Logins</h2>
  <hr>
  <b-col>    
    <b-card v-for="login in logins" :key="login.id" no-body class="mb-4">
      <b-card :header="login.website" v-b-toggle="'accordion-'+login.id" no-body class="p-0" role="tab">
      <b-collapse :id="'accordion-'+login.id" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text class="float-right">
            <b-button-group>
              <b-button variant="light">🖉 edit</b-button>
              <b-button variant="light">🗑️ remove</b-button>
            </b-button-group>
          </b-card-text>
          <b-card-text>
            <b-col cols="8">
              <b-form>
                <b-form-group id="input-group-2" label="👤 Username" label-for="input-2">
                  <b-form-group inline>
                    <b-form-input id="input-2" :value="login.username" size="lg" type="text" plaintext></b-form-input>
                  </b-form-group>
                </b-form-group>
                <b-form-group id="input-group-3" label="🔑 Password" label-for="input-3" inline>
                  <b-form-input class="mb-2 mr-sm-2 mb-sm-0" id="input-3" :value="login.password" size="lg" type="password" plaintext></b-form-input>
                </b-form-group>
              </b-form>
            </b-col>
          </b-card-text>
        </b-card-body>
      </b-collapse>
      </b-card>            
    </b-card>

  </b-col>

</div>
</template>

<script type="text/javascript">
export default {
    data() {
        return {
            logins : [
                {
                    "id": 1,
                    "website": "chess.com",
                    "username": "bugswriter@protonmail.com",
                    "password": "HorseRider212"
                },
                {
                    "id": 2,
                    "website": "hotstar.com",
                    "username": "jiochutiya",
                    "password": "iuseamazonbtw"
                },
                {
                    "id": 3,
                    "website": "facebook.com",
                    "username": "kakashiliz",
                    "password": "iamchutiya212"
                },
                {
                    "id": 4,
                    "website": "twitter.com",
                    "username": "bugswriter@gmail.com",
                    "password": "shittymarathon123"
                }

            ],
            search: ''
        }
    }
}
</script>

<style  scoped>

</style>
