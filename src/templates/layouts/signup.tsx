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
          onChange={(event: any) => {props.name = event.target.value}}
        />
        <input
          class='input pure-input-1'
          id='email'
          placeholder='Email'
          type='email'
          onChange={(event: any) => {props.email = event.target.value}}
        />
        <input
          class='input pure-input-1'
          id='password'
          placeholder='Password'
          type='password'
          onChange={(event: any) => {props.password = event.target.value}}
        />
        <input
          class='input pure-input-1'
          id='username'
          placeholder='Username'
          type='text'
          onChange={(event: any) => {props.username = event.target.value}}
        />
      </div>
      <button class='pure-button pure-button-primary pure-input-1' onClick={() => props.methods.signup(props.name, props.email, props.password, props.username)}>
        Sign up
      </button>
    </main>
  )
}
