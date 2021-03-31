<template>
   <h1>{{title}}</h1> 
</template>

<script>
import Button from './Button';

 export default {
     name: 'Header',
     props: {
         title:{
             type: String,
             default: 'Default text'
         }
     }, 
     components: {
         Button,
     }
 }


</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

</style>