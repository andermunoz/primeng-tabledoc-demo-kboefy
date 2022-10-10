import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer, Representative, RouteComponent, RouteComponentType } from './customer';
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
            { field: 'role', header: 'Role', rowspan: '2', input: true, inputType: 'DropDown', options: ['NTE-A', 'NTE-B', 'WIS']},
            { field: 'location', header: 'Location', rowspan: '2', input: true, inputType: 'Text'},
            { field: 'deviceName', header: 'Device name', rowspan: '2'},
            { field: 'reservedPorts', header: 'Reserved ports', rowspan: '1'},
            { field: 'buttons', header: '', rowspan: '2'}
        ];


        

        this.route = [
            [
                {
                    type: RouteComponentType.device, 
                    role: "NTE-A", 
                    location: "1 CROWN WAY", 
                    deviceName: "cn0w-PHILP053.pa", 
                    reservedPorts: ["cn0w-PHILP053.pa-1-2-C1", "cn0w-PHILP053.pa-1-2-L1"]
                },
                {
                    type: RouteComponentType.device, 
                    role: "NTE-A", 
                    location: "1 CROWN WAY", 
                    deviceName: "prot-cn0w-PHILP053.pa", 
                    reservedPorts: ["cn0w-PHILP053.pa-1-2-C1", "cn0w-PHILP053.pa-1-2-L1"]
                }
            ],
            [
                {
                    type: RouteComponentType.connection, 
                    name: "Physical Connection"
                },
                {
                    type: RouteComponentType.connection, 
                    name: "Physical Connection"
                }
            ],
            [
                {
                    type: RouteComponentType.device, 
                    role: "WIS", 
                    location: "1 PHIL AVENUE", 
                    deviceName: "cn2b-PHILP056.pa", 
                    reservedPorts: ["cn0w-PHILP056.pa-1-2-C1", "cn0w-PHILP056.pa-1-2-L1"]
                },
                {
                    type: RouteComponentType.device, 
                    role: "WIS", 
                    location: "1 PHIL AVENUE", 
                    deviceName: "prot-cn2b-PHILP056.pa", 
                    reservedPorts: ["cn0w-PHILP056.pa-1-2-C1", "cn0w-PHILP056.pa-1-2-L1"]
                }
            ],
            [
                {
                    type: RouteComponentType.connection, 
                    name: "CRAN"
                },
                {
                    type: RouteComponentType.connection, 
                    name: "CRAN"
                }
            ],
            [
                {
                    type: RouteComponentType.device, 
                    role: "WIS", 
                    location: "1 PHIL AVENUE", 
                    deviceName: "cn2b-PHILP056.pa", 
                    reservedPorts: ["cn0w-PHILP056.pa-1-2-L1", "cn0w-PHILP056.pa-1-2-C1"]
                },
                {
                    type: RouteComponentType.device, 
                    role: "WIS", 
                    location: "1 PHIL AVENUE", 
                    deviceName: "cn2b-PHILP056.pa", 
                    reservedPorts: ["cn0w-PHILP056.pa-1-2-L1", "cn0w-PHILP056.pa-1-2-C1"]
                }
            ],
            [
                {
                    type: RouteComponentType.connection, 
                    name: "Physical Connection"
                },
                {
                    type: RouteComponentType.connection, 
                    name: "Physical Connection"
                }
            ],
            [
                {
                    type: RouteComponentType.device, 
                    role: "NTE-A", 
                    location: "1 CROWN WAY", 
                    deviceName: "cn0w-PHILP053.pa", 
                    reservedPorts: ["cn0w-PHILP053.pa-1-2-L1", "cn0w-PHILP053.pa-1-2-C1"]
                },
                {
                    type: RouteComponentType.device, 
                    role: "NTE-A", 
                    location: "1 CROWN WAY", 
                    deviceName: "cn0w-PHILP053.pa", 
                    reservedPorts: ["cn0w-PHILP053.pa-1-2-L1", "cn0w-PHILP053.pa-1-2-C1"]
                }
            ]
        ];
        
        this.route.forEach(r => r.pop());


        this.routingData = [
            {
                type: RouteComponentType.device, 
                role: "NTE-A", 
                location: "1 CROWN WAY", 
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
                location: "1 PHIL AVENUE", 
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
                location: "1 PHIL AVENUE", 
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
                location: "1 CROWN WAY", 
                deviceName: "cn0w-PHILP053.pa", 
                reservedPorts: ["cn0w-PHILP053.pa-1-2-L1", "cn0w-PHILP053.pa-1-2-C1"]
            }
        ];

       
        this.primengConfig.ripple = true;
    }

    counterToMaxNumberOfPaths() {
        var numbers : number[] = [];
        for (let i = 0; i < Math.max(...(this.route.map(el => el.length))); i++) {
            numbers.push(i);
        }
        return numbers;
    }

    

    addComponent(i: number, j: number) {
        this.route.splice(
            i + 1, 
            0, 
            [{   
                type: RouteComponentType.connection, 
                    name: null
            }], 
            [{
                type: RouteComponentType.device, 
                role: null, 
                location: null, 
                deviceName: null, 
                reservedPorts: [null, null]
            }]
        );
    }

    deleteComponent(i: number, j: number) {
        this.route.splice(
            i > 0 ? i - 1 : i, 
            2
        );
    }


}
