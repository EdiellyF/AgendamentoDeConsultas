import dayjs from "dayjs";

//seleciona as sessões de agendamentos
const periodMorning = document.querySelector("#period-morning");
const afternoon = document.querySelector("#period-afternoon");
const evening = document.querySelector("#period-night");


export function showSchedules({ dailySchedules }) {
  try {
      // Verifica se é um array
      if (!Array.isArray(dailySchedules)) {
          throw new Error("dailySchedules deve ser um array.");
      }

      // Limpa os agendamentos anteriores
      afternoon.innerHTML = "";
      evening.innerHTML = "";

      dailySchedules.forEach(schedule => {
          const item = document.createElement("li");
          const time = document.createElement("strong");
          const name = document.createElement("span");
          const cpf = document.createElement("span");

          item.setAttribute("data-id", schedule.id);

          time.textContent = dayjs(schedule.when).format("HH:mm");
          name.textContent = schedule.name;
          cpf.textContent = schedule.cpf;

          const cancelButton = document.createElement("img");
          cancelButton.classList.add("cancel-icon");
          cancelButton.setAttribute("src", "./src/assets/cancel.svg");
          cancelButton.setAttribute("alt", "Cancelar");

          // Adiciona os elementos ao item
          item.appendChild(time);
          item.appendChild(name);
          item.appendChild(cpf);
          item.appendChild(cancelButton);

          // Obtém somente a hora
          const hour = parseInt(dayjs(schedule.when).format("HH"), 10);

          // Renderiza o agendamento na sessão
          if (hour <= 12) {
              periodMorning.appendChild(item);
          } else if (hour <= 18) {
              afternoon.appendChild(item);
          } else {
              evening.appendChild(item);
          }
      });
  } catch (error) {
      alert("Erro ao exibir agendamentos");
      console.error(error);
  }
}
