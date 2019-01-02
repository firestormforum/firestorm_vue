import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'

@Component({
  name: 'Category',
  template: require('../templates/layouts/Category.pug')
})
export default class Category extends Vue {
}
