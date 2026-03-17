/**
 * Slay Station – Admin Firebase callables
 * Requires: firebase.js loaded (and firebase-functions-compat.js for callables).
 * Exposes: window.SlayStationAdminFirebase { getAdminAllowedEmails, verifyAdminPassword, sendAdminCode, sendForgotPasswordCode, resetAdminPassword }
 */
(function () {
  'use strict';

  var fb = typeof window !== 'undefined' && window.SlayStationFirebase;
  var functions = fb && fb.functions;

  function noop() {
    return Promise.resolve({ ok: false, unavailable: true });
  }

  function getCallable(name) {
    if (!functions || typeof functions.httpsCallable !== 'function') return null;
    try {
      return functions.httpsCallable(name);
    } catch (e) {
      return null;
    }
  }

  var getAdminAllowedEmailsFn = getCallable('getAdminAllowedEmails');
  var verifyAdminPasswordFn = getCallable('verifyAdminPassword');
  var sendAdminCodeFn = getCallable('sendAdminCode');
  var sendForgotPasswordCodeFn = getCallable('sendForgotPasswordCode');
  var resetAdminPasswordFn = getCallable('resetAdminPassword');

  var available = !!(getAdminAllowedEmailsFn && verifyAdminPasswordFn && sendAdminCodeFn);

  function getAdminAllowedEmails() {
    if (!getAdminAllowedEmailsFn) return Promise.resolve({ allowedEmails: [] });
    return getAdminAllowedEmailsFn().then(function (res) { return res.data; });
  }

  function verifyAdminPassword(email, password) {
    if (!verifyAdminPasswordFn) return noop();
    return verifyAdminPasswordFn({ email: email, password: password }).then(function (res) { return res.data; });
  }

  function sendAdminCode(email, code, purpose) {
    if (!sendAdminCodeFn) return noop();
    return sendAdminCodeFn({ email: email, code: code, purpose: purpose || 'login' }).then(function (res) { return res.data; });
  }

  function sendForgotPasswordCode(email) {
    if (!sendForgotPasswordCodeFn) return noop();
    return sendForgotPasswordCodeFn({ email: email }).then(function (res) { return res.data; });
  }

  function resetAdminPassword(email, code, newPassword) {
    if (!resetAdminPasswordFn) return noop();
    return resetAdminPasswordFn({ email: email, code: code, newPassword: newPassword }).then(function (res) { return res.data; });
  }

  window.SlayStationAdminFirebase = {
    available: available,
    getAdminAllowedEmails: getAdminAllowedEmails,
    verifyAdminPassword: verifyAdminPassword,
    sendAdminCode: sendAdminCode,
    sendForgotPasswordCode: sendForgotPasswordCode,
    resetAdminPassword: resetAdminPassword
  };
})();
