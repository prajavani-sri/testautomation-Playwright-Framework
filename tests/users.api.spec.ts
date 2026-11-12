import { test, expect } from "@playwright/test";
import { request } from "node:http";


let AUTH_TOKEN = { "Authorization": " Bearer gorest_ngGuD0Pa88nAa9R7zZE5vKlr0mtZjBQ3mK2FZKnWnOY1enSBr" };

test("Fetch a single user", async ({ request }) => {

    let response = await request.get("https://gorest.co.in/public/v2/users/8704795", { headers: AUTH_TOKEN });

    console.log(response);
    let responsebody = await response.json();
    console.log(responsebody);
    console.log("Response code is  :" + response.status()); // to get the respnse code
    console.log("Response message is : " + response.statusText()); //to get the message of status

})

test("Fetch data for multiple users", async ({ request }) => {

    let response = await request.get("https://gorest.co.in/public/v2/users", { headers: AUTH_TOKEN });

    console.log(response); //JS object in return
    let responsebody = await response.json(); // Conversion of JS object to Json string format
    console.log(responsebody);
    console.log("Response code is  :" + response.status()); // to get the respnse code
    console.log("Response message is : " + response.statusText()); //to get the message of status
    expect(response.status).toBe(200);
})

//201 for creating a user
test("Creating a fresh resource", async ({ request }) => {
    let userData = {

        "name": "Praja Automation",
        "email": `abc${Date.now()}@example.com`,
        "gender": "female",
        "status": "active"

    }
    let response = await request.post("https://gorest.co.in/public/v2/users", { headers: AUTH_TOKEN , data: userData});

    console.log(response); //JS object in return
    let responsebody = await response.json(); // Conversion of JS object to Json string format
    console.log(responsebody);
    console.log("Response code is  :" + response.status()); // to get the respnse code
    console.log("Response message is : " + response.statusText()); //to get the message of status

})

test("Update a created resource", async ({ request }) => {
    let userData = {

        "name": "Praja training",
        "email": `abc${Date.now()}@example.com`,
        "gender": "female",
        "status": "inactive"

    }
    let response = await request.put("https://gorest.co.in/public/v2/users/8707180", { headers: AUTH_TOKEN , data: userData});

    console.log(response); //JS object in return
    let responsebody = await response.json(); // Conversion of JS object to Json string format
    console.log(responsebody);
    console.log("Response code is  :" + response.status()); // to get the respnse code
    console.log("Response message is : " + response.statusText()); //to get the message of status

})
//404 Deleting a account
test("Deleting a created resource", async ({ request }) => {

    let response = await request.delete("https://gorest.co.in/public/v2/users/8707180", { headers: AUTH_TOKEN});

    console.log(response); //JS object in return
    
    console.log("Response code is  :" + response.status()); // to get the respnse code
    console.log("Response message is : " + response.statusText()); //to get the message of status

})


