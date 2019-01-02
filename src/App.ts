import Component from 'vue-class-component'
import { Watch, Vue } from 'vue-property-decorator'
import './assets/styles/app.styl'
import {
  Mutation
} from 'vuex-class'

@Component({
  name: 'app',
  template: require('@/templates/App.pug')
})
export default class App extends Vue {
  @Mutation('setLogin') setLogin
  checkLogin (): void {
    if (localStorage.getItem('token')) {
      this.setLogin(true)
      if (this.$router.currentRoute.name === 'login' || this.$router.currentRoute.name === 'signup') {
        alert('You already have a session please close it.')
        this.$router.push('/')
      }
    } else if (this.$router.currentRoute.name && this.$router.currentRoute.name === 'newThread' || this.$router.currentRoute.name === 'newPost') {
      alert('You need to be logged in for this action.')
      this.$router.push('/')
      this.setLogin(false)
    } else {
      this.setLogin(false)
    }
  }

  @Watch('$route', { immediate: true, deep: true })
    onUrlChange (newVal: any) {
      this.checkLogin()
    }
}
