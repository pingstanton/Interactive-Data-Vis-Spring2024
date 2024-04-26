/* Section 3 | Tutorial 1 | Quantities and Amounts
Tutorial Assignment, see:
https://github.com/InteractiveDataVis/Interactive-Data-Vis-Spring2024/tree/main/3_1_quantities_and_amounts
*/

/* DATA 73200 - INTERACTIVE DATA VISUALIZATION
Instructor: Eleanor Frymire

CUNY GRADUATE CENTER | 365 5th Ave, New York, NY 10016

MATTHEW STANTON | mstanton@gradcenter.cuny.edu | pingstanton@gmail.com
https://github.com/pingstanton/ 

*/

/* CONSTANTS AND GLOBALS */
const width = window.innerWidth *.9; /* 90% of display width */
const height = 2000; /* longer due to a lot more records in data */
const wmargin = 120; /* split width and height margins from original example */
const hmargin = 20;
// since we use our scales in multiple functions, they need global scope
let xScale, yScale, svg;

/* APPLICATION STATE */
let state = {
	data: [],
};

	const filename = "MoMA_nationalities.csv";

/* LOAD DATA */
d3.csv('../data/MoMA_nationalities.csv', d3.autoType).then(raw_data => {
	console.log("data", raw_data);
	// save our data to application state
	state.data = raw_data;
	init();
});

/* INITIALIZING FUNCTION */
// this will be run *one time* when the data finishes loading in

function init() {

/* note dropping "const" variable declaration? */

	svg = d3.select("#container")
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

    yScale = d3.scaleBand() /* scale by discrete values */
		.domain(state.data.map(d => d.Nationality)) /* which value in data to use */
		.range([hmargin, height - hmargin])
		.paddingInner(0.1)
		.paddingOuter(0.2)

    xScale = d3.scaleLinear() /* scale by min to max values */
		.domain([0, Math.max(...state.data.map(d => d.Count))]) /* which value in data to use */
		.range([wmargin, width - wmargin])

    /* this variable used to offset number label when Count is less than 500 */
	numberOutside = d3.scaleLinear() /* scale by min to max values */
		.domain([0, Math.max(...state.data.map(d => d.Count))]) /* which value in data to use */
		.range([wmargin, width - wmargin])

/* AXES */
	yAxis = d3.axisLeft(yScale)
    svg.append("g")
		.attr("transform", `translate(${wmargin}, 0)`)
		.call(yAxis)
		.style("font-size","14px");

    xAxis = d3.axisBottom(xScale)
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

  draw(); // calls the draw function

}

/* DRAW FUNCTION */
// we call this every time there is an update to the data/state
function draw() {
  /* HTML ELEMENTS */

/* BARS */
   svg.selectAll(".bar")
		.data(state.data) /* bind the data */
		.join("rect") /* draw a rectangle */
		.attr("class", "bar") /* use CSS class "bar" */
		.attr("y", d => yScale(d.Nationality)) /* align to vertical axis */
		.attr("x", wmargin+5) /* align a 5px smidge right of horizontal axis */
		.attr("height", yScale.bandwidth()) /* set consistent height to each bar */
		.attr("fill", d => d.Count > 1000 ? "#edb000" : d.Count > 600 ? "#d79000" : d.Count > 300 ? "#a16100" : d.Count > 150 ? "#794100" : "#000000")
		.call(sel => sel
			.transition()
			.duration(1000)
			.attr("width", d => xScale(d.Count) - wmargin) /* set width to match Count value */
		)

/* TEXT LABELS FOR BARS */

	numberInside = "25"

	svg.selectAll(".text") /* Select elements for the text */
		.data(state.data) /* bind the data */
		.join("text") /* append text elements for each record */
		.attr("class", "label") /* CSS class for styling */
		.call(sel => sel
			.attr("x", wmargin + 5)
			.attr("opacity", 0)
			.transition()
			.duration(1000)
			.attr("width", d => xScale(d.Count) - wmargin) /* set width to match Count value */
			.attr("x", d => d.Count > 500 ? xScale(d.Count) - numberInside : numberOutside(d.Count) + 10)	
			.attr("opacity", 1)
		)
		.attr("y", d => yScale(d.Nationality) + yScale.bandwidth() / 2) /* center vertically within the bar */
		.attr("dy", ".35em") /* vertically center text within its container */
		.text(d => d.Count) /* text content (Count values) */
		.attr("fill", d => d.Count > 500 ? "#ffffff" : "#999999")
		.style("font-size", "12px"); /* font size */

 
/* ADDING TABLE TO VIEW RAW SOURCE DATA ON PAGE */
	/* label above table */
	const rawData = d3.select("#rawData"); /* whole group wrapped in div #rawData ID on HTML page */
	rawData.selectAll("h3")
		.html("source data:<br />" + filename); /* const filename was declared above; using .html() instead of .text() to make the <br /> work */

	/* column headers from record[0] keys */
	const thead = d3.select("#sourceData thead");
	const hedRow = thead.selectAll("tr")
		.data([state.data[0]]) /* only bind the first data record once to the th row */
		.join("tr");
	hedRow.selectAll("th")
		.data(d => Object.keys(d)) /* for each first data record field as header keys */
		.enter()
		.append("th")
		.text(d => d);

	/* record [0] to record [n] as table rows */
	const tbody = d3.select("#sourceData tbody");
	const rows = tbody.selectAll("tr")
		.data(state.data)
		.join("tr");
	rows.selectAll("td")
		.data(d => Object.values(d))
		.join("td")
		.text(d => d);

/* END ADDING TABLE TO VIEW RAW SOURCE DATA ON PAGE */




}
