declare module "*.vue" {
  import Vue from "vue"
  export default Vue
}

declare module "CategoriesModule" {
  interface Categories {
    active: number
    page: number
    perPage: number
    categories: object
    title: string
    newCategoryMutation: any
  }
}
