d3.xml('../assets/images/map.svg')
    .then(data => {
        d3.select('#map').node().appendChild(data.documentElement);
        d3.selectAll('#socal')
        .attr("xlink:href","socal.html");
        d3.selectAll('#england')
        .attr("xlink:href","england.html");
        d3.selectAll('#washington')
        .attr("xlink:href","washington.html");
        styleImportedSVG()
    });

function styleImportedSVG () {
    d3.select('#socalRegion')
        .on('mouseover', function() {
            d3.select('#socalRegion')
                .style('fill-opacity',0.6)
                .style('stroke-opacity',0.1);
        })
        .on('mouseout',function(){
            d3.select('#socalRegion')
                .style('fill-opacity',1)
                .style('stroke-opacity',1);
        });

    d3.select('#washingtonRegion')
        .on('mouseover', function() {
            d3.select('#washingtonRegion')
                .style('fill-opacity',0.6)
                .style('stroke-opacity',0.1);
        })
        .on('mouseout',function(){
            d3.select('#washingtonRegion')
                .style('fill-opacity',1)
                .style('stroke-opacity',1);
        });

    d3.select('#englandRegion')
        .on('mouseover', function() {
            d3.select('#englandRegion')
                .style('fill-opacity',0.6)
                .style('stroke-opacity',0.1);
        })
        .on('mouseout',function(){
            d3.select('#englandRegion')
                .style('fill-opacity',1)
                .style('stroke-opacity',1);
        });

}