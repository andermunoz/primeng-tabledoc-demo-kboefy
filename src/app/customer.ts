export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}

export interface Customer {
    id?: number;
    name?: number;
    country?: Country;
    company?: string;
    date?: string;
    status?: string;
    representative?: Representative;
}

export enum RouteComponentType {
    device,
    connection
}

export interface RouteComponent {
    type: RouteComponentType;
    name?: string;
    role?: string;
    location?: string;
    deviceName?: string;
    reservedPorts?: string[];
}

