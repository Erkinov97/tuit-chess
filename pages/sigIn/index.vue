<template>
  <div class="container">
      <div class="d-flex flex-row justify-content-center">
          <div class="col-md-8">
              <div class="card">
                  <div class="card-header">Sign In</div>
                  <div class="card-body">
                      <form @click="pressed">

                          <div class="form-group">
                              <input type="email" placeholder="Email" v-model="email" name="" id="" class="form-control">
                          </div>

                          <div class="form-group">
                              <input type="password" placeholder="Password" v-model="password" name="" id="" class="form-control">
                          </div>


                          <button>Submit</button>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return{
            email: '',
            password: ''
        }
    },

    methods:{
        pressed() {
            alert('form submitted')
        }
    }
}
</script>

<style>

</style>