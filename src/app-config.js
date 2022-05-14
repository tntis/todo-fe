let behost;

const hostname = window && window.location && window.location.hostname;
/*
 if(window){
     if(window.location){
         hostname = window.location.hostname
     }
 }
 // 과 같은 의미
 */

if(hostname === 'localhost'){
    behost = "http://localhost:8080";
}

export const API_BASE_URL = `${behost}`;

// `` (뺵틱) String 보간(문자열 보간)