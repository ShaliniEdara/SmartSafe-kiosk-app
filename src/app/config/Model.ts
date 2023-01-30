

   export class User {
		id:number;
        username:string;
        password:string;
        confirmpassword:string
        role:string;
        active:string;
        feature:string;
        storeInfo:string;
        loggedUserId: any;
	}

    export class Role {

       id:number;
    
        name:string;
    
        description:string;
    
        eatures:string[];
    
         users : User[];
    }


    export class Insertbills {
		id:number;
        amount:string;
        user:string;
        createdOn:Date;
        transactionNumber:string;
        count:number;
        sum:number;
	}

    export class StoreInfoRequest {
        id:number;

	  storeName:string;

	  corpStoreNo:string;

	  serialNumber:string;

	  address:string;

	  bankName:string;

	  accountNumber:string;

	  minimumBalance:DoubleRange;

	  configured:boolean;

	  startTime: string;

	  endTime: string;

	  Locks:String[];
  }





