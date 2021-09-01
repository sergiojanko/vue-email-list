console.log('Vue', Vue);

Vue.config.devtools = true;

const app = new Vue({
    el: "#app",
    data: {
        numEmail: 10,
        emails:[],

    },
    methods: {},
    created() {
        for (let i = 0; i < this.numEmail; i++){
                axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
            console.log(res);
            this.emails.push(res.data.response);
      })
        }
  },
});