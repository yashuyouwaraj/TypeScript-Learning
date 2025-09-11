import axios = require("axios");
import { type AxiosResponse } from "axios";

// import axios, { AxiosResponse } from 'axios';
axios

interface Todo{
    userId:number;
    id:number;
    title:string;
    completed:boolean;
}

const fetchData = async ()=>{
    try{
        const response: AxiosResponse<Todo>  = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log("Todo: ",response.data);
    }
    catch(error:any){
        if(axios.isAxiosError(error)){
            console.log("Axios error message: ",error.message);
            if(error.response){
                console.log("Status: ",error.response.status);
                console.log("Data: ",error.response.data);
                console.log("Headers: ",error.response.headers);
            }
        } else{
            console.log("Unexpected error: ",error.message);
        }
    }
}
fetchData();