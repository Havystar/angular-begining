import { Component, OnInit } from '@angular/core';


interface IToDo {
  name: string;
  done: boolean;
}
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent {
  todos: IToDo[] = [
    {
      name: "asd",
      done: false,
    },
    {
      name: "asd2",
      done: true,
    },
  ];

  addToDo(event: any): void {
    let todo: IToDo = { name: event.target.value, done: false };
    this.todos.push(todo);
  }
  setDone(toDo: IToDo) {
    toDo.done = !toDo.done;
  }
}
