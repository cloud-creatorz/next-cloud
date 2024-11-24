"use client";

import React, { useEffect, useState } from "react";
import { CalendarDays, Clock } from "lucide-react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
  DialogOverlay,
  DialogPortal
} from "./dialog";
import { Button } from "./button";
import { Textarea } from "./textarea";

function BookAppointment() {
  const [date, setDate] = useState<string | undefined>(); // Storing date as a string
  const [timeSlot, setTimeSlot] = useState<{ time: string }[]>([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | undefined>();
  const [note, setNote] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Dialog visibility state
  const [email, setEmail] = useState<string | undefined>();
  const [name, setName] = useState<string | undefined>();

  useEffect(() => {
    generateTimeSlots();
  }, []);

  const generateTimeSlots = () => {
    const timeList = [];
    for (let i = 10; i <= 12; i++) {
      timeList.push({ time: `${i}:00 AM` });
      timeList.push({ time: `${i}:30 AM` });
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({ time: `${i}:00 PM` });
      timeList.push({ time: `${i}:30 PM` });
    }
    setTimeSlot(timeList);
  };

  const saveBooking = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!date || !email) {
      alert("Please fill out all required fields!");
      return;
    }
  
    const bookingData = {
      date, // Already a string
      timeSlot: selectedTimeSlot,
      note: note || "",
      email, // Add email to the payload
      name,
    };
  
    try {
      const response = await fetch('https://mailer-qobf.onrender.com/book-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });
  
      const result = await response.json();
      if (response.ok) {
        alert('meeting booking success: ' + result.message);
        setDate(undefined); // Clear date
        setSelectedTimeSlot(undefined);
        setNote('');
        setEmail(''); // Clear email
      } else {
        alert('Failed: ' + (result.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('An error occurred while submitting your booking.');
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
<Button
  className="ease-in-up shadow-btn hover:shadow-btn-hover rounded-sm bg-primary py-6 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9 flex items-center justify-center ml-16"
  onClick={() => setIsDialogOpen(true)}
>
  <span className="relative top-[-10px]">Talk to an expert</span>
</Button>


      </DialogTrigger>
      <DialogContent className="max-w-lg w-full mx-auto bg-black rounded-lg shadow-lg p-6 overflow-y-auto max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Pick a Time Slot</DialogTitle>
          <DialogDescription>
          <div className="flex flex-col items-center space-y-4 p-4 bg-black text-white rounded-lg shadow-lg">
  <label
    htmlFor="name"
    className="text-sm font-medium text-gray-300 mb-1 block"
  >
    Name:
  </label>
  <input
    id="name"
    type="text"
    value={name || ""}
    onChange={(e) => setName(e.target.value || undefined)}
    required
    placeholder="Enter your name"
    className="w-full p-2 bg-gray-800 text-gray-100 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
  />
</div>
          <div className="flex flex-col items-center space-y-4 p-4 bg-black text-white rounded-lg shadow-lg">
  <label
    htmlFor="email"
    className="text-sm font-medium text-gray-300 mb-1 block"
  >
    Email:
  </label>
  <input
    id="email"
    type="email"
    value={email || ""}
    onChange={(e) => setEmail(e.target.value || undefined)}
    required
    placeholder="Enter your email"
    className="w-full p-2 bg-gray-800 text-gray-100 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
  />
</div>

            <div>
              {/* Date Picker Section */}
              <div className="flex flex-col items-center space-y-4 p-4 bg-black text-white rounded-lg shadow-lg">
                <label
                  htmlFor="date"
                  className="text-sm font-medium text-gray-300 mb-1 block"
                >
                  Date:
                </label>
                <input
                  id="date"
                  type="date"
                  value={date || ""}
                  onChange={(e) => setDate(e.target.value || undefined)}
                  required
                  className="w-full p-2 bg-gray-800 text-gray-100 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {/* <DayPicker
                  mode="single"
                  selected={date ? new Date(date) : undefined}
                  onSelect={(selectedDate) =>
                    setDate(
                      selectedDate
                        ? selectedDate.toISOString().split("T")[0]
                        : undefined
                    )
                  }
                  className="bg-gray-900 rounded-lg p-4 shadow-inner"
                  styles={{
                    day_selected: {
                      backgroundColor: "#2563eb",
                      color: "white",
                      borderRadius: "50%",
                    },
                    day_today: {
                      borderColor: "#4b5563",
                      borderWidth: "2px",
                    },
                    month: {
                      color: "#d1d5db",
                    },
                  }}
                  modifiersClassNames={{
                    selected: "bg-primary text-white",
                    today: "border-primary border-2",
                  }}
                /> */}
                <p className="mt-4 text-sm">
                  Selected Date: {date || "None"}
                </p>
              </div>

              {/* Time Slot Picker */}
              <div className="mt-6">
                <h2 className="flex gap-2 items-center mb-3">
                  <Clock className="text-primary h-5 w-5" />
                  Select Time Slot
                </h2>
                <div className="grid grid-cols-3 gap-2 border rounded-lg p-5">
                  {timeSlot.map((item, index) => (
                    <h2
                      key={index}
                      onClick={() => setSelectedTimeSlot(item.time)}
                      className={`p-2 border cursor-pointer text-center hover:bg-primary hover:text-white rounded-full ${
                        item.time === selectedTimeSlot &&
                        "bg-primary text-white"
                      }`}
                    >
                      {item.time}
                    </h2>
                  ))}
                </div>
              </div>

              {/* Notes Section */}
              <Textarea
                className="mt-3"
                placeholder="Add a note (optional)"
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setNote(e.target.value)
                }
              />
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button
              type="button"
              className="text-red-500 border-red-500"
            >
              Close
            </Button>
          </DialogClose>
          <button
            type="button"
             className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2"
            onClick={saveBooking}
          >
            Submit
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default BookAppointment;
