import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer, Representative, RouteComponent, RouteComponentType, RouteHop } from './customer';
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

    route: RouteHop[];
    routingData: RouteComponent[];
    roleOptions: string[] = ["NTE-A", "NTE-B", "WIS"];

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
                reservedPorts: ["cn0w-PHILP056.pa-1-2-C1", "cn0w-PHILP053.pa-1-2-L1"]
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
                reservedPorts: ["cn0w-PHILP056.pa-1-2-L1", "cn0w-PHILP053.pa-1-2-C1"]
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

    modelChange(event) {
        debugger;
        if (event.value == "Waves") {
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
                    reservedPorts: ["cn0w-PHILP056.pa-1-2-C1", "cn0w-PHILP053.pa-1-2-L1"]
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
                    reservedPorts: ["cn0w-PHILP056.pa-1-2-L1", "cn0w-PHILP053.pa-1-2-C1"]
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
        } else if (event.value = "5G") {
            this.routingData = [
                {
                    type: RouteComponentType.device, 
                    role: "Antenna", 
                    location: "PHL-M00011", 
                    deviceName: "PHL-M00011AW386201", 
                    reservedPorts: ["PHL-M00011AW386201-1-1-1", "PHL-M00011AW386201-1-1-1"]
                },
                {
                    type: RouteComponentType.connection, 
                    name: "Physical Connection"
                },
                {
                    type: RouteComponentType.device, 
                    role: "Radio", 
                    location: "PHL-M00011", 
                    deviceName: "PHL-M00011-C1A", 
                    reservedPorts: ["PHL-M00011-C1A-1-2-C1", "PHL-M00011-C1A-1-2-L1"]
                },
                {
                    type: RouteComponentType.connection, 
                    name: "cpri"
                },
                {
                    type: RouteComponentType.device, 
                    role: "Baseband", 
                    location: "2454 CHRISTIAN ST_SPECTRUM ARENA LIMITED", 
                    deviceName: "5g-cdu-a1.christianst", 
                    reservedPorts: ["5g-cdu-a1.christianst-1-2-L1", "5g-cdu-a1.christianst-1-2-C1"]
                },
                {
                    type: RouteComponentType.connection, 
                    name: "Physical Connection"
                },
                {
                    type: RouteComponentType.device, 
                    role: "Backhaul switch", 
                    location: "2454 CHRISTIAN ST_SPECTRUM ARENA LIMITED", 
                    deviceName: "5g-bhsw-a1.christianst.pa.panjde.comcast.net", 
                    reservedPorts: ["5g-bhsw-a1.christianst.pa.panjde.comcast.net-1-2-L1", "5g-bhsw-a1.christianst.pa.panjde.comcast.net-1-2-C1"]
                }
            ];
        }
    
    }

    addComponent(index) {
        this.routingData.push({type: RouteComponentType.connection, 
            name: "Physical Connection"});
        this.routingData.push({type: RouteComponentType.device, 
            role: null, 
            location: null, 
            deviceName: null, 
            reservedPorts: [null, null]});
    }

    deleteComponent(index) {
        this.routingData.pop();
        this.routingData.pop();
    }


}
