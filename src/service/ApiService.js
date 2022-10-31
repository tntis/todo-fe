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
    .then(response => {
        console.log( response);
        if(!response.ok){
            return Promise.reject(response);
        }
        return response.json();
    })
    .catch(response=> {
        console.log(response);
        const status = response.status;
        if(status === 401 || status === 403){
            alert('로그인 페이지로 이동 ');
            window.location.href = '/login';
        }
        return Promise.reject(response);
    });
}


export function callLogin(userLogin){
    return call('/auth/login/v3', "POST", userLogin)
    .then(response => {
        console.log(response);
    });
}