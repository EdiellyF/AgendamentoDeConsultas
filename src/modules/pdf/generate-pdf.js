import jsPDF from 'jspdf';
import dayjs from 'dayjs';

export function setupPDFGeneration() {
    const pdfButton = document.getElementById('generatePdf');
    
    pdfButton.addEventListener('click', generatePDF);
}

function generatePDF() {
    const doc = new jsPDF();
    const date = document.querySelector('#date').value;
    
    
    doc.setFont('helvetica');
    doc.setFontSize(16);
    
    doc.setFillColor(200, 200, 200); // Cor cinza-claro no fundo
    doc.rect(18, 15, 100, 10, 'F'); // Desenha um retângulo preenchido (F)
    
    doc.text('Relatório de Agendamentos', 20, 20);




    doc.setTextColor(0, 0, 0);


    doc.setFontSize(12);
    doc.text(`Data: ${dayjs(date).format('DD/MM/YYYY')}`, 20, 30);
    
    // Get appointments
    const morning = getAppointments('period-morning');
    const afternoon = getAppointments('period-afternoon');
    const night = getAppointments('period-night');
    
    // Add periods to PDF
    let yPosition = 50;
    
    if (morning.length) {
        yPosition = addPeriodToPDF(doc, 'Manhã (09h-12h)', morning, yPosition);
    }
    
    if (afternoon.length) {
        yPosition = addPeriodToPDF(doc, 'Tarde (13h-18h)', afternoon, yPosition);
    }
    
    if (night.length) {
        yPosition = addPeriodToPDF(doc, 'Noite (19h-21h)', night, yPosition);
    }
    
    // Save PDF
    doc.save(`agendamentos-${date}.pdf`);
}

function getAppointments(periodId) {
    const items = document.querySelectorAll(`#${periodId} li`);
    return Array.from(items).map(item => ({
        time: item.querySelector('strong').textContent,
        name: item.querySelector('span').textContent,
        cpf: item.querySelectorAll('span')[1].textContent
    }));
}

function addPeriodToPDF(doc, title, appointments, startY) {
    doc.setFontSize(14);
    doc.text(title, 20, startY);
    
    doc.setFontSize(10);
    let y = startY + 10;
    
    appointments.forEach(app => {
        doc.text(`${app.time} - ${app.name} (CPF: ${app.cpf})`, 25, y);
        y += 7;
    });
    
    return y + 10;
}