/* ASSIGNMENT...

* Implement your own scatter plot with the MoMA distributions dataset. 
It is already referenced in your template. 
Your dataset should visualize length and width.

* Size the dots by the artist lifespan. 
This requires creating a new scale. 
Carefully consider the domain and range of this new scale, 
and do your best to make the domain of the scale dynamic 
(i.e. would the scale still work if the data changed?). 
Make a design decision to handle the 0 values.

* Make intentional design decisions -- colors, sizes, axes, etc. 
should illustrate something interesting about or relevant to your data.

BONUS:

* Add a label to each dot using the same method in which we appended them. 
HINT: you can either append one group that is positioned that includes 
both the circle and the label, or you can append all circles, 
then all labels.

* Play with your understanding of the SVG coordinate system by using 
transform: translate(x, y) to position your dots instead of cx and cy. 
Can you think of any benefits of this method?

FIELDS (COLUMNS)
0: "Title"
1: "Artist"
2: "ConstituentID"
3: "ArtistBio"
4: "Nationality"
5: "BeginDate"
6: "EndDate"
7: "Artist Lifespan"
8: "Gender"
9: "Date"
10: "Length (cm)"
11:"Width (cm)"

*/

/* CONSTANTS AND GLOBALS */
	const width = window.innerWidth * 0.8, /* using 80% width of display area */
	height = 400; /* fixed to 400 units height */
	// height = window.innerHeight * 0.8, /* using 80% width of display area */
	margin = { top: 20, bottom: 60, left: 80, right: 60 },
	radius = 5;

/* LOAD DATA */

	d3.csv("../data/MoMA_distributions_cleaned.csv", d3.autoType)
		.then(data => {	
		const filename = "MoMA_distributions-cleaned.csv";	
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
		.range([3, 9])

	const colorScale = d3.scaleOrdinal()
		.domain(["(Male)", "(Female)"])
		.range(["#eb4e3e", "#1d847e"]) /* using gender colors from The Economist */
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
