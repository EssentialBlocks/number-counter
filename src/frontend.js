"use strict";
// converted to es5 for browser support reasons

// document.addEventListener("mouseup", (e) => {
// 	const isSelectedElem = document.querySelector(".is-selected");
// 	const wrapperAdvanceButton = document.querySelector(
// 		".components-panel__body.block-editor-block-inspector__advanced"
// 	);
// 	const advanceButton = wrapperAdvanceButton.querySelector(
// 		".components-panel__body.block-editor-block-inspector__advanced button.components-button.components-panel__body-toggle"
// 	);
// 	const isExpanded = advanceButton
// 		? advanceButton.getAttribute("aria-expanded")
// 		: false;
// 	console.log("----document click fired ", e, e.target, {
// 		isSelectedElem,
// 		wrapperAdvanceButton,
// 		advanceButton,
// 		isExpanded,
// 	});
// 	if (isSelectedElem && e.target !== advanceButton && isExpanded == "false") {
// 		advanceButton.click();
// 		const theInputField = wrapperAdvanceButton.querySelectorAll(
// 			".components-text-control__input"
// 		)[1];

// 		const valueInput = theInputField
// 			? (theInputField.value += "eb-cool-class-name")
// 			: false;

// 		console.log("here's the input field", { theInputField, valueInput });
// 	}
// });

window.addEventListener("DOMContentLoaded", function () {
	var counters = document.querySelectorAll(".eb-counter-wrapper  .eb-counter");
	if (!counters) return;

	// function 'debounce' is used here for better performance when scroll event fires
	function debounce(func) {
		var wait =
			arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
		var immediate =
			arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
		var timeout;
		return function () {
			var context = this,
				args = arguments;

			function later() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			}

			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	}

	// function 'textInsideFrontEnd' is for setting the innertext depending on whether separator should be shown and which separator should be shown
	function textInsideFrontEnd(value, isShowSeparator, separator) {
		return isShowSeparator === "true"
			? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator)
			: value.toString();
	}

	counters.forEach(function (counter) {
		var shoundAnimate = false;
		var target = +counter.getAttribute("data-target");
		var duration = +counter.getAttribute("data-duration");
		var startValue = +counter.getAttribute("data-startValue");
		var isShowSeparator = counter.getAttribute("data-isShowSeparator");
		var separator = counter.getAttribute("data-separator");
		var cWrapper = counter.closest(".eb-counter-wrapper");
		// var shadowColor = cWrapper.getAttribute("data-shadowColor");
		// var hOffset = cWrapper.getAttribute("data-hOffset");
		// var vOffset = cWrapper.getAttribute("data-vOffset");
		// var blur = cWrapper.getAttribute("data-blur");
		// var spread = cWrapper.getAttribute("data-spread");
		// var inset = cWrapper.getAttribute("data-inset");
		// var hoverShadowColor = cWrapper.getAttribute("data-hoverShadowColor");
		// var hoverHOffset = cWrapper.getAttribute("data-hoverHOffset");
		// var hoverVOffset = cWrapper.getAttribute("data-hoverVOffset");
		// var hoverBlur = cWrapper.getAttribute("data-hoverBlur");
		// var hoverSpread = cWrapper.getAttribute("data-hoverSpread");
		// var hoverInset = cWrapper.getAttribute("data-hoverInset");
		// cWrapper.style.boxShadow = ""
		// 	.concat(shadowColor, " ")
		// 	.concat(hOffset, "px ")
		// 	.concat(vOffset, "px ")
		// 	.concat(blur, "px ")
		// 	.concat(spread, "px ")
		// 	.concat(inset);
		// cWrapper.addEventListener("mouseenter", function (e) {
		// 	return (e.target.style.boxShadow = ""
		// 		.concat(hoverShadowColor, " ")
		// 		.concat(hoverHOffset, "px ")
		// 		.concat(hoverVOffset, "px ")
		// 		.concat(hoverBlur, "px ")
		// 		.concat(hoverSpread, "px ")
		// 		.concat(hoverInset));
		// });
		// cWrapper.addEventListener("mouseleave", function (e) {
		// 	return (e.target.style.boxShadow = ""
		// 		.concat(shadowColor, " ")
		// 		.concat(hOffset, "px ")
		// 		.concat(vOffset, "px ")
		// 		.concat(blur, "px ")
		// 		.concat(spread, "px ")
		// 		.concat(inset));
		// });
		var x = startValue < target ? startValue : 0;
		var increaseBy = ((target - x) / duration) * 53;

		var boundingClientRect = counter.getBoundingClientRect();
		var halfHeight = boundingClientRect.height / 2;
		var top = boundingClientRect.top;

		function updateCount() {
			x += increaseBy;
			counter.innerText = textInsideFrontEnd(
				Math.floor(x),
				isShowSeparator,
				separator
			);

			if (x < target) {
				setTimeout(function () {
					updateCount();
				}, 53);
			} else {
				counter.innerText = textInsideFrontEnd(
					target,
					isShowSeparator,
					separator
				);
			}
		}

		if (!shoundAnimate && top + halfHeight < innerHeight) {
			shoundAnimate = true;
			updateCount();
		}

		function handleAnimationOnScroll() {
			boundingClientRect = counter.getBoundingClientRect();
			top = boundingClientRect.top;

			if (!shoundAnimate && top + halfHeight < innerHeight) {
				shoundAnimate = true;
				updateCount();
			}
		}

		window.addEventListener("scroll", debounce(handleAnimationOnScroll));
	});

	//
	//
	// codes to mimmik tab/mobile css in editor panel of gutenberg
	//
	//

	var editorMain = document.getElementById("editor");

	if (!editorMain) return;

	console.log('document.getElementById("editor") aaache');

	function handleSidebarClick(e) {
		var TargetClassName = e.target.className;
		if (!/eb\-res\-btn/i.test(TargetClassName)) return;
		console.log(
			"----cssStrings from frontend.js,  eb-res-btn click kora hoiche"
		);
		var allCounterWrapper = document.querySelectorAll(".eb-counter-wrapper");
		allCounterWrapper.forEach(function (item) {
			var styleTagForItem = item.previousElementSibling;
			var cssStrings = styleTagForItem.textContent;
			var minCss = cssStrings.replace(/\s+/g, " ");
			var cssMimmikPlaceRegex = /(?<=edit_mimmikcss_start\s\*\/).+(?=\/\*\sedit_mimmikcss_end)/i;
			var newCssStrings = " ";

			if (/eb\-res\-btn\-tab/i.test(TargetClassName)) {
				var tabCssMacth = minCss.match(
					/(?<=tab_css_start\s\*\/).+(?=\/\*\stab_css_end)/i
				);
				var tabCssStrings = (tabCssMacth || [" "])[0];
				console.log({
					tabCssStrings: tabCssStrings,
				});
				newCssStrings = minCss.replace(cssMimmikPlaceRegex, tabCssStrings);
			} else if (/eb\-res\-btn\-mobile/i.test(TargetClassName)) {
				var mobCssMacth = minCss.match(
					/(?<=mobile_css_start\s\*\/).+(?=\/\*\smobile_css_end)/i
				);
				var mobCssStrings = (mobCssMacth || [" "])[0];
				console.log({
					mobCssStrings: mobCssStrings,
				});
				newCssStrings = minCss.replace(cssMimmikPlaceRegex, mobCssStrings);
			} else {
				newCssStrings = minCss.replace(cssMimmikPlaceRegex, " ");
			}

			console.log({
				cssStrings: cssStrings,
				minCss: minCss,
				newCssStrings: newCssStrings,
			});
			styleTagForItem.textContent = newCssStrings;
		});
	}

	editorMain.addEventListener("click", handleSidebarClick);
});
