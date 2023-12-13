import { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption=[],
    selectedCurency="inr",
    amountDiseble=false,
    currencyDiseble,
    className = ""
}) {

    // console.log(typeof(selectedCurency));
   const amountFieldId = useId()

  

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block"
                htmlFor={amountFieldId}
                >
                    {label}
                </label>
                <input
                id={amountFieldId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    value={amount}
                    onChange={(e)=>{
                        onAmountChange && onAmountChange(Number(e.target.value))
                    }}
                    placeholder="Amount"
                    disabled={amountDiseble}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectedCurency}
                    onChange={ (e)=>{ onCurrencyChange(e.target.value)}}
                >
                    {currencyOption.map(curency =>(
                        <option key={curency} value={curency}>
                            {curency}
                        </option>
                    ))}
                 
                </select>
            </div>
        </div>
    );
}

export default InputBox;
