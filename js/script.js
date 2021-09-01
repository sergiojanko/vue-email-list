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
    axios
      .get('https://flynn.boolean.careers/exercises/api/random/mail')
  },
});