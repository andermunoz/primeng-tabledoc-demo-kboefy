import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer, Device, LocationBPI, Representative, RouteComponent, RouteComponentType } from './customer';
import { CustomerService } from './customerservice';
import { Table } from 'primeng/table';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
    styleUrls: ['./appdemo.scss']
})
export class AppComponent { 
    customers: Customer[];

    route: RouteComponent[][];
    routeHops: RouteComponent[][];
    routingData: RouteComponent[];
    roleOptions: string[] = ["NTE-A", "NTE-B", "WIS"];

    locations: LocationBPI[] = [];
    filteredLocations: LocationBPI[];
    filteredDevices: Device[];

    cols: any[];

    selectedCustomers: Customer[];

    representatives: Representative[];

    statuses: any[];

    model: string = "Waves";

    loading: boolean = true;
    

    @ViewChild('dt') table: Table;

    constructor(private customerService: CustomerService, private primengConfig: PrimeNGConfig) { }

    ngOnInit() {
        this.customerService.getCustomersLarge().then(customers => {
            this.customers = customers;
            this.loading = false;
        });

        this.cols = [
            { field: 'role', header: 'Role', rowspan: '1', input: true, inputType: 'DropDown', options: ['NTE-A', 'NTE-B', 'WIS']},
            { field: 'location', header: 'Location', rowspan: '1', input: true, inputType: 'Autocomplete'},
            { field: 'device', header: 'Device name', rowspan: '1', input: true, inputType: 'Autocomplete'},
            { field: 'reservedPorts', header: 'Reserved ports', rowspan: '1'},
            { field: 'buttons', header: '', rowspan: '1'}
        ];


        this.route = [
            [
                {
                    type: RouteComponentType.device, 
                    role: "NTE-A", 
                    location: {
                        "id": 1000,
                        "name": "1 CROWN WAY"
                    }, 
                    deviceName: "cn0w-PHILP053.pa", 
                    reservedPorts: ["cn0w-PHILP053.pa-1-2-C1", "cn0w-PHILP053.pa-1-2-L1"]
                },
                {
                    type: RouteComponentType.connection, 
                    name: "Physical Connection"
                },
                {
                    type: RouteComponentType.device, 
                    role: "WIS", 
                    location: {
                        "id": 1000,
                        "name": "1 CROWN WAY"
                    }, 
                    deviceName: "cn2b-PHILP056.pa", 
                    reservedPorts: ["cn0w-PHILP056.pa-1-2-C1", "cn0w-PHILP056.pa-1-2-L1"]
                },
                {
                    type: RouteComponentType.connection, 
                    name: "CRAN"
                },
                {
                    type: RouteComponentType.device, 
                    role: "WIS", 
                    location: {
                        "id": 1002,
                        "name": "745 OAK TREE SQUARE"
                      }, 
                    deviceName: "cn2b-PHILP056.pa", 
                    reservedPorts: ["cn0w-PHILP056.pa-1-2-L1", "cn0w-PHILP056.pa-1-2-C1"]
                },
                {
                    type: RouteComponentType.connection, 
                    name: "Physical Connection"
                },
                {
                    type: RouteComponentType.device, 
                    role: "NTE-A", 
                    location: {
                        "id": 1000,
                        "name": "1 CROWN WAY"
                    }, 
                    deviceName: "cn0w-PHILP053.pa", 
                    reservedPorts: ["cn0w-PHILP053.pa-1-2-L1", "cn0w-PHILP053.pa-1-2-C1"]
                }
            ],
            [
                {
                    type: RouteComponentType.device, 
                    role: "NTE-A", 
                    location: {
                        "id": 1000,
                        "name": "1 CROWN WAY"
                    }, 
                    deviceName: "cn0w-PHILP053.pa", 
                    reservedPorts: ["cn0w-PHILP053.pa-1-2-C1", "cn0w-PHILP053.pa-1-2-L1"]
                },
                {
                    type: RouteComponentType.connection, 
                    name: "Physical Connection"
                },
                {
                    type: RouteComponentType.device, 
                    role: "WIS", 
                    location: {
                        "id": 1000,
                        "name": "1 CROWN WAY"
                    }, 
                    deviceName: "cn2b-PHILP056.pa", 
                    reservedPorts: ["cn0w-PHILP056.pa-1-2-C1", "cn0w-PHILP056.pa-1-2-L1"]
                },
                {
                    type: RouteComponentType.connection, 
                    name: "CRAN"
                },
                {
                    type: RouteComponentType.device, 
                    role: "WIS", 
                    location: {
                        "id": 1002,
                        "name": "745 OAK TREE SQUARE"
                      }, 
                    deviceName: "cn2b-PHILP056.pa", 
                    reservedPorts: ["cn0w-PHILP056.pa-1-2-L1", "cn0w-PHILP056.pa-1-2-C1"]
                },
                {
                    type: RouteComponentType.connection, 
                    name: "Physical Connection"
                },
                {
                    type: RouteComponentType.device, 
                    role: "NTE-A", 
                    location: {
                        "id": 1000,
                        "name": "1 CROWN WAY"
                    }, 
                    deviceName: "cn0w-PHILP053.pa", 
                    reservedPorts: ["cn0w-PHILP053.pa-1-2-L1", "cn0w-PHILP053.pa-1-2-C1"]
                }
            ]
        ];

        //this.route.pop();
       
        this.primengConfig.ripple = true;
    }

    counterToMaxNumberOfPaths() {
        var numbers : number[] = [];
        for (let i = 0; i < Math.max(...(this.route.map(el => el.length))); i++) {
            numbers.push(i);
        }
        return numbers;
    }

    maxNumberOfComponentsInPath() : number {
        Math.max(...(this.route.map(el => el.length)));
        return Math.max(...(this.route.map(el => el.length)));
    }

    filterLocation(event: { query: any; }) {
        let filtered : any[] = [];
        let query = event.query;

        this.customerService
        .getLocations2(query)
        .subscribe(r => {
            this.locations = [];
            r.forEach(o => this.locations.push(o));
        });

        for(let i = 0; i < this.locations.length; i++) {
            let location = this.locations[i];
            if (location.name.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
                filtered.push(location);
            }
        }

        this.filteredLocations = filtered;
    }

    filterDevice(event, i, j) {
        debugger;

        /*this.filteredDevices = 
            this
            .locations
            .filter(l => l.name == this.route[i][j].location.name)
            .map(l => l.devices);*/
        debugger;

    }

    

    addComponent(i: number, j: number) {
        this.route[i].splice(
            j + 1, 
            0, 
            {   
                type: RouteComponentType.connection, 
                    name: "Physical Connection"
            }, 
            {
                type: RouteComponentType.device, 
                role: null, 
                location: null, 
                deviceName: null, 
                reservedPorts: [null, null]
            }
        );
    }

    addDevice(i: number, j: number) {
        this.route[i].splice(
            j + 1, 
            0, 
            {
                type: RouteComponentType.device, 
                role: null, 
                location: null, 
                deviceName: null, 
                reservedPorts: [null, null]
            }
        );
    }

    deleteComponent(i: number, j: number) {
        this.route[i].splice(
            j > 0 ? j - 1 : j, 
            2
        );
    }

    addRoute() {
        this.route.push([]);
    }

    deleteRoute(i: number) {
        this.route.splice(i, 1);
    }


}
