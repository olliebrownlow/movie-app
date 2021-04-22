import Modal from './modal'

const Sidebar = (props) => {

  const { categories } = props

  return (
    <div>
      <Modal />
      <h1 className="my-4">{props.appName}</h1>
      <div className="list-group">
        { categories.map((category) => (
            <a 
              href="#"
              key={category.id}
              className="list-group-item">{category.name}
            </a>
            )
          )
        }
      </div> 
    </div>
  )
}

export default Sidebar
