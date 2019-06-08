import Component from 'vue-class-component'
import { Watch, Vue } from 'vue-property-decorator'
import './assets/styles/app.styl'
import {
  Getter, Mutation
} from 'vuex-class'
import Toolbar from './components/Toolbar'

@Component({
  name: 'app',
  render (h) {
    return (
      <div id='app'>
        <Toolbar oculted />
        <router-view />
      </div>
    )
  }
})
export default class App extends Vue {
  @Getter('getLogin') getLogin: any
  @Mutation('setLogin') setLogin
  checkLogin (): void {
    if (localStorage.getItem('token')) {
      this.setLogin(true)
      if (this.getLogin === true && this.$router.currentRoute.name === 'login' || this.$router.currentRoute.name === 'signup') {
        alert('You already have a session please close it.')
        this.$router.push('/')
      }
    } else if (this.$router.currentRoute.name && this.$router.currentRoute.name === 'newThread' || this.$router.currentRoute.name === 'newPost') {
      this.setLogin(false)
      alert('You need to be logged in for this action.')
      this.$router.push('/')
    } else {
      this.setLogin(false)
    }
  }

  @Watch('$route', { immediate: true, deep: true })
    onUrlChange (newVal: any) {
      this.checkLogin()
    }

}
