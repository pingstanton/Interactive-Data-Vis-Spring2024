/* Section 2 | Tutorial 2 | Distributions
Tutorial Assignment, see:
https://github.com/InteractiveDataVis/Interactive-Data-Vis-Spring2024/blob/main/2_2_distributions/README.md
*/

/* DATA 73200 - INTERACTIVE DATA VISUALIZATION
Instructor: Eleanor Frymire

CUNY GRADUATE CENTER | 365 5th Ave, New York, NY 10016

MATTHEW STANTON | mstanton@gradcenter.cuny.edu | pingstanton@gmail.com
https://github.com/pingstanton/ 

*/

/* QUESTIONS...

1.) I flipped the x/y axis so that "width" lay on the x axis, 
but depending on how these pieces are displayed at MoMA,
should I have kept the original orientation (x = height, y = width)?

2.) I didn't like the original x/y scale that did not match display,
given they share the same unit of measure (centimeters), so I
mocked up a version where height cm and width cm displayed on
each axis the same. However, doing so will break how the overall
visualization fits on a web page (it's way too high). Options?

*/

/* CONSTANTS AND GLOBALS */
	const width = window.innerWidth * 0.9, /* using 90% width of display area */
	height = 500; /* fixed units height */
	// height = window.innerHeight * 0.8, /* using 80% width of display area */
	margin = { top: 20, bottom: 60, left: 120, right: 30 },
	radius = 5; /* this variable gets ignored below in favor of d => lifespan(d["Artist Lifespan"]) */

/* LOAD DATA */

	d3.csv("../data/MoMA_distributions_cleaned.csv", d3.autoType)
		.then(data => {	
		const filename = "MoMA_distributions-cleaned.csv"; /* used on extra raw data table */
		console.log("data", data) /* preview loaded records in console */
		console.log("Number of records: ", data.length); /* count records in data source */

/* SCALES */

	const xScale = d3.scaleLinear()
		.domain([0, d3.max(data.map(d => d["Width (cm)"]))])
		.range([margin.left, width - margin.right])

	const yScale = d3.scaleLinear()
		.domain([0, d3.max(data, d => d["Length (cm)"])])
		.range([height - margin.bottom, margin.top])

/* THIS KLUDGE DOES NOT WORK
	was trying to ignore any age of 0 and ages over 100 due to typos in the uncleaned data source 
	ended up manually cleaning the data instead into new .csv file
*/
	const filteredData = data.filter(d => d["Artist Lifespan"] > 1 && d["Artist Lifespan"] <= 100);
	const lifespan = d3.scaleLinear()
		.domain([0, d3.max(filteredData, d => d["Artist Lifespan"])])
		.range([2, 9])

	const colorScale = d3.scaleOrdinal()
		.domain(["(Male)", "(Female)", "()"])
		.range(["#eb4e3e", "#1d847e", "#333333"]) /* using gender colors from The Economist */
		/* https://www.economist.com/leaders/2018/04/07/how-to-narrow-britains-gender-pay-gap */

		/* see Lisa Charlotte Muth's blog post: https://blog.datawrapper.de/gendercolor/ */

/* HTML ELEMENTS */

	const svg = d3.select("#container") /* display area of visualization */
		.append("svg")
		.attr("width", width)
		.attr("height", height)

	const unit = " cm" /* added as unit label to ticks */

	const xAxis = d3.axisBottom(xScale) /* horizontal (left/right) */
		.ticks(5)
		.tickFormat(d => "W: " + `${d}` + unit); /* added "cm" unit to tick */
		svg.append("g")
		.attr("transform", `translate(0, ${height - margin.bottom})`)
		.call(xAxis) /* draw it */

	const yAxis = d3.axisLeft(yScale) /* vertical (up/down) */
		.ticks(5)
		.tickFormat(d => "H: " + `${d}` + unit); /* added "cm" unit to tick */
		svg.append("g")
		.attr("transform", `translate(${margin.left}, 0)`)
		.call(yAxis)

	svg.selectAll(".circle")
		.data(data)
 		.join("circle")
 		.attr("cx", d => xScale(d["Width (cm)"]))
 		.attr("cy", d => yScale(d["Length (cm)"]))
		.attr("r", d => lifespan(d["Artist Lifespan"]))
		// .attr("r", radius)
		.style("fill", d => colorScale(d.Gender))
		.attr("opacity", 0.5);

	svg.selectAll(".circle-label")
	    .data(data)
	    .join("text")
	    .attr("class", "circle-label")
	    .attr("x", d => xScale(d["Width (cm)"]))
	    .attr("y", d => yScale(d["Length (cm)"]))
	    .attr("dy", "-14") // Offset for better positioning above the circle
	    .attr("dx", "0") // Offset for better positioning above the circle
	    .style("text-anchor", "middle") // Center text horizontally
		.text(d => d["Artist"]) // Set the text content to the "Artist" property of each data point
		.style("font-size", "9px")
		.style("font-family", "courier, courier new, monospace")
		.style("fill", d => colorScale(d.Gender))
		.attr("opacity", 0.5);

/* ADDING TABLE TO VIEW RAW SOURCE DATA ON PAGE */
/* 
Prof. Frymire: Obviously this part wasn't in the assignment spec, 
I'm just adding it in for myself as reference. I found the 
tr:nth-child(odd) / tr:nth-child(even) CSS trick on Stack Overflow
while debugging this code, seems way easier than the way I used 
to do it with manually/scripting class="odd"/class="evn" on 
individual <tr> and <td> cells...
*/

	/* label above table */
	const rawData = d3.select("#rawData"); /* whole group wrapped in div #rawData ID on HTML page */
	rawData.selectAll("h3")
		.html("source data:<br />" + filename); /* const filename was declared above; using .html() instead of .text() to make the <br /> work */

	/* column headers from record[0] keys */
	const thead = d3.select("#sourceData thead");
	const hedRow = thead.selectAll("tr")
		.data([data[0]]) /* only bind the first data record once to the th row */
		.join("tr");
	hedRow.selectAll("th")
		.data(d => Object.keys(d)) /* for each first data record field as header keys */
		.enter()
		.append("th")
		.text(d => d);

	/* record [0] to record [n] as table rows */
	const tbody = d3.select("#sourceData tbody");
	const rows = tbody.selectAll("tr")
		.data(data)
		.join("tr");
	rows.selectAll("td")
		.data(d => Object.values(d))
		.join("td")
		.text(d => d);

/* END ADDING TABLE TO VIEW RAW SOURCE DATA ON PAGE */



});
