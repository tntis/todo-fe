import {API_BASE_URL} from "../app-config.js";

const ACCESS_TOKEN = 'ACCESS_TOKEN';

export function call(api, method, data){
    const url = API_BASE_URL + api; 

    let headers = new Headers({
        "Content-Type" : "application/json"
    });

    const accesToken = localStorage.getItem(ACCESS_TOKEN);
    if(accesToken !== null && accesToken){
        headers.append('Authorization','Bearer ' + accesToken);
    }

    let options = {
        headers : headers,
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
    return call('/auth/v4/login', 'POST', userLogin)
    .then(body => {
        console.log(body);
        if(body.result && body.result.data && body.result.data.token){
            const accessToken = body.result.data.token;
            console.warn(`JWT 토큰 : ${accessToken}`);
            alert('JWT 토큰 : '+ accessToken);
            
            // 웹 스토리지
            // - 세션 스토리지 : 브라우저를 닫으면 초기화(삭제)
            // - 로컬 스토리지 : 브라우저를 닫아도 유지

            localStorage.setItem(ACCESS_TOKEN, accessToken);

            window.location.href="/";
        }
    });
}