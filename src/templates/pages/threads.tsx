import ThreadsList from '../components/list'
import Toolbar from '../../components/Toolbar'

export default ({ props, data, children }: any) => {
  return (
    <main {...data}>
      <Toolbar back title={props.data.category.title} />
      {children}
      <ThreadsList
        list={props.data.threads}
        routeHandler={props.methods.routeHandler}
      />
      {props.data.getLogin && (
        <routerLink
          class='pure-button -fixed'
          to={`/categories/${props.data.category.id}/new-thread/`}
        >
          New Thread
        </routerLink>
      )}
    </main>
  )
}
