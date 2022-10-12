

const PropDemo = (props) => {
    const {name, age, showTemplate, setShowTemplate} = props;
    return (
        <div className="prop">
            <h1>PROPS COMPONENT</h1>
            <br />
            {showTemplate && <p>My name is {name}, and i am {age} years old.</p>}
            <button onClick={() => setShowTemplate(!showTemplate)}>toggle</button>
        </div>
    )
}

export default PropDemo;