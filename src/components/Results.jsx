import {calculateInvestmentResults, formatter} from '../util/investment.js'

export default function Results({ userInput }){
    const {
        invest: initialInvestment,
        yinvest: annualInvestment,
        eR: expectedReturn,
        yduration: duration,
    } = userInput;
    //O nome das variaveis no objeto precisam ser o mesmo nome na função, por isso foi necessario descontruir o objeto e reconstruir
    const newInputs = {initialInvestment, annualInvestment, expectedReturn, duration};

    const resultsData = calculateInvestmentResults(newInputs);
    const StarterInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;
    console.log(newInputs)
    console.log(resultsData)

    return(
        <table id='result'>
            <thead>
                <tr>
                    <th>Ano</th>
                    <th>Valor investido</th>
                    <th>Juros</th>
                    <th>Juros totais</th>
                    <th>Capital Investido</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map(anoData => {
                    const totalInterest = anoData.valueEndOfYear - anoData.annualInvestment * anoData.year - StarterInvestment;
                    const totalAmountInvested = anoData.valueEndOfYear - totalInterest;

                    return(
                        <tr key={anoData.year}>
                            <td>{anoData.year}</td>
                            <td>{formatter.format(anoData.valueEndOfYear)}</td>
                            <td>{formatter.format(anoData.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}