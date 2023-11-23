import { Injectable } from '@angular/core';
import { Tracking } from '../model/shipmentBackend';
import { TemplateService } from 'src/app/shared/services/template.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TrackingService extends TemplateService<Tracking> {

  private tracking:Tracking | null=null;
  constructor(http:HttpClient) {
    super(http);
    this.basePath = 'https://sofroute.azurewebsites.net/api/v1/tracking';

  }

   addTracking(tracking: Tracking): Observable<Tracking> {
    return this.create(tracking);
   }
}
