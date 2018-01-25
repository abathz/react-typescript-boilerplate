export type Action = {
  type: string
  payload?: string
}

export const increment = (): Action => {
  console.log('yayaya')
  return {
    type: 'INCREMENT',
    payload: 'Success INCREMENT'
  }
}

export const decrement = (): Action => {
  return {
    type: 'DECREMENT',
    payload: 'Success DECREMENT'
  }
}
