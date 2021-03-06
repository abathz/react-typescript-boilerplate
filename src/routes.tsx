import * as React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import App from 'container/App'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path='/' component={App} />
    </BrowserRouter>
  )
}

export default Routes
