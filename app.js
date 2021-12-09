const app = Vue.createApp({
  data() {
    return {
      firstName: "Riley",
      lastName: "Grant",
      age: "27",
      email: "riley@gmail.com",
      country: "USA",
      picture: "https://randomuser.me/api/portraits/women/75.jpg",
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();
      //console.log(results);

      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.age = results[0].dob.age;
      this.email = results[0].email;
      this.country = results[0].location.country;
      this.picture = results[0].picture.large;
    },
  },
});

app.mount("#app");
