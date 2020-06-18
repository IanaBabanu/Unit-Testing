import { addUser, deleteUser, updateUser } from '../actions/user-actions';

import userReducer from './user-reducer';

describe('user-reducer', () => {
  it('should return default state', () => {
    const initialState = undefined;
    const action = { type: 'an action' };

    const expectedState = {};
    const actualState = userReducer(initialState, action);

    expect(actualState).toEqual(expectedState)
  });
  it('should add new user', () => {
    const initialState = undefined;
    const action = addUser({id: 'some id', name: 'name', email: 'joe.doe@mail.com'});

    const expectedState = {'some id': {id: 'some id', name: 'name', email: 'joe.doe@mail.com'}};
    const actualState = userReducer(initialState, action);

    expect(actualState).toEqual(expectedState);
  });

  it('should update user by id', () => {
    const initialState = {'some id': {id: 'some id', name: 'name', email: 'john.doe@mail.com'}};
    const action = updateUser('some id' ,{id: 'some id', name: 'name', email: 'joe.doe@mail.com'});

    const expectedState = {'some id': {id: 'some id', name: 'name', email: 'joe.doe@mail.com'}};
    const actualState = userReducer(initialState, action);

    expect(actualState).toEqual(expectedState);
  });

  it('should delete user by id', () => {
    const initialState = {'some id': {id: 'some id', name: 'name', email: 'john.doe@mail.com'}};
    const action = deleteUser('some id');

    const expectedState = {};
    const actualState = userReducer(initialState, action);

    expect(actualState).toEqual(expectedState);

  })
});
