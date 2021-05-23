const colours = [
  "#DFFF00",
  "#FFBF00",
  "#FF7F50",
  "#DE3163",
  "#9FE2BF",
  "#40E0D0",
  "#6495ED",
  "#CCCCFF",
];

const ProductHighlights = ({ productHighlights }) => {
  function adjustColor(color, percent) {
    var R = parseInt(color.substring(1, 3), 16);
    var G = parseInt(color.substring(3, 5), 16);
    var B = parseInt(color.substring(5, 7), 16);

    R = parseInt((R * (100 + percent)) / 100);
    G = parseInt((G * (100 + percent)) / 100);
    B = parseInt((B * (100 + percent)) / 100);

    R = R < 255 ? R : 255;
    G = G < 255 ? G : 255;
    B = B < 255 ? B : 255;

    var RR =
      R.toString(16).length === 1 ? "0" + R.toString(16) : R.toString(16);
    var GG =
      G.toString(16).length === 1 ? "0" + G.toString(16) : G.toString(16);
    var BB =
      B.toString(16).length === 1 ? "0" + B.toString(16) : B.toString(16);

    return "#" + RR + GG + BB;
  }

  return (
    <div className="product-highlights-container">
      {productHighlights.map((highlight, index) => {
        const randColour = colours[Math.floor(Math.random() * colours.length)];
        return (
          <div
            className="product-highlight"
            style={{
              backgroundColor: adjustColor(randColour, -25),
              borderColor: adjustColor(randColour, -45),
            }}
            key={index}
          >
            {highlight}
          </div>
        );
      })}
    </div>
  );
};
export default ProductHighlights;
