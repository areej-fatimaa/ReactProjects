import Accordion from './components/Accordian/index.jsx'
import RandomColour from './components/Random colour/index.jsx'
import StarRating from './components/StarRating/index.jsx'
import ImageSlider from './components/ImageSlider/index.jsx'
import LoadMore from './components/LoadMore/index.jsx'
import TreeView from './components/TreeView/index.jsx'
import sideMenu from './components/TreeView/data.js'

function App() {

  return (
    <div>
      {/* <Accordion />
      <RandomColour/>
      <StarRating/>
      <ImageSlider url="https://picsum.photos/v2/list" limit={5} page={1} />
      <LoadMore /> */}
      <TreeView menus={sideMenu} />
    </div>
  )
}

export default App
