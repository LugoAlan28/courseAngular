import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResponseAPI, User, UserNameWithObject } from '../../../models/modelGetComponent';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-legacy-examples',
  imports: [JsonPipe, FormsModule],
  templateUrl: './legacy-examples.component.html',
  styleUrl: './legacy-examples.component.scss',
  standalone: true
})
export class LegacyExamplesComponent {
  loading = true;
  error = '';

  userDetails: User = {
    name: '',
    profession: '',
    email: ''
  };

  private readonly usersService = inject(UsersService);

  getUser(): void {
    if (this.loading) {
      this.usersService.getDetails().subscribe({
        next: (response: User) => {
          this.userDetails = response;
        },
        error: () => {
          this.error = 'No se pudo obtener la respuesta del backend.';
        }
      });
      this.loading = false;
    } else {
      this.loading = true;
    }
  }

  loadingName = true;
  errorName = '';
  userName = '';

  getUserName(): void {
    if (!this.userName) {
      this.usersService.getDetailsName().subscribe({
        next: (response: string) => {
          this.userName = response;
          console.log('User name:', response);
        },
        error: (error: any) => {
          console.error('Error fetching user name:', error);
          this.errorName = 'No se pudo obtener la respuesta del backend.';
        }
      });
      this.loadingName = false;
    } else {
      this.userName = '';
      this.loadingName = true;
      this.errorName = '';
    }
  }

  loadingNameWithObject = true;
  errorNameWithObject = '';
  userNameWithObject: UserNameWithObject = {
    name: '',
    userResponse: {
      message: '',
      page: ''
    }
  };

  getUserNameWithObject(): void {
    if (this.userNameWithObject) {
      this.usersService.getDetailsNameWithObject().subscribe({
        next: (response: UserNameWithObject) => {
          this.userNameWithObject = response;
          console.log('User name with object:', response);
        },
        error: (error: any) => {
          console.error('Error fetching user name with object:', error);
          this.errorNameWithObject = 'No se pudo obtener la respuesta del backend.';
        }
      });
      this.loadingNameWithObject = false;
    } else {
      this.userNameWithObject = {
        name: '',
        userResponse: {
          message: '',
          page: ''
        }
      };
      this.loadingNameWithObject = true;
      this.errorNameWithObject = '';
    }
  }

  loadingListOfUsers = true;
  errorListOfUsers = '';
  listOfUsers: User[] = [];

  getListOfUsers(): void {
    if (this.listOfUsers.length === 0) {
      this.usersService.getListOfUsers().subscribe({
        next: (response: User[]) => {
          this.listOfUsers = response;
          console.log('List of users:', response);
        },
        error: (error: any) => {
          console.error('Error fetching list of users:', error);
          this.errorListOfUsers = 'No se pudo obtener la respuesta del backend.';
        }
      });
      this.loadingListOfUsers = false;
    } else {
      this.listOfUsers = [];
      this.loadingListOfUsers = true;
      this.errorListOfUsers = '';
    }
  }

  loadingParams = true;
  errorParams = '';
  paramsResponse = '';
  message = '';

  getParams(message: string): void {
    this.errorParams = '';
    if (!this.paramsResponse) {
      this.usersService.getParams(message).subscribe({
        next: (response: ResponseAPI) => {
          this.paramsResponse = response.message;
          console.log('Params response:', response);
        },
        error: (error: any) => {
          console.error('Error fetching params:', error);
          this.errorParams = 'No se pudo obtener la respuesta del backend.';
        }
      });
      this.loadingParams = false;
    } else {
      this.paramsResponse = '';
      this.loadingParams = true;
      this.errorParams = '';
    }
  }

  loadingParams2 = true;
  errorParams2 = '';
  paramsResponse2 = '';
  message2 = '';
  page = '';

  getParams2(message: string, page: string): void {
    this.errorParams2 = '';
    if (!this.paramsResponse2) {
      this.usersService.getParams2(message, page).subscribe({
        next: (response: ResponseAPI) => {
          this.message2 = response.message;
          this.page = response.page;
          console.log('Params response 2:', response);
        },
        error: (error: any) => {
          console.error('Error fetching params 2:', error);
          this.errorParams2 = 'No se pudo obtener la respuesta del backend.';
        }
      });
      this.loadingParams2 = false;
    } else {
      this.paramsResponse2 = '';
      this.loadingParams2 = true;
      this.errorParams2 = '';
    }
  }

  loadingParams3 = true;
  errorParams3 = '';
  paramsResponse3 = '';
  message3 = '';
  page3 = '';

  getParams3(message: string, page: string): void {
    this.errorParams3 = '';
    if (!this.paramsResponse3) {
      this.usersService.getParams3(message, page).subscribe({
        next: (response: ResponseAPI) => {
          this.message3 = response.message;
          this.page3 = response.page;
          console.log('Params response 3:', response);
        },
        error: (error: any) => {
          console.error('Error fetching params 3:', error);
          this.errorParams3 = 'No se pudo obtener la respuesta del backend.';
        }
      });
      this.loadingParams3 = false;
    } else {
      this.paramsResponse3 = '';
      this.loadingParams3 = true;
      this.errorParams3 = '';
    }
  }

  loadingPathParams = true;
  errorPathParams = '';
  pathParamsResponse = '';
  messagePath = '';

  getPath(message: string): void {
    this.errorPathParams = '';
    if (!this.pathParamsResponse) {
      this.usersService.getPath(message).subscribe({
        next: (response: string) => {
          this.pathParamsResponse = response;
          console.log('Path params response:', response);
        },
        error: (error: any) => {
          console.error('Error fetching path params:', error);
          this.errorPathParams = 'No se pudo obtener la respuesta del backend.';
        }
      });
      this.loadingPathParams = false;
    } else {
      this.pathParamsResponse = '';
      this.loadingPathParams = true;
      this.errorPathParams = '';
    }
  }

  userForm: User = {
    name: '',
    profession: '',
    email: ''
  };

  createdUser: User | null = null;
  creatingUser = false;
  createUserError = '';

  createUser(): void {
    this.creatingUser = true;
    this.createUserError = '';
    this.createdUser = null;

    this.usersService.createUser(this.userForm).subscribe({
      next: (response) => {
        this.createdUser = response;
        this.creatingUser = false;
      },
      error: () => {
        this.createUserError = 'No se pudo crear el usuario.';
        this.creatingUser = false;
      }
    });
  }
}