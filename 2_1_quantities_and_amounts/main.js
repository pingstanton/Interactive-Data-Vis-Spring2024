/* 
CONSTANTS AND GLOBALS 
*/
const width = window.innerWidth *.9; /* 90% of display width */
const height = 300; /* 300 units height */
const wmargin = 80; /* split width and height margins from original example */
const hmargin = 20;

/* 
LOAD DATA
basic call to find data source - in this case, the MoMA_topTenNationalities.csv file;
seems to automatically read first record as name for fields
*/
d3.csv('../data/MoMA_topTenNationalities.csv', d3.autoType)
	.then(data => {
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
		.attr("fill", d => d.Count > 1000 ? "#f2b501" : d.Count > 900 ? "#ebaa00" : d.Count > 800 ? "#d08500" : d.Count > 700 ? "#e29d00" : d.Count > 800 ? "#d08500" : d.Count > 700 ? "#bb6c00" : d.Count > 500 ? "#ab5a00" : "#8e4700")
		/*

		Because of the disproportionate weight of Americans in the Count, the
		colorScale scaleLinear variable kept making the top bar one color, and
		everything else a different color, without any gradiation. The conditionals
		above are arbitrary - not actual quartiles - but the chart looks prettier.
 
		.attr("fill", d => colorScale(d.Count)) /* set fill color based on the count 
		*/

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



  }) 
/* 
This closes the open bracket from above...
	d3.csv('../data/MoMA_topTenNationalities.csv', d3.autoType)
	.then(data => { 
*/


