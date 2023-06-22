import { AiOutlineCloseCircle } from 'react-icons/ai';

function DeleteBtn({ handleDeleteShow, showId }) {
    return (
        <button onClick={() => handleDeleteShow(showId)} className='delete-btn'>
            <AiOutlineCloseCircle className='delete-icon' />
        </button>
    )
}

export default DeleteBtn;