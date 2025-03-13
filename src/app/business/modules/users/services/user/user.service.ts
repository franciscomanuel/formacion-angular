import { Injectable } from '@angular/core';
import { User } from '../../models/user.interface';
import { Observable, of } from 'rxjs';

const USERS_LIST: User[] = [
  {
    id: 1,
    name: 'Fran',
    surname: 'Sanchez',
    email: 'fs@gmail.com',
    phone: 1,
  },
  {
    id: 2,
    name: 'Pepito',
    surname: 'Perez',
    email: 'pp@gmail.com',
    phone: 2,
  },
  {
    id: 3,
    name: 'Sonia',
    surname: 'Morales',
    email: 'sm@gmail.com',
    phone: 3,
  },
  {
    id: 4,
    name: 'Lorena',
    surname: 'Cuberos',
    email: 'lc@gmail.com',
    phone: 4,
  },
  {
    id: 5,
    name: 'Sergio',
    surname: 'Romero',
    email: 'sr@gmail.com',
    phone: 5,
  },
  {
    id: 6,
    name: 'Ana',
    surname: 'Ramos',
    email: 'ar@gmail.com',
    phone: 6,
  },
];

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getAll(): Observable<User[]> {
    return of(USERS_LIST);
  }
}
