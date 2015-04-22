(function($){

  Drupal.behaviors.dataVizblock = {
    attach: function(){
      this.init();
    },
    init: function(){
      var margin = {top: 30, right: 20, bottom: 30, left: 20},
        width = 960 - margin.left - margin.right,
        barHeight = 90,
        barWidth = width * .9;

      var i = 0,
        duration = 400,
        root;

      var tree = d3.layout.tree()
        .nodeSize([0, 20]);

      var line = d3.svg.line()
        .x( function(point) { return point.lx; })
        .y( function(point) { return point.ly; });

      function lineData(d){
        // i'm assuming here that supplied datum
        // is a link between 'source' and 'target'
        var points = [
          {lx: d.source.x, ly: d.source.y},
          {lx: d.target.x, ly: d.target.y}
        ];
        return line(points);
      }

// usage:
//      var link= svg.selectAll("path")
//        .data(links)
//        .enter().append("path")
//        .attr("d",lineData)
//        .attr("class", ".link")
//        .attr("stroke", "black")
//        .attr("stroke-width", "2px")
//        .attr("shape-rendering", "auto")
//        .attr("fill", "none");

      //var diagonal = d3.svg.diagonal()
      //  .projection(function(d) { return [d.y, d.x]; });

      //var diagonal = d3.svg.diagonal()
      //  .projection(function(d) {
      //    var i = d;
      //    console.log(i);
      //    return "M" + d.source.y + "," + d.source.x + "V" + d.target.x + "H" + d.target.y;
      //  });


      var svg = d3.select(".therapy-areas").append("svg")
        .attr("width", width + margin.left + margin.right)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      var flare = Drupal.settings.therapy_terms;
      //d3.json("data.json", function(error, flare) {
      //var samp_array = [];
      //// need recursive function here
      //
      //$.each(flare.children, function(){
      //  samp_array.push(this);
      //  var array_2 = [];
      //  if(this.hasOwnProperty('children')){
      //    var kids = this.children;
      //    $.each(kids, function(){
      //      array_2.push(this);
      //    });
      //    this.children = array_2;
      //  }
      //});
      flare = formatKids(flare);
        flare.x0 = 0;
        flare.y0 = 0;
        update(root = flare);
      //});

      function formatKids(parent){
        if(parent.hasOwnProperty('children')){
          var array_2 = [];
          var kids = parent.children;
          $.each(kids, function(){
            if(this.hasOwnProperty('children')){
              formatKids(this);
            }
            array_2.push(this);
          });
          parent.children = array_2;
        }
        return parent;
      }

      function update(source) {

        // Compute the flattened node list. TODO use d3.layout.hierarchy.
        var nodes = tree.nodes(root);

        var height = Math.max(500, nodes.length * barHeight + margin.top + margin.bottom);

        d3.select("svg").transition()
          .duration(duration)
          .attr("height", height);

        d3.select(self.frameElement).transition()
          .duration(duration)
          .style("height", height + "px");

        // Compute the "layout".
        nodes.forEach(function(n, i) {
          n.x = i * barHeight;
        });

        // Update the nodes…
        var node = svg.selectAll("g.node")
          .data(nodes, function(d) { return d.id || (d.id = ++i); });

        var y0 = source.y0;
        var x0 = source.x0;

        var nodeEnter = node.enter().append("g")
          .attr("class", "node")
          .attr("transform", function(d) { return "translate(" + y0 + "," + x0 + ")"; })
          .style("opacity", 1e-6);

        // Enter any new nodes at the parent's previous position.
        nodeEnter.append("rect")
          .attr("y", -barHeight / 2)
          .attr("height", barHeight)
          .attr("width", barWidth)
          .style("fill", color)
          .on("click", click);

        nodeEnter.append("text")
          .attr("dy", -10.5)
          .attr("dx", 5.5)
          .text(function(d) { return d.name; });

        nodeEnter.append("text")
          .attr("dy", 30)
          .attr("dx", 20)
          .text(function(d) { return d.description; });

        // Transition nodes to their new position.
        nodeEnter.transition()
          .duration(duration)
          .attr("transform", function(d) {
            return "translate(" + d.y + "," + (d.x+10) + ")";
          })
          .style("opacity", 1);

        node.transition()
          .duration(duration)
          .attr("transform", function(d) { return "translate(" + d.y + "," + (d.x+10) + ")"; })
          .style("opacity", 1)
          .select("rect")
          .style("fill", color);

        // Transition exiting nodes to the parent's new position.
        node.exit().transition()
          .duration(duration)
          .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
          .style("opacity", 1e-6)
          .remove();

        // Update the links…
        //var link = svg.selectAll("path.link")
        //  .data(tree.links(nodes), function(d) { return d.target.id; });

        // Enter any new links at the parent's previous position.

        //link.enter().insert("path", "g")
        //  .attr("class", "link")
        //  .attr("d", function(d) {
        //    var o = {x: source.x0, y: source.y0};
        //    return diagonal(o, o);
        //  })
        //  .transition()
        //  .duration(duration)
        //  .attr("d", line);

        //link.enter().insert("path", "g")
        //  .attr("class", "link")
        //  .attr("d",lineData);
          //.transition()
          //.duration(duration)
          //.attr("d", function(d, i) {
          //  return "M" + d.source.y + "," + d.source.x
          //    + "V" + d.target.x + "H" + d.target.y;
          //});

          //.attr("d", line);


        //link.enter().insert("path", "g")
        //  .attr("class", "link")
        //  .attr("d", function(d) {
        //        var o = {x: source.x, y: source.y};
        //        return elbow(o, d);
        //  })
        //  .transition()
        //  .duration(duration)
        //  .attr("d", elbow);

        // Transition links to their new position.
        //link.transition()
        //  .duration(duration)
        //  .attr("stroke", '#000')
        //  .attr("stroke-width", '5px')
        //  .attr("fill", '#000')
        //  .attr("d", lineData);
        //
        ////Transition exiting nodes to the parent's new position.
        //link.exit().transition()
        //  .duration(duration)
        //  .attr("d", line)
        //  .remove();

        // Stash the old positions for transition.
        nodes.forEach(function(d) {
          d.x0 = d.x;
          d.y0 = d.y;
        });
      }

      // Toggle children on click.
      function click(d) {
        if (d.children) {
          d._children = d.children;
          d.children = null;
        } else {
          d.children = d._children;
          d._children = null;
        }
        update(d);
      }


      //$color-salmon: #D86E4D;
      //$color-blue: #366B8A;
      //$color-green: #369866;
      //$color-orange: #D89A4D;
      function color(d) {
        return d._children ? "#D86E4D" : d.children ? "#366B8A" : "#D89A4D";
      }


    },
    elbow: function(d, i) {
       return "M" + d.source.y + "," + d.source.x
      + "V" + d.target.x + "H" + d.target.y;
    }
  }
})(jQuery);