export default function InputBox({ onChangeInput, values }){

    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial-investment">Investimento Inicial</label>
                    <input type="number" value={values.invest} onChange={(event) => onChangeInput('invest', event.target.valueAsNumber)} required/>
                </p>
                <p>
                    <label htmlFor="anual-investment">Investimento Anual</label>
                    <input type="number" value={values.yinvest} onChange={(event) => onChangeInput('yinvest', event.target.valueAsNumber)} required/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">Retorno Esperado</label>
                    <input type="number" value={values.eR} onChange={(event) => onChangeInput('eR', event.target.valueAsNumber)} required/>
                </p>
                <p>
                    <label htmlFor="duration">Duração</label>
                    <input type="number" value={values.yduration} onChange={(event) => onChangeInput('yduration', event.target.valueAsNumber)} required/>
                </p>
            </div>
        </section>
    );

}