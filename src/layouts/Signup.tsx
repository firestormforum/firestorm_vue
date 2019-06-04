import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import Mutations from '../graphql/Mutations'
import SignupTemplate from '../templates/layouts/signup'
const Mutation = new Mutations()

@Component({
  name: 'signup'
})
export default class Signup extends Vue {
  email: string = ''
  password: string = ''
  name: string = ''
  username: string = ''

  signup (name, email, password, username) {
    this.$apollo
      .mutate({
        mutation: Mutation.createUser(),
        variables: {
          email,
          password,
          name,
          username
        }
      })
      .then(async (response) => {
        alert(`${this.name} was registered successfully`)
        await this.signin(email, password)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  signin (email, password) {
    this.$apollo
      .mutate({
        mutation: Mutation.authenticate(),
        variables: {
          email,
          password
        }
      })
      .then((response) => {
        localStorage.setItem('token', response.data.authenticate)
        this.$router.push('/')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render (h: any) {
    return (
      <SignupTemplate
        class='section'
        data={{
          ...this.$data,
          email: this.email,
          password: this.password,
          name: this.name,
          username: this.username
        }}
        methods={{
          signup: this.signup
        }}
      />
    )
  }
}
