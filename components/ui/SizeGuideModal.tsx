import { useState } from 'react'

export default function SizeGuideSection() {
  const [tab, setTab] = useState<'chart' | 'measure' | 'fit'>('chart')

  return (
    <div className="mt-8 w-full max-w-3xl rounded-2xl bg-white p-6 shadow">
      <h2 className="text-center text-lg font-medium">User Guide</h2>

      <div className="mt-4 border-b flex justify-between">
        <button
          className={`w-1/3 pb-2 text-sm font-medium ${tab === 'chart' ? 'border-b-2 border-black' : 'text-gray-400'}`}
          onClick={() => setTab('chart')}
        >
          Size Chart
        </button>
        <button
          className={`w-1/3 pb-2 text-sm font-medium ${tab === 'measure' ? 'border-b-2 border-black' : 'text-gray-400'}`}
          onClick={() => setTab('measure')}
        >
          How To Measure
        </button>
        <button
          className={`w-1/3 pb-2 text-sm font-medium ${tab === 'fit' ? 'border-b-2 border-black' : 'text-gray-400'}`}
          onClick={() => setTab('fit')}
        >
          Fit Tips
        </button>
      </div>

      {tab === 'chart' && (
        <div className="mt-4 text-sm">
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="border-b text-gray-600">
                <th className="py-2">Size</th>
                <th>Chest</th>
                <th>Length</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['S', 18, 26],
                ['M', 19, 27],
                ['L', 20, 28],
                ['XL', 21, 29],
                ['2XL', 22, 30],
                ['3XL', 23, 31],
              ].map(([size, chest, length]) => (
                <tr key={size}>
                  <td className="py-2">{size}</td>
                  <td>{chest}</td>
                  <td>{length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === 'measure' && (
        <div className="mt-4 text-sm text-center">
          <img
            src="/measurement.jpg"
            alt="How to measure"
            className="mx-auto w-full max-w-xs"
          />
          <p className="mt-2 text-gray-500 text-xs">
            The measurements in the size chart are based on body measurements, not the garment.
          </p>
        </div>
      )}

      {tab === 'fit' && (
        <div className="mt-4 text-sm text-gray-600">
          <img
            src="/color.jpeg"
            alt="How to measure"
            className="mx-auto w-full max-w-xs"
          />
          <p>Note.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Choose any colour in colour chart </li>
            <li>Select the Custom colour option</li>
            <li>Share to the Manufacturer</li>

           
          </ul>
        </div>
      )}
    </div>
  )
}
