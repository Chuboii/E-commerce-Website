import CategoryItems from "../categories/CategoryItems"
import './Directory.scss'

let Diretory = ({category}) =>{

return(
<div className="category-container">
  {category.map(el =>{
        return(
            <CategoryItems key={el.id} list={el} />
        )
      })
  }
  </div>
)
}

export default Diretory