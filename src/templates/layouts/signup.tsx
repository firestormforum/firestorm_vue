export default ({ props }: any) => {
  console.log(props)
  return (
    <main
      class = 'section'
    >
      <h1 class='top-title '>Signup</h1>
      <div class='pure-form pure-form-stacked pure-u-1'>
        <input
          class='input pure-input-1'
          id='name'
          placeholder='Name'
          type='text'
          vModel={props.name}
        />
        <input
          class='input pure-input-1'
          id='email'
          placeholder='Email'
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
        <input
          class='input pure-input-1'
          id='username'
          placeholder='Username'
          type='text'
          vModel={props.username}
        />
        <button class='pure-button pure-button-primary pure-input-1' onClick={() => props.methods.signup(props.name, props.email, props.password, props.username)}>
          Sign up
        </button>
      </div>
    </main>
  )
}
