// components/SizeGuideModal.tsx
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function SizeGuideModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [tab, setTab] = useState<'chart' | 'measure'>('chart')

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-blur bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="scale-95 opacity-0"
            enterTo="scale-100 opacity-100"
            leave="ease-in duration-200"
            leaveFrom="scale-100 opacity-100"
            leaveTo="scale-95 opacity-0"
          >
            <DialogPanel className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <button
    onClick={onClose}
    className="absolute top-3 right-3 text-2xl text-gray-400 hover:text-black focus:outline-none"
    aria-label="Close"
  >
    &times;
  </button>
              <DialogTitle className="text-center text-lg font-medium">Measure’s</DialogTitle>

              <div className="mt-4 border-b flex justify-between">
                <button
                  className={`w-1/2 pb-2 text-sm font-medium ${tab === 'chart' ? 'border-b-2 border-black' : 'text-gray-400'}`}
                  onClick={() => setTab('chart')}
                >
                  Size Chart
                </button>
                <button
                  className={`w-1/2 pb-2 text-sm font-medium ${tab === 'measure' ? 'border-b-2 border-black' : 'text-gray-400'}`}
                  onClick={() => setTab('measure')}
                >
                  How To Measure
                </button>
              </div>

              {tab === 'chart' ? (
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
              ) : (
                <div className="mt-4 text-sm text-center">
                  <img
                    src="/measurement.jpg"
                    alt="How to measure"
                    className="mx-auto w-full max-w-xs"
                  />
                  <p className="mt-2 text-gray-500 text-xs">The measurements in the size chart are based on body measurements, not the garment.</p>
                </div>
              )}
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  )
}
