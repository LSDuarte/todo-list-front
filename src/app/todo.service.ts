import { Injectable } from '@angular/core';
import {Todo} from './todo';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl: string = 'http://localhost:8282/api/todos';

  constructor(
    private http: HttpClient
  ) { }

  salvar(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, todo);
  }

  listar(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }
}
