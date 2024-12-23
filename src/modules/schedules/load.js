import { scheduleFetchByDay } from '../../services/schedule-fetch-by-day.js';
import {hoursLoad} from '../form/hours-load.js'
import {showSchedules} from './show.js'

const selectdate = document.querySelector('#date');

export async function schedulesday(){
    //obtem a data do input
    const date = selectdate.value;

    //busca os agendamentos do dia
    const dailySchedules = await scheduleFetchByDay({date});
    showSchedules({dailySchedules});

    hoursLoad({date, dailySchedules});
}