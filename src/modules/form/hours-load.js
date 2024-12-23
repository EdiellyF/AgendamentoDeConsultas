
//arquivo que serve para importar os dados do arquivo json
import dayjs from 'dayjs'
import { openingHours } from '../../utils/opening-hours.js'
import ButtonSelect from './ButtonSelect.js'


const hoursDiv = document.querySelector('#hours');

const now = dayjs();
export  function hoursLoad({ date, dailySchedules }) {
        hoursDiv.innerHTML = " ";
        const selectedDate = dayjs(date);
        const now = dayjs();

  // Obter os dados do servidor antes de mapear
  let dados = dailySchedules;
  
  const opening = openingHours.map((hour) => {
      const [scheduleHour] = hour.split(':');
      const scheduleDateTime = selectedDate.hour(scheduleHour);
      const formattedDate = scheduleDateTime.format('YYYY-MM-DD HH:mm:ss');

      // Verificar se já existe um horário agendado
      const dataExist = dados.find(item => item.when === formattedDate);

      return {
          hour: hour,
          available: !dataExist && scheduleDateTime.isAfter(now) 
      };
  });

      opening.forEach(({hour, available}, index) => {   
            const li = createHourListItem(hour, available, index);
            if(available){
                const button = new ButtonSelect(li); 
                button.selectElement('hour-selected', index, 'data-button');
            }
            hoursDiv.appendChild(li)
      })
}

function createHourListItem(hour, available, index){
    const li = document.createElement('li');
    li.classList.add("hour")
    li.classList.add(available ? "hour-available" : "hour-unavailable")
    li.textContent = hour;
    li.dataset.button = index;
    
    return li;
}



