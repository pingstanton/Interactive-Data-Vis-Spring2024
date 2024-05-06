mapboxgl.accessToken = 'pk.eyJ1IjoicGluZ3N0YW50b24iLCJhIjoiY2x2dWRmdTNpMDh6ZDJqbzBwMTJwcmpidyJ9.Ee_PLanOTtrTj0i-dfjnzw';

const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mapbox/streets-v12', // style URL
  center: [-73.98689031600954, 40.754172622212465], // starting position [lng, lat]
  zoom: 13, // starting zoom
});

const nav = new mapboxgl.NavigationControl({
  visualizePitch: true
}); // create a zoom / pitch control
map.addControl(nav, 'bottom-right'); // add it to the map

// Create a default Marker and add it to the map.


const aliasInv = new mapboxgl.Marker() 
	 .setLngLat([-73.9936185, 40.7567603]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Alias Investigations<br />(Jessica Jones detective agency)</b>
	`))
	.addTo(map);

const AvengersMansion = new mapboxgl.Marker() 
	 .setLngLat([-73.96729946, 40.77131186]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Avengers Mansion</b>
	`))
	.addTo(map);

const bartonfarm = new mapboxgl.Marker() 
	 .setLngLat([-84.60319714, 33.36624469]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Barton Family Farm<br />(rural Sharpsburg, Georgia)</b>
	`))
	.addTo(map);

const baxterbldg = new mapboxgl.Marker() 
	 .setLngLat([-73.9797074, 40.7527473]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Baxter Building<br />(HQ to Fantastic Four, Parker Industries)</b>
	`))
	.addTo(map);

const bkvisionsacademy = new mapboxgl.Marker() 
	 .setLngLat([-73.9464872, 40.6000351]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Brooklyn Visions Academy<br />(Miles Morales' school)</b>
	`))
	.addTo(map);

const braddock = new mapboxgl.Marker() 
	 .setLngLat([0.6631958, 51.7308286]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Braddock Academy</b>
	`))
	.addTo(map);

const braddocklighthouse = new mapboxgl.Marker() 
	 .setLngLat([-3.1033778, 53.5491591]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Braddock Lighthouse</b>
	`))
	.addTo(map);

const broxton = new mapboxgl.Marker() 
	 .setLngLat([-98.4100342, 34.9859876]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Broxton, Oklahoma<br />(site of Little Asgard)</b>
	`))
	.addTo(map);

const campHammond = new mapboxgl.Marker() 
	 .setLngLat([-73.5474148, 41.0576867]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Camp Hammond<br />(Initiative HQ/superhuman training facility)</b>
	`))
	.addTo(map);

const capAmerbldg = new mapboxgl.Marker() 
	 .setLngLat([-73.9922402, 40.7034581]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Captain America's apartment</b>
	`))
	.addTo(map);

const capAmerica = new mapboxgl.Marker() 
	 .setLngLat([-21.720661, 70.4370038]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Site where Captain America was found in suspended animation</b>
	`))
	.addTo(map);

const capeCanaveral = new mapboxgl.Marker() 
	 .setLngLat([-80.6525051, 28.5839822]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Cape Canaveral<br />(NASA's Kennedy Space Center)</b>
	`))
	.addTo(map);

const capMarvel = new mapboxgl.Marker() 
	 .setLngLat([-69.965558, 43.7856089]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Captain Marvel's Base</b>
	`))
	.addTo(map);

const cassidyKeep = new mapboxgl.Marker() 
	 .setLngLat([-9.2144668, 54.2876631]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Cassidy Keep<br />(estate of Banshee)</b>
	`))
	.addTo(map);

const castleMurders = new mapboxgl.Marker() 
	 .setLngLat([-73.957842, 40.7959713]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Site of Castle family murders (The Punisher)</b>
	`))
	.addTo(map);

const dailybugle = new mapboxgl.Marker() 
	 .setLngLat([-73.9646816, 40.7597508]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Daily Bugle<br />(news media network)</b>
	`))
	.addTo(map);

const damageControl = new mapboxgl.Marker() 
	 .setLngLat([-73.9896806, 40.7410181]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Damage Control<br />(construction company HQ)</b>
	`))
	.addTo(map);

const deptH = new mapboxgl.Marker() 
	 .setLngLat([-75.6998597, 45.4251351]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Department H<br />(Canadian superhumans, Alpha Flight)</b>
	`))
	.addTo(map);

const doomMonastery = new mapboxgl.Marker() 
	 .setLngLat([83.3922987, 28.7466241]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Doctor Doom's Monastery</b>
	`))
	.addTo(map);

const empirestateuniv = new mapboxgl.Marker() 
	 .setLngLat([-73.9973378, 40.7280819]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Empire State University</b>
	`))
	.addTo(map);

const factChannel = new mapboxgl.Marker() 
	 .setLngLat([-73.9855975, 40.7568729]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Fact Channel Studios<br />(media network)</b>
	`))
	.addTo(map);

const fiskTower = new mapboxgl.Marker() 
	 .setLngLat([-73.98295784, 40.75141856]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Fisk Tower<br />(Wilson Fisk aka Kingpin)</b>
	`))
	.addTo(map);

const gammabase = new mapboxgl.Marker() 
	 .setLngLat([-106.5642607, 33.1860141]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Gamma Base<br />(former Project Greenskin/Hulkbusters HQ)</b>
	`))
	.addTo(map);

const gemtheater = new mapboxgl.Marker() 
	 .setLngLat([-73.9890048, 40.7570454]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Gem Theater<br />(Luke Cage's old apartment above)</b>
	`))
	.addTo(map);

const genosha = new mapboxgl.Marker() 
	 .setLngLat([55, -4]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Genosha<br />(former mutant haven, now a ruin)</b>
	`))
	.addTo(map);

const gla = new mapboxgl.Marker() 
	 .setLngLat([-87.99943103, 42.98787543]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Great Lakes Champions HQ<br />(aka Great Lakes Avengers, Great Lakes X-Men)</b>
	`))
	.addTo(map);

const graymalkin = new mapboxgl.Marker() 
	 .setLngLat([-122.5439823, 37.836954]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Graymalkin Industries (abandoned X-Men HQ)</b>
	`))
	.addTo(map);

const gwenstacy = new mapboxgl.Marker() 
	 .setLngLat([-73.9982273, 40.7074269]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Site of Gwen Stacy's death</b>
	`))
	.addTo(map);

const hammer = new mapboxgl.Marker() 
	 .setLngLat([-73.79486233, 40.72839464]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Hammer Industries<br />(corporate HQ)</b>
	`))
	.addTo(map);

const hawkeyeapt = new mapboxgl.Marker() 
	 .setLngLat([-73.9458337, 40.6876674]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Hawkeye's Apartment Building</b>
	`))
	.addTo(map);

const hawkeyeinv = new mapboxgl.Marker() 
	 .setLngLat([-118.4730514, 33.9870711]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Hawkeye Investigations / West Coast Avengers</b>
	`))
	.addTo(map);

const hellfireClub = new mapboxgl.Marker() 
	 .setLngLat([-73.9694171, 40.7689539]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Hellfire Club</b>
	`))
	.addTo(map);

const hillrock = new mapboxgl.Marker() 
	 .setLngLat([-118.1830316, 34.0263548]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Hillrock Heights<br />(home neighborhood of Robbie Reyes)</b>
	`))
	.addTo(map);

const holyghostchurch = new mapboxgl.Marker() 
	 .setLngLat([-73.9912637, 40.7580594]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Holy Ghost Church<br />(home to Cloak & Dagger)</b>
	`))
	.addTo(map);

const horizonuniv = new mapboxgl.Marker() 
	 .setLngLat([-122.4592838, 37.8028898]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Horizon University<br />(research college, sponsored by Parker Industries)</b>
	`))
	.addTo(map);

const howlettestate = new mapboxgl.Marker() 
	 .setLngLat([-115.5620635, 51.17236113]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Howlett Estate<br />(Wolverine's childhood home)</b>
	`))
	.addTo(map);

const hulkcave = new mapboxgl.Marker() 
	 .setLngLat([-107.1502885, 33.2296193]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Hulk's Cave<br />(aka Banner Hideout B-733)</b>
	`))
	.addTo(map);

const jackkirby = new mapboxgl.Marker() 
	 .setLngLat([-73.98744423, 40.7209382]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Jack Kirby's childhood home</b>
	`))
	.addTo(map);

const KamarTaj = new mapboxgl.Marker() 
	 .setLngLat([95.8238802, 29.0713778]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Kamar-Taj<br />(mystic arts training center)</b>
	`))
	.addTo(map);

const krakoa = new mapboxgl.Marker() 
	 .setLngLat([168.1278439, 3.9341809]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Krakoa Island<br />(mutant haven)</b>
	`))
	.addTo(map);

const kravinoff = new mapboxgl.Marker() 
	 .setLngLat([-73.846998, 41.1563149]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Kravinoff Estate<br />(Kraven the Hunter)</b>
	`))
	.addTo(map);

const kunlun = new mapboxgl.Marker() 
	 .setLngLat([80.8664845, 35.312238]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Portal to K'un-Lun</b>
	`))
	.addTo(map);

const latveria = new mapboxgl.Marker() 
	 .setLngLat([21.1408242, 45.7933372]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Latveria<br />(nation of Doctor Doom)</b>
	`))
	.addTo(map);

const latverianEmbassy = new mapboxgl.Marker() 
	 .setLngLat([-73.968568, 40.7651449]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Latverian Embassy</b>
	`))
	.addTo(map);

const lukejessicaapt = new mapboxgl.Marker() 
	 .setLngLat([-73.9456344, 40.8016243]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Apartment of Luke Cage & Jessica Jones</b>
	`))
	.addTo(map);

const Madripoor = new mapboxgl.Marker() 
	 .setLngLat([104.8549136, 0.3706748]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Madripoor (pirate/crime haven)</b>
	`))
	.addTo(map);

const manthing = new mapboxgl.Marker() 
	 .setLngLat([-81.3232632, 26.5615084]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Man-Thing's Swamp<br />(The Nexus of All Realities)</b>
	`))
	.addTo(map);

const marvelLLC = new mapboxgl.Marker() 
	 .setLngLat([-73.97912322, 40.76052164]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Marvel Entertainment LLC</b>
	`))
	.addTo(map);

const midlandcircle = new mapboxgl.Marker() 
	 .setLngLat([-73.99798713, 40.76243597]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Midland Circle<br />(secret HQ of The Hand)</b>
	`))
	.addTo(map);

const midnightmission = new mapboxgl.Marker() 
	 .setLngLat([-73.93940985, 40.79744899]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Midnight Mission<br />(Moon Knight HQ/House of Shadows)</b>
	`))
	.addTo(map);

const monsterisle = new mapboxgl.Marker() 
	 .setLngLat([142.3871397, 45.6246361]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Monster Isle</b>
	`))
	.addTo(map);

const msmarvel = new mapboxgl.Marker() 
	 .setLngLat([-74.0421626, 40.7262902]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Kamala Khan family residence<br />(Ms. Marvel)</b>
	`))
	.addTo(map);

const muirIsland = new mapboxgl.Marker() 
	 .setLngLat([-7.2395374, 58.1335956]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Muir Island<br />(Mutant Research Center)</b>
	`))
	.addTo(map);

const murdocknelsonofc = new mapboxgl.Marker() 
	 .setLngLat([-73.98787962, 40.76549906]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Murdock & Nelson Law Office</b>
	`))
	.addTo(map);

const nightnurse = new mapboxgl.Marker() 
	 .setLngLat([-73.9916678, 40.7151655]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Night Nurse's Clinic</b>
	`))
	.addTo(map);

const olympus = new mapboxgl.Marker() 
	 .setLngLat([22.3585337, 40.0885759]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Olympus<br />(portal to realm of Greek gods)</b>
	`))
	.addTo(map);

const parkerHouse = new mapboxgl.Marker() 
	 .setLngLat([-73.8432312, 40.7128661]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>The Parker House<br />(Aunt May)</b>
	`))
	.addTo(map);

const pymHouse = new mapboxgl.Marker() 
	 .setLngLat([-122.4439882, 37.76708693]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Dr. Hank Pym's House<br />(601 Buena Vista Avenue West, Haight-Ashbury)</b>
	`))
	.addTo(map);

const pymLab = new mapboxgl.Marker() 
	 .setLngLat([-122.2667975, 37.80422776]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Dr. Hank Pym's Lab<br />(1515 Harrison Street, Oakland)</b>
	`))
	.addTo(map);

const ravencroft = new mapboxgl.Marker() 
	 .setLngLat([-73.9315945, 41.2347436]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Ravencroft Institute (superhuman sanatorium)</b>
	`))
	.addTo(map);

const redRoom = new mapboxgl.Marker() 
	 .setLngLat([37.5223072, 55.7830011]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Red Room<br />(Black Widow Program)</b>
	`))
	.addTo(map);

const rykers = new mapboxgl.Marker() 
	 .setLngLat([-73.8834, 40.7911344]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Ryker's Island<br />(state superprison)</b>
	`))
	.addTo(map);

const sanctumSanctorum = new mapboxgl.Marker() 
	 .setLngLat([-74.00062859, 40.72896261]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Sanctum Sanctorum<br />(aka New York Sanctum)</b>
	`))
	.addTo(map);

const savageland = new mapboxgl.Marker() 
	 .setLngLat([-70.3473155, -67.2068764]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Savage Land</b>
	`))
	.addTo(map);

const scottLang = new mapboxgl.Marker() 
	 .setLngLat([-122.3968284, 37.76289299]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Scott Lang's House<br />(1400 18th Street, Potrero Hill)</b>
	`))
	.addTo(map);

const seagate = new mapboxgl.Marker() 
	 .setLngLat([-81.4352131, 31.1142753]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Seagate Prison<br />(federal superprison)</b>
	`))
	.addTo(map);

const shieldNYC = new mapboxgl.Marker() 
	 .setLngLat([-73.98550574, 40.76018956]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>S.H.I.E.L.D. HQ<br />(New York City base)</b>
	`))
	.addTo(map);

const sokovia = new mapboxgl.Marker() 
	 .setLngLat([18.0587704, 49.03807972]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Sokovia</b>
	`))
	.addTo(map);

const stanleeway = new mapboxgl.Marker() 
	 .setLngLat([-73.9181695, 40.84840525]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Stan Lee Way<br />(near childhood home)</b>
	`))
	.addTo(map);

const starkEnter = new mapboxgl.Marker() 
	 .setLngLat([-118.6896801, 34.0374755]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Stark Enterprises</b>
	`))
	.addTo(map);

const starkIntnl = new mapboxgl.Marker() 
	 .setLngLat([-73.8444329, 40.7662741]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Stark International</b>
	`))
	.addTo(map);

const starktower = new mapboxgl.Marker() 
	 .setLngLat([-73.98309231, 40.76856549]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Avengers (Stark) Tower</b>
	`))
	.addTo(map);

const symkaria = new mapboxgl.Marker() 
	 .setLngLat([21.9867864, 45.1810295]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Symkaria</b>
	`))
	.addTo(map);

const theRaft = new mapboxgl.Marker() 
	 .setLngLat([-73.8978839, 40.7964464]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>The Raft<br />(ultra-max superprison run by S.H.I.E.L.D.)</b>
	`))
	.addTo(map);

const thetombs = new mapboxgl.Marker() 
	 .setLngLat([-74.00029445, 40.71717584]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Manhattan Detention Complex<br />(aka The Tombs)</b>
	`))
	.addTo(map);

const timelyplaza = new mapboxgl.Marker() 
	 .setLngLat([-73.9916297, 40.75773146]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Timely Plaza<br />(includes law offices of Goodman, Lieber, Kurtzberg & Holliway)</b>
	`))
	.addTo(map);

const timesSq = new mapboxgl.Marker() 
	 .setLngLat([-73.98689032, 40.75417262]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Times Square</b>
	`))
	.addTo(map);

const tonsberg = new mapboxgl.Marker() 
	 .setLngLat([10.47806614, 59.34381492]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Tønsberg, Norway<br />(site of New Asgard)</b>
	`))
	.addTo(map);

const transia = new mapboxgl.Marker() 
	 .setLngLat([22.1351429, 44.5385714]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Transia (country),<br />Wundagore Mountain (landmark)</b>
	`))
	.addTo(map);

const triskelion = new mapboxgl.Marker() 
	 .setLngLat([-77.0609564, 38.8908138]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>S.H.I.E.L.D. Triskelion<br />(Washington DC base)</b>
	`))
	.addTo(map);

const utopia = new mapboxgl.Marker() 
	 .setLngLat([-122.5355394, 37.7658976]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Utopia<br />(aka Nation X, Reservation X; artifical island, mutant haven)</b>
	`))
	.addTo(map);

const wandavision = new mapboxgl.Marker() 
	 .setLngLat([-74.34956029, 40.65590396]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Westview, New Jersey<br />(actually Westfield, NJ; site of Wanda Maximoff's Wandavision hex)</b>
	`))
	.addTo(map);

const weaponX = new mapboxgl.Marker() 
	 .setLngLat([-116.1810905, 51.3278178]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Weapon X Facility</b>
	`))
	.addTo(map);

const westcoastavengers = new mapboxgl.Marker() 
	 .setLngLat([-118.4208155, 33.771639]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Avengers West Coast Compound</b>
	`))
	.addTo(map);

const xMansion = new mapboxgl.Marker() 
	 .setLngLat([-73.618631, 41.3276728]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>X-Mansion / Xavier Institute for Higher Learning<br />(original site of X-Men HQ, now destroyed)</b>
	`))
	.addTo(map);

const yancyStreet = new mapboxgl.Marker() 
	 .setLngLat([-73.9886844, 40.7176733]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Yancy Street<br />(home to Ben Grimm, the Yancy Street Gang)</b>
	`))
	.addTo(map);

const zemobase = new mapboxgl.Marker() 
	 .setLngLat([-3.2427503, 49.3387222]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Baron Zemo's WWII Nazi Base</b>
	`))
	.addTo(map);

const zemofortress = new mapboxgl.Marker() 
	 .setLngLat([-67.4945766, -14.5458802]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Baron Zemo's Hidden Fortress</b>
	`))
	.addTo(map);

const wakanda = new mapboxgl.Marker() 
	 .setLngLat([31.30279541015625, -0.7266231304523443]) 
	 .setPopup(new mapboxgl.Popup().setHTML(`
	 <b>Wakanda</b>
	`))
	.addTo(map);



