import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseAPI, User, UserNameWithObject } from '../models/modelGetComponent';

@Injectable({ providedIn: 'root' })
export class UsersService {

    private readonly endpoint = '/api';

    private readonly http = inject(HttpClient);

    getDetails(): Observable<User> {
        return this.http.get<User>(`${this.endpoint}/user`);
    }


    getDetailsName(): Observable<string> {
        return this.http.get(`${this.endpoint}/user1`, { responseType: 'text' });
    }

    getDetailsNameWithObject(): Observable<UserNameWithObject> {
        return this.http.get<UserNameWithObject>(`${this.endpoint}/user2`);
    }

    getListOfUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${this.endpoint}/listUsers`);
    }

    getParams(message: string): Observable<ResponseAPI> {
        const params = new HttpParams().set('message', message);

        return this.http.get<ResponseAPI>(`${this.endpoint}/params/param`, { params });
    }

    getParams2(message: string, page: string): Observable<ResponseAPI> {
        const params = new HttpParams().set('message', message).set('page', page);

        return this.http.get<ResponseAPI>(`${this.endpoint}/params/param2`, { params });
    }

    getParams3(message: string, page: string): Observable<ResponseAPI> {
        const params = new HttpParams().set('message', message).set('page', page);

        return this.http.get<ResponseAPI>(`${this.endpoint}/params/param3`, { params });
    }

    getPath(message: string): Observable<string> {
        return this.http.get(`${this.endpoint}/path/${message}`, { responseType: 'text' });
    }

    ////POST REQUESTS
    
    createUser(user: User): Observable<User> {
        return this.http.post<User>(`${this.endpoint}/path/create`, user);
    }
}
