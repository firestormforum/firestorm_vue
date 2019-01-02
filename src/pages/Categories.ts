import Vue from 'vue'
import Component from 'vue-class-component'
import Queries from '../graphql/Queries'
import Mutations from '../graphql/Mutations'
import Toolbar from '../components/Toolbar'
import {
  Getter
} from 'vuex-class'

let Mutation = new Mutations()
let Query = new Queries()

@Component({
  apollo: {
    categories: {
      query: Query.categories,
      variables () {
        return {
          page: this.page,
          perPage: this.perPage
        }
      },
      error (error) {
        console.error('We\'ve got an error!', error)
      }
    }
  },
  components: {
    Toolbar
  },
  name: 'Categories',
  template: require('../templates/pages/categories.pug')
})
export default class Categories extends Vue {
  @Getter('getLogin') getLogin: any
  active: number = 1
  page: number = 0
  perPage: number = 10
  categories: any = ''
  title: string = ''
  newCategoryMutation: any = Mutation.createCategory()

  createCategory (mutate: any) {
    if (this.title !== '') {
      mutate()
    } else {
      alert('Name is required')
    }
  }

  categorySuccess (result: any) {
    alert('Category created successfully!')
    this.$apollo.queries.categories.refetch()
  }

  categoryError (error: any) {
    console.log(error)
  }

  goToCategory (categoryId: string) {
    this.$router.push(`/categories/${categoryId}`)
  }

  prevPage () {
    this.page = this.page - 1
    this.active = this.active - 1
  }

  goToPage (pageNumber: number) {
    if (pageNumber !== this.active) {
      this.page = pageNumber - 1
      this.active = pageNumber - 1
    }
  }

  nextPage () {
    this.page = this.page + 1
    this.active = this.active + 1
  }
}
