// ==UserScript==
// @name           BakaMemrise Leaderboard
// @description    Memrise: Restore the leaderboard on home page.
// @match          http://www.memrise.com/home/
// @version        0.1
// @namespace      https://github.com/Lemaxho/BakaMemrise
// @grant          none
// @updateURL https://raw.githubusercontent.com/Lemaxho/BakaMemrise/master/BakaMemrise.js
// @downloadURL https://raw.githubusercontent.com/Lemaxho/BakaMemrise/master/BakaMemrise.js
// ==/UserScript==

var container = document.getElementsByClassName("tabbed-main page");
if (container && container.length > 0) {
	// Add an empty dyv as separator
	var spaceDiv = document.createElement("DIV");
	spaceDiv.style.height = "10px";
	container[0].appendChild(spaceDiv);
	
	var inHt = '<h1> <span class="icon-badge icon-badge-green"> <span class="ico ico-trophy ico-m"></span> </span> Leaderboard </h1> <div class="leaderboard leaderboard-mini" data-role="leaderboard" data-how-many="10" data-url="/ajax/leaderboard/mempals/" data-row-template="mini">  <div class="head">  <ul class="btn-group"> <li id="weekly-leaderboard" class="btn btn-small" data-period="week"> Week </li>  <li class="btn btn-small" data-period="month"> Month </li>  <li class="btn btn-small" data-period="alltime"> All-time </li> </ul>  </div> <div class="rows">  <table class="stats"> <tbody></tbody> </table> </div> <div class="foot"> <button class="btn btn-large" data-role="load-more" data-val="50"> <span class="ico ico-arr-down ico-m ico-grey"></span> More </button></div></div>'
	container[0].innerHTML += inHt

}
