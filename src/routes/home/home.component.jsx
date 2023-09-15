import Diretory from '/src/components/directory/Directory.component'
import jacketImg from '/src/assets/categories images/images (49).jpeg'
import sneakersImg from '/src/assets/categories images/images (50).jpeg'
import menImg from '/src/assets/categories images/images (52).jpeg'
import womenImg from '/src/assets/categories images/images (58).jpeg'
import hatImg from '/src/assets/categories images/photo-1529958030586-3aae4ca485ff.jpeg'
import { v4 as uuidv4 } from 'uuid'



let category =[
  {
      id:uuidv4(),
      title: 'hats',
      imageUrl:hatImg
  },
  {
      id:uuidv4(),
      title: 'jackets',
      imageUrl:jacketImg
  },
  {
      id:uuidv4(),
      title: 'sneakers',
      imageUrl:sneakersImg
  },
  {
      id:uuidv4(),
      title: 'womens',
      imageUrl:womenImg
  },
  {
      id:uuidv4(),
      title: 'mens',
      imageUrl:menImg
  },
]

function Home() {
  return (
    <>
   <Diretory category={category}/>
      
    </>
  )
}

export default Home
