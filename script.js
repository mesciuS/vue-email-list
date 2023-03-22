const { createApp } = Vue

createApp({
  data() {
    return {
      userEmail: '',
    }
},
    mounted() {
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res)=> {
    console.log(res);

    this.userEmail = res.data.response;
    });
    },
}).mount('#app')