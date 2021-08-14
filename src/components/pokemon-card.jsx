import * as React from 'react';

export function PokemonCard({ name, imageUrl, desc, onClick }) {

    return (
        <li
            className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
            onClick={onClick}
        >
            <div className="flex-1 flex flex-col p-8">
                <img className="w-32 h-32 flex-shrink-0 mx-auto bg-gray-200 rounded-full" src={imageUrl} alt="" />
                <h3 className="mt-6 text-gray-900 text-sm font-medium">
                    {name}
                </h3>
                <dl className="mt-1 flex-grow flex flex-col justify-between">
                    <dd className="text-gray-500 text-sm line-clamp-3">
                        {desc.length > 58 ? desc.substring(0,55) + '...' : desc}
                    </dd>
                </dl>
            </div>
        </li>
    );
}