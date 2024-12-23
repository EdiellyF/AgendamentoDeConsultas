import { apiConfig } from "./api-config.js";


export async function scheduleDeleteById({id}){
   
    try{
        const response = await fetch(`${apiConfig.baseUrl}/schedules/${id}`, {
            method: 'DELETE'
        });

        if(response.ok){
            alert('Item removido com sucesso.')
            return true
        } 
        alert(`Erro ao remover item com ID ${id}:`, response.status)
        return false;
    } catch( error) {
        console.log("Erro ao se comunicar com a api")
    }
}

