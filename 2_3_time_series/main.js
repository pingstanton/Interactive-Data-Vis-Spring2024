 /* CONSTANTS AND GLOBALS */
 	const width = window.innerWidth * 0.95,
 	height = window.innerHeight * 0.7,
 	margin = { top: 5, bottom: 20, left: 0, right: 60 }
	indent = 10

	const formatDate = d3.timeFormat("%Y") /* force D3 data type */

/* LOAD DATA */
	d3.csv('../data/jamesbond.csv', d => {
		return {
		Movie: d.Movie, /* keeps as string */
		ReleaseYear: new Date(+d.ReleaseYear, 0, 1), /* reformats to year */
		Actor: d.Actor, /* keeps as string */
		LastName: d.LastName, /* keeps as string */
		ActorAge: +d.ActorAge, /* reformats to number */
		BondGirl: d.BondGirl,
		BondGirlActor: d.BondGirlActor,
		BondGirlAge: +d.BondGirlAge,
		BondLabel: d.BondLabel
			}
		}).then(data => {
			console.log('data :>> ', data);

// use custom initializer to reformat the data the way we want it
// ref: https://github.com/d3/d3-fetch#dsv

		const filename = "jamesbond.csv"; /* used on extra raw data table */


/* SCALES | domain for source, range for display */
	const xScale = d3.scaleTime()
		.domain(d3.extent(data, d => d.ReleaseYear))
		.range([margin.right, width - margin.left])

	const yScale = d3.scaleLinear()
	 	.domain([0, d3.max(data, d => d.ActorAge)]) // Ensure the domain starts from zero
	 	.range([height - margin.bottom, margin.top]);

/* CREATE SVG ELEMENT */
	const svgJB = d3.select("#container")
		.append("svg")
		.attr("width", width + 10)
		.attr("height", height)

/* BUILD AND CALL AXES */

	const xAxis = d3.axisBottom(xScale)
		.ticks(12)

	const xAxisGroup = svgJB.append("g")
		.attr("class", "xAxis")
		.attr("transform", `translate(${0}, ${height - margin.bottom})`)
		.call(xAxis)

	/* I cannot figure out why this axis label won't show up... */
	xAxisGroup.append("text")
		.attr("class", "xLabel")
		.attr("transform", `translate(${width / 2}, ${35})`)
		.text("Year of Movie's Release in U.S. Theaters")
		.attr("text-anchor", "middle") /* text alignment */
		.style("font-size", "12px") /* font size */
		.style("font-family", "arial") /* font face */
		.style("font-weight", "bold") /* font weight */
		.style("fill", "#000000"); /* black text */

	const yAxis = d3.axisLeft(yScale)
		.tickFormat(d => "Age " + d) /* set to keep 0 as baseline */

	const yAxisGroup = svgJB.append("g")
	.attr("class", "yAxis")
	.attr("transform", `translate(${margin.right}, ${0})`)
	.call(yAxis)

	/* I cannot figure out why this axis label won't show up... */
	yAxisGroup.append("text")
		.attr("class", 'yLabel')
		.attr("transform", `translate(${-margin.left + 10}, ${height / 2}) rotate(-90)`)
		.text("Actor's Age");

/* AREA GENERATOR FUNCTION */
	const areaGenJB = d3.area()
		.x(d => xScale(d.ReleaseYear))
		.y0(height - margin.bottom) /* bottom of the area (y-value when ActorAge is 0) */
		.y1(d => yScale(d.ActorAge)); /* top of the area (y-value when ActorAge is maximum) */

/* DRAW AREA */

	svgJB.selectAll(".area")
		.data(data)
		.join("path")
		.attr("class", "area")
		.attr("fill", "#cc0000")
		//.attr("fill", "#b6c5e4") /* ligher blue */
		.attr("d", (areaGenJB(data)));

	svgJB.selectAll(".actor-label")
		.data(data)
		.join("text")
		.attr("class", "actor-label")
		.attr("x", d => d3.axisBottom(xScale))
		.attr("y", d => d3.axisBottom(yScale))
		.attr("dy", 9) /* offset to the left */
		.attr("dx", 0) /* offset down */
		.attr("text-anchor", "left") /* text alignment */
		.style("font-size", "10px") /* font size */
		.style("letter-spacing", "1px") /* because small font size */
		.style("font-family", "arial") /* font face */
		.style("font-weight", "bold") /* font weight */
		.style("fill", "#ffffff") /* white text */
		.attr("opacity", 0.9) // Provide opacity as a number
		.each(function(d) { 	  
		/* calculate the x and y offsets for rotation */
	    const xOffset = xScale(d.ReleaseYear)+5;
		const yOffset = yScale(d.ActorAge);
	    /* apply rotation transformation to each label individually */
		d3.select(this).attr("transform", `translate(${xOffset},${yOffset}) rotate(90)`);
		})
		.html(d => d.BondLabel); // Display ActorAge as the label text


/* ADDING TABLE TO VIEW RAW SOURCE DATA ON PAGE */

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


});
