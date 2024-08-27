import { BrowserRouter,Route,Routes } from "react-router-dom"
import { Signup } from "./components/Signup"
import { Signin } from "./components/Signin"
import { Blog } from "./components/Blog"
import { Publish } from "./components/Publish"
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup/>}
        ></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/publish" element={<Publish/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
