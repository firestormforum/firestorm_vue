import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import Queries from '../graphql/Queries'
import Toolbar from '../components/Toolbar'
import {
  Getter
} from 'vuex-class'
import TimeFormat from '../helpers/timeFormat'

let Query = new Queries()

@Component({
  components: {
    Toolbar
  },
  props: {
    id: String
  },
  template: require('../templates/pages/threads.pug')
})
export default class Threads extends Vue {
  @Getter('getLogin') getLogin
  categoryQuery: any = Query.category()
  timeF: any = new TimeFormat()

  goToThread (categoryId: string, threadId: string) {
    this.$router.push(`/categories/${categoryId}/threads/${threadId}`)
  }
}