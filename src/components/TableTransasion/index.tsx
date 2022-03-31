import { ConteinerSearch, ConteinerTableTrasasion } from "./sytle";
import ImgCalendar from '../../assets/calendar-color.png'
import { useContext } from "react";
import { TransasionContext } from "../hooks/Transasions";
import { CategoriesContext } from "../hooks/Categories";
import { formatCurrency } from "../../util/functions";

interface porpsModal {
    openModal: () => void
}

export function TableTransasion({ openModal }: porpsModal) {

    const { transactions } = useContext(TransasionContext)
    const categoriesData = useContext(CategoriesContext)

    transactions.sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());

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
                    {transactions.map(
                        (response) => {
                            return (
                                <tr key={response.id}>
                                    <td>{response.titleTransasion}</td>
                                    <td className={(response.type === 0) ? "expense" : "income"}>
                                        {
                                            formatCurrency(response.valueTrasasion)
                                        }
                                    </td>
                                    <td>{
                                        categoriesData
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