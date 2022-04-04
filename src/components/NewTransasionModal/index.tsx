import { useContext, useState } from 'react'
import Modal from 'react-modal'
import { CategoriesContext } from '../../hooks/Categories'
import { TransasionContext } from '../../hooks/Transasions'
import { useForm} from 'react-hook-form'

import imgIncome from '../../assets/income.svg'
import imgOutincome from '../../assets/outcome.svg'
import imgClose from '../../assets/close.svg'


import { ButtonActiveType, ConteinerFormModal, ConteinerTypeTransasion } from './style'
import { currencyMask } from '../../util/functions'


interface propsFunctionModal {
    modalIsOpen: boolean,
    closeModal: () => void
}

export const NewTransasionModal = ({ modalIsOpen, closeModal }: propsFunctionModal) => {

    const [ButtonColorActive, setButtonColorActive] = useState('')
    const { categories } = useContext(CategoriesContext)

    const { createTransactions } = useContext(TransasionContext)
    const { handleSubmit, register, formState: { errors }, reset, control } = useForm()





    const handlecretaeNewTrasasion = async (data: any) => {
        const idTrasasion = Math.floor(Math.random() * 1000)
        data.valueTrasasion = parseFloat(data.valueTrasasion.replace(/[^0-9,]*/g, '').replace(',', '.')).toFixed(2);

        const dataNewTrasasion = {
            id: idTrasasion,
            ...data,
            type: ButtonColorActive === 'income' ? 1 : 0,
            data: Date.now()

        }

        await createTransactions(dataNewTrasasion)

        reset()
        setButtonColorActive('')
        closeModal()

    };



    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => { closeModal(); setButtonColorActive('') }}
            className={"modal-style"}
            overlayClassName={"modal-style-overlay"}
        >

            <ConteinerFormModal
                onSubmit={handleSubmit(handlecretaeNewTrasasion)}
            >
                <img src={imgClose} className="button-close-modal" onClick={() => { closeModal(); setButtonColorActive('') }} alt="" />
                <h1>Cadastrar Transação</h1>
                <input
                    type="text"
                    placeholder='Titulo'
                    {...register("titleTransasion", { required: true, minLength: 3 })}
                />
                {errors.titleTransasion && <p className='errormessage'>Precisamos de um título</p>}

                <input
                    type="text"
                    placeholder='Valor'
                    {...register("valueTrasasion", { required: true })}
                    onChange={e => { currencyMask(e) }}
                />


                {errors.valueTrasasion && <p className='errormessage'>Nenhum valor foi digitado</p>}


                <ConteinerTypeTransasion>

                    <ButtonActiveType
                        type="button"
                        isActive={ButtonColorActive === 'income'}
                        onClick={() => { setButtonColorActive('income') }}
                        color="green"

                    >
                        <img src={imgIncome} alt="Entrada" />
                        <span>Entradas</span>
                    </ButtonActiveType>

                    <ButtonActiveType
                        type='button'
                        color='red'
                        isActive={ButtonColorActive === 'expense'}
                        onClick={() => { setButtonColorActive("expense") }}
                    >
                        <img src={imgOutincome} alt="Entrada" />
                        <span>Saídas</span>
                    </ButtonActiveType>

                </ConteinerTypeTransasion>

                <select
                    {...register('selectCategory', { required: "select one option" })}
                    id="categoryid"
                >
                    <option value=""></option>

                    {categories.map(({ id, name }) => {

                        return (
                            <option value={id} key={id}>{name}</option>
                        )
                    })}

                </select>
                {errors.selectCategory && <p className='errormessage'>Escolha uma categoria</p>}

                <button className="sendbuttonmodal">Cadastrar</button>


            </ConteinerFormModal>
        </Modal>
    )
}