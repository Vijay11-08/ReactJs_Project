import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PureFunctions from './Lecture31_12_2024/PureFunctions'


createRoot(document.getElementById('root')).render(
  <StrictMode>
<PureFunctions var1={true} var2={"Hello world!"}/>
<PureFunctions var1={false} var2={"Hello Vijay!"}/>

  </StrictMode>,
)



