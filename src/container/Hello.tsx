import * as React from 'react'

export interface Props {
  compiler: string,
  framework: string
}

export default class Hello extends React.Component<Props, {}> {
  render () {
    return (
      <div className='container text-center'>
        <h1>Welcome to React TypeScript Boilerplate</h1>
      </div>
    )
  }
}
