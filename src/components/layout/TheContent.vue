<template>
   <div class="content">
      <router-view></router-view>
   </div>
</template>
<script>
import employeeList from "../../views/employee/employeeList";
export default{
   name:"TheContent",
   components:{
      // eslint-disable-next-line vue/no-unused-components
      employeeList
   }
}
</script>
<style></style>