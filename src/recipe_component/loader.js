const Loader = () => {
    const load ={
        minHeight:'100vh',
        display:'flex',
        justifyContent:'center',
        alignItem:'center'
    }

    return(
        <div className="loader-container">
            <div
                className="spinner-grow"
                style={{ width: 200, height: 200 }}
                role="status"
                >
                <span className="visually-hidden">Loading...</span>
                </div>

        </div>
    )
}

export default Loader