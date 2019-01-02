import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'

@Component({
  name: 'categories',
  template: require('../templates/layouts/categories.pug')
})
export default class Categories extends Vue {
}
