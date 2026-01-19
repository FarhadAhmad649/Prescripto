import React from 'react'
import { assets } from '../assets/assets.js';

function MyAppointments() {
  return (
    <div className="p-4 sm:p-8 max-w-5xl mx-auto">
      <h2 className="text-xl font-medium text-zinc-700 pb-3 border-b border-zinc-200 mb-4">
        My Appointments
      </h2>

      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-[1fr] md:grid-cols-[120px_1fr_max-content] gap-4 md:gap-6 py-4 border-b border-zinc-200 items-end md:items-center">
          {/* Doctor Image */}
          <div className="bg-indigo-50 rounded-md overflow-hidden">
            <img
              src={assets.appointment_img}
              alt="doctor"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Doctor Info */}
          <div className="flex-1 text-sm text-zinc-600">
            <p className="text-neutral-800 font-semibold text-lg">
              Dr.Richard James
            </p>
            <p className="mb-2">General physician</p>
            <p className="text-zinc-700 font-medium mt-1">Address:</p>
            <p className="text-xs">57th Cross, Richmond</p>
            <p className="text-xs">Circle, Church Road, London</p>
            <p className="text-xs mt-2">
              <span className="text-zinc-700 font-medium">Date & Time:</span>{" "}
              25,july,2026 | 8.30PM
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-2 justify-end min-w-[150px]">
            <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-[#5f6FFF] hover:text-white transition-all duration-300 bg-[#5f6FFF] text-white">
              Pay here
            </button>

            <button className="sm:min-w-48 py-2 border rounded text-stone-500 bg-indigo-50 border-none">
              Paid
            </button>

            <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300">
              Cancel appointment
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-[1fr] md:grid-cols-[120px_1fr_max-content] gap-4 md:gap-6 py-4 border-b border-zinc-200 items-end md:items-center">
          {/* Doctor Image */}
          <div className="bg-indigo-50 rounded-md overflow-hidden">
            <img
              src={assets.appointment_img}
              alt="doctor"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Doctor Info */}
          <div className="flex-1 text-sm text-zinc-600">
            <p className="text-neutral-800 font-semibold text-lg">
              Dr.Richard James
            </p>
            <p className="mb-2">General physician</p>
            <p className="text-zinc-700 font-medium mt-1">Address:</p>
            <p className="text-xs">57th Cross, Richmond</p>
            <p className="text-xs">Circle, Church Road, London</p>
            <p className="text-xs mt-2">
              <span className="text-zinc-700 font-medium">Date & Time:</span>{" "}
              25,july,2026 | 8.30PM
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-2 justify-end min-w-[150px]">
            <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-[#5f6FFF] hover:text-white transition-all duration-300 bg-[#5f6FFF] text-white">
              Pay here
            </button>

            <button className="sm:min-w-48 py-2 border rounded text-stone-500 bg-indigo-50 border-none">
              Paid
            </button>

            <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300">
              Cancel appointment
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-[1fr] md:grid-cols-[120px_1fr_max-content] gap-4 md:gap-6 py-4 border-b border-zinc-200 items-end md:items-center">
          {/* Doctor Image */}
          <div className="bg-indigo-50 rounded-md overflow-hidden">
            <img
              src={assets.appointment_img}
              alt="doctor"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Doctor Info */}
          <div className="flex-1 text-sm text-zinc-600">
            <p className="text-neutral-800 font-semibold text-lg">
              Dr.Richard James
            </p>
            <p className="mb-2">General physician</p>
            <p className="text-zinc-700 font-medium mt-1">Address:</p>
            <p className="text-xs">57th Cross, Richmond</p>
            <p className="text-xs">Circle, Church Road, London</p>
            <p className="text-xs mt-2">
              <span className="text-zinc-700 font-medium">Date & Time:</span>{" "}
              25,july,2026 | 8.30PM
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-2 justify-end min-w-[150px]">
            <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-[#5f6FFF] hover:text-white transition-all duration-300 bg-[#5f6FFF] text-white">
              Pay here
            </button>

            <button className="sm:min-w-48 py-2 border rounded text-stone-500 bg-indigo-50 border-none">
              Paid
            </button>

            <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300">
              Cancel appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAppointments