import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import Queries from '../graphql/Queries'
import Toolbar from '../components/Toolbar'
import { Getter } from 'vuex-class'
import TimeFormat from '../helpers/timeFormat'
import VueMarkdown from 'vue-markdown'
import Gravatar from 'vue-gravatar'

let Query = new Queries()

@Component({
  components: {
    VueMarkdown,
    Toolbar,
    Gravatar
  },
  name: 'thread',
  props: {
    threadId: String
  },
  template: require('../templates/pages/thread.pug')
})
export default class Thread extends Vue {
  @Getter('getLogin') getLogin
  threadQuery: any = Query.thread()
  timeF: any = new TimeFormat()
}