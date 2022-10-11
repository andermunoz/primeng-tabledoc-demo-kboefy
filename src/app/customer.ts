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

export interface LocationBPI {
    name?: string;
    id?: number;
    devices?: Device[];
}

export interface Device {
    name?: string;
    id?: number;
    ports?: Port[];
}

export interface Port {
    name?: string;
    id?: number;
}

export enum RouteComponentType {
    device,
    connection
}

export interface RouteComponent {
    type: RouteComponentType;
    sharedWithOtherRoutes?: boolean;
    name?: string;
    role?: string;
    location?: LocationBPI;
    deviceName?: string;
    reservedPorts?: string[];
}

