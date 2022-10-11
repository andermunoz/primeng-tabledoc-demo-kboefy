import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { LocationBPI } from './customer';

@Injectable()
export class CustomerService {
    constructor(private http: HttpClient) { }

    getCustomersLarge() {
        return this.http.get<any>('assets/customers-large.json')
            .toPromise()
            .then(res => <Customer[]>res.data)
            .then(data => { return data; });
    }

    getLocations2(filter: string) : Observable<LocationBPI[]> {
        return this.http.get<any>('assets/locations.json');

    }

    getLocations(filter: string) : Promise<LocationBPI[]> {
        return this.http.get<any>('assets/locations.json')
        .toPromise()
        .then(res => <LocationBPI[]>res.data)
        .then(data => { return data; });
    }

}