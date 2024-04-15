import { Component } from '@angular/core';
import { User } from '../../Models/User';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LogoutService } from '../../Services/logout/logout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  personnel: User = new User();
  dropdownOpen: boolean = false;

  toggleDropdown(event: MouseEvent): void {
    event.preventDefault();
    this.dropdownOpen = !this.dropdownOpen;
  }




  constructor(private logoutService: LogoutService, private router: Router, private httpClient: HttpClient){}
    ngOnInit(): void {
    }
    private url = "http://localhost:8080/logout";

    userLogout(personnel: User): Observable<User> {
      return this.httpClient.post<User>(this.url, personnel); 
    }

    onLogout() {!
      this.userLogout(this.personnel).subscribe(
        () => {
          console.log('Logged out successfully!');

          localStorage.removeItem('token');
          this.router.navigate(['/login']);
        },
        error => {
          console.error('Logout failed:', error);
        }
      );
      }
}
