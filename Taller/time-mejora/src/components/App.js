//eliminar logo.svg
import '../styles/App.css';
import {Shadow} from './Shadow';
import ShadowList from '../CardAPI/ShadowList'
//import work from'../assets/icon-work.svg'
//import play from'../assets/icon-play.svg'

function App() {
  //eliminar contenido del return
  // const theme='Shadow '+  props.theme
  return (
    <>
    {
        ShadowList.map(
          (card)=>
          <Shadow
          Type={card.Type}
          Houres={card.Houres}
          hrsweek={card.hrsweek}
          img={card.img}
          theme={card.theme}
          />
       )
      }
    {/* <Shadow/> */}
    </>
  );
}

export default App;
