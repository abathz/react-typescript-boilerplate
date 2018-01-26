export type Action = {
  type: string
  payload?: any
}

export enum ActionType {
  INC = 'INCREMENT',
  DEC = 'DECREMENT'
}
