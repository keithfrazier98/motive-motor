
function HandleThemeChange(theme_id, setTheme) {
    
  return new Promise((res) => {
    switch (theme_id) {
      case "bw":
        setTheme({
          bkgd: "",
          fontColor: "",
          secBkgd: "",
          btnColor: "secondary",
          headerBkgd: "",
          navBkgd: "",
          container: "",
        });
        break;
      case "sunset":
        setTheme({
          bkgd: "sunsetMainBkgd",
          fontColor: "sunsetFont",
          secBkgd: "sunsetSecBkgd",
          btnColor: "sunsetButton",
          headerBkgd: "sunsetHeader",
          navBkgd: "sunsetNav",
          container: "sunsetContainer",
        });
        break;
      case "forest":
        setTheme({
          bkgd: "forestMainBkgd",
          fontColor: "forestFont",
          secBkgd: "forestSecBkgd",
          btnColor: "forestButton",
          headerBkgd: "forestHeader",
          navBkgd: "forestNav",
          container: "forestContainer",
        });
        break;
      default:
          console.error("Unhandled theme change occured")
        break;
    }
  });
}


export default HandleThemeChange