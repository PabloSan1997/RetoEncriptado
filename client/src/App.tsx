import AreaBotones from "./components/AreaBotones"
import AreaRespusta from "./components/AreaRespusta"
import { AreaTexto } from "./components/AreaTexto"
import Layout from "./components/Layout"


function App() {


  return (
    <Layout>
      <AreaTexto>
        <AreaBotones />
      </AreaTexto>
      <AreaRespusta />
    </Layout>
  )
}

export default App
