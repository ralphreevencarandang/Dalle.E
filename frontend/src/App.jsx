import {BrowserRouter, Routes, Route} from 'react-router'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import CreatePost from './pages/CreatePost'
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Header/>
          <div className='max-container padding-x'>
            <Routes>

              <Route path='/' element={<HomePage/>}/>
              <Route path='/create-post' element={<CreatePost/>}/>
                
            </Routes>
          </div>
      </BrowserRouter>

    </>
  )
}

export default App
