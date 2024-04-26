/* CONSTANTS AND GLOBALS */
	const width = window.innerWidth * 0.9, /* using 90% width of display area */
	height = 500; /* fixed units height */
	// height = window.innerHeight * 0.8, /* using 80% width of display area */
	margin = { top: 20, bottom: 60, left: 120, right: 30 },
	radius = 5; /* this variable gets ignored below in favor of d => lifespan(d["Artist Lifespan"]) */


// these variables allow us to access anything we manipulate in init() but need access to in draw().
// All these variables are empty before we assign something to them.
	let svg;
	let xScale;
	let yScale;
	let colorScale;

/* APPLICATION STATE */
let state = {
  data: [],
  selectedGender: "All" // + YOUR INITIAL FILTER SELECTION
};

const filename = "MoMA_distributions-cleaned.csv"; /* used on extra raw data table */

/* LOAD DATA */
d3.csv("../data/MoMA_distributions_cleaned.csv", d3.autoType).then(raw_data => {
  // + SET YOUR DATA PATH
  console.log("data", raw_data);
  // save our data to application state
  state.data = raw_data;
  init();
});

/* INITIALIZING FUNCTION */
// this will be run *one time* when the data finishes loading in
function init() {
  // + SCALES

	xScale = d3.scaleLinear()
		.domain([0, d3.max(state.data.map(d => d["Width (cm)"]))])
		.range([margin.left, width - margin.right])

	yScale = d3.scaleLinear()
		.domain([0, d3.max(state.data, d => d["Length (cm)"])])
		.range([height - margin.bottom, margin.top])

  // + AXES

	filteredData = state.data.filter(d => d["Artist Lifespan"] > 1 && d["Artist Lifespan"] <= 100);
	lifespan = d3.scaleLinear()
		.domain([0, d3.max(filteredData, d => d["Artist Lifespan"])])
		.range([2, 9])

	colorScale = d3.scaleOrdinal()
		.domain(["(Male)", "(Female)", "()"])
		.range(["#eb4e3e", "#1d847e", "#333333"]) /* using gender colors from The Economist */
	

  // + UI ELEMENT SETUP
  const dropdown = d3.select("#dropdown")
  
  const options = dropdown
    .selectAll("option")
    .data(["All", "Female", "Male","Other / Institutional Artist"])
    .join("option")
    .attr("value", d => d)
    .text(d => d)

  dropdown
    .on("change", (event) => {
      console.log(event.target.value)
      state.selectedGender = event.target.value;
      console.log(state)
      draw();
    })

  // + CREATE SVG ELEMENT

	svg = d3.select("#container") /* display area of visualization */
		.append("svg")
		.attr("width", width)
		.attr("height", height)

	unit = " cm" /* added as unit label to ticks */

	xAxis = d3.axisBottom(xScale) /* horizontal (left/right) */
		.ticks(5)
		.tickFormat(d => "W: " + `${d}` + unit); /* added "cm" unit to tick */
		svg.append("g")
		.attr("transform", `translate(0, ${height - margin.bottom})`)
		.call(xAxis) /* draw it */

	yAxis = d3.axisLeft(yScale) /* vertical (up/down) */
		.ticks(5)
		.tickFormat(d => "H: " + `${d}` + unit); /* added "cm" unit to tick */
		svg.append("g")
		.attr("transform", `translate(${margin.left}, 0)`)
		.call(yAxis)

	svg.selectAll(".circle")
		.data(state.data)
 		.join("circle")
		.call(sel => sel
			.attr("cx", d => xScale(d["Width (cm)"]))
 			.attr("cy", d => yScale(d["Length (cm)"]))
			.attr("r", d => lifespan(d["Artist Lifespan"]) * 5)
			.style("fill", "#ffffff")			
			.attr("opacity", 0.1)
			.transition()
			.duration(1000)
			.attr("r", d => lifespan(d["Artist Lifespan"]))
			.style("fill", d => colorScale(d.Gender))
			.attr("opacity", 0.5)
		)

	svg.selectAll(".circle-label")
	    .data(state.data)
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
		.call(sel => sel
			.attr("opacity", 0)
			.transition()
			.duration(1000)
			.attr("opacity", 0.5)
		)

  draw(); // calls the draw function
}

/* DRAW FUNCTION */
// we call this every time there is an update to the data/state

function draw() {
	console.log("draw is run")

	const filteredData = state.data.filter(d => 
		state.selectedGender === "All" || d.Gender === state.selectedGender
	)

   // + FILTER DATA BASED ON STATE
  const circles = svg.selectAll(".circle")
    .data(filteredData, d => d.BioID)
    .join(
      enter => enter.append("circle")
        .attr("cx", d => xScale(d["Width (cm)"]))
        .attr("cy", d => yScale(d["Length (cm)"])),
      update => update
        .call(sel => sel.transition()
          .attr("cx", d => xScale(d["Width (cm)"]))
          .attr("cy", d => yScale(d["Length (cm)"])),
      exit => exit.remove()
    )
    .attr("class", "circle")
    .attr("r", radius)
  )
}
