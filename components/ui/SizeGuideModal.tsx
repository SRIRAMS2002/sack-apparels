import { useState } from 'react'

type SizeChartEntry = [string | number, string | number, string | number]

interface SizeGuide {
  chart: SizeChartEntry[]
  measureImg: string
}

interface ProductWithSizeGuide {
  sizeGuide?: SizeGuide
}

export default function SizeGuideSection({ product }: { product: ProductWithSizeGuide }) {
  const [tab, setTab] = useState<'chart' | 'measure'>('chart')

  if (!product?.sizeGuide) return null

  const { chart, measureImg } = product.sizeGuide

  return (
    <div className="mt-8 w-full max-w-3xl rounded-2xl bg-white p-6 shadow">
      <h2 className="text-center text-lg font-medium">User Guide</h2>

      <div className="mt-4 border-b flex justify-between">
        {(['chart', 'measure'] as const).map((type) => (
          <button
            key={type}
            className={`w-1/2 pb-2 text-sm font-medium ${
              tab === type ? 'border-b-2 border-black' : 'text-gray-400'
            }`}
            onClick={() => setTab(type)}
          >
            {{
              chart: 'Size Chart',
              measure: 'How To Measure',
            }[type]}
          </button>
        ))}
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
              {chart.map(([size, chest, length]) => (
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
            src={measureImg}
            alt="How to measure"
            className="mx-auto w-full max-w-xs"
          />
          <p className="mt-2 text-gray-500 text-xs">
            The measurements in the size chart are based on body measurements, not the garment.
          </p>
        </div>
      )}
    </div>
  )
}
