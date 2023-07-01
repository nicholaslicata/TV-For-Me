
function AddBtn({ handleAddShow }) {
    return (
        <button className='add-btn' onClick={handleAddShow} aria-label='add-to-watchlist'>Add To Watchlist</button>
    )
}

export default AddBtn;