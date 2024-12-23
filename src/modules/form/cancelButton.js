import {scheduleDeleteById} from '../../services/schedule-deletebyId.js'
import { schedulesday } from '../schedules/load.js';
const periods = document.querySelectorAll('.period');

//Verifica se há períodos e adiciona evento de click
if(periods.length > 0){
    periods.forEach(period => {
        period.addEventListener('click', async (event) => {
            // Verifica se o usuário clicou no ícone de cancelamento
            const cancel = event.target.classList.contains('cancel-icon');
            if(cancel){
                // Obtém o elemento pai do ícone de cancelamento
                const li = event.target.parentElement;
                const id = li.dataset.id
                const confirm =  confirmarRegistroDeletado();
                // Verifica se o usuário confirmou a exclusão
                if(confirm){
                    // Exclui o agendamento
                    await scheduleDeleteById({id});
                    // Remove o elemento da lista
                    li.remove();
                    
                }
            }

        });
        // Atualiza a lista de agendamentos
        schedulesday();
    });
}

function confirmarRegistroDeletado(){
    return window.confirm("Voce realmente deseja apagar esse registro?") ? true : false;
}
