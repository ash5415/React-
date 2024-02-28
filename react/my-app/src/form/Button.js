const Button =({buttonLabel,submitHandler})=>{
    return(
        <div>
            <button onChange={submitHandler}>{buttonLabel}</button>
        </div>
    )
}
export default Button;