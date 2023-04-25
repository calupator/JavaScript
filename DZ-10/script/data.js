// Задание 2
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).

const photos = `[{
		"copyright": "Lorenzo Cordero",
		"date": "2023-04-25",
		"explanation": "Did you see an aurora over the past two nights? Many people who don't live in Earth's far north did.  Reports of aurora came in not only from northern locales in the USA as Alaska, but as far south as Texas and Arizona. A huge auroral oval extended over Europe and Asia, too. Pictured, an impressively red aurora was captured last night near the town of C\u00e1ceres in central Spain. Auroras were also reported in parts of southern Spain. The auroras resulted from a strong Coronal Mass Event (CME) that occurred on the Sun a few days ago. Particles from the CME crossed the inner Solar System before colliding with the Earth's magnetosphere.  From there, electrons and protons spiraled down the Earth's northern magnetic field lines and collided with oxygen and nitrogen in Earth's atmosphere, causing picturesque auroral glows. Our unusually active Sun may provide future opportunities to see the northern lights in southern skies.",
		"hdurl": "https://apod.nasa.gov/apod/image/2304/NlightsSeurope_Cordero_5472.jpg",
		"media_type": "image",
		"service_version": "v1",
		"title": "Northern Lights over Southern Europe",
		"url": "https://apod.nasa.gov/apod/image/2304/NlightsSeurope_Cordero_960.jpg"
	},
	{
		"copyright": "Douglas J. StrubleFuture World Media",
		"date": "2022-08-10",
		"explanation": "Stars can create huge and intricate dust sculptures from the dense and dark molecular clouds from which they are born.  The tools the stars use to carve their detailed works are high energy light and fast stellar winds.  The heat they generate evaporates the dark molecular dust as well as causing ambient hydrogen gas to disperse and glow red.   Pictured here, a new open cluster of stars designated IC 1590 is nearing completion around the intricate interstellar dust structures in the emission nebula  NGC 281, dubbed the Pac-man Nebula because of its overall shape.  The dust cloud on the upper left is classified as a  Bok Globule as it may gravitationally collapse and form a star -- or stars. The Pacman Nebula lies about 10,000 light years away toward the constellation of Cassiopeia.",
		"hdurl": "https://apod.nasa.gov/apod/image/2208/Pacman_Struble_1222.jpg",
		"media_type": "image",
		"service_version": "v1",
		"title": "Dust Clouds of the Pacman Nebula",
		"url": "https://apod.nasa.gov/apod/image/2208/Pacman_Struble_960.jpg"
	},
	{
		"copyright": "Stephanie Ziyi Ye",
		"date": "2021-12-10",
		"explanation": "During polar day, in Arctic and Antarctic summer, the Sun stays above the horizon for periods of 24 hours or more. Recorded on December 4, this fisheye timelapse image tracks the Sun in multiple frames as it completes a circle in the summer sky above Union Glacier, Antarctica. Of course on that date, Union Glacier's sky did grow dark even though the Sun was above the horizon. Captured during the brief period of totality, an eclipsed Sun is at bottom center of the composite view. Near the edge of the total eclipse path across planet Earth, the Moon's shadow darkens the sky above.",
		"hdurl": "https://apod.nasa.gov/apod/image/2112/Eclipseclock-final2.JPG",
		"media_type": "image",
		"service_version": "v1",
		"title": "Eclipse on a Polar Day",
		"url": "https://apod.nasa.gov/apod/image/2112/Eclipseclock-final2_1024c.JPG"
	},
	{
		"copyright": "Fernando Pena",
		"date": "2020-10-10",
		"explanation": "Galaxies of the Virgo Cluster are scattered across this deep telescopic field of view. The cosmic scene spans about three Full Moons, captured in dark skies near Jalisco, Mexico, planet Earth. About 50 million light-years distant, the Virgo Cluster is the closest large galaxy cluster to our own local galaxy group. Prominent here are Virgo's bright elliptical galaxies from the Messier catalog, M87 at the top left, and M84 and M86 seen (bottom to top) below and right of center. M84 and M86 are recognized as part of Markarian's Chain, a visually striking line-up of galaxies vertically on the right side of this frame. Near the middle of the chain lies an intriguing interacting pair of galaxies, NGC 4438 and NGC 4435, known to some as Markarian's Eyes. Of course giant elliptical galaxy M87 dominates the Virgo cluster. It's the home of a super massive black hole, the first black hole ever imaged by planet Earth's Event Horizon Telescope.",
		"hdurl": "https://apod.nasa.gov/apod/image/2010/markarian_FernandoPena2048.jpg",
		"media_type": "image",
		"service_version": "v1",
		"title": "Virgo Cluster Galaxies",
		"url": "https://apod.nasa.gov/apod/image/2010/markarian_FernandoPena1024.jpg"
	},
	{
		"date": "2018-03-19",
		"explanation": "Some consider it the oldest known illustration of the night sky. But what, exactly, does it depict, and why was it made? The Nebra sky disk was found with a metal detector in 1999 by treasure hunters near Nebra, Germany, in the midst of several bronze-age weapons.  The ancient artifact spans about 30 centimeters and has been associated with the Unetice culture that inhabited part of Europe around 1600 BC. Reconstructed, the dots are thought to represent stars, with the cluster representing the Pleiades, and the large circle and the crescent representing the Sun and Moon. The purpose of the disk remains unknown -- hypotheses including an astronomical clock, a work of art, and a religious symbol. Valued at about $11 million, some believe that the Nebra sky disk is only one of a pair, with the other disk still out there waiting to be discovered.",
		"hdurl": "https://apod.nasa.gov/apod/image/1803/Nebra_Dbachmann_1611.jpg",
		"media_type": "image",
		"service_version": "v1",
		"title": "The Nebra Sky Disk",
		"url": "https://apod.nasa.gov/apod/image/1803/Nebra_Dbachmann_960.jpg"
	},
	{
		"date": "2022-08-30",
		"explanation": "This new view of Jupiter is illuminating. High-resolution infrared images of Jupiter from the new James Webb Space Telescope (Webb) reveal, for example, previously unknown differences between high-floating bright clouds -- including the Great Red Spot -- and low-lying dark clouds. Also clearly visible in the featured Webb image are Jupiter's dust ring, bright auroras at the poles, and Jupiter's moons Amalthea and Adrastea. Large volcanic moon Io's magnetic funneling of charged particles onto Jupiter is also visible in the southern aurora. Some objects are so bright that light noticeably diffracts around Webb's optics creating streaks.  Webb, which orbits the Sun near the Earth, has a mirror over six meters across making it the largest astronomical telescope ever launched -- with over six times more light-collecting area than Hubble.",
		"hdurl": "https://apod.nasa.gov/apod/image/2208/Jupiter2_WebbSchmidt_3283_annotated.png",
		"media_type": "image",
		"service_version": "v1",
		"title": "Jupiter from the Webb Space Telescope",
		"url": "https://apod.nasa.gov/apod/image/2208/Jupiter2_WebbSchmidt_1080_annotated.jpg"
	}
]`;
