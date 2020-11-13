import './Button.scss'

function Button({ text, textColor = '#444', onClickFunc }) { //props로 
    return (
        <span className="button" style={{ color: textColor }} onClick={onClickFunc}>
            {text}
        </span>
    );
}

export default Button; 