import Vue from 'vue'
import Component from 'vue-class-component'
import Mutations from '../graphql/Mutations'
import {
  Mutation
} from 'vuex-class'
let MutationF = new Mutations()

@Component({
  name: "login",
  template: require("../templates/layouts/login.pug")
})
export default class Login extends Vue {
  email: string = ''
  password: string = ''
  @Mutation('setLogin') setLogin: any

  signin(): void {
    this.$apollo
      .mutate({
        mutation: MutationF.authenticate(),
        variables: {
          email: this.email,
          password: this.password
        }
      })
      .then(response => {
        if (response.data.authenticate) {
          this.setLogin(true)
          localStorage.setItem("token", response.data.authenticate)
          alert("Welcome")
        }
        this.$router.push("/")
      })
      .catch(error => {
        alert(error)
        console.log(error)
      })
  }
}