<script setup lang="ts">
import { onMounted } from 'vue';

import httpHistoryImg from '@/assets/http-history.svg';

onMounted(() => {
   window.onbeforeunload = (e) => {
    const event = e || window.event;
    event.preventDefault();
    event.returnValue = false;
  
    return '';
  }
})

</script>
<template>
  <section>
    <page-header 
      title="HTTP的发展史" 
      description="http是随着时代的发展,顺应时代的需求而不断的完善的">
    </page-header>
  
    <img :src="httpHistoryImg" width="900" alt="http发展史" loading="eager">
   
  </section>
</template>
<style>
</style>