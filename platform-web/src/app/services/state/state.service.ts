import { Injectable } from '@angular/core';

/**
 * Application does not interact with the HttpClient service.
 * Application comminicates with this service (StateService) via IEventType interface. 
 * State service runs corressponding HttpService after getting an event. 
 */
@Injectable({
  providedIn: 'root'
})
export class StateService {

  
  constructor() { }


  dispatch(event: IEventType) {

  }
}

/**
 * Whenever an event happens, the hosting component of the event will dispatch the event to the state handler 
 * with name of the event and data (payload)
 * Payload must be a type of KNOWN interface to the state manager.
 *
 */
export interface IEventType<T = any> {
  name?: string;
  type?: 'POST' | 'GET' | 'PUT' | 'DELETE';
  payload?: T;
}

