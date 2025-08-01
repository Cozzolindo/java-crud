import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared-module';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    SharedModule
    ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'crud-angular';
}
