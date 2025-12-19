import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import './styles/layout.css'
import './styles/element.css'
import SystemApp from './AppRouter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SystemApp />
  </StrictMode>,
)
