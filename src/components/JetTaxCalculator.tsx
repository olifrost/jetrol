import { useState } from 'react';
import { Plane } from 'lucide-react';

const destinations = [
    { name: 'Paris', distance: 215 },
    { name: 'Monaco', distance: 650 },
    { name: 'Verbier', distance: 500 },
    { name: 'St. Tropez', distance: 700 },
    { name: 'Dubai', distance: 3400 },
    { name: 'The Hamptons', distance: 3500 },
    { name: 'Aspen', distance: 4600 }
];

interface Props {
    heading: string;
    flightTo: string;
    miles: string;
    near: string;
    far: string;
    currency: string;
    motoristText: string;
}

export default function JetTaxCalculator({ heading, flightTo, miles, near, far, currency, motoristText }: Props) {
    const [sliderValue, setSliderValue] = useState(0);
    const selectedDestination = destinations[sliderValue];

    return (
        <section className="py-20 px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-pink rounded-full mb-6">
                    <Plane className="w-8 h-8 text-white" />
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
                    {heading}
                </h2>

                <div className="mb-8">
                    <div className="text-xl text-zinc-400 mb-6">
                        {flightTo} {selectedDestination.name} ({selectedDestination.distance.toLocaleString()} {miles})
                    </div>

                    <input
                        type="range"
                        min="0"
                        max={destinations.length - 1}
                        value={sliderValue}
                        onChange={(e) => setSliderValue(Number(e.target.value))}
                        className="w-full max-w-2xl h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer slider-pink"
                    />

                    <div className="flex justify-between max-w-2xl mx-auto mt-2 text-sm text-zinc-600">
                        <span>{near}</span>
                        <span>{far}</span>
                    </div>
                </div>

                <div className="text-8xl sm:text-9xl font-bold text-brand-pink mb-4">
                    {currency}0
                </div>

                <p className="text-xl text-zinc-400">
                    {motoristText}
                </p>
            </div>

            <style>{`
                .slider-pink::-webkit-slider-thumb {
                    appearance: none;
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    background: #ec4899;
                    cursor: pointer;
                    border: 3px solid #18181b;
                }

                .slider-pink::-moz-range-thumb {
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    background: #ec4899;
                    cursor: pointer;
                    border: 3px solid #18181b;
                }
            `}</style>
        </section>
    );
}
