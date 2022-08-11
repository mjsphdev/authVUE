<script setup lang="ts">
import axios from 'axios';
import { reactive, inject } from 'vue';
import { useRouter } from 'vue-router';

const swal = inject('$swal')

const formData = reactive({
    resetEmail: ''
})
const router = useRouter()

const submit = async () => {
    axios.post('send-password-reset-code', formData).
    then((res) =>{
        if(res.data.status == "200"){
            swal(res.data.message)
            router.push('/reset-password')
        }
    }).catch((err) => {
        console.log(err)
    })
}

</script>
<template>
    <div class="container">
      <div class="col-md-6 mx-auto mt-5">
        <div class="card shadow-lg">
            <div class="mt-5 mx-5 mb-5">
              <form @submit.prevent="submit">
                <h3>Password Reset Code</h3>
                <div class="mt-3">
                    <input v-model="formData.resetEmail" type="email" class="form-control" placeholder="your@email.com" required>
                </div>
                <div class="mt-3">
                    <button class="btn btn-primary float-end" type="submit">Send OTP</button>
                </div>
              </form>
        </div>
      </div> 
      </div>
    </div>
</template>