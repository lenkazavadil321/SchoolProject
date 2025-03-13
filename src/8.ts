import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SchoolProjectService {
constructor(private http: HttpClient) { }
getData(): Promise<any> {
return this.http.get('https://jsonplaceholder.typicode.com/posts').toPromise();
}
addUser(name: string, email: string): Promise<any> {
const user = { name, email };
return this.http.post('https://jsonplaceholder.typicode.com/users', user).toPromise();
}
editUser(id: number, name: string, email: string): Promise<any> {
const user = { id, name, email };
return this.http.put('https://jsonplaceholder.typicode.com/users/' + id, user).toPromise();
}
deleteUser(id: number): Promise<any> {
return this.http.delete('https://jsonplaceholder.typicode.com/users/' + id).toPromise();
}
}
