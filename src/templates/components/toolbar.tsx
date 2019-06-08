export default ({ props }: any) => {
  return (
    <nav class={`menu-top -${props.data.oculted && 'oculted'}`}>
      <section class='container'>
        <article class='links'>
          {props.data.back && (
            <a onClick={props.methods.backHandler} class='link'>
              <i class='fas fa-arrow-left' />
            </a>
          )}
          <p class='link'>{props.data.title}</p>
        </article>
        {props.data.getLogin ? (
          <a
            class='link'
            onClick={props.methods.logoutHandler}
            title='Logout'
          >
            <i class='fas fa-user' />
          </a>
        ) : (
          <routerLink class='link' to='/login' title='Login'>
            <i class='fas fa-user' />
          </routerLink>
        )}
      </section>
    </nav>
  )
}



