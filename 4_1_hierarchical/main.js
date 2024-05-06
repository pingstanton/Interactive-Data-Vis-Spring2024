/*

PROBLEM: The positioning of the tooltip box is not displaying 
in the correction x/y coordinates from mouseover. If run as
noted here, the text displays on mouseover, but it's about
800 pixels below the svg, not above the circle area that acts
as the mouseover trigger.

Issue here?

position: [event.pageX, event.pageY]
(or)
position: [event.clientX, event.clientY]

Or, here?

.style("transform", `translate(${state.hover.position[0]}px, ${state.hover.position[1])`)

NOT A FIX: To compensate, I'm forcing in kludge variables (horizontal and vertical)
to get it over the svg, but this is stupid and needs proper fixing...

	const kludgeH = 50;
	const kludgeV = 800;

	...
	.style("transform", `translate(${state.hover.position[0] - kludgeH}px, ${state.hover.position[1] - kludgeV}px )`)
	...

/*

/** CONSTANTS AND GLOBALS */
const width = window.innerWidth * 0.9,
  height = window.innerHeight * 0.7,
  margin = { top: 20, bottom: 50, left: 60, right: 40 };

let svg;
let tooltip;

/* tooltip: Declared but not initialized. Used to hold a reference to a tooltip element, which could be used to display additional information when interacting with elements in the visualization. */

/** APPLICATION STATE */
let state = {
  data: null,
  hover: null
};

/** LOAD DATA */
d3.json("flare.json", d3.autotype).then(data => {
  state.data = data;
  init();
});

/** INITIALIZING FUNCTION */
function init() {

	/* stealing from treemap */
  // with scaleOrdinal, you can specify the color range, and leave the domain blank
  // as you use the colorScale, it will assign each unique key to a color
  const colorScale = d3.scaleOrdinal(d3.schemeSet3);


  const container = d3.select("#container")
  svg = container
    .append("svg")
    .attr("width", width)
    .attr("height", height);
    
    // create root based on hierarchy
    const root = d3.hierarchy(state.data)
		.sum(d => d.value)
		.sort((a, b) => b.value - a.value);

    // create a circlepack generator
    const packGen = d3.pack()
		.size([width, height])
		.padding(10)

    packGen(root)
    console.log(root)
    
    // define the descendants for the visualization
    const desc = root.descendants();

    console.log(desc)

    /* WHY ARE MY TOOLTIPS POSITIONING WAY OUT OF WHACK ON MOUSEOVER?!? */

	const kludgeH = 50;
	const kludgeV = 800;

    // append descendants to visualization
    const circles = svg.selectAll(".desc")
		.data(desc)
		.join("circle")
		.attr("class", "desc")
		.attr("cx", d => d.x)
		.attr("cy", d => d.y)
		.attr("r", d => d.r)
		.style("fill", d => d.children ? "transparent" : colorScale(d.data.name))
		.style("stroke", "black")
		.on("mouseover", (event, d) => {
			state.hover = {
			name: d.data.name,
			value: d.value,
			ancestorsPath: d.ancestors().map(d => d.data.name).join(" > "),
			// position: [event.pageX, event.pageY]
			position: [event.clientX, event.clientY]
			};
			tooltip
			.html(
			`
			<div class=\"box\">
			<div>Name: ${state.hover.name}</div>
			<div>Value: ${state.hover.value}</div>
			<div>Hierarchy Path: ${state.hover.ancestorsPath}</div>
			</div>
			`
			)
			.transition()
			.duration(500)
			.style("transform", `translate(${state.hover.position[0] - kludgeH}px, ${state.hover.position[1] - kludgeV}px )`)
			.style("opacity", 0.9);
		})
    	.on("mouseout", () => {
		tooltip.transition().duration(200).style("opacity", 0);
		});

	tooltip = container
    	.append("div")
    	.attr("class", "tooltip")
    	.style("opacity", 0);

  draw(); // calls the draw function
}

/** DRAW FUNCTION */
function draw() {
  

}
