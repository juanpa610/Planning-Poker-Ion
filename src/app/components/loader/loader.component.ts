import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent  implements OnInit {

  isLoading: Observable<boolean>;

  constructor(private loadingService: LoadingService) {
    this.isLoading = this.loadingService.loading$;
  }

  ngOnInit() {}

}
