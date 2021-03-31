<template>
    <button @click="onClick()" class="btn" :style="{ background: color }">{{ text }}</button>
</template>

<script>
export default {
   name: 'Button' ,
   props: {
       text: {
           type: String,
       },
       color: {
           type: String,
       }
   },
   methods:{
       onClick() {
           alert('Clicked');
       }
   }
}
</script>