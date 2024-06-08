chrome.alarms.onAlarm.addListener(function(alarm) {
      chrome.notifications.create('notificationId', {
        type: 'basic',
        iconUrl: 'logo.png',
        title: alarm.name+' Contest Live..',
        message: 'Contest is live now. Participate Now!'
      });
  });
  