import React from 'react'

const Profile = () => {
  const triggerBrowserNotification = () => {
    // Check for browser support
    if (!('Notification' in window)) {
      console.error('Browser does not support notifications.');
      return;
    }
  
    // Notification content
    const title = 'New Property Alert!';
    const options: NotificationOptions = {
      body: 'A 3-bedroom flat is now available in Lekki. Check it out!',
      icon: '/assets/logo.png', // Use your logo or any image
    };
  
    // Check current permission
    if (Notification.permission === 'granted') {
      new Notification(title, options);
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          new Notification(title, options);
        } else {
          console.warn('Notification permission denied.');
        }
      });
    } else {
      console.warn('Notification permission previously denied.');
    }
  };
  return (
    <div>
      Profile HI
      <button
        onClick={triggerBrowserNotification}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Test Notification
      </button>
    </div>
  )
}

export default Profile
