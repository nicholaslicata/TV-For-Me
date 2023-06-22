
function DeleteBtn({ handleDeleteShow, showsId }) {
    return (
        <button onClick={() => handleDeleteShow(showsId)}>delete</button>
    )
}

export default DeleteBtn;