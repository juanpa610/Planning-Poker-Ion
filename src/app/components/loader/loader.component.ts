import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent  implements OnInit {

  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading: Observable<boolean> = this.isLoadingSubject;

  constructor(private loadingService: LoadingService) {
    this.isLoading = this.loadingService.loading$;
  }

  ngOnInit() {}

}
