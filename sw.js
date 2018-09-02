const cacheName = 'v1';
const cacheAssets = [
	'/index.html',
	'/restaurant.html',
	'/css/styles.css',
	'/data/restaurants.json',
	'/img/1-banner.jpg',
	'/img/1.jpg',
	'/img/10-banner.jpg',
	'/img/10.jpg',
	'/img/2-banner.jpg',
	'/img/2.jpg',
	'/img/3-banner.jpg',
	'/img/3.jpg',
	'/img/4-banner.jpg',
	'/img/4.jpg',
	'/img/5-banner.jpg',
	'/img/5.jpg',
	'/img/6-banner.jpg',
	'/img/6.jpg',
	'/img/7-banner.jpg',
	'/img/7.jpg',
	'/img/8-banner.jpg',
	'/img/8.jpg',
	'/img/9-banner.jpg',
	'/img/9.jpg',
	'/js/dbhelper.js',
	'/js/main.js',
	'/js/register_sw.js',
	'/js/restaurant_info.js'
];

// Call Install Event
self.addEventListener('install', (event) => {
	console.log('Service Worker Installed');

	event.waitUntil(
		caches
			.open(cacheName)
			.then(cache => {
				console.log('Service Worker Caching Files...');
				cache.addAll(cacheAssets);
			})
			.then(() => self.skipWaiting())
	);
});

// Call Activate Event
self.addEventListener('activate', (event) => {
	console.log('Service Worker Activated');

	// Remove unwanted caches
	event.waitUntil(
		caches.keys().then(cacheNames => {
			return Promise.all(
				cacheNames.map(cache => {
					if (cache !== cacheName) {
						console.log('Service Worker Clearing Old Cache...');
						return caches.delete(cache);
					};
				})
			);
		})
	);
});

// Call Fetch Event
self.addEventListener('fetch', event => {
	console.log('Service Worker Fetching...');
	console.log(event.request);
	event.respondWith(
		console.log(event.request);
		fetch(event.request).catch(() => caches.match(event.request))
	);
});