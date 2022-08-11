<script setup lang="ts">
import { onMounted } from 'vue';
import axios from "axios";
import router from '@/router';

onMounted( async () => {
    try{
        axios.get('dashboard')
    }catch(e){
        await router.push('/login')
    }
    

})
const data = {}
const logout = async () => {
    await axios.post('logout', data, {
        withCredentials: true
    })
    axios.defaults.headers.common['Authorization'] = ''
    sessionStorage.removeItem('accessToken')
    sessionStorage.removeItem('refreshToken')
    await router.push('/login')
}
</script>
<template>
    <h1>Dashboard</h1>
    <button class="btn btn-danger" @click="logout">Logout</button>
</template>