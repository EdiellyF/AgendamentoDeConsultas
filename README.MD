# Sistema de Agendamentos

Um sistema web para gerenciamento de agendamentos médicos, desenvolvido com JavaScript puro e arquitetura modular.

## 🚀 Funcionalidades

- Seleção de data e horário para agendamento
- Visualização de horários disponíveis
- Cadastro de pacientes
- Visualização de agendamentos por período (manhã, tarde e noite)
- Interface responsiva
- Validação de horários passados

## 🛠️ Tecnologias

- JavaScript (ES6+)
- HTML5
- CSS3
- Webpack
- Babel
- DayJS
- JSON Server

## 📦 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/ediellyF/sistema-de-agendamentos.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```


4. Em outro terminal, inicie o JSON Server:
   ```bash
   npm run server
   ```


## 🔧 Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Gera build de produção
- `npm run server`: Inicia o JSON Server


## 🎯 Componentes Principais

### ButtonSelect
Classe responsável pelo gerenciamento de seleção de botões.

### HoursLoad
Classe responsável pelo carregamento dos horários disponíveis.

### Submit
Classe responsável pelo envio do formulário.


[Documentação completa do ButtonSelect](docs/components/ButtonSelect.html)

## 📱 Layout Responsivo

O sistema se adapta a diferentes tamanhos de tela:
- Desktop: Layout em grid com duas colunas
- Mobile: Layout em coluna única com scroll

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request


## ✨ Próximas Features

- [ ] Autenticação de usuários
- [ ] Painel administrativo
- [ ] Notificações por email
- [ ] Histórico de agendamentos
- [ ] Integração com Google Calendar
- [ ] Gerar PDF de agendamentos



## 🤔 Como Usar

1. Selecione uma data no calendário
2. Escolha um horário disponível
3. Preencha os dados do paciente
4. Clique em "Agendar"

Os agendamentos aparecerão automaticamente na seção lateral, organizados por período.

## ⚙️ Configuração

As configurações do projeto podem ser ajustadas em:
- `webpack.config.js`: Configurações de build
- `src/utils/opening-hours.js`: Horários disponíveis
- `server.json`: Dados mockados para desenvolvimento

## 📞 Suporte

Para suporte, envie um email para `edielly.ferreiraf@exemplo.com` ou abra uma issue no GitHub.