import Hero from './components/hero'
import About from './components/about'
import Features from './components/features'
import Cards from './components/cards'
import Download from './components/download'
import Footer from './components/footer'
import Cursor from './components/cursor'
import { useGlobalStateContext, useGlobalDispatchContext } from './context/globalContext'

function App() {

  const { cursorStyle } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const onCursor = cursorType => {
    cursorType = (cursorStyle.includes(cursorType) && cursorType) || false
    dispatch({ type: 'CURSOR_TYPE', cursorType: cursorType })
  }

  return (
    <div className="App">
      <Hero onCursor={onCursor}/>
      <About onCursor={onCursor}/>
      <Features onCursor={onCursor}/>
      <Cards onCursor={onCursor}/>
      <Download onCursor={onCursor}/>
      <Footer onCursor={onCursor}/>
      <Cursor onCursor={onCursor}/>
    </div>
  );
}

export default App;
