d3.xml('../assets/images/map.svg')
    .then(data => {
        d3.select('#map').node().appendChild(data.documentElement);
        styleImportedSVG();
    });

function styleImportedSVG () {
    d3.select('#soCalRegion')
        .on('mouseover', function() {
            d3.select('#soCalRegion')
                .style('fill-opacity',0.6)
                .style('stroke-opacity',0.1);
        })
        .on('mouseout',function(){
            d3.select('#soCalRegion')
                .style('fill-opacity',1)
                .style('stroke-opacity',1);
        })
        .on('click',function(){
            console.log("socal clicked!");
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

    d3.select('#newEnglandRegion')
        .on('mouseover', function() {
            d3.select('#newEnglandRegion')
                .style('fill-opacity',0.6)
                .style('stroke-opacity',0.1);
        })
        .on('mouseout',function(){
            d3.select('#newEnglandRegion')
                .style('fill-opacity',1)
                .style('stroke-opacity',1);
        });

    d3.select('#texasRegion')
        .on('mouseover', function() {
            d3.select('#texasRegion')
                .style('fill-opacity',0.6)
                .style('stroke-opacity',0.1);
        })
        .on('mouseout',function(){
            d3.select('#texasRegion')
                .style('fill-opacity',1)
                .style('stroke-opacity',1);
        });


    d3.select('#midwestRegion')
        .on('mouseover', function() {
            d3.select('#midwestRegion')
                .style('fill-opacity',0.6)
                .style('stroke-opacity',0.3);
        })
        .on('mouseout',function(){
            d3.select('#midwestRegion')
                .style('fill-opacity',1)
                .style('stroke-opacity',1);
        });

}