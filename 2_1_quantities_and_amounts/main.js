/* Section 2 | Tutorial 1 | Quantities and Amounts
Tutorial Assignment, see:
https://github.com/InteractiveDataVis/Interactive-Data-Vis-Spring2024/blob/main/2_1_quantities_and_amounts/README.md
*/

/* DATA 73200 - INTERACTIVE DATA VISUALIZATION
Instructor: Eleanor Frymire

CUNY GRADUATE CENTER | 365 5th Ave, New York, NY 10016

MATTHEW STANTON | mstanton@gradcenter.cuny.edu | pingstanton@gmail.com
https://github.com/pingstanton/ | http://chimaboo.com/coursework/DATA73200

*/

/* 
CONSTANTS AND GLOBALS 
*/
const width = window.innerWidth *.9; /* 90% of display width */
const height = 300; /* shortened to 300 units height */
const wmargin = 80; /* split width and height margins from original example */
const hmargin = 20;



/* 
LOAD DATA
basic call to find data source - in this case, the MoMA_topTenNationalities.csv file;
seems to automatically read first record as name for fields
*/
d3.csv('../data/MoMA_topTenNationalities.csv', d3.autoType)
	.then(data => {
const filename = "MoMA_topTenNationalities.csv";
   console.log("data", data) /* preview loaded records in console */
	console.log("Number of records:", data.length); /* count records in data source */
/* 
unchanged from previous code 
*/
	const svg = d3.select("#container")
		.append("svg")
		.attr("width", width) /* variable set above as const */
		.attr("height", height) /* variable set above as const */

/* 
SCALES
This is where you should define your scales from data to pixel space.
For a linear scale, the domain and range are continuous intervals 
(from min to max). For a band scale, the domain is an array of 
discrete values (10, 20, 30, ...). 
*/

    const yScale = d3.scaleBand() /* scale by discrete values */
		.domain(data.map(d => d.Nationality)) /* which value in data to use */
		.range([hmargin, height - hmargin])
		.paddingInner(0.1)
		.paddingOuter(0.2)

    const xScale = d3.scaleLinear() /* scale by min to max values */
		.domain([0, Math.max(...data.map(d => d.Count))]) /* which value in data to use */
		.range([wmargin, width - wmargin])

    /* this variable used to offset number label when Count is less than 500 */
	const numberOutside = d3.scaleLinear() /* scale by min to max values */
		.domain([0, Math.max(...data.map(d => d.Count))]) /* which value in data to use */
		.range([wmargin, width + wmargin + wmargin])

	/* I wound up not using this code... see below. */
	const colorScale = d3.scaleLinear([0, 100], ["#ff9900","#990000"]) /* yellow/orange color gradient */
	  .domain([0, (Math.max(...data.map(d => d.Count))/0.3)]) /* which value in data to use for gradient */

/* AXES */
    const yAxis = d3.axisLeft(yScale)
    svg.append("g")
		.attr("transform", `translate(${wmargin}, 0)`)
		.call(yAxis)
		.style("font-size","14px");

    const xAxis = d3.axisBottom(xScale)
	/*	IDEA: RESPONSIVE X AXIS LABELS?
		number of x axis divisions to mark, divided into xScale max;
		reduce number of ticks if display window under set thresholds */
	console.log("Display width = ", window.innerWidth, "pixels")
	if (window.innerWidth > "1200") {
		xAxis.ticks(20);
	} else if (window.innerWidth > "700") {
		xAxis.ticks(10);
	} else {
		xAxis.ticks(5);} 
    svg.append("g")
		.attr("transform", `translate(0,${height - hmargin})`)
		.call(xAxis)

/* BARS */
   svg.selectAll(".bar")
		.data(data) /* bind the data */
		.join("rect") /* draw a rectangle */
		.attr("class", "bar") /* use CSS class "bar" */
		.attr("y", d => yScale(d.Nationality)) /* align to vertical axis */
		.attr("x", wmargin+5) /* align a 5px smidge right of horizontal axis */
		.attr("height", yScale.bandwidth()) /* set consistent height to each bar */
		.attr("width", d => xScale(d.Count) - wmargin) /* set width to match Count value */
		/*

		Because of the disproportionate weight of Americans in the Count, the
		colorScale scaleLinear variable kept making the top bar one color, and
		everything else a different color, without any gradiation. The conditionals
		above are arbitrary - not actual quartiles - but the chart looks prettier.
 
		.attr("fill", d => colorScale(d.Count)) /* set fill color based on the count 
		*/
		.attr("fill", d => d.Count > 1000 ? "#edb000" : d.Count > 600 ? "#d79000" : d.Count > 300 ? "#a16100" : d.Count > 150 ? "#794100" : "#000000")

/* TEXT LABELS FOR BARS */

	const numberInside = "25"

	svg.selectAll(".text") /* Select elements for the text */
		.data(data) /* bind the data */
		.join("text") /* append text elements for each record */
		.attr("class", "label") /* CSS class for styling */
		.attr("x", d => d.Count > 500 ? xScale(d.Count) - numberInside : numberOutside(d.Count))
		.attr("y", d => yScale(d.Nationality) + yScale.bandwidth() / 2) /* center vertically within the bar */
		.attr("dy", ".35em") /* vertically center text within its container */
		.text(d => d.Count) /* text content (Count values) */
		.attr("fill", d => d.Count > 500 ? "#ffffff" : "#999999")
		.style("font-size", "12px"); /* font size */



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



  }) 
/* 
This closes the open bracket from above...
	d3.csv('../data/MoMA_topTenNationalities.csv', d3.autoType)
	.then(data => { 
*/


