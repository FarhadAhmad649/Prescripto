import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors.jsx";

function Appointment() {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);

  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);

    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    let slots = [];

    // getting current date
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      // getting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // setting and time of the date with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      // setting hours
      if (today.getDate() === currentDate.getDate()) {
        // set today
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        // set other days
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      // setting end time
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        // add slots to array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        // increment current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      slots.push(timeSlots);
    }
    setDocSlots(slots);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots();
    }
  }, [docInfo]);

  return (
    docInfo && (
      <div className=" ">
        {/* ............Doctor Details............... */}
        <div className="flex flex-col sm:flex-row gap-4 ">
          <div>
            <img
              className="min-w-72 bg-[#5f6fff] rounded-lg"
              src={docInfo.image}
              alt=""
            />
          </div>
          <div class="max-w-2xl bg-white border border-gray-200 rounded-xl p-8 shadow-sm font-sans">
            <div class="flex items-center gap-2 mb-1">
              <h2 class="text-2xl font-bold text-gray-800">{docInfo.name}</h2>
              <img className="w-4" src={assets.verified_icon} alt="" />
            </div>

            <div class="flex items-center gap-3 mb-4">
              <span class="text-gray-500 text-sm">
                MBBS - <span>{docInfo.speciality}</span>
              </span>
              <span class="px-3 py-0.5 border border-gray-400 rounded-full text-xs text-gray-600 font-medium">
                {docInfo.experience}
              </span>
            </div>

            <div class="mb-6">
              <div class="flex items-center gap-1 text-gray-800 font-semibold mb-2">
                <span>About</span>
                <img src={assets.info_icon} alt="" />
              </div>
              <p class="text-gray-600 text-sm leading-relaxed">
                Dr. James has a strong commitment to delivering comprehensive
                medical care, focusing on preventive medicine, early diagnosis,
                and effective treatment strategies.
              </p>
            </div>

            <div class="text-gray-700 font-medium">
              Appointment fee:{" "}
              <span class="text-gray-900 font-bold">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </div>
          </div>
        </div>

        {/* ...............Booking Slots............... */}
        <div class="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <h3 class="text-gray-600 font-semibold mb-6">Booking slots</h3>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {docSlots.length &&
              docSlots.map((item, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  className={`text-center py-6 min-w-16 min-h-24  rounded-full cursor-pointer ${
                    slotIndex === index
                      ? "bg-[#5f6fff] text-white"
                      : "border border-gray-200"
                  }`}
                  key={index}
                >
                  <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>
          <div className="flex items-center gap-3 w-full overflow-x-scroll my-4">
            {docSlots.length &&
              docSlots[slotIndex]?.map((item, index) => (
                <p
                  onClick={() => setSlotTime(item.time)}
                  className={`text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer hide-scrollbar ${
                    item.time === slotTime
                      ? "bg-[#5f6fff] text-white"
                      : "text-gray-500 border border-gray-300"
                  }`}
                  key={index}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>
          <button className="bg-[#5f6fff] text-white text-sm font-light px-14 py-3 rounded-full">
            Book an Appointment
          </button>
        </div>

        {/* .........Listing Related Doctors.......... */}
        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />

      </div>
    )
  );
}

export default Appointment;
