<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const formData = reactive({
    username: '',
    email: '',
    password: ''
})

const router = useRouter()

const submit = async () => {
    await axios.post('register', formData). 
    then(res => {
        console.log(res.data)
    }).catch(err => {
        console.log(err)
    }); 
}
</script>
<template>
    <div class="container">
      <div class="col-md-4 mx-auto mt-5">
        <div class="card shadow-lg">
           
            <div class="mx-5 mb-5 mt-5">
                <h3>Register</h3>
                <form @submit.prevent="submit">
                <div class="mt-3">
                    <input v-model="formData.username" type="text" class="form-control" placeholder="Username" required>
                </div>
                <div class="mt-3">
                    <input v-model="formData.email" type="email" class="form-control" placeholder="your@email.com" required>
                </div>
                <div class="mt-3">
                    <input v-model="formData.password" type="password" class="form-control" placeholder="Password" required> 
                </div>        
                <div class="mt-3">
                    <button class="btn btn-primary float-end" type="submit">Register</button>
                </div>
                </form>
            </div>
        </div>
      </div> 
    </div>
</template>