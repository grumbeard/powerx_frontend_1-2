import * as React from "react";
import { BillSplitter } from './pages/bill-splitter';
import { Career } from './pages/career';
import { Pokemon } from './pages/pokemon';

const buttonClassActive = "flex-1 px-3 py-1 bg-gray-500 text-white rounded shadow";
const buttonClassInactive = "flex-1 px-3 py-1 bg-gray-200 text-white rounded shadow";

export function App() {
    const [activeBtn, setActiveBtn] = React.useState('tab-btn-1');
    const [activeTab, setActiveTab] = React.useState(<BillSplitter />);

    return (
        <div>
            <div className="max-w-4xl flex items-center gap-4 mx-auto px-3 py-12">
                <button
                    id="tab-btn-1"
                    className={activeBtn === 'tab-btn-1' ? buttonClassActive : buttonClassInactive}
                    onClick={ () => {
                        setActiveBtn('tab-btn-1');
                        setActiveTab(<BillSplitter />);
                    } }
                >
                    Bill Splitter
                </button>
                <button
                    id="tab-btn-2"
                    className={activeBtn === 'tab-btn-2' ? buttonClassActive : buttonClassInactive}
                    onClick={ () => {
                        setActiveBtn('tab-btn-2');
                        setActiveTab(<Career />);
                    } }
                >
                    Careers
                </button>
                <button
                    id="tab-btn-3"
                    className={activeBtn === 'tab-btn-3' ? buttonClassActive : buttonClassInactive}
                    onClick={ () => {
                        setActiveBtn('tab-btn-3');
                        setActiveTab(<Pokemon />);
                    } }
                >
                    Pokemon
                </button>
            </div>
            {activeTab}
        </div>
    );
}