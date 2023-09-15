import './CategoryItems.scss'
export default function CategoryItems({list}){

    let {title, imageUrl} = list
    return (
       
        <div className="box-container">
        <div className="box">
         <img src={imageUrl}/>
         <button>
         <p>{title}</p>
         <p>shop now</p>
         </button>
        </div>
        </div>
    )
}