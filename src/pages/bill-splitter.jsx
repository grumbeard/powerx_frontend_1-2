import * as React from "react";

const NumberControl = (props) => {
  const { id, value, setValue } = props;

  return (
    <div className="relative">
      <button
        type="button"
        className="absolute left-0 inset-y-0 px-1.5 text-gray-400"
        onClick={() => {
          if (value > 0) {
            setValue(value - 1);
          }
        }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20 12H4"
          />
        </svg>
      </button>
      <input
        type="text"
        required
        className="block w-full px-9 text-center shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 border-gray-300 rounded-md"
        value={value}
        onChange={(ev) => {
          const value = ev.target.value;

          const numValue = Number(value);

          if (!isNaN(numValue)) {
            setValue(numValue);
          }
        }}
        id={id}
      />
      <button
        type="button"
        className="absolute right-0 inset-y-0 px-1.5 text-gray-400"
        onClick={() => {
          setValue(value + 1);
        }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
    </div>
  );
};

const Label = (props) => (
  <label htmlFor={props.htmlFor} className="block text-xs text-gray-500">
    {props.children}
  </label>
);

export const BillSplitter = () => {
    const [ billTotal, setBillTotal ] = React.useState(0);
    const [ pax, setPax ] = React.useState(1);
    const result = document.getElementById('result');

  return (
    <div className="max-w-4xl mx-auto px-3 py-12 space-y-6">
      <div>
        <h1 className="text-6xl mb-4 font-extrabold">Bill Splitter</h1>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-5">
          <div>
            <Label htmlFor="billTotal">Bill total</Label>
            <input
              type="number"
              id="billTotal"
              className="block w-full rounded-md focus:ring-pink-500 focus:border-pink-500 border-gray-300"
              value={billTotal}
              onChange={ (e) => setBillTotal(e.target.value) }
              required
            />
          </div>
          <div>
            <Label htmlFor="pax">Pax</Label>
            <NumberControl id="pax" value={pax} setValue={setPax} />
          </div>
          <div className="text-right">
            <button
              type="button"
              className="w-full px-3 py-1 bg-pink-500 text-white rounded shadow"
              onClick={ () => result.innerText = `$${ (billTotal / pax).toFixed(2) }` }
            >
              Split
            </button>
          </div>
        </div>
        <div className="space-y-5">
          <div className="text-gray-500">Each pax need to pay</div>
          <div>
            <output>
              <span id="result" className="text-6xl tabular-nums font-mono">
                  0.00
              </span>
            </output>
          </div>
        </div>
      </div>
    </div>
  );
};