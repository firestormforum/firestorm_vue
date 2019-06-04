import Vue from 'vue'
import Component from 'vue-class-component'
import Queries from '../graphql/Queries'
import Mutations from '../graphql/Mutations'
import {
  Getter
} from 'vuex-class'
import CategoriesTemplate from '../templates/pages/categories'

const Mutation = new Mutations()
const Query = new Queries()

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
        console.log(`We've got an error!`, error)
      },
      fetchPolicy: 'network-only'
    }
  },
  name: 'Categories'
})
export default class Categories extends Vue {
  @Getter('getLogin') getLogin: any
  active: number = 1
  page: number = 0
  perPage: number = 20
  categories: any = ''
  title: string = ''
  newCategoryMutation: any = Mutation.createCategory()

  categorySuccess (result: any) {
    if (result.data.createCategory) {
      alert('Category created successfully!')
      this.$apollo.queries.categories.refetch()
    }
  }

  categoryError (error: any) {
    console.log(error)
  }

  goToCategory (categoryId) {
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

  render (h: any) {
    return (
      <CategoriesTemplate
        class='section'
        data={{
          ...this.$data,
          categories:
            this.categories &&
            this.categories.entries &&
            this.categories.entries.length > 0
              ? this.categories.entries
              : [],
          getLogin: this.getLogin,
          totalPages: this.categories ? this.categories.totalPages : 0
        }}
        methods={{
          apollo: this.$apollo,
          mutation: this.newCategoryMutation,
          sucessHandler: this.categorySuccess,
          errorHandler: this.categoryError,
          prevPage: this.prevPage,
          goToPage: this.goToPage,
          nextPage: this.nextPage,
          routeHandler: this.goToCategory
        }}
      />
    )
  }
}
