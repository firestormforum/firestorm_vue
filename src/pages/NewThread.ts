import { Vue, Component, Prop } from 'vue-property-decorator'
import Mutations from '../graphql/Mutations'
import Toolbar from '../components/Toolbar'
import {
  Getter
} from 'vuex-class'

let Mutation = new Mutations()

@Component({
  name: 'newThread',
  components: {
    Toolbar
  },
  template: require('../templates/pages/newThread.pug')
})
export default class NewThread extends Vue {
  @Prop()
  public id!: number
  @Getter('getLogin') getLogin
  createThread: any = Mutation.createThread()
  title: string = ''
  postBody: any = ''

  newThread (mutate: any) {
    if (this.title !== '' && this.postBody !== '') mutate()
    else alert('Error: Empty fields.')
  }

  threadSuccess (result: any) {
    alert('Thread created successfully')
    this.$router.push(`/categories/${this.id}/`)
  }

  threadError (error: any) {
    alert(error)
  }
}