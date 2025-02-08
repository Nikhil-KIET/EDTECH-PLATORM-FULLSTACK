import axios from "axios";

const instance = axios.create();

export function connectApi(method, url,bodydata, headers, params) {

    return instance({
        method: method, // HTTP method (GET, POST, etc.)
        url: url,       // API endpoint
        data: bodydata, // Hardcoded payload
        headers: headers || null, // Optional headers
        params: params || null,   // Optional query parameters
    });
}
