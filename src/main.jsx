import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyCustButton from './Lecture31_12_2024/PureFunction2'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyCustButton/>
    <br />
    <MyCustButton var1={true}/>
    <br />
    <MyCustButton var2={"IT - A "}/>
    <br />
    <MyCustButton var1={true} var2={"B.Tech (IT-A) "}/>
  </StrictMode>,
)



