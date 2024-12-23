import { apiConfig } from "./api-config.js";

export async function scheduleNew({id, name, cpf, when}){
    try {
        //Faze a requisição para a API para enviar os dados do agendamento
        const response = await fetch(`${apiConfig.baseUrl}/schedules`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id, name, cpf, when}),
        });

        if (!response.ok) {
            throw new Error('Failed to create schedule');
        }

        const data = await response.json();
        //exibe uma mensagem de sucesso
        alert("Agendamento criado com sucesso");
        return data;
    } catch(error) {
        console.error(error);
        alert("Erro ao criar agendamento");
        throw error;
    }
}