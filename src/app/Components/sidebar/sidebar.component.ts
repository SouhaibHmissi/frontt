import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from '../../Services/logout/logout.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../../Models/User';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit {
  personnel: User = new User();

  constructor(private logoutService: LogoutService, private router: Router, private httpClient: HttpClient) { }
//js
  ngAfterViewInit(): void {
    const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
    const menuBar = document.querySelector('#content nav .bx.bx-menu');
    const sidebar = document.getElementById('sidebar');
    const switchMode = document.getElementById('switch-mode');
    const content = document.getElementById('content');

    if (allSideMenu && menuBar && sidebar && switchMode && content) {
      allSideMenu.forEach(item => {
        item.addEventListener('click', function(event) {
          event.preventDefault();
          allSideMenu.forEach(i => {
            i.parentElement?.classList.remove('active');
          });
          item.parentElement?.classList.add('active');
        });
      });

      menuBar.addEventListener('click', function() {
        sidebar.classList.toggle('hide');
        if (sidebar.classList.contains('hide')) {
          content.style.width = 'calc(100% - 60px)';
          content.style.left = '60px';
        } else {
          content.style.width = 'calc(100% - 280px)';
          content.style.left = '280px';
        }
      });

   switchMode.addEventListener('change', function() {
        if (switchMode instanceof HTMLInputElement) {
          document.body.classList.toggle('dark', switchMode.checked);
        }
      });



      window.addEventListener('resize', function() {
        if (sidebar && content) {
          sidebar.classList.add('hide');
          content.style.width = 'calc(100% - 60px)';
          content.style.left = '60px';
        }
      });
    }
  }
//redirecte vers home
  redirectToGererUsers() {
    this.router.navigate(['/admin/gererusers']);
  }
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
