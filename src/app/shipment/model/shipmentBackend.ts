import { Employee } from "src/app/supplier/model/employee";
import { Sender } from "./sender";
import { Destination } from "./destination";

export interface shipmentBackend {

  id: number;
  description: string;
  code: number;
  freight: number;
  quantity: number;
  deliveredDate: Date;
  arrivalDate: Date;
  consignee: string;
  destination: Destination;
  sender: Sender;
  employee: Employee;
  dht22: Dht22;
  tracking: Tracking;
}

export interface Dht22 {
  id: number;
  temperature: string;
  humidity: string;
}

export interface Tracking {
  trackingId: number;
  latitude: string;
  longitude: string;
}
