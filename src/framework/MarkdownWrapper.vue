<script setup>
import {
  onMounted,
  ref,
  getCurrentInstance,
} from 'vue';

defineProps({
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  content: {
    type: String,
    default: '',
  },
})

const markdownHTML = ref("");
onMounted(() => {
  const instance = getCurrentInstance();
  if (instance.proxy.$markdown) {
    markdownHTML.value = instance.proxy.$markdown.render(instance.proxy.content);
  } else {
    console.error('Markdown renderer is not available on the component instance');
  }
  console.log('$markdown',this)

})
</script>
<template>
  <section>
    <page-header :title="title" :description="description"> </page-header>
    <div v-html="markdownHTML"></div>
  </section>
</template>
