//wrapper methods 

import { APIRequestContext } from "@playwright/test";

class APTHelper 
{

    private readonly request: APIRequestContext;

    private readonly baseurl : String;

    constructor(request: APIRequestContext, baseurl:string)
    {
        this.request =request; //create a reference variable
        this.baseurl = baseurl;
    }

//Public reusable HTTP methods
//getRequest with endpoint:url and request: headers

}