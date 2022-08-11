<script setup lang="ts">
import axios from 'axios';
import { onMounted } from 'vue';
onMounted(async() =>{
  axios.get('profile')
})
</script>
<template>
    <h1>Profile</h1>
</template>