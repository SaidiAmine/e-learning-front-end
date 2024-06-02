import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {WelcomeService} from "./service/welcome.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'elearning-front';


  constructor(private welcomeService : WelcomeService) {
  }

  ngOnInit() {
    this.welcomeService.getMessage().subscribe(value => this.title = value.message);
  }
}
