/* 
CONSTANTS AND GLOBALS 
splitting height and width margins... 
*/
const width = window.innerWidth *.8; /* 80% of display width */
const height = 300; /* 300 unites height */
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

	const colorScale = d3.scaleLinear([0, 100], ["#ff9900","#990000"]) /* yellow/orange color gradient */
	  .domain([0, (Math.max(...data.map(d => d.Count))/0.3)]) /* which value in data to use for gradient */

/* AXES */
    const yAxis = d3.axisLeft(yScale)
    svg.append("g")
      .attr("transform", `translate(${wmargin}, 0)`)
      .call(yAxis)

    const xAxis = d3.axisBottom(xScale)
    svg.append("g")
      .attr("transform", `translate(0,${height - hmargin})`)
      .call(xAxis)

/* BARS */
   svg.selectAll(".bar")
      .data(data) /* call the data */
      .join("rect") /* draw a rectangle */
      .join("text") /* draw a rectangle */
      .attr("class", "bar") /* use CSS class "bar" */
      .attr("y", d => yScale(d.Nationality)) /* align to vertical axis */
      .attr("x", wmargin+5) /* align a 5px smidge right of horizontal axis */
      .attr("height", yScale.bandwidth()) /* set consistent height to each bar */
      .attr("width", d => xScale(d.Count) - wmargin) /* set width to match Count value */
	  .attr("fill", d => colorScale(d.Count)) /* set fill color based on the count */
	  .attr("font-family", "sans-serif") /* cannot get text to appear? */
      .attr("font-size", "11px")

  }) 
/* 
This closes the open bracket from above...
	d3.csv('../data/MoMA_topTenNationalities.csv', d3.autoType)
	.then(data => { 
*/


