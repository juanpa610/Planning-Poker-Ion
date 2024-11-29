import { Component } from '@angular/core';
import { LoadingService } from './services/loading.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
 
  constructor(private loadingService: LoadingService,private router: Router) {
      // this.loadingService.show();
      // router.navigate(['/home']);
  }
  
}
