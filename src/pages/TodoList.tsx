import React from 'react'
import { useRecoilValue } from 'recoil';
import { filteredTodoListState, todoListState } from '../atoms/TodoAtoms';
import { TodoItem } from '../components/TodoItem';
import { TodoItemCreator } from '../components/TodoItemCreator';
import { TodoListFilters } from '../components/TodoListFilters';
import { TodoListStats } from '../components/TodoListStats';

export function TodoList() {
    const todoList = useRecoilValue(filteredTodoListState);

    return (
      <>
        <div className='bg-slate-500 w-96 m-auto mt-44 p-4'>
            <TodoListStats />
            <TodoListFilters />
            <TodoItemCreator />
    
            {todoList.map((todoItem:any) => (
            <TodoItem key={todoItem.id} item={todoItem} />
            ))}
        </div>

      </>
    );
  }
