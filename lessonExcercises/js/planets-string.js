(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;
    console.log(planetsString);

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    console.log(planetsString);
    // console.log(planetsArray); // Undefined
    // Next line inits our variable of planetArray
    planetsArray = planetsString.split("|"); // String to Array
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var string;
    console.log(planetsString.split("|").join("<br>"));

    planetsArray.push("</ul>");
    planetsArray.unshift("<ul>");
    var planetList = planetsArray.join("<li>");
    console.log(planetList);

})();