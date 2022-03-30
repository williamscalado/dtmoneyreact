import Modal from 'react-modal'
import { stylemodal } from './style'

interface propsModalCategory {
    modalIsOpen: boolean,
    closeModal: ()=> void
}

export const NewCategoryModal = ({modalIsOpen, closeModal}: propsModalCategory) =>{

return(
    <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    style={stylemodal}
    >
        <h1>teste Category</h1>
    </Modal>
)
}
