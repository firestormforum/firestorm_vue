import { Vue, Component } from 'vue-property-decorator'
import {
  Getter
} from 'vuex-class'

@Component({
  props: {
    title: String,
    back: Boolean
  },
  template: require('../templates/components/toolbar.pug')
})
export default class Toolbar extends Vue {
  @Getter('getLogin') getLogin: any

  logout () {
    localStorage.removeItem('token')
    this.$router.push('/login')
    alert('See you soon :)')
  }

  goBack () {
    this.$router.go(-1)
  }
}
