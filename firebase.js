/**
 * Slay Station – Firebase (compat SDK, no build step)
 *
 * Load in HTML before auth.js, in this order:
 *   1. firebase-app-compat.js
 *   2. firebase-analytics-compat.js
 *   3. firebase-auth-compat.js
 *   4. firebase.js (this file)
 *   5. auth.js
 *
 * Exposes: window.SlayStationFirebase { app, analytics, auth }
 */
(function () {
  'use strict';

  var firebaseConfig = {
    apiKey: 'AIzaSyAjAObgwYdamGwMgQtf_cInyjCfM1vy7yk',
    authDomain: 'slay-station-9cad9.firebaseapp.com',
    projectId: 'slay-station-9cad9',
    storageBucket: 'slay-station-9cad9.firebasestorage.app',
    messagingSenderId: '446234683855',
    appId: '1:446234683855:web:eae10c8abdbfb45ede0aba',
    measurementId: 'G-T7PQ720XPH'
  };

  if (typeof firebase === 'undefined') {
    console.warn('Slay Station: Load firebase-app-compat.js before firebase.js');
    window.SlayStationFirebase = { app: null, analytics: null, auth: null };
    return;
  }

  var app = firebase.initializeApp(firebaseConfig);
  var analytics = null;
  var auth = null;

  try {
    analytics = firebase.analytics(app);
  } catch (e) {
    console.warn('Firebase Analytics:', e.message);
  }

  try {
    if (typeof firebase.auth === 'function') {
      auth = firebase.auth(app);
    }
  } catch (e) {
    console.warn('Firebase Auth:', e.message);
  }

  window.SlayStationFirebase = {
    app: app,
    analytics: analytics,
    auth: auth
  };
})();
