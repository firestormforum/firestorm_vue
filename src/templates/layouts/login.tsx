export default ({ props }: any) => {
  console.log(props)
  return (
    <main
      class = 'section -login'
    >
      <h1 class='top-title '>Forum with Vue, TypeScript and GraphQL</h1>
      <div class='pure-form pure-form-stacked pure-u-1'>
        <input
          class='input pure-input-1'
          id='email'
          placeholder=''
          type='email'
          vModel={props.email}
        />
        <input
          class='input pure-input-1'
          id='password'
          placeholder='Password'
          type='password'
          vModel={props.password}
        />
        <span class='pure-form-message'>
          <routerLink to='/signup'>Create account</routerLink>
        </span>
        <button class='pure-button pure-button-primary pure-input-1' onClick={() => props.methods.signin(props.email, props.password)}>
          Sign in
        </button>
      </div>
    </main>
  )
}
