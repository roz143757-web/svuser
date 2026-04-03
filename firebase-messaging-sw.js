importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyCKeK1SURytWc4-ypfOWvhdfah5Ygqp3Ck",
  projectId: "office-attendance-39dd5",
  messagingSenderId: "920822975843",
  appId: "1:920822975843:web:f38e51db3bd6f7af42d756"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
