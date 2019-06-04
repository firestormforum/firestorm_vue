import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import Queries from '../graphql/Queries'
import {
  Getter
} from 'vuex-class'
import ThreadsTemplate from '../templates/pages/threads'
let Query = new Queries()

@Component({
  apollo: {
    category: {
      query: Query.category,
      variables() {
        return {
          id: this.id
        }
      },
      result (result) {
        this.$data.loading = false
      },
      error(error) {
        this.loading = false
        console.error("We've got an error!", error)
      },
      fetchPolicy: 'network-only'
    }
  },
  props: {
    id: String
  }
})
export default class Threads extends Vue {
  @Getter("getLogin") getLogin: any
  loading: boolean = true
  category: any

  render(h: any) {
    if (this.category) {
      return (
        <ThreadsTemplate
          class="section"
          data={{
            ...this.$data,
            getLogin: this.getLogin,
            threads:
              this.category && this.category.threads
                ? this.category.threads
                : []
          }}
          methods={{
            routeHandler: (threadId: string) => {
              this.$router.push(
                `/categories/${this.category.id}/threads/${threadId}`
              )
            }
          }}
        />
      )
    } else {
      return null
    }
  }
}