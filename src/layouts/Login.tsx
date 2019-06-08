import Vue from 'vue'
import Component from 'vue-class-component'
import Mutations from '../graphql/Mutations'
import {
  Mutation
} from 'vuex-class'
import LoginTemplate from '../templates/layouts/login'
const MutationF = new Mutations()

@Component({
  name: 'login'
})
export default class Login extends Vue {
  email: string = ''
  password: string = ''
  @Mutation('setLogin') setLogin: any

  signin (email, password): void {
    this.$apollo
      .mutate({
        mutation: MutationF.authenticate(),
        variables: {
          email,
          password
        }
      })
      .then((response) => {
        if (response.data.authenticate) {
          this.setLogin(true)
          localStorage.setItem('token', response.data.authenticate)
          alert('Welcome')
        }
        this.$router.push('/')
      })
      .catch((error) => {
        alert(error)
        console.log(error)
      })
  }

  render (h: any) {
    return (
      <LoginTemplate
        class='section'
        data={{
          ...this.$data,
          email: this.email,
          password: this.password,
          setLogin: this.setLogin
        }}
        methods={{
          signin: this.signin
        }}
      />
    )
  }
}
