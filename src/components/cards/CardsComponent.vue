<template>
    <div class="my_card">
      <div class=" content top">
          <h3>{{ type}}</h3>
          <p class="percentage"> <i class="fa fa-arrow-up "></i> {{ percentage }}</p>
      </div>
      <div class=" content footer">
          <i :class="['fa icon', icon]"></i>
         <p class="qtd">{{ qtd }}</p>
      </div>
    </div>
</template>

<script>

export default {
    name:'CardsComponent',
   props:{
       type :String,
       percentage : String,
       qtd : Number,
       icon : String,
   }

}
</script>

<style  lang="scss" src="./style.scss" scoped />



 // <i :class="['fa ico', icon]"></i>