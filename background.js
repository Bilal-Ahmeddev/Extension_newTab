let totalTime = 0;
let lastActiveTime = Date.now();


chrome.storage.local.get(["totalTime"], (result) => {
  if (result.totalTime) {
    totalTime = result.totalTime;
  }
});


chrome.runtime.onStartup.addListener(() => {
  lastActiveTime = Date.now();
});

chrome.runtime.onSuspend.addListener(() => {
  totalTime += Date.now() - lastActiveTime;
  chrome.storage.local.set({ totalTime });
});


setInterval(() => {
  totalTime += Date.now() - lastActiveTime;
  lastActiveTime = Date.now();
  chrome.storage.local.set({ totalTime });
}, 1000);
