import { ConteinerSearch, ConteinerTableTrasasion } from "./sytle";
import ImgCalendar from '../../assets/calendar-color.png'
import { useEffect, useState } from "react";
import { Api } from "../../services/Api";

export function TableTransasion() {

    const [trns, setTrns] = useState([])

    useEffect(() => {
        Api.get('transasion/')
            .then(response => {
                setTrns(response.data.transasions)
            })
            
    }, [])

    return (

        <ConteinerTableTrasasion>
            <ConteinerSearch>
                <input type="text" placeholder="Buscar transição" />
                <button>Nova Transição</button>
            </ConteinerSearch>
            <table>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {trns.map(
                        ({ id, desc, data, categoryid, value, type }) => {
                            return (
                                <tr key={id}>
                                    <td>{desc}</td>
                                    <td className={(type === 1) ? "expense" : "income"}>{value}</td>
                                    <td>{categoryid}</td>
                                    <td>{data}<img src={ImgCalendar} alt="dat" /></td>
                                </tr>

                            )
                        })}


                </tbody>
            </table>
        </ConteinerTableTrasasion>
    )
}