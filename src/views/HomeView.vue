<script setup lang="ts">
import { onMounted } from 'vue';
import axios from "axios";

onMounted( async () => {

    await fetch('https://localhost:7237/api/Authentication/home/')

})
</script>
<template>
    <h1>Home</h1>
</template>