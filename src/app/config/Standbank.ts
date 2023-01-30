export class ValetDenominationsDto {
    cents: number;
    den_1$: number;
    den_10$: number;
    den_100$: number;
    den_20$: number;
    den_5$: number;
    den_50$: number;
    nickels: number;
    dimes: number;
    quarters: number;
    type: string;
    updatedByUser:number;
    updatedTime:string;
}

export class ChangeRequestDto {
    cents: number;
    nickels: number;
    dimes: number;
    quarters: number;
    den_1$: number;
    den_10$: number;
    den_100$: number;
    den_20$: number;
    den_5$: number;
    den_50$: number;
    type: string;
    updatedByUser:number;
    public orderStatus:string;
    updatedTime:string;
}
export enum OrderStatus{
    Ordered,Delivered,Canceled
}

export class ChangeRequest{
    
    id:number;
	cents:number;

	nickels:number;

	dimes:number;

	quarters:number;

	den_1$:number;

	den_5$:number;

	den_10$:number;

	den_20$:number;

	den_50$:number;

	den_100$:number;

	type:string;
	
    orderStatus:string ;
    
    public createdBy: UserInfo = new UserInfo();

    createdOn: Date;

    public modifiedBy: UserInfo = new UserInfo();

    modified:Date;
}
export class ChangeValetDenominations {

    id:number;
    old_cents: number;

    new_cents: number;

    old_nickels: number;

    new_nickels: number;

    old_dimes: number;

    new_dimes: number;

    old_quarters: number;

    new_quarters: number;

    old_den_1$: number;

    new_den_1$: number;

    old_den_5$: number;

    new_den_5$: number;

    old_den_10$: number;

    new_den_10$: number;

    old_den_20$: number;

    new_den_20$: number;

    old_den_50$: number;

    new_den_50$: number;

    old_den_100$: number;

    new_den_100$: number;

	updatedByUser:number;
    valetDenominationsId:number;
	updatedTime:string;
    type: string;

    //UserInfo updatedBy;

    public valetDenominationsDto: ValetDenominationsDto = new ValetDenominationsDto();
    //GetStandBankRequestValues valetDenominations;
}
export class TruckChangeRequestDto{
    id: number;
	cents: number;
    den_1$: number;
    den_10$: number;
    den_100$: number;
    den_20$: number;
    den_5$: number;
    den_50$: number;
    nickels: number;
    dimes: number;
    quarters: number;
    type: string;
	orderStatus:string;
    updatedByUser:number;
	updatedTime:string;
	
}
export class InsertBill {
    id: number;

    amount: string;

    public updatedBy: UserInfo = new UserInfo();
    //UserInfo user;

    createdOn: Date;

    dateTime: Date;

    transactionNumber: string;
}
export class UserInfo {
    id: number;

    username: string;

    password: string;

    public role: Role = new Role();
    //Role role;

    create_time: Date;

    active: boolean;

    /**
     * only for truck guy
     */
    mobile: string;

    email: string;

    public storeInfo: StoreInfo = new StoreInfo();
    //StoreInfo storeInfo;

    insertBills: InsertBill[];

    lastLoginTime: Date;
}
export class StoreInfo {
    id: number;

    storeName: string;

    corpStoreNo: string;

    serialNumber: String;

    address: string;

    bankName: string;

    accountNumber: string;

    minimumBalance: number;

    configured: boolean;

    users: UserInfo[];
}
export class Role {
    id: number;

    name: string;

    description: string;

    features: [];

    users: UserInfo[];
}
export class GetStandBankRequestValues {
    id: number;
    cents: number;
    den_1$: number;
    den_10$: number;
    den_100$: number;
    den_20$: number;
    den_5$: number;
    den_50$: number;
    nickels: number;
    dimes: number;
    quarters: number;
    type: string;
    changeValetDenominations: ChangeValetDenominations[];
}


