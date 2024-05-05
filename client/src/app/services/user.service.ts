import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { User, UserEvent } from '../utils/interfaces';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<UserEvent, User> {

  constructor(private api: ApiService) {
    super()
  }

  login(body: User) {
    this._isLoading.next(true);

    this.api.post<User, User>("/auth/login", body, {withCredentials: true}).subscribe({
      next: (res) => {
        if (res.data) {
          this.value = res.data[0];
        }
        
        if (res.message !== "Login Successful") this._errorMessage.next(res.message);
        else this._successMessage.next(res.message);
        this._isLoading.next(false);
        this._error.next(null);
        this._events.next("GetUser");
      },
      error: (err) => {
        this._isLoading.next(false);
        this._error.next(err);
        this._events.next("GetUserError");
      }
    });
  }
}
