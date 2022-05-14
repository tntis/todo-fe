import {API_BASE_URL} from "../app-config.js";

export function call(api, method, data){
    const url = API_BASE_URL + api; 
    let options = {
        headers : new Headers(
            {"Content-Type" : "application/json"}
        ),
        method : method
    }

    if(data){
        options.body = JSON.stringify(data); // Serialize : object -> JSON String 
    }

   return fetch(url, options)
    .then(res => {
        console.log(res);
        if(!res.ok){
            return Promise.reject("ERROR");
        }
        return res.json();
    })
}