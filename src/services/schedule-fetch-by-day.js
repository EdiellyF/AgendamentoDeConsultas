import dayjs from "dayjs";
import { apiConfig } from "./api-config.js";

export async function scheduleFetchByDay({date}){

    try{

        //Fazendo a requisição para a API
        const response = await fetch(`${apiConfig.baseUrl}/schedules`);
        //Convertendo a resposta em JSON
        const data = await response.json();
        
        const dailySchedules = data.filter(schedule => dayjs(date).isSame(schedule.when, "day"))
        return  dailySchedules
        
       
    }catch(error){
        console.error(error);
        alert("Erro ao buscar agendamentos");
    
    }
}