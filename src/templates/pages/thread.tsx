import Toolbar from "../../components/Toolbar"
import PostsList from '../components/list'

export default ({ props }: any) => {
  return (
    <main class="section">
      <Toolbar back title={props.data.thread.title}/>
      <PostsList
        list={props.data.posts}
        post
      />
      {props.data.getLogin && (
        <routerLink
          class="pure-button -fixed"
          to={`/categories/${props.data.thread.category.id}/threads/${props.data.thread.id}/new-post`}
        >
          New Post
        </routerLink>
      )}
    </main>
  )
}