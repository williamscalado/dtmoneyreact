import { ConteinerSumary, SumaryHeader, SumaryContent } from "./style";
import imgIncome from '../../assets/income.svg'
import imgOutcome from '../../assets/outcome.svg'
import imgResult from '../../assets/total.svg'



export function Sumary() {
    return (
        <ConteinerSumary>

            <SumaryContent>
                <SumaryHeader>
                    <p>Entradas</p>
                    <img src={imgIncome} alt="" />
                </SumaryHeader>
                <strong>R$ 5.000,00</strong>
            </SumaryContent>

            <SumaryContent>
                <SumaryHeader>
                    <p>Saídas</p>
                    <img src={imgOutcome} alt="" />
                </SumaryHeader>
                <strong>R$ 2.000,00</strong>
            </SumaryContent>

            <SumaryContent  className="bggreen" >
                <SumaryHeader>
                    <p>Total</p>
                    <img src={imgResult} alt="" />
                </SumaryHeader>
                <strong>R$ 3.000,00</strong>
            </SumaryContent>

        </ConteinerSumary>


    )
}