const { createApp } = Vue

createApp({
  data() {
    return {
      userEmail: [],
    }
    
},
    mounted() {    
            for(let i = 0; i < 10; i++) {
                    
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res)=> {
                    console.log(res.data.response);
                    this.userEmail.push(res.data.response);
                });
            }
            setTimeout(() => {
                const timer = document.getElementById('wrap');
                timer.style.visibility = 'visible';
            }, 1500);
    },

    
}).mount('#app')