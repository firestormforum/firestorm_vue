export default ({ props }: any) => {
  const showPages = () => {
    const pages: any = []
    for (let pageNumber: number = 1; pageNumber <= props.totalPages; pageNumber++) {
      pages.push(
        <li
          key={pageNumber}
          onClick={() => props.pageHandler(pageNumber)}
        >
          <a class={pageNumber === props.active ? 'link page active' : 'link page'}>{pageNumber}</a>
        </li>
      )
    }
    return pages
  }
  return (
    <ul
      class = 'st-pagination'
    >
      {props.page === 0 ? (
          <li>
            <i class='page fas fa-angle-left' />
          </li>
        ) : (
          <li
            onClick={() => props.handlePrevPage()}
          >
            <a class='link page'>
              < i class = 'fas fa-angle-left' / >
            </a>
          </li>
        )
      }
      {showPages()}
      {props.page === props.totalPages - 1 ? (
        <li>
          <i class='page fas fa-angle-right' />
        </li>
      ) : (
        <li
          onClick={() => props.handleNextPage()}
        >
          <a class='link page'>
            < i class = 'fas fa-angle-right' / >
          </a>
        </li>
      )}
    </ul>
  )
}
