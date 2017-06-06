import {Todo} from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('check constructor value', () => {
    let todo = new Todo({
      title: 'test',
      complete: true
    })
    expect(todo.title).toEqual('test');
    expect(todo.complete).toEqual(true);
  });
});
