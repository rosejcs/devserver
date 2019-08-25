<template>
  <div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods:
  {
    getWea() {
      this.axios.get('/api/weatherInfo?key=03553c38e5811b71ca8d533ed3f556e9&city=110101').then(res=>{
        console.log(res);
      })
    },
    myApi() {
      this.axios.get('http://127.0.0.1:3000').then(res=>{
        console.log(res);
      })
    }
  },
  created() {
    // this.getWea();
    // this.$nextTick(()=>{
      this.myApi();
    // })
  },
  
}
</script>