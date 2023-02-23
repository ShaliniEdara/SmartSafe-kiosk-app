

export class User {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    email: string;
    passLength: string;
    mobile: string;
    confirmpassword: string
    role: string;
    active: string;
    feature: string;
    storeInfo:string;
    loggedUserId: any;
}

export class Role {

    id: number;

    name: string;

    description: string;

    eatures: string[];

    users: User[];
}


export class Insertbills {
    id: number;
    amount: string;
    user: string;
    createdOn: Date;
    transactionNumber: string;
    count: number;
    sum: number;
}

export class Kiosk {
    id: number;
    kioskId: string;
    kioskName: string;
    brandName: string;
    modelName: string;
    cpu: string;
    hdd: string;
    ramMemory: string;
    screenSize: string;
    ipAddress: string;
    macAddress: string;
    active: boolean;
}
export class BillValidator {
    id: number;
    billAcceptorNo: string;
    billAcceptorName: string;
    brandName: string;
    modelName: string;
    machineType: string;
    storageCapacity: string;
    active: boolean;
}
export class Locks {
    id: number;
    digitalLockNo: string;
    digitalLockName: string;
    brandName: string;
    modelName: string;
    machineType: string;
    connectors: string;
    active: boolean;
}
export class Printer {
    id: number;
    printerNo: string;
    printerName: string;
    brandName: string;
    modelName: string;
    machineType: string;
    printCapacity: string;
    active: boolean;
}
export class StoreInfoRequest {

    id: number;

    storeName: string;

    corpStoreNo: string;

    serialNumber: string;

    address: string;

    bankName: string;

    accountNumber: string;

    minimumBalance: DoubleRange;

    configured: boolean;

    startTime: string;

    endTime: string;

    users: User[];

    kiosk: Kiosk[];

    billValidator: BillValidator[];

    locks: Locks[];

    printer: Printer[];
    userIds: [];
}






