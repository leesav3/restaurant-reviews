// make sure service workers are supported; if so, set up
if ('serviceWorker' in navigator) {
	console.log('Service Worker Supported');
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('../sw.js', {scope: "/"})
			//.register('/sw.js', {scope: "https://leesav3.github.io/restaurant-reviews"})
			.then(reg => console.log('Service Worker Registered'))
			.catch(error => console.log('Service Worker NOT Registered- Error: ' + error))
	});
}