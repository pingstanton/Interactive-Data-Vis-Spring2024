// Leaflet Documentation
// https://leafletjs.com/reference.html

// Marvel Atlas Project
// https://www.google.com/maps/d/viewer?mid=109aBRDR_Jtd1lu_gD8zrjSAuySQ&hl=en_US&usp=sharing

$("#version").html("<p>Version 1.3</p>");

let marvMap;
marvMap = L.map("map");

// aerial photo view...
/*
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(marvMap);
*/

// regular street view...
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> Contributors'
}).addTo(marvMap);

marvMap.setView([40.754172622212465, -73.98689031600954], 13);

// create and place a marker icons

const scottLang = L.circleMarker([37.76289298791619, -122.39682837455965]).addTo(marvMap);
scottLang.bindPopup("<b>Scott Lang's House<br />(1400 18th Street, Potrero Hill)</b>");

const pymHouse = L.circleMarker([37.76708693409993, -122.44398818990108]).addTo(marvMap);
pymHouse.bindPopup("<b>Dr. Hank Pym's House<br />(601 Buena Vista Avenue West, Haight-Ashbury)</b>");

const pymLab = L.circleMarker([37.80422776071442, -122.26679750552111]).addTo(marvMap);
pymLab.bindPopup("<b>Dr. Hank Pym's Lab<br />(1515 Harrison Street, Oakland)</b>");

const timesSq = L.circleMarker([40.754172622212465, -73.98689031600954]).addTo(marvMap);
timesSq.bindPopup("<b>Times Square</b>");

const marvelLLC = L.circleMarker([40.76052163561668, -73.97912322031972]).addTo(marvMap);
marvelLLC.bindPopup("<b>Marvel Entertainment LLC</b>");

const fiskTower = L.circleMarker([40.751418561603685, -73.98295783514187]).addTo(marvMap);
fiskTower.bindPopup("<b>Fisk Tower<br />(Wilson Fisk aka Kingpin)</b>");

const weaponX = L.circleMarker([51.3278178, -116.1810905]).addTo(marvMap);
weaponX.bindPopup("<b>Weapon X Facility</b>");

const xMansion = L.circleMarker([41.3276728, -73.618631]).addTo(marvMap);
xMansion.bindPopup("<b>X-Mansion / Xavier Institute for Higher Learning<br />(original site of X-Men HQ, now destroyed)</b>");

const yancyStreet = L.circleMarker([40.7176733, -73.9886844]).addTo(marvMap);
yancyStreet.bindPopup("<b>Yancy Street<br />(home to Ben Grimm, the Yancy Street Gang)</b>");

const aliasInv = L.circleMarker([40.7567603, -73.9936185]).addTo(marvMap);
aliasInv.bindPopup("<b>Alias Investigations<br />(Jessica Jones detective agency)</b>");

const savageland = L.circleMarker([-67.2068764, -70.3473155]).addTo(marvMap);
savageland.bindPopup("<b>Savage Land</b>");

const KamarTaj = L.circleMarker([29.0713778,95.8238802]).addTo(marvMap);
KamarTaj.bindPopup("<b>Kamar-Taj<br />(mystic arts training center)</b>");

const AvengersMansion = L.circleMarker([40.77131186,-73.96729946]).addTo(marvMap);
AvengersMansion.bindPopup("<b>Avengers Mansion</b>");

const krakoa = L.circleMarker([3.9341809,168.1278439]).addTo(marvMap);
krakoa.bindPopup("<b>Krakoa Island<br />(mutant haven)</b>");

const dailybugle = L.circleMarker([40.7597508,-73.9646816]).addTo(marvMap);
dailybugle.bindPopup("<b>Daily Bugle<br />(news media network)</b>");

const damageControl = L.circleMarker([40.7410181,-73.9896806]).addTo(marvMap);
damageControl.bindPopup("<b>Damage Control<br />(construction company HQ)</b>");

const deptH = L.circleMarker([45.4251351,-75.6998597]).addTo(marvMap);
deptH.bindPopup("<b>Department H<br />(Canadian superhumans, Alpha Flight)</b>");

const doomMonastery = L.circleMarker([28.7466241,83.3922987]).addTo(marvMap);
doomMonastery.bindPopup("<b>Doctor Doom's Monastery</b>");

const latverianEmbassy = L.circleMarker([40.7651449,-73.968568]).addTo(marvMap);
latverianEmbassy.bindPopup("<b>Latverian Embassy</b>");
	
const midnightmission = L.circleMarker([40.79744899471598, -73.93940985202791]).addTo(marvMap);
midnightmission.bindPopup("<b>Midnight Mission<br />(Moon Knight HQ/House of Shadows)</b>");

const murdocknelsonofc = L.circleMarker([40.765499061961734, -73.9878796209601]).addTo(marvMap);
murdocknelsonofc.bindPopup("<b>Murdock & Nelson Law Office</b>");

const monsterisle = L.circleMarker([45.6246361,142.3871397]).addTo(marvMap);
monsterisle.bindPopup("<b>Monster Isle</b>");

const wandavision = L.circleMarker([40.65590396481045, -74.34956029097869]).addTo(marvMap);
wandavision.bindPopup("<b>Westview, New Jersey<br />(actually Westfield, NJ; site of Wanda Maximoff's Wandavision hex)</b>");

const latveria = L.circleMarker([45.7933372,21.1408242]).addTo(marvMap);
latveria.bindPopup("<b>Latveria<br />(nation of Doctor Doom)</b>");

const kravinoff = L.circleMarker([41.1563149,-73.846998]).addTo(marvMap);
kravinoff.bindPopup("<b>Kravinoff Estate<br />(Kraven the Hunter)</b>");

const lukejessicaapt = L.circleMarker([40.8016243,-73.9456344]).addTo(marvMap);
lukejessicaapt.bindPopup("<b>Apartment of Luke Cage & Jessica Jones</b>");

const manthing = L.circleMarker([26.5615084,-81.3232632]).addTo(marvMap);
manthing.bindPopup("<b>Man-Thing's Swamp<br />(The Nexus of All Realities)</b>");

const Madripoor = L.circleMarker([0.3706748,104.8549136]).addTo(marvMap);
Madripoor.bindPopup("<b>Madripoor (pirate/crime haven)</b>");

const muirIsland = L.circleMarker([58.1335956,-7.2395374]).addTo(marvMap);
muirIsland.bindPopup("<b>Muir Island<br />(Mutant Research Center)</b>");

const kunlun = L.circleMarker([35.312238,80.8664845]).addTo(marvMap);
kunlun.bindPopup("<b>Portal to K'un-Lun</b>");

const hulkcave = L.circleMarker([33.2296193,-107.1502885]).addTo(marvMap);
hulkcave.bindPopup("<b>Hulk's Cave<br />(aka Banner Hideout B-733)</b>");

const genosha = L.circleMarker([-4,55]).addTo(marvMap);
genosha.bindPopup("<b>Genosha<br />(former mutant haven, now a ruin)</b>");

const gammabase = L.circleMarker([33.1860141,-106.5642607]).addTo(marvMap);
gammabase.bindPopup("<b>Gamma Base<br />(former Project Greenskin/Hulkbusters HQ)</b>");

const hammer = L.circleMarker([40.72839463926253, -73.79486232883576]).addTo(marvMap);
hammer.bindPopup("<b>Hammer Industries<br />(corporate HQ)</b>");

const gemtheater = L.circleMarker([40.7570454,-73.9890048]).addTo(marvMap);
gemtheater.bindPopup("<b>Gem Theater<br />(Luke Cage's old apartment above)</b>");

const sanctumSanctorum = L.circleMarker([40.72896261,-74.00062859]).addTo(marvMap);
sanctumSanctorum.bindPopup("<b>Sanctum Sanctorum<br />(aka New York Sanctum)</b>");

const factChannel = L.circleMarker([40.7568729,-73.9855975]).addTo(marvMap);
factChannel.bindPopup("<b>Fact Channel Studios<br />(media network)</b>");

const theRaft = L.circleMarker([40.7964464,-73.8978839]).addTo(marvMap);
theRaft.bindPopup("<b>The Raft<br />(ultra-max superprison run by S.H.I.E.L.D.)</b>");

const bartonfarm = L.circleMarker([33.366244689987106, -84.60319714406424]).addTo(marvMap);
bartonfarm.bindPopup("<b>Barton Family Farm<br />(rural Sharpsburg, Georgia)</b>");

const ravencroft = L.circleMarker([41.2347436,-73.9315945]).addTo(marvMap);
ravencroft.bindPopup("<b>Ravencroft Institute (superhuman sanatorium)</b>");

const redRoom = L.circleMarker([55.7830011,37.5223072]).addTo(marvMap);
redRoom.bindPopup("<b>Red Room<br />(Black Widow Program)</b>");

const rykers = L.circleMarker([40.7911344,-73.8834]).addTo(marvMap);
rykers.bindPopup("<b>Ryker's Island<br />(state superprison)</b>");

const seagate = L.circleMarker([31.1142753,-81.4352131]).addTo(marvMap);
seagate.bindPopup("<b>Seagate Prison<br />(federal superprison)</b>");

const starkEnter = L.circleMarker([34.0374755,-118.6896801]).addTo(marvMap);
starkEnter.bindPopup("<b>Stark Enterprises</b>");

const starkIntnl = L.circleMarker([40.7662741,-73.8444329]).addTo(marvMap);
starkIntnl.bindPopup("<b>Stark International</b>");

const capAmerica = L.circleMarker([70.4370038,-21.720661]).addTo(marvMap);
capAmerica.bindPopup("<b>Site where Captain America was found in suspended animation</b>");

const graymalkin = L.circleMarker([37.836954,-122.5439823]).addTo(marvMap);
graymalkin.bindPopup("<b>Graymalkin Industries (abandoned X-Men HQ)</b>");

const gwenstacy = L.circleMarker([40.7074269,-73.9982273]).addTo(marvMap);
gwenstacy.bindPopup("<b>Site of Gwen Stacy's death</b>");

const hawkeyeapt = L.circleMarker([40.6876674,-73.9458337]).addTo(marvMap);
hawkeyeapt.bindPopup("<b>Hawkeye's Apartment Building</b>");

const hawkeyeinv = L.circleMarker([33.9870711,-118.4730514]).addTo(marvMap);
hawkeyeinv.bindPopup("<b>Hawkeye Investigations / West Coast Avengers</b>");

const hellfireClub = L.circleMarker([40.7689539,-73.9694171]).addTo(marvMap);
hellfireClub.bindPopup("<b>Hellfire Club</b>");

const hillrock = L.circleMarker([34.0263548,-118.1830316]).addTo(marvMap);
hillrock.bindPopup("<b>Hillrock Heights<br />(home neighborhood of Robbie Reyes)</b>");

const holyghostchurch = L.circleMarker([40.7580594,-73.9912637]).addTo(marvMap);
holyghostchurch.bindPopup("<b>Holy Ghost Church<br />(home to Cloak & Dagger)</b>");

const horizonuniv = L.circleMarker([37.8028898,-122.4592838]).addTo(marvMap);
horizonuniv.bindPopup("<b>Horizon University<br />(research college, sponsored by Parker Industries)</b>");

const gla = L.circleMarker([42.98787542671822, -87.99943102883576]).addTo(marvMap);
gla.bindPopup("<b>Great Lakes Champions HQ<br />(aka Great Lakes Avengers, Great Lakes X-Men)</b>");

const utopia = L.circleMarker([37.7658976,-122.5355394]).addTo(marvMap);
utopia.bindPopup("<b>Utopia<br />(aka Nation X, Reservation X; artifical island, mutant haven)</b>");

const msmarvel = L.circleMarker([40.7262902,-74.0421626]).addTo(marvMap);
msmarvel.bindPopup("<b>Kamala Khan family residence<br />(Ms. Marvel)</b>");

const nightnurse = L.circleMarker([40.7151655,-73.9916678]).addTo(marvMap);
nightnurse.bindPopup("<b>Night Nurse's Clinic</b>");

const thetombs = L.circleMarker([40.717175843975056, -74.00029444535454]).addTo(marvMap);
thetombs.bindPopup("<b>Manhattan Detention Complex<br />(aka The Tombs)</b>");

const olympus = L.circleMarker([40.0885759,22.3585337]).addTo(marvMap);
olympus.bindPopup("<b>Olympus<br />(portal to realm of Greek gods)</b>");

const midlandcircle = L.circleMarker([40.76243597069744, -73.99798713185966]).addTo(marvMap);
midlandcircle.bindPopup("<b>Midland Circle<br />(secret HQ of The Hand)</b>");

const symkaria = L.circleMarker([45.1810295,21.9867864]).addTo(marvMap);
symkaria.bindPopup("<b>Symkaria</b>");

const sokovia = L.circleMarker([49.03807971605305,18.05877040140331]).addTo(marvMap);
sokovia.bindPopup("<b>Sokovia</b>");

const transia = L.circleMarker([44.5385714,22.1351429]).addTo(marvMap);
transia.bindPopup("<b>Transia (country),<br />Wundagore Mountain (landmark)</b>");

const parkerHouse = L.circleMarker([40.7128661,-73.8432312]).addTo(marvMap);
parkerHouse.bindPopup("<b>The Parker House<br />(Aunt May)</b>");

const howlettestate = L.circleMarker([51.17236113,-115.5620635]).addTo(marvMap);
howlettestate.bindPopup("<b>Howlett Estate<br />(Wolverine's childhood home)</b>");

const empirestateuniv = L.circleMarker([40.7280819,-73.9973378]).addTo(marvMap);
empirestateuniv.bindPopup("<b>Empire State University</b>");

const starktower = L.circleMarker([40.76856549,-73.98309231]).addTo(marvMap);
starktower.bindPopup("<b>Avengers (Stark) Tower</b>");

const westcoastavengers = L.circleMarker([33.771639,-118.4208155]).addTo(marvMap);
westcoastavengers.bindPopup("<b>Avengers West Coast Compound</b>");

const zemobase = L.circleMarker([49.3387222,-3.2427503]).addTo(marvMap);
zemobase.bindPopup("<b>Baron Zemo's WWII Nazi Base</b>");

const tonsberg = L.circleMarker([59.34381491527864, 10.47806613985475]).addTo(marvMap);
tonsberg.bindPopup("<b>Tønsberg, Norway<br />(site of New Asgard)</b>");

const zemofortress = L.circleMarker([-14.5458802,-67.4945766]).addTo(marvMap);
zemofortress.bindPopup("<b>Baron Zemo's Hidden Fortress</b>");

const baxterbldg = L.circleMarker([40.7527473,-73.9797074]).addTo(marvMap);
baxterbldg.bindPopup("<b>Baxter Building<br />(HQ to Fantastic Four, Parker Industries)</b>");

const braddock = L.circleMarker([51.7308286,0.6631958]).addTo(marvMap);
braddock.bindPopup("<b>Braddock Academy</b>");

const braddocklighthouse = L.circleMarker([53.5491591,-3.1033778]).addTo(marvMap);
braddocklighthouse.bindPopup("<b>Braddock Lighthouse</b>");

const bkvisionsacademy = L.circleMarker([40.6000351,-73.9464872]).addTo(marvMap);
bkvisionsacademy.bindPopup("<b>Brooklyn Visions Academy<br />(Miles Morales' school)</b>");

const broxton = L.circleMarker([34.9859876,-98.4100342]).addTo(marvMap);
broxton.bindPopup("<b>Broxton, Oklahoma<br />(site of Little Asgard)</b>");

const campHammond = L.circleMarker([41.0576867,-73.5474148]).addTo(marvMap);
campHammond.bindPopup("<b>Camp Hammond<br />(Initiative HQ/superhuman training facility)</b>");

const shieldNYC = L.circleMarker([40.76018955507434, -73.9855057423285]).addTo(marvMap);
shieldNYC.bindPopup("<b>S.H.I.E.L.D. HQ<br />(New York City base)</b>");

const triskelion = L.circleMarker([38.890813802610694, -77.0609564022481]).addTo(marvMap);
triskelion.bindPopup("<b>S.H.I.E.L.D. Triskelion<br />(Washington DC base)</b>");

const capeCanaveral = L.circleMarker([28.5839822,-80.6525051]).addTo(marvMap);
capeCanaveral.bindPopup("<b>Cape Canaveral<br />(NASA's Kennedy Space Center)</b>");

const capAmerbldg = L.circleMarker([40.7034581,-73.9922402]).addTo(marvMap);
capAmerbldg.bindPopup("<b>Captain America's apartment</b>");
	
const capMarvel = L.circleMarker([43.7856089,-69.965558]).addTo(marvMap);
capMarvel.bindPopup("<b>Captain Marvel's Base</b>");

const cassidyKeep = L.circleMarker([54.2876631,-9.2144668]).addTo(marvMap);
cassidyKeep.bindPopup("<b>Cassidy Keep<br />(estate of Banshee)</b>");

const castleMurders = L.circleMarker([40.7959713,-73.957842]).addTo(marvMap);
castleMurders.bindPopup("<b>Site of Castle family murders (The Punisher)</b>");

const jackkirby = L.circleMarker([40.72093819756398, -73.98744422883576]).addTo(marvMap);
jackkirby.bindPopup("<b>Jack Kirby's childhood home</b>");

const stanleeway = L.circleMarker([40.848405249353384, -73.91816950370068]).addTo(marvMap);
stanleeway.bindPopup("<b>Stan Lee Way<br />(near childhood home)</b>");

const timelyplaza = L.circleMarker([40.75773146396956, -73.99162969999999]).addTo(marvMap);
timelyplaza.bindPopup("<b>Timely Plaza<br />(includes law offices of Goodman, Lieber, Kurtzberg & Holliway)</b>");

const wakanda = L.circleMarker([-0.7266231304523443, 31.30279541015625]).addTo(marvMap);
wakanda.bindPopup("<b>Wakanda</b>");
var polygon = L.polygon([
[-0.0116876,30.8969443],
[-0.0322869,30.8964293],
[-0.0570061,30.8734267],
[-0.0686791,30.8730834],
[-0.0844719,30.8823531],
[-0.0888493,30.8896487],
[-0.0891068,30.8996909],
[-0.0964882,30.9046691],
[-0.0961449,30.9146255],
[-0.1064445,30.9235519],
[-0.1751087,30.938658],
[-0.2712385,30.9427779],
[-0.3968915,30.9043263],
[-0.4291626,30.8823537],
[-0.5706075,30.8823531],
[-0.5767225,30.8790702],
[-0.580091,30.8716674],
[-0.5923209,30.8664748],
[-0.6016753,30.8547162],
[-0.6097856,30.8533001],
[-0.6178959,30.8477641],
[-0.6258187,30.8482307],
[-0.6337414,30.8555639],
[-0.6413476,30.8523774],
[-0.6565601,30.8624841],
[-0.6786387,30.8485581],
[-0.7048367,30.8469917],
[-0.7076045,30.8570124],
[-0.7138053,30.8608533],
[-0.7289531,30.8548023],
[-0.7441438,30.8468201],
[-0.7690324,30.8432153],
[-0.7988989,30.8222725],
[-0.8273921,30.8150625],
[-0.8363184,30.8150622],
[-0.8452446,30.8246749],
[-0.854685,30.8468191],
[-0.8572597,30.8593503],
[-0.8625806,30.8705083],
[-0.8720209,30.8830396],
[-0.8809461,30.896086],
[-0.879573,30.9070724],
[-0.8617222,30.9345382],
[-0.8581166,30.9518752],
[-0.8490184,30.9623456],
[-0.8282485,30.9686962],
[-0.82121,30.9777933],
[-0.8198364,30.988951],
[-0.8260152,30.9994222],
[-0.8363135,30.9998512],
[-0.8438656,31.0057735],
[-0.842492,31.0148714],
[-0.8507291,31.018304],
[-0.862465,31.0179096],
[-0.8728278,31.0216352],
[-0.8811951,31.0194732],
[-0.8847565,31.0269243],
[-0.9171536,31.0330021],
[-0.9217875,31.040834],
[-0.935175,31.0400184],
[-0.9688155,31.0548669],
[-1.0003963,31.068085],
[-1.0457081,31.0876555],
[-1.0843238,31.0955939],
[-1.1050912,31.1076533],
[-1.1177926,31.1070529],
[-1.1473151,31.116839],
[-1.1663665,31.1137067],
[-1.1758068,31.1050812],
[-1.1795844,31.0960699],
[-1.1994966,31.0849136],
[-1.198467,31.0946982],
[-1.2029292,31.1017362],
[-1.2214645,31.1199323],
[-1.243432,31.146025],
[-1.2660852,31.1652498],
[-1.3103624,31.1844756],
[-1.3491477,31.2064486],
[-1.380725,31.2339156],
[-1.3999459,31.2792339],
[-1.404751,31.30052],
[-1.398573,31.3108197],
[-1.4040643,31.314253],
[-1.4109285,31.3327926],
[-1.4080118,31.3530488],
[-1.4023492,31.3609454],
[-1.4062967,31.3695286],
[-1.4074984,31.3904714],
[-1.3990899,31.4220572],
[-1.3879354,31.4399099],
[-1.3875925,31.4481495],
[-1.392226,31.4581057],
[-1.3972885,31.4733835],
[-1.4009779,31.4927812],
[-1.4033799,31.5113206],
[-1.4015778,31.5267701],
[-1.4038944,31.5326066],
[-1.3993464,31.5377565],
[-1.3961713,31.5538926],
[-1.3917082,31.5689986],
[-1.369742,31.5998982],
[-1.339538,31.6239307],
[-1.3374785,31.657576],
[-1.3264977,31.6616968],
[-1.3132848,31.7204059],
[-1.2980969,31.7480435],
[-1.2938921,31.7839206],
[-1.2935481,31.8093263],
[-1.2836798,31.842886],
[-1.2772437,31.8482932],
[-1.2719227,31.8522409],
[-1.2708912,31.862883],
[-1.2513262,31.8664021],
[-1.2461773,31.8630547],
[-1.2214634,31.8700928],
[-1.2104789,31.8621964],
[-1.2008679,31.8674321],
[-1.1912568,31.866488],
[-1.1816457,31.8776459],
[-1.1660277,31.879105],
[-1.1647404,31.8743413],
[-1.1586477,31.8702644],
[-1.1541853,31.8731826],
[-1.1425148,31.8723242],
[-1.1419999,31.8619815],
[-1.137366,31.8578187],
[-1.1308442,31.8570463],
[-1.1200317,31.8575613],
[-1.1009812,31.8656294],
[-1.0863927,31.8574755],
[-1.0735206,31.8472617],
[-1.0635663,31.8508666],
[-1.0589325,31.8593639],
[-1.062537,31.8637412],
[-1.0517244,31.8718951],
[-1.0395388,31.8773024],
[-1.0323516,31.8670777],
[-1.0210453,31.8644062],
[-1.0231479,31.8576898],
[-1.0350335,31.8580115],
[-1.0349691,31.8497609],
[-1.0328451,31.8415103],
[-1.0200154,31.8375405],
[-1.011305,31.8438704],
[-1.001908,31.8419605],
[-0.9980033,31.8324976],
[-1.0028947,31.8245581],
[-1.0112296,31.8288871],
[-1.0243703,31.8270364],
[-1.026623,31.8219616],
[-1.0235764,31.8173051],
[-1.0322653,31.8165218],
[-1.0409542,31.8226049],
[-1.0468969,31.8146119],
[-1.058332,31.8148585],
[-1.0610459,31.8097461],
[-1.0596407,31.8025738],
[-1.0575167,31.7985289],
[-1.0595119,31.7955139],
[-1.0646286,31.7940064],
[-1.0675303,31.7891328],
[-1.0683723,31.7760194],
[-1.052324,31.7646468],
[-1.0280373,31.763574],
[-1.0179536,31.7796888],
[-0.9982584,31.7903103],
[-0.9959547,31.7862534],
[-0.9902183,31.7835698],
[-0.978059,31.779576],
[-0.9660981,31.7770815],
[-0.9671547,31.772916],
[-0.9654652,31.7680639],
[-0.9600265,31.769346],
[-0.9410178,31.7840873],
[-0.9320283,31.7712019],
[-0.925785,31.7665564],
[-0.9132984,31.7641317],
[-0.8784985,31.7726934],
[-0.874594,31.771642],
[-0.8743372,31.762673],
[-0.8553282,31.7514937],
[-0.8493639,31.7320747],
[-0.8555431,31.720574],
[-0.8637819,31.7131931],
[-0.8603491,31.7052978],
[-0.8503935,31.6984316],
[-0.8328856,31.6956854],
[-0.8013027,31.6980893],
[-0.7271517,31.7365417],
[-0.6475075,31.7997116],
[-0.6186714,31.7682968],
[-0.6193585,31.7567094],
[-0.5980742,31.7231495],
[-0.5925818,31.58067],
[-0.5486387,31.5346648],
[-0.5101854,31.4069503],
[-0.3028208,31.3297004],
[-0.2712343,31.3101307],
[-0.2712343,31.2795752],
[-0.1723581,31.2588044],
[-0.1476391,31.2841245],
[-0.1064407,31.2929651],
[-0.0844692,31.275113],
[-0.0460198,31.2723678],
[-0.0130608,31.2421555],
[-0.0020745,31.2105699]
]).addTo(marvMap);


marvMap.on('click', function(e) {
    const latLng = e.latlng;
    console.log(latLng.lat);
    console.log(latLng.lng);
});
