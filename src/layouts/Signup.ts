import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import Mutations from '../graphql/Mutations'

let Mutation = new Mutations()

@Component({
  name: 'signup',
  template: require('../templates/layouts/signup.pug')
})
export default class Signup extends Vue {
  email: string = ''
  password: string = ''
  name: string = ''
  username: string = ''

  signup () {
    this.$apollo
      .mutate({
        mutation: Mutation.createUser(),
        variables: {
          email: this.email,
          password: this.password,
          name: this.name,
          username: this.username
        }
      })
      .then(async response => {
        alert(`${this.name} was registered successfully`)
        await this.signin()
      })
      .catch(error => {
        console.log(error)
      })
  }

  signin () {
    this.$apollo
      .mutate({
        mutation: Mutation.authenticate(),
        variables: {
          email: this.email,
          password: this.password
        }
      })
      .then(response => {
        localStorage.setItem('token', response.data.authenticate)
        this.$router.push('/')
      })
      .catch(error => {
        console.log(error)
      })
  }
}