import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'

@Component({
  name: 'Category',
  render (h) {
    return (
      <router-view/>
    )
  }
})
export default class Category extends Vue {
}
