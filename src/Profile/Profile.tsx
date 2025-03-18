/* eslint-disable @typescript-eslint/no-unused-vars */
//   const triggerBrowserNotification = () => {
//     // Check for browser support
//     if (!('Notification' in window)) {
//       console.error('Browser does not support notifications.');
//       return;
//     }

//     // Notification content
//     const title = 'New Property Alert!';
//     const options: NotificationOptions = {
//       body: 'A 3-bedroom flat is now available in Lekki. Check it out!',
//       icon: '/assets/logo.png', // Use your logo or any image
//     };

//     // Check current permission
//     if (Notification.permission === 'granted') {
//       new Notification(title, options);
//     } else if (Notification.permission !== 'denied') {
//       Notification.requestPermission().then((permission) => {
//         if (permission === 'granted') {
//           new Notification(title, options);
//         } else {
//           console.warn('Notification permission denied.');
//         }
//       });
//     } else {
//       console.warn('Notification permission previously denied.');
//     }
//   };

//       {/* <button
//         onClick={triggerBrowserNotification}
//         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//       >
//         Test Notification
//       </button> */}

import React, { useState } from "react";

interface UserProfile {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  role: "tenant" | "agent" | "landlord" | "admin";
  avatarUrl: string;
  dateJoined: string;
  profileComplete: number;
  propertiesAdded: number;
  bookings: number;
  verified: boolean;
}

const dummyUser: UserProfile = {
  id: 1,
  firstName: "Jane",
  lastName: "Doe",
  email: "jane.doe@example.com",
  phoneNumber: "+234-801-573-1142",
  role: "landlord",
  avatarUrl: "https://via.placeholder.com/100",
  dateJoined: "2023-01-01",
  profileComplete: 80,
  propertiesAdded: 5,
  bookings: 2,
  verified: true,
};

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<UserProfile>(dummyUser);
  const [isEditing, setIsEditing] = useState(false);
  const [editValues, setEditValues] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    password: "",
    confirmPassword: "",
    avatarUrl: user.avatarUrl,
  });

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditValues({ ...editValues, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditValues({ ...editValues, avatarUrl: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (editValues.password !== editValues.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    setUser({
      ...user,
      firstName: editValues.firstName,
      lastName: editValues.lastName,
      email: editValues.email,
      phoneNumber: editValues.phoneNumber,
      avatarUrl: editValues.avatarUrl,
    });

    setIsEditing(false);
  };

  return (
    <div className="p-4 mx-auto space-y-6 max-md:p-0">
      <h1 className="text-2xl font-bold text-blue-700">My Profile</h1>

      <div className="bg-white px-10 py-7 max-md:px-7 rounded-lg shadow-md   flex flex-col md:flex-row gap-10">
        <div className="max-md:flex max-md:justify-center">
          <img
            src={user.avatarUrl}
            alt="Avatar"
            className="w-24 h-24 rounded-full object-cover border"
          />
        </div>
        <div className="flex-1 space-y-3 max-md:space-y-6  text-left">
          <h2 className="text-xl font-semibold">
            Full Name: {user.firstName} {user.lastName}
          </h2>
          <p className="text-gray-600">Email: {user.email}</p>
          <p className="text-gray-600">Phone Number: {user.phoneNumber}</p>
          <p className="text-gray-600 capitalize">Role: {user.role}</p>
          <p className="text-gray-600">Joined: {user.dateJoined}</p>
          <p className="text-sm text-green-600">
            {user.verified ? "Verified" : "Unverified"}
          </p>
        </div>
        {!isEditing && (
          <div className="">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-600 text-white px-4 max-md:w-full py-2 rounded hover:bg-blue-700 max-lg:hover:bg-blue-600"
            >
              Edit Profile
            </button>
          </div>
        )}
      </div>

      {isEditing && (
        <div className="bg-white  rounded-lg shadow-md space-y-4 px-10 max-md:px-7 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                value={editValues.firstName}
                onChange={handleEditChange}
                className="border rounded px-2 py-1 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={editValues.lastName}
                onChange={handleEditChange}
                className="border rounded px-2 py-1 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={editValues.email}
                onChange={handleEditChange}
                className="border rounded px-2 py-1 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={editValues.phoneNumber}
                onChange={handleEditChange}
                className="border rounded px-2 py-1 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={editValues.password}
                onChange={handleEditChange}
                className="border rounded px-2 py-1 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={editValues.confirmPassword}
                onChange={handleEditChange}
                className="border rounded px-2 py-1 w-full"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700">Profile Picture</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="border rounded px-2 py-1 w-full"
              />
            </div>
          </div>
          <div className="mt-8 w-full">
            <button
              onClick={handleSave}
              className="bg-blue-600 text-white px-4 w-full py-2 rounded hover:bg-blue-700 max-lg:hover:bg-blue-600"
            >
              Save Changes
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded shadow text-center">
          <h3 className="text-lg font-semibold">Profile Completion</h3>
          <p className="text-blue-700 text-2xl">{user.profileComplete}%</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <h3 className="text-lg font-semibold">Properties Added</h3>
          <p className="text-blue-700 text-2xl">{user.propertiesAdded}</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <h3 className="text-lg font-semibold">Bookings</h3>
          <p className="text-blue-700 text-2xl">{user.bookings}</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <h3 className="text-lg font-semibold">Growth</h3>
          <p className="text-green-600 text-2xl">+15%</p>
        </div>
      </div>
      {/* 4. My Bookings */}
      <div className="bg-white p-4 rounded shadow space-y-5">
        <h2 className="text-xl font-bold text-blue-700">My Bookings</h2>
        <ul className="space-y-1">
          <li className="border p-2 rounded">
            Property: Oceanview Apartment – Date: 2024-04-20 – Status: Confirmed
          </li>
          <li className="border p-2 rounded">
            Property: Cozy Loft – Date: 2024-05-10 – Status: Pending
          </li>
        </ul>
      </div>

      {/* 5. Notifications */}
      <div className="bg-white p-4 rounded shadow space-y-5">
        <h2 className="text-xl font-bold text-blue-700">Notifications</h2>
        <ul className="space-y-4">
          <li className="text-sm text-gray-700">
            🔔 New message from landlord.
          </li>
          <li className="text-sm text-gray-700">
            🔔 Your booking was confirmed.
          </li>
          <li className="text-sm text-gray-700">
            🔔 New property listed near you.
          </li>
        </ul>
      </div>

      {/* 6. Saved Properties */}
      <div className="bg-white p-4 rounded shadow space-y-5">
        <h2 className="text-xl font-bold text-blue-700">Saved Properties</h2>
        <ul className="space-y-4">
          <li className="border p-2 rounded">Luxury Villa – 4 Beds – ₦20M</li>
          <li className="border p-2 rounded">
            Urban Apartment – 2 Beds – ₦10M
          </li>
        </ul>
      </div>

      {/* 8. My Activity */}
      <div className="bg-white p-4 rounded shadow space-y-5">
        <h2 className="text-xl font-bold text-blue-700">My Activity</h2>
        <p className="text-sm text-gray-700">🔍 Property Views: 120</p>
        <p className="text-sm text-gray-700">📈 Clicks: 35</p>
      </div>

      {/* 9. Support / Help */}
      <div className="bg-white p-4 rounded shadow space-y-5">
        <h2 className="text-xl font-bold text-blue-700">Support</h2>
        <p className="text-sm text-gray-700">
          Need help? Contact us at support@foland-realty.com
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-2">
          Contact Support
        </button>
      </div>

      <div className="bg-white p-4 rounded shadow space-y-4">
        <h2 className="text-xl font-bold text-blue-700">Settings</h2>
        <div className="space-y-2">
          <button className="w-full bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded text-left">
            Change Password
          </button>
          <button className="w-full bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded text-left">
            Notification Preferences
          </button>
          <button className="w-full bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded text-left">
            Manage Devices
          </button>
          <button className="w-full bg-red-100 hover:bg-red-200 px-4 py-2 rounded text-left text-red-600">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
