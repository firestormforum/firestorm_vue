import TimeFormat from '../../helpers/timeFormat'
import Gravatar from "vue-gravatar"

export default ({ props }: any) => {
  const timeF: any = new TimeFormat()
  if (props.list && props.list.length > 0) {
    return (
      <ul class="thread-list">
        {props.list.map(item => {
          return (
            <li
              class={`thread ${props.post && "-thread-post"}`}
              id={item.id}
              key={item.id}
              onClick={() => {
                if (!props.post) props.routeHandler(item.id);
              }}
            >
              {props.post ? (
                <div class="thread-side -post">
                  <Gravatar
                    class="icon -gravatar"
                    email={item.user.email}
                    size={60}
                    default-img="mm"
                  />
                </div>
              ) : (
                <div class="thread-side">
                  <i class="icon fas fa-tags" />
                </div>
              )}
              {item.insertedAt ? (
                <section class="thread-main">
                  <header class="thread-header">
                    <span class={props.post && "user"}>
                      {props.post ? item.user.name : item.title}
                    </span>
                    <span class="date">
                      {timeF.formatDate(item.insertedAt)}
                    </span>
                  </header>
                  {!props.post && (
                    <dl class="thread-main-list">
                      <dt>Last Updated</dt>
                      <dd>{timeF.formatDate(item.updatedAt)}</dd>
                    </dl>
                  )}
                  {props.post && (
                    <vue-markdown class="markdown-style">
                      {item.body}
                    </vue-markdown>
                  )}
                </section>
              ) : (
                <section class="thread-main">
                  <header class="thread-header">{item.title}</header>
                </section>
              )}
            </li>
          )
        })}
      </ul>
    )
  } else {
    return (
      <ul class="thread-list">
        <li class="thread">
          <section class="thread-main">
            <header class="thread-header">
              There aren 't any records to display
            </header>
          </section>
        </li>
      </ul>
    )
  }
}