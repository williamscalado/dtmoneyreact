import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


createServer({

    models:{
        transasions: Model
      },

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

      this.get('/api/transasion', () => {
        
        return this.schema.all('transasions')
        
      })

      this.post('/api/transasion', (shcema, request)=>{

        const data = JSON.parse(request.requestBody);
        return shcema.create('transasions', data)

      })




  }

});


ReactDOM.render(

  <App />
  ,
  document.getElementById('root')
);
