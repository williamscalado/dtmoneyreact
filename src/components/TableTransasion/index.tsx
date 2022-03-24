import { ConteinerSearch, ConteinerTableTrasasion } from "./sytle";
import ImgCalendar from '../../assets/calendar-color.png'
export function TableTransasion (){
    return (

        <ConteinerTableTrasasion>
            <ConteinerSearch>
                <input type="text" placeholder="Buscar transição" />
                <button>Nova Transição</button>
            </ConteinerSearch>
            <table>
                <thead>
                    <th>Descrição</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Venda</td>
                        <td className="income">R$ 2500,00</td>
                        <td>Externa</td>
                        <td>
                            
                            24/02/2022
                            <img src={ImgCalendar} alt="dat"  />
                        </td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="expense">- R$ 1500,00</td>
                        <td>Casa</td>
                        <td>
                            
                            24/02/2022
                            <img src={ImgCalendar} alt="dat"  />
                        </td>
                    </tr>
                 
                </tbody>
            </table>
        </ConteinerTableTrasasion>
        )
}