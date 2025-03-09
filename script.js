"use strict";

// alert("This Website is not mobile/tablet/Large Screen Ready. Please use it on Laptop/Dekstop for best experience !");

// Function to redirect to selected chapter
function redirect() {
	const chapterSelect = document.getElementById("chapter");
	const selectedChapter = chapterSelect.value;

	if (selectedChapter !== "Select Chapter") {
		window.location.href = `${selectedChapter}/${
			selectedChapter.split("-")[1]
		}.html`;
	}
}

// Function to show "Coming Soon" alert
function featureComingSoon() {
	alert("This feature is coming soon!");
}

// Chapter navigation data
const chapters = [
	{ id: "ch1-basic", title: "Basic" },
	{ id: "ch2-comment", title: "Comments" },
	{ id: "ch3-headings", title: "Headings" },
	{ id: "ch4-paragraph", title: "Paragraph" },
	{ id: "ch5-formatting", title: "Formatting" },
	{ id: "ch6-quotation", title: "Quotation And Citation" },
	{ id: "ch7-links", title: "Links" },
	{ id: "ch8-emaillinks", title: "Email Links" },
	{ id: "ch9-images", title: "Images" },
	{ id: "ch10-marquee", title: "Marquee" },
	{ id: "ch11-lists", title: "Lists" },
	{ id: "ch12-tables", title: "Tables" },
	{ id: "ch13-divspan", title: "Div & Span" },
	{ id: "ch14-iframe", title: "Iframe" },
	{ id: "ch15-audio", title: "Audio" },
	{ id: "ch16-video", title: "Video" },
	{ id: "ch17-embedpdf", title: "Embed PDF" },
	{ id: "ch18-embedyoutubevideo", title: "Embed YouTube Video" },
	{ id: "ch19-embedgooglemaps", title: "Embed Google Maps" },
	{ id: "ch20-entities", title: "HTML Entities" },
	{ id: "ch21-symbols", title: "HTML Symbols" },
	{ id: "ch22-emojis", title: "Emojis" },
	{ id: "ch23-semanticelements", title: "Semantic Elements" },
	{ id: "ch24-imagemaps", title: "Image Maps" },
	{ id: "ch25-forms", title: "Forms" },
	{ id: "ch26-input", title: "Input Elements" },
	{ id: "ch27-form", title: "Form Elements" },
	{ id: "ch28-textarea", title: "Textarea" },
	{ id: "ch29-selectoption", title: "Select & Option" },
	{ id: "ch30-radioandcheckbox", title: "Radio & Checkbox" },
	{ id: "ch31-datalist", title: "Datalist" },
	{ id: "ch32-labelsfieldsetandlegends", title: "Labels, Fieldset & Legends" },
	{ id: "ch33-seo", title: "SEO" },
	{ id: "ch34-favicon", title: "Favicon" },
	{ id: "ch35-styletag", title: "Style Tag" },
	{ id: "ch36-scriptandnosripttag", title: "Script & Noscript Tag" },
	{ id: "ch37-opengraphtag", title: "Open Graph Tags" },
	{ id: "ch38-twittercardtag", title: "Twitter Card Tags" },
	{ id: "ch39-viewportmetatag", title: "Viewport Meta Tag" },
	{ id: "ch40-righttoleftwebsite", title: "Right to Left Website" },
	{ id: "ch41-w3cvalidation", title: "W3C Validation" },
];

// Function to get previous chapter
function getPreviousChapter(currentChapter) {
	const index = chapters.findIndex((ch) => ch.id === currentChapter);
	return index > 0 ? chapters[index - 1].id : null;
}

// Function to get next chapter
function getNextChapter(currentChapter) {
	const index = chapters.findIndex((ch) => ch.id === currentChapter);
	return index < chapters.length - 1 ? chapters[index + 1].id : null;
}

// Function to update navigation links
function updateNavigation() {
	const path = window.location.pathname;
	const currentChapter = path.split("/")[1];

	const prevChapter = getPreviousChapter(currentChapter);
	const nextChapter = getNextChapter(currentChapter);

	const navContainer = document.querySelector(".nav-container");
	if (navContainer) {
		const prevButton = navContainer.querySelector(".prev-ch");
		const nextButton = navContainer.querySelector(".next-ch");

		if (prevButton && prevChapter) {
			prevButton.parentElement.href = `../${prevChapter}/${
				prevChapter.split("-")[1]
			}.html`;
		}

		if (nextButton && nextChapter) {
			nextButton.parentElement.href = `../${nextChapter}/${
				nextChapter.split("-")[1]
			}.html`;
		}
	}
}

// Call updateNavigation when the page loads
document.addEventListener("DOMContentLoaded", updateNavigation);
