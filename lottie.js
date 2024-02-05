/**
 * ---------------------------------------
 * This demo was created using amCharts 5.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v5/
 * ---------------------------------------
 */

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv");

// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);


// Set up zooming
// https://www.amcharts.com/docs/v5/concepts/common-elements/containers/#Zoomable_container
var zoomableContainer = root.container.children.push(
  am5.ZoomableContainer.new(root, {
    width: am5.p100,
    height: am5.p100,
    pinchZoom: true
  })
);

var zoomTools = zoomableContainer.children.push(am5.ZoomTools.new(root, {
  target: zoomableContainer
}));

var data = {
    value: 0,
    children: [
      {
        name: "Business & Management",
        children: [
          {
            name: "Finance",
            value: 1
          },
          {
            name: "Marketing",
            value: 1
          },
          {
            name: "Human Resources",
            value: 1
          },
          {
            name: "International Business",
            value: 1
          }
        ]
      },
      {
        name: "Engineering",
        children: [
          {
            name: "Mechanical Engineering",
            value: 1
          },
          {
            name: "Electrical Engineering",
            value: 1
          },
          {
            name: "Civil Engineering",
            value: 1
          },
          {
            name: "Computer Engineering",
            value: 1
          }
        ]
      },
      {
        name: "Computer Science & IT",
        children: [
          {
            name: "Software Development",
            value: 1
          },
          {
            name: "Cybersecurity",
            value: 1
          },
          {
            name: "Data Science",
            value: 1
          },
          {
            name: "Artificial Intelligence",
            value: 1
          }
        ]
      },
      {
        name: "Health & Medicine",
        children: [
          {
            name: "Nursing",
            value: 1
          },
          {
            name: "Medicine",
            value: 1
          },
          {
            name: "Pharmacy",
            value: 1
          },
          {
            name: "Biomedical Sciences",
            value: 1
          }
        ]
      },
      {
        name: "Law",
        children: [
          {
            name: "Criminal Law",
            value: 1
          },
          {
            name: "Corporate Law",
            value: 1
          },
          {
            name: "International Law",
            value: 1
          },
          {
            name: "Human Rights Law",
            value: 1
          }
        ]
      },
      {
        name: "Social Sciences",
        children: [
          {
            name: "Psychology",
            value: 1
          },
          {
            name: "Economics",
            value: 1
          },
          {
            name: "Sociology",
            value: 1
          },
          {
            name: "Political Science",
            value: 1
          }
        ]
      },
      {
        name: "Arts & Humanities",
        children: [
          {
            name: "History",
            value: 1
          },
          {
            name: "Philosophy",
            value: 1
          },
          {
            name: "Literature",
            value: 1
          },
          {
            name: "Art & Design",
            value: 1
          }
        ]
      },
      {
        name: "Natural Sciences",
        children: [
          {
            name: "Biology",
            value: 1
          },
          {
            name: "Chemistry",
            value: 1
          },
          {
            name: "Physics",
            value: 1
          },
          {
            name: "Environmental Science",
            value: 1
          }
        ]
      },
      {
        name: "Education",
        children: [
          {
            name: "Primary Education",
            value: 1
          },
          {
            name: "Secondary Education",
            value: 1
          },
          {
            name: "Special Education",
            value: 1
          },
          {
            name: "Educational Psychology",
            value: 1
          }
        ]
      },
      {
        name: "Economics & Finance",
        children: [
          {
            name: "Econometrics",
            value: 1
          },
          {
            name: "Macroeconomics",
            value: 1
          },
          {
            name: "Microeconomics",
            value: 1
          },
          {
            name: "Financial Economics",
            value: 1
          }
        ]
      }
    ]
  };
  

// Create series
// https://www.amcharts.com/docs/v5/charts/hierarchy/#Adding
var series = zoomableContainer.contents.children.push(am5hierarchy.ForceDirected.new(root, {
  singleBranchOnly: false,
  downDepth: 2,
  topDepth: 1,
  initialDepth: 1,
  valueField: "value",
  categoryField: "name",
  childDataField: "children",
  idField: "name",
  linkWithField: "linkWith",
  manyBodyStrength: -10,
  centerStrength: 0.8
}));

series.get("colors").setAll({
  step: 2
});


series.links.template.set("strength", 0.5);

series.labels.template.set("minScale", 0);

series.data.setAll([data]);

series.set("selectedDataItem", series.dataItems[0]);


// Make stuff animate on load
series.appear(1000, 100);