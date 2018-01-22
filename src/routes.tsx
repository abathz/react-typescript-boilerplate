import * as React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Hello from './container/Hello'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path='/' component={Hello} />
    </BrowserRouter>
  )
}


export default Routes
