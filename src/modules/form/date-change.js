import {schedulesday} from '../schedules/load'

//Seleciona o input de data e adiciona um evento de change para atualizar o horário selecionado
const selectDate = document.getElementById("date");


// Recarrega a lista de horários disponíveis quando o input de data é alterado
selectDate.onchange = () =>  schedulesday();

