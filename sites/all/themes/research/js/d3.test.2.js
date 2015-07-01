(function($){
  Drupal.behaviors.dataVizblock = {

    attach: function() {
      mobile = false;
      this.init();
      this.createView();
      var wind_wd = $('html').width();
      if(wind_wd < 600){
        mobile = true;
      }
      $('.mobile-therapy-area').on('click', this.mobileCollapse);
      $('.extra-info').on('click', this.mobExtraInfo);
    },

    updateHash: function(val){
      if(history.pushState) {
        history.pushState(null, null, val);
      }
      else {
        location.hash = val;
      }
    },

    closeInfo: function(e){
      $('#block-cmr-therapy-area').removeClass('term-open').addClass('hide-inner');
      $('body').removeClass('fixed-body');

      window.location.hash = '';
    },


    mobExtraInfo : function(e){
      e.stopPropagation();
      //window.location.hash = $(this).data('extra-info');
    },

    mobileCollapse : function(e){
       //children
      e.stopPropagation();
      var el = $(this);
      if(el.hasClass('open')){
        el.removeClass('open');
      }else{
        el.addClass('open');
      }
    },

    createView: function () {
    var item = window.location.hash;
    if(item.length > 0){
      item = item.replace('#','');
      $('#block-cmr-therapy-area').removeClass('term-open').addClass('hide-inner');
      //$.ajax({
      //  url: 'ajax/get/therapy_areas',
      //  data: {
      //    'id': item
      //  }
      //}).done(function(data) {
      //    var info = JSON.parse(data);
      //    var template = $('#therapyTpl').html();
      //    var html = Mustache.to_html(template, info);
      //    if (mobile){
      //      $('body').addClass('fixed-body');
      //    } else {
      //      var top = $('#block-cmr-therapy-area').offset().top;
      //      $('html, body').stop().animate({
      //        scrollTop: top-150
      //      }, 1000, 'easeInOutExpo');
      //    }
      //    //  $('#area-'+item).html(html);
      //    //  $('#block-cmr-therapy-area').addClass('term-open');
      //    //  setTimeout(function(){
      //    //    $('#block-cmr-therapy-area').removeClass('hide-inner');
      //    //  }, 1200);
      //    //} else {
      //      $('.therapy-info').html(html);
      //      $('#block-cmr-therapy-area').addClass('term-open');
      //      setTimeout(function(){
      //        $('#block-cmr-therapy-area').removeClass('hide-inner');
      //      }, 1200);
      //      //$('.close-button').on('click', this.closeInfo);
      //      $('.close-button').on('click', Drupal.behaviors.dataVizblock.closeInfo);
      //  }
      //);
    }
  },

    init: function() {
      var margin = {top: 20, right: 120, bottom: 20, left: 120},
        width = 1400 - margin.right - margin.left,
        height = 1000 - margin.top - margin.bottom;

      var i = 0,
        duration = 750,
        root;

      var tree = d3.layout.tree()
        .size([height, width]);

      var diagonal = d3.svg.diagonal()
        .projection(function(d) {
          return [d.y, d.x];
        });

      var svg = d3.select(".therapy-areas").append("svg")
        .attr("width", width + margin.right + margin.left)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      function formatKids(parent) {
        if (parent.hasOwnProperty('children')) {
          var array_2 = [];
          var kids = parent.children;
          $.each(kids, function() {
            if (this.hasOwnProperty('children')) {
              formatKids(this);
            }
            array_2.push(this);
          });
          parent.children = array_2;
        }
        return parent;
      }

      var flare = formatKids(Drupal.settings.therapy_terms);

      function firstFlare(error, flare) {
        root = flare;
        root.x0 = height / 2;
        root.y0 = 0;



        root.children.forEach(collapse);
        update(root);
      };

        function collapse(d) {
            if (d.children) {
                d._children = d.children;
                d._children.forEach(collapse);
                d.children = null;
            }
        }

      d3.select(self.frameElement).style("height", "800px");

      function update(source) {

        // Compute the new tree layout.
        var nodes = tree.nodes(root).reverse(),
          links = tree.links(nodes);

        // Normalize for fixed-depth.
        nodes.forEach(function(d) {
          d.y = d.depth * 380;
        });

        // Update the nodes…
        var node = svg.selectAll("g.node")
          .data(nodes, function(d) {
            return d.id || (d.id = ++i);
          });

        // Enter any new nodes at the parent's previous position.
        var nodeEnter = node.enter().append("g")
          .attr("class", "node")
          .attr("transform", function(d) {
            return "translate(" + source.y0 + "," + source.x0 + ")";
          })
          .on("click", click);

        nodeEnter.append("circle")
          .attr("r", 1e-6)
          .style("fill", function(d) {
            return d._children ? "lightsteelblue" : "#fff";
          });

        nodeEnter.append("text")
          .attr("x", function(d) {
            return d.children || d._children ? -10 : 10;
          })
          .attr("dy", ".35em")
          .attr("data-info", function(d) {
            return d.tid
          })
          .attr("text-anchor", function(d) {
            return d.children || d._children ? "end" : "start";
          })
          .text(function(d) {
            return d.name;
          })
          .style("fill-opacity", 1e-6);

        var text = svg.selectAll("g.node text")
          .on('click', function(d){
          });

        window.onhashchange = Drupal.behaviors.dataVizblock.createView;


        // Transition nodes to their new position.
        var nodeUpdate = node.transition()
          .duration(duration)
          .attr("transform", function(d) {
            return "translate(" + d.y + "," + d.x + ")";
          });

        nodeUpdate.select("circle")
          .attr("r", 4.5)
          .style("fill", function(d) {
            return d._children ? "lightsteelblue" : "#fff";
          });

        nodeUpdate.select("text")
          .style("fill-opacity", 1);

        // Transition exiting nodes to the parent's new position.
        var nodeExit = node.exit().transition()
          .duration(duration)
          .attr("transform", function(d) {
            return "translate(" + source.y + "," + source.x + ")";
          })
          .remove();

        nodeExit.select("circle")
          .attr("r", 1e-6);

        nodeExit.select("text")
          .style("fill-opacity", 1e-6);

        // Update the links…
        var link = svg.selectAll("path.link")
          .data(links, function(d) {
            return d.target.id;
          });

        // Enter any new links at the parent's previous position.
        link.enter().insert("path", "g")
          .attr("class", "link")
          .attr("d", function(d) {
            var o = {x: source.x0, y: source.y0};
            return diagonal({source: o, target: o});
          });

        // Transition links to their new position.
        link.transition()
          .duration(duration)
          .attr("d", diagonal);

        // Transition exiting nodes to the parent's new position.
        link.exit().transition()
          .duration(duration)
          .attr("d", function(d) {
            var o = {x: source.x, y: source.y};
            return diagonal({source: o, target: o});
          })
          .remove();

        // Stash the old positions for transition.
        nodes.forEach(function(d) {
          d.x0 = d.x;
          d.y0 = d.y;
        });
      }

// Toggle children on click.
      function click(d) {
          if(d.id == 23){
              return;
          }
          if(d._children){
              root.children.forEach(collapse);
          }
          if (d.children) {
          d._children = d.children;
          d.children = null;
        } else {
            d.children = d._children;
            d._children = null;
        }
          //firstFlare(null, flare);
          update(d);
      }

      firstFlare(null, flare);
    }
  }
})(jQuery);