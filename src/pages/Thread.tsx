import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import Queries from '../graphql/Queries'
import { Getter } from 'vuex-class'
import vueMarkdown from 'vue-markdown'
import ThreadTemplate from '../templates/pages/thread'
const Query = new Queries()

@Component({
  apollo: {
    thread: {
      query: Query.thread,
      variables () {
        return {
          id: this.threadId
        }
      },
      skip () {
        return !this.threadId
      },
      error (error) {
        console.log(`We've got an error!`, error)
      },
      fetchPolicy: 'network-only'
    }
  },
  components: {
    vueMarkdown
  },
  name: 'thread',
  props: {
    threadId: String
  }
})
export default class Thread extends Vue {
  @Getter('getLogin') getLogin: any
  thread: any

  render (h: any) {
    if (this.thread) {
      return (
        <ThreadTemplate
          data={{
            ...this.$props,
            thread: this.thread,
            posts: this.thread.posts,
            getLogin: this.getLogin
          }}
        />
      )
    } else {
      return `Thread doesn't exist`
    }
  }
}
