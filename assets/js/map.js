//load map svg
d3.xml("../assets/images/map.svg")
  .then(data => {
    d3.select("#map")
      .node()
      .appendChild(data.documentElement);
    styleImportedSVG();
  })
  .catch(e => console.log(e));

class resourceObj {
  constructor(resourceName, resourceLink) {
    this.resourceName = resourceName;
    this.resourceLink = resourceLink;
  }
}

var regionDisp = {
  "Southern California":
    "The Southern California region is a big area. These guides cover universities from Santa Barbara, Los Angeles, and Irvine.",
  Texas:
    "Texas is a big state! These guides cover universities in cities around Texas such as Dallas and Austin.",
  Washington:
    "Washington is a big state separated by many regions. These guides cover resources from Tacoma, Seattle, and Olympia.",
  "New England":
    "New England is a big area. These guides cover universities from Pennsylvania, New York State, and Massachusetts.",
  Midwest:
    "The Midwest is a big region. These guides cover resources in Illinois and Michigan."
};

function displayPopup() {
  console.log("lol");
  var popup = document.getElementById("popup");
  popup.classList.toggle("show");
}

function displayResources(regionName, csvfile) {
  var region = document.createElement("span");
  var node = document.createTextNode(regionName);
  region.appendChild(node);
  document.getElementById("guideHeader").innerHTML = "You selected ";
  document.getElementById("guideHeader").appendChild(region);

  document.getElementById("guideText").innerHTML =
    regionDisp[regionName] +
    " We are currently working on our contributors form to add a resource to our database -- in the meantime, feel free to email ";

  var link = document.createElement("a");
  var node = document.createTextNode("washingz@usc.edu");
  var resSpan = document.createElement("span");
  var node2 = document.createTextNode(" to add a resource!");

  link.appendChild(node);
  link.setAttribute("href", "mailto:washingz@usc.edu");
  link.setAttribute("style", "color: #6186FF;");
  document.getElementById("guideText").appendChild(link);
  resSpan.appendChild(node2);
  document.getElementById("guideText").appendChild(resSpan);

  var child = document.getElementById("map");
  var child2 = document.getElementById("mapText");
  var box = document.getElementById("mapBox");
  box.removeChild(child);
  box.removeChild(child2);

  var text = document.createElement("div");
  text.setAttribute("id", "mapText");
  var introText = document.createTextNode("You're not alone.");
  var descSpan = document.createElement("p");
  descSpan.setAttribute("id", "resourcesDesc");
  var descText = document.createTextNode(
    regionName +
      " Private colleges have sent lots of students away from campus, but people are here to help you get food & safe housing."
  );
  text.appendChild(introText);
  descSpan.appendChild(descText);
  text.appendChild(descSpan);

  box.appendChild(text);

  var flexParent = document.createElement("div");
  flexParent.setAttribute("id", "flexParent");

  box.appendChild(flexParent);

  var flexDiv = document.createElement("div");
  flexDiv.setAttribute("id", "flexParent");

  var resources = {};

  d3.csv("../assets/resources/" + csvfile).then(function(data) {
    for (var i = 0; i < data.length; i++) {
      const res = new resourceObj(
        data[i]["Resource Name"],
        data[i]["Link to Resource"]
      );
      if (resources[data[i].Association] == null) {
        resources[data[i].Association] = [];
      }

      let tempArr = resources[data[i].Association];
      tempArr.push(res);
      resources[data[i].Association] = tempArr;
    }

    console.log(resources);

    for (var association in resources) {
      var flexItem = document.createElement("div");
      flexItem.setAttribute("id", "flexItem");
      var logoItem = document.createElement("div");
      logoItem.setAttribute("id", "logoItem");

      var resourceItem = document.createElement("div");
      resourceItem.setAttribute("id", "resources");

      var lineBreak = document.createElement("br");
      resourceItem.appendChild(lineBreak);
      var sourceText = document.createElement("span");
      sourceText.setAttribute("id", "resourceAssociation");
      var sourceTextNode = document.createTextNode(association);
      sourceText.appendChild(sourceTextNode);

      resourceItem.appendChild(sourceText);

      var list = document.createElement("ul");
      for (var i = 0; i < resources[association].length; i++) {
        var link = document.createElement("a");
        link.setAttribute("id", "resourceLink");
        link.setAttribute("onclick", "displayPopup()");
        // link.setAttribute("href", resources[association][i].resourceLink);
        // link.setAttribute("target", "_blank");
        var listItem = document.createElement("li");
        var listText = document.createTextNode(
          resources[association][i].resourceName
        );

        link.appendChild(listText);
        listItem.appendChild(link);
        list.appendChild(listItem);
      }
      resourceItem.appendChild(list);
      flexItem.appendChild(logoItem);
      flexItem.appendChild(resourceItem);

      document.getElementById("flexParent").appendChild(flexItem);
    }
  });
}

function styleImportedSVG() {
  d3.select("#soCalRegion")
    .on("mouseover", function() {
      d3.select("#soCalRegion")
        .style("fill-opacity", 0.6)
        .style("stroke-opacity", 0.1);
      d3.select(this).style("cursor", "pointer");
    })
    .on("mouseout", function() {
      d3.select("#soCalRegion")
        .style("fill-opacity", 1)
        .style("stroke-opacity", 1);
      d3.select(this).style("cursor", "default");
    })
    .on("click", function() {
      displayResources("Southern California", "socal.csv");
    });

  d3.select("#washingtonRegion")
    .on("mouseover", function() {
      d3.select("#washingtonRegion")
        .style("fill-opacity", 0.6)
        .style("stroke-opacity", 0.1);
      d3.select(this).style("cursor", "pointer");
    })
    .on("mouseout", function() {
      d3.select("#washingtonRegion")
        .style("fill-opacity", 1)
        .style("stroke-opacity", 1);
      d3.select(this).style("cursor", "default");
    })
    .on("click", function() {
      displayResources("Washington", "washington.csv");
    });

  d3.select("#newEnglandRegion")
    .on("mouseover", function() {
      d3.select("#newEnglandRegion")
        .style("fill-opacity", 0.6)
        .style("stroke-opacity", 0.1);
      d3.select(this).style("cursor", "pointer");
    })
    .on("mouseout", function() {
      d3.select("#newEnglandRegion")
        .style("fill-opacity", 1)
        .style("stroke-opacity", 1);
      d3.select(this).style("cursor", "default");
    })
    .on("click", function() {
      displayResources("New England", "newengland.csv");
    });

  d3.select("#texasRegion")
    .on("mouseover", function() {
      d3.select("#texasRegion")
        .style("fill-opacity", 0.6)
        .style("stroke-opacity", 0.1);
      d3.select(this).style("cursor", "pointer");
    })
    .on("mouseout", function() {
      d3.select("#texasRegion")
        .style("fill-opacity", 1)
        .style("stroke-opacity", 1);
      d3.select(this).style("cursor", "default");
    })
    .on("click", function() {
      displayResources("Texas", "texas.csv");
    });

  d3.select("#midwestRegion")
    .on("mouseover", function() {
      d3.select("#midwestRegion")
        .style("fill-opacity", 0.6)
        .style("stroke-opacity", 0.3);
      d3.select(this).style("cursor", "pointer");
    })
    .on("mouseout", function() {
      d3.select("#midwestRegion")
        .style("fill-opacity", 1)
        .style("stroke-opacity", 1);
      d3.select(this).style("cursor", "default");
    })
    .on("click", function() {
      displayResources("Midwest", "midwest.csv");
    });
}
