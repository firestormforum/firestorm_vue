import Vue from 'vue'
import Component from 'vue-class-component'
import Mutations from '../graphql/Mutations'

let Mutation = new Mutations()

@Component({
  name: 'login',
  template: require('../templates/layouts/login.pug')
})
export default class Login extends Vue {
  email: string = ''
  password: string = ''

  signin (): void {
    this.$apollo
      .mutate({
        mutation: Mutation.authenticate(),
        variables: {
          email: this.email,
          password: this.password
        }
      })
      .then(response => {
        alert('Welcome')
        localStorage.setItem('token', response.data.authenticate)
        this.$router.push('/')
      })
      .catch(error => {
        alert(error)
        console.log(error)
      })
  }
}