import { ConteinerSearch, ConteinerTableTrasasion } from "./sytle";
import ImgCalendar from '../../assets/calendar-color.png'
import { useEffect, useState } from "react";
import { Api } from "../../services/Api";

interface porpsModal { 
    openModal: () => void
}

export function TableTransasion({openModal}: porpsModal) {

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
                <button onClick={openModal}>Nova Transição</button>
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
                        ({ id, titleTransasion, data, selectCategory, valueTrasasion, type }) => {
                            return (
                                <tr key={id}>
                                    <td>{titleTransasion}</td>
                                    <td className={(type === 1) ? "expense" : "income"}>{valueTrasasion}</td>
                                    <td>{selectCategory}</td>
                                    <td>{data}<img src={ImgCalendar} alt="dat" /></td>
                                </tr>

                            )
                        })}


                </tbody>
            </table>
        </ConteinerTableTrasasion>
    )
}