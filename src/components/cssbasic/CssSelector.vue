<script setup lang="ts">

</script>
<template>
  <section class="component__css-selector">
    <page-header 
    title="css的选择器" 
    description="css选择器的作用, 让我们通过一些规则匹配到特定的DOM,对其设置样式或者修改">
    </page-header>

    <h2>css选择器的分类</h2>
    <p>css选择器可以分为4类,选择器、选择符、伪类和伪元素</p>

    <h3>1.选择器</h3>
      如id选择器<code>#id</code>,类选择器<code>.class</code>,标签选择器<code>body</code>
    <h3>2.选择符</h3>
      <ol>目前,css世界的选择符有5个
        <li>表示后代关系的空格( ) </li>
        <li>表示父子关系的( > ) </li>
        <li>表示相邻兄弟关系的加号 ( + ) </li>
        <li>表示兄弟关系的弯弯( ~ ) </li>
        <li>表示列关系的双管道 ( || ) </li>
      </ol>
      这5种选择符分别示意如下:
       
      <highlightjs
        language="css"
        code="
        /* 后代关系 */
        .parent img { object-fit: cover }

        /* 父子关系 */
        .parent > img { object-fit:contain }

        /* 相邻兄弟关系 */
        button + button { margin-left:16px }

        /* 兄弟关系 */
        button ~ button { margin-left: 16px }

         /* 列关系 */
        .col || td { color: red }"
        />
        

    <h3>3.伪类</h3>
      <p>伪类的特征是前面会有一个冒号: ,通常与浏览器行为或者用户行为关联,如</p>
      <highlightjs 
      language="css"
      code="a:hover{ color:red }"
      />
        
    <h3>4.伪元素</h3>
      <p>伪元素的特征是前面有两个冒号:: 会出现在DOM树上,常见的伪元素有<code>::before</code>、<code>::after</code>、<code>::first-letter</code>、<code>::first-line</code>等</p>
  </section>

</template>
<style lang="scss" scoped>
.component__css-selector{

}
</style>