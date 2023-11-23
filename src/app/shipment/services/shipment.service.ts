import { Injectable } from '@angular/core';
import {TemplateService} from "../../shared/services/template.service";
import {catchError, Observable, retry, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
 import { Shipment } from '../model/shipment';
import { Package } from '../model/package';
import { shipmentBackend } from '../model/shipmentBackend';

@Injectable({
  providedIn: 'root'
})

export class ShipmentService extends TemplateService<any> {

  private shipment:Shipment | null=null;
  constructor(http:HttpClient) {
    super(http);
    this.basePath = 'https://sofroute.azurewebsites.net/api/v1/shipment';

  }


  addShipment(shipment: Shipment, employeeId: String, senderId: String, destinationId: String, trackingId: String): Observable<Shipment> {

    // new path https://sofroute.azurewebsites.net/api/v1/shipment?employeeId=1&senderId=2&destinationId=1&trackingId=2
    this.basePath = 'https://sofroute.azurewebsites.net/api/v1/shipment?employeeId='+employeeId+'&senderId='+senderId+'&destinationId='+destinationId+'&trackingId='+trackingId;

     return this.create(shipment);
  }



}


