import { createServer } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


createServer({

  routes() {
      
      
      this.get("/api/categories", () => ({
          categories: [
              { id: 1, name: "Luz", type: 0 },
              { id: 2, name: "Casa", type: 0 },
              { id: 3, name: "Gasolina", type: 0 },
              { id: 4, name: "Salário", type: 1 },
              { id: 5, name: "Investimento", type: 1 },
              { id: 6, name: "Estudo", type: 0 },
          ]
      }))

      this.get('/api/transasion', () => ({
          transasions: [
              { id: 11, desc: "Pagamento conta de luz", categoryid: 1, value: 500, data: "21/02/2022" , type: 0 },
              { id: 22, desc: "compra de material de limpeza", categoryid: 2, value: 100, data: "19/02/2022", type: 0 },
              { id: 33, desc: "Gasolina carro de Fulana", categoryid: 3, value: 247, data: "11/02/2022", type: 0 },
              { id: 44, desc: "Curso de inglês", categoryid: 6, value: 500, data: "12/02/2022", type: 0 },
              { id: 55, desc: "Recebimento de pagaemnto", categoryid: 4, value: 500, data: "25/02/2022", type: 1 },
              { id: 66, desc: "Deposito na poupança", categoryid: 5, value: 100, data: "21/01/2022", type: 1 },
          ]
      }))




  }

});


ReactDOM.render(

  <App />
  ,
  document.getElementById('root')
);
