
export default ({ props, children }: any) => {

  return (
    <ul class='tab-panel'>
      <li
        class={`tab ${!props.preview && 'active'}`}
        onClick={() => props.showPreview()}
      >
        <h3>Editor</h3>
      </li>
      <li
        class={`tab ${props.preview && 'active'}`}
        onClick={() => props.showEditor()}
      >
        <h3>Preview</h3>
      </li>
    </ul>
  )
}
