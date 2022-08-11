<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const formData= reactive({
    username: '',
    password: ''
})

const router = useRouter()

let credentials: any = null
const submit = async () => {
    await axios.post('login', formData).
    then(res => {
        const token = res.data.token
         if(token.length > 0){
            credentials = res.data
        }
    }).catch(err => {
        // Handle error
        console.log(err);
    });
   

        sessionStorage.setItem("accessToken", `${credentials.token}`)
        sessionStorage.setItem("refreshToken", `${credentials.refreshToken}`)
        axios.defaults.headers.common['Authorization'] = `Bearer ${credentials.token}`
        await router.push('/dashboard')
    
}
</script>
<template>
    <div class="container">
      <div class="col-md-4 mx-auto mt-5">
        <div class="card shadow-lg">
            <div class="mt-5 mx-5 mb-5">
              <form @submit.prevent="submit">
                <h3>Login</h3>
                <div class="mt-3">
                    <input v-model="formData.username" type="text" class="form-control" placeholder="Username">
                </div>
                <div class="mt-3">
                    <input v-model="formData.password" type="password" class="form-control" placeholder="Password"> 
                </div>       
                <router-link to="/send-otp" class="link fs-6">Forgot Password?</router-link>
                <div class="mt-3">
                    <button class="btn btn-primary float-end" type="submit">Login</button>
                </div>
              </form>
        </div>
      </div> 
      </div>
    </div>
</template>