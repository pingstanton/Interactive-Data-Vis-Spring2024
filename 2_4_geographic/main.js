/* Section 2 | Tutorial 4 | Geographic
Tutorial Assignment, see:
https://github.com/InteractiveDataVis/Interactive-Data-Vis-Spring2024/tree/main/2_4_geographic
*/

/* DATA 73200 - INTERACTIVE DATA VISUALIZATION
Instructor: Eleanor Frymire

CUNY GRADUATE CENTER | 365 5th Ave, New York, NY 10016

MATTHEW STANTON | mstanton@gradcenter.cuny.edu | pingstanton@gmail.com
https://github.com/pingstanton/ 

*/

/* CONSTANTS AND GLOBALS */
 	const width = window.innerWidth * 0.95,
 	height = window.innerHeight * 0.6,
// 	margin = { top: 20, bottom: 50, left: 60, right: 40 };
	margin = { top: 10, bottom: 10, left: 10, right: 10 };

/* LOAD DATA */
/* Using a Promise.all([]), we can load more than one dataset at a time */

	Promise.all([
		d3.json("world.json"),
		d3.csv("MoMA_nationalities_cleaned.csv", d3.autoType),
		]).then(([geojson, nationalities]) => {
	
		console.log(geojson)
		console.log(nationalities)
		console.log(d => nationalities.Count)

	const svg = d3 
    	.select("#container")
    	.append("svg")
		.attr("width", width)
    	.attr("height", height);
  
/* SPECIFY PROJECTION */
	projection = d3.geoEquirectangular()
		.fitSize([
		width-margin.left-margin.right,
		height-margin.top-margin.bottom
		], geojson);

/* DATA SCALE */

	const colors = ["#accdac", "#7cb07c", "#519751", "#006600", "#00cc00"];

	const colorScale = d3.scaleLinear()
    	.domain([0, 10, 100, 1000, 5000])
    	.range(colors);

/* DEFINE PATH FUNCTION */
	const path = d3.geoPath(projection)

/* APPEND GEOJSON PATH */

   const states = svg.selectAll("path.states")
        .data(geojson.features)
        .join("path")
        .attr("class", 'states')
        .attr("d", path)
        .style("fill", d => {
            // Find the corresponding nationality entry based on the country code
            const nationality = nationalities.find(entry => entry.Country === d.properties.name);
            // Return the color from the color scale based on the "Count" value
            return nationality ? colorScale(nationality.Count) : "#ffffff"; // Default to lightgray if data is missing
        })
        .attr("stroke", "#ffffff")
        .style("stroke-width", 2)
		;

	const moma53rdSt =  { latitude: 40.762617239591115, longitude: -73.97763738178139 };
	svg.selectAll("circle.point")
		.data([moma53rdSt])
		.join("circle")
		.attr("r", 5)
		.attr("fill", "#cc0000")
        .attr("stroke", "#ffffff")
        .style("stroke-width", 2)
		.attr("transform", d=> {
      // use our projection to go from lat/long => x/y
      // ref: https://github.com/d3/d3-geo#_projection
		const [x, y] = projection([d.longitude, d.latitude])
		return `translate(${x}, ${y})`
	})

/* ADDING TABLE TO VIEW RAW SOURCE DATA ON PAGE */

	const filename = "MoMA_nationalities_cleaned.csv";

	/* label above table */
	const rawData = d3.select("#rawData"); /* whole group wrapped in div #rawData ID on HTML page */
	rawData.selectAll("h3")
		.html("source data:<br />" + filename); /* const filename was declared above; using .html() instead of .text() to make the <br /> work */

  /* column headers from record[0] keys */
    const thead = d3.select("#sourceData thead");
    const hedRow = thead.append("tr");
    hedRow.selectAll("th")
        .data(nationalities.columns)
        .enter()
        .append("th")
        .text(d => d);

    /* record [0] to record [n] as table rows */
    const tbody = d3.select("#sourceData tbody");
    const rows = tbody.selectAll("tr")
        .data(nationalities)
        .join("tr");
    rows.selectAll("td")
        .data(d => Object.values(d))
        .join("td")
        .text(d => d);

});
