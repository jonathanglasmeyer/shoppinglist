import React from 'react';
import ParseComponent from 'parse-react/class';
import {Parse} from 'parse';
import ParseReact from 'parse-react';

export default class ShoppingList extends ParseComponent {
  static propTypes = {

  }

  observe() {
    const query = new Parse.Query('Todo');
    query.equalTo('user', Parse.User.current());
    query.ascending('updatedAt');
    return {
      todos: query
    };
  }

  render() {

    return <div>
      <form onSubmit={::this._onAddItem}>
        <input type='text' ref='input' />
        <button type='submit'>Add Item</button>
      </form>
      <ul>
        {this.data.todos.map(todo => <li key={todo.id}>{todo.name}</li>)}
      </ul>
    </div>;
  }

  _onAddItem(e) {
    e.preventDefault();
    const inputField = React.findDOMNode(this.refs.input);
    const input = inputField.value;

    inputField.value = '';

    if (!input) {
      return;
    }

    console.info('[ShoppingList.jsx] ', input);

    ParseReact.Mutation.Create('Todo', {
      name: input,
      done: false,
      user: Parse.User.current().toPlainObject()
    }).dispatch();
  }

}
