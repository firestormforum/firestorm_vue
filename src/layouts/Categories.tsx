import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'

@Component({
  name: 'categories',
  render (h) {
    return (
      <router-view/>
    )
  }
})
export default class Categories extends Vue {
}
