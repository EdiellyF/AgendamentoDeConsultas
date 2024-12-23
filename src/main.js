"use strict"


//configuração do dayjs
import "./libs/dayjs.js"
import { setupPDFGeneration } from "./modules/pdf/generate-pdf.js";


// css
import "./styles/global.css";
import "./styles/form.css";
import "./styles/schedule.css";



//js
import "./modules/form/submit.js"
import "./modules/form/date-change.js"
import "./modules/form/cancelButton.js"
setupPDFGeneration();
import "./modules/page-load.js"


