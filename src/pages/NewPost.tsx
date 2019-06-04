import { Vue } from 'vue-property-decorator'
import VueMarkdown from 'vue-markdown'
import Component from 'vue-class-component'
import Mutations from '../graphql/Mutations'
import { Prop } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import NewPostTemplate from '../templates/pages/newPost'
const Mutation = new Mutations()

@Component({
  name: 'newPost',
  components: {
    VueMarkdown
  }
})
export default class NewPost extends Vue {
  @Prop()
  threadId!: string
  @Prop()
  id!: string
  @Getter('getLogin') getLogin: any
  postBody: string = ''
  preview: boolean = false

  postSuccess (result: any) {
    if (result.data.createPost) {
      this.$router.push(`/categories/${this.id}/threads/${this.threadId}`)
    }
  }

  postError (error: any) {
    console.log(error)
  }

  getPostBody (postBody) {
    this.postBody = postBody
  }

  showPreview () {
    this.preview = false
  }

  showEditor () {
    this.preview = true
  }

  mutate () {
    if (this.postBody !== '') {
      this.$apollo.mutate({
        variables: {
          body: this.postBody,
          id: this.threadId
        },
        mutation: Mutation.createPost()
      })
      .then((result) => {
        if (result.data.createPost) {
          this.postSuccess(result)
        }
      })
      .catch((error) => {
        if (error.graphQLErrors) {
          this.postError(error)
        }
      })
    } else {
      alert(`Post can't be blank`)
    }
  }

  render (h: any) {
    return (
      <NewPostTemplate
        data={{
          ...this.$props,
          ...this.$data,
          getLogin: this.getLogin
        }}
        methods={{
          showPreview: this.showPreview,
          showEditor: this.showEditor
        }}
      >
        {!this.preview ? (
          <div class='thread-comment-box'>
            <textarea
              class='textarea'
              id='postBody'
              placeholder='Please be friendly...'
              vModel={this.postBody}
            />
            <button
              class='pure-button -fixed pure-button-primary input'
              onClick={() => this.mutate()}
            >
              New Post
            </button>
          </div>
        ) : (
            <vue-markdown class='markdown-style -padding'>
              {this.postBody}
            </vue-markdown>
          )}
      </NewPostTemplate>
    )
  }
}
