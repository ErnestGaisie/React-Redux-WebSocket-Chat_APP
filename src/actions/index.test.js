import { addMessage, addUser } from '../actions'
import * as types from '../constants/ActionTypes'

describe('adding a message', () => {
  it('should create an action to add a message with id 0', () => {
    const message = 'Something'
    const action = {
      type: types.ADD_MESSAGE,
      message,
      author: 'Me',
      id: 0
    }
    expect(addMessage(message)).toEqual(action)
  })
})

describe('adding a second message', () => {
  it('should create an action to add a message with id 1', () => {
    const message = 'Something'
    const action = {
      type: types.ADD_MESSAGE,
      message,
      author: 'Me',
      id: 1
    }
    expect(addMessage(message)).toEqual(action)
  })
})

