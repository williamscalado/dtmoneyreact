import { ConteinerSearch, ConteinerTableTrasasion } from "./sytle";
import ImgCalendar from '../../assets/calendar-color.png'
import { useEffect, useState } from "react";
import { Api } from "../../services/Api";

interface porpsModal {
    openModal: () => void
}

interface ITransasion {
    id: number
    titleTransasion: string,
    data: string,
    selectCategory: number,
    valueTrasasion: number,
    type: number
}
interface ICategories {
    id: number
    name: string,
    type: number,

}

export function TableTransasion({ openModal }: porpsModal) {




    const [trns, setTrns] = useState<ITransasion[]>([])

    useEffect(() => {
        Api.get('transasion/')
            .then(response => {
                setTrns(response.data.transasions)
            })

    }, [])

    const [categories, setCategories] = useState<ICategories[]>([])


    useEffect(() => {
        Api.get('categories/')
            .then(response => {
                setCategories(response.data.categories)

            })
    },[])

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
                        (response) => {
                            return (
                                <tr key={response.id}>
                                    <td>{response.titleTransasion}</td>
                                    <td className={(response.type === 1) ? "expense" : "income"}>
                                        {
                                            new Intl.NumberFormat('pt-br',
                                                {
                                                    style: "currency",
                                                    currency: 'BRL'
                                                })
                                                .format(response.valueTrasasion)
                                        }
                                    </td>
                                    <td>{
                                        categories
                                           .find((item) => item.id == response?.selectCategory)?.name
                                    }</td>
                                    <td>{
                                        new Intl.DateTimeFormat('pt-br')
                                            .format(new Date(response.data))
                                    }
                                        <img src={ImgCalendar} alt="dat" /></td>
                                </tr>

                            )
                        })}


                </tbody>
            </table>
        </ConteinerTableTrasasion>
    )
}