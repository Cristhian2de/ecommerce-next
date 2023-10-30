"use client"
const onmessage = function (event) {
    setTimeout(() => {
      self.postMessage('Ready');
    }, 1000);
  };
  
  addEventListener('message', onmessage);
  