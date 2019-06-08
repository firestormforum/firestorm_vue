import { Vue, Component } from 'vue-property-decorator'
import {
  Getter
} from 'vuex-class'
import ToolbarTemplate from '../templates/components/toolbar'
@Component({
  props: {
    title: String,
    back: Boolean,
    oculted: Boolean
  }
})
export default class Toolbar extends Vue {
  @Getter('getLogin') public getLogin: any

  public logout () {
    localStorage.removeItem('token')
    this.$router.push('/login')
    alert('See you soon :)')
  }

  public goBack () {
    this.$router.go(-1)
  }

  public render (h: any) {
    return (
      <ToolbarTemplate
        data={{
          ...this.$props,
          getLogin: this.getLogin
        }}
        methods={{
          backHandler: this.goBack,
          logoutHandler: this.logout
        }}
      />
    )
  }
}
