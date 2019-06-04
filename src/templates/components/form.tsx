export default ({ props }: any) => {
  const mutate = () => {
    if (props.title !== '') {
      props.apollo.mutate({
        variables: { title: props.title },
        mutation: props.mutation
      })
      .then((result) => {
        if (result.data.createCategory) {
          props.sucessHandler(result)
        }
      })
      .catch((error) => {
        if (error.graphQLErrors) {
          props.errorHandler(error)
        }
      })
    } else {
      alert('Title is required')
    }
  }
  return (
    <div class='pure-form -categories'>
      <input
        class='input pure-input-1'
        id='title'
        placeholder='Title'
        type='text'
        vModel={props.title}
      />
      <button class='pure-button pure-button-primary' onClick={() => mutate()}>
        Create Category
      </button>
    </div>
  )
}
