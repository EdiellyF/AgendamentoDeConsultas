import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new.js";
import {  schedulesday  } from "../schedules/load.js"
import { gerarUIDD } from "../../services/gerarUIDD.js";



//forms 
const clientName = document.querySelector("#patient");
const clientCpf = document.querySelector("#cpf");
const selectDate = document.querySelector("#date");


//Data atual 
const dataAtual = dayjs(new Date()).format("YYYY-MM-DD");

//Define a data máxima como sendo a atual
selectDate.value = dataAtual;
//Define a data mínima como sendo a atual
selectDate.min = dataAtual;



document.querySelector("form").onsubmit = async (event) => {
   event.preventDefault();
   

   try {
     const name = clientName.value;
     const cpf = clientCpf.value.replaceAll(".", "").replaceAll("-", "").replaceAll(" ", "");

      if(!name){
        return alert("Por favor, preencha o nome do paciente");
      }
      const hourSelected = document.querySelector(".hour-selected");
      if(!hourSelected){
        return alert("Por favor, selecione um horário");
      }

      const [hour] = hourSelected.innerText.split(":");
   
      


      //Faz o agendamento
      await  scheduleNew ({
          id: gerarUIDD(),
          name,
          cpf,
          when: dayjs(selectDate.value).set("hour", hour).format("YYYY-MM-DD HH:mm:ss"),
      })
    

    // Recarrega a pagina
      schedulesday()

      //limpa o input
      clientCpf.value = "";
      clientName.value= "";
      
    


   } catch (error) {
     console.log(error);
   }
}