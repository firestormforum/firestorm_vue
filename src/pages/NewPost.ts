import { Vue } from 'vue-property-decorator'
import VueMarkdown from 'vue-markdown'
import Component from 'vue-class-component'
import Mutations from '../graphql/Mutations'
import { Prop } from 'vue-property-decorator'
import TimeFormat from '../helpers/timeFormat'
import Toolbar from '../components/Toolbar'
import { Getter } from 'vuex-class'

let Mutation = new Mutations()

@Component({
  name: 'newPost',
  components: {
    Toolbar,
    VueMarkdown
  },
  template: require('../templates/pages/newPost.pug')
})
export default class NewPost extends Vue {
  @Prop()
  threadId!: string
  @Prop()
  id!: string
  @Getter('getLogin') getLogin
  preview: boolean = false
  postBody: string = ''
  newPostMutation: any = Mutation.createPost()
  timeF: any = new TimeFormat()

  createPost (mutate: any) {
    if (this.postBody !== '') mutate()
    else alert('Error: Empty post')
  }

  postSuccess (result: any) {
    if (result.data.createPost) this.$router.push(`/categories/${this.id}/threads/${this.threadId}`)
  }

  postError (error: any) {
    console.log(error)
  }

  editPost () {
    this.preview = false
  }

  previewPost () {
    this.preview = true
  }
}