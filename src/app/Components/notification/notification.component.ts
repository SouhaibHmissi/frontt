import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Notification } from '../../Models/Notification';
import { NotificationService } from '../../Services/notification/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifications: Notification[] = [];

  constructor(private http: HttpClient, private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.afficherNotifications();
    // Utilisez une fonction setInterval pour effectuer une requête toutes les x secondes
    setInterval(() => {
      this.afficherNotifications();
    }, 60000); // Exemple : actualiser toutes les 60 secondes
  }

  private afficherNotifications() {
    this.notificationService.affichernotifications()
      .subscribe(notifications => {
        this.notifications = notifications;
      });
  }
}
