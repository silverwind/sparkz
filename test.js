"use strict";

const sparkz = require(".");
const assert = require("assert");
const snapshot = require("snap-shot-it");
const {JSDOM} = require("jsdom");
const {describe, it} = require("mocha");
const {beforeEach} = global;

function createSVG(width, height, strokeWidth) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);
  svg.setAttribute("stroke-width", strokeWidth);
  return svg;
}

describe("sparkz", () => {
  beforeEach(() => {
    global.window = (new JSDOM("")).window;
    global.document = global.window.document;
  });

  it("renders svg with array of numbers and default options", () => {
    const svg = createSVG(100, 30, 2);
    sparkz(svg, [0, 5, 2, 4, 6]);
    snapshot(svg.outerHTML);
  });

  it("renders svg for empty values array", () => {
    const svg = createSVG(100, 30, 2);
    sparkz(svg, []);
    snapshot(svg.outerHTML);
  });

  it("renders svg with entirely 0-based values", () => {
    const svg = createSVG(100, 30, 2);
    sparkz(svg, [0, 0, 0, 0, 0]);
    snapshot(svg.outerHTML);
  });

  it("renders svg with fill", () => {
    const svg = createSVG(100, 30, 2);
    sparkz(svg, [0, 0, 0, 0, 0], {fill: "red"});
    snapshot(svg.outerHTML);
  });

  it("renders svg for 1-item array", () => {
    const svg = createSVG(100, 30, 2);
    sparkz(svg, [5]);
    snapshot(svg.outerHTML);
  });

  it("renders interactive svg", () => {
    const svg = createSVG(100, 30, 2);
    sparkz(svg, [0, 5, 10], {interactive: true});
    snapshot(svg.outerHTML);
  });

  it("renders svg with custom cursor", () => {
    const svg = createSVG(100, 30, 2);
    sparkz(svg, [5, 10], {interactive: true, cursorWidth: 3});

    const event = new window.MouseEvent("mousemove", {
      bubbles: true,
      cancelable: true
    });

    event.offsetX = 49;
    svg.querySelector(".sparkz--interaction-layer").dispatchEvent(event);

    snapshot(svg.outerHTML);
  });

  it("renders svg with custom spot", () => {
    const svg = createSVG(100, 30, 2);
    sparkz(svg, [5, 10], {interactive: true, spotRadius: 3});

    const event = new window.MouseEvent("mousemove", {
      bubbles: true,
      cancelable: true
    });

    event.offsetX = 49;
    svg.querySelector(".sparkz--interaction-layer").dispatchEvent(event);

    snapshot(svg.outerHTML);
  });

  it("updates interactive svg when mouse moves", () => {
    const svg = createSVG(100, 30, 2);
    sparkz(svg, [0, 5, 10], {interactive: true});

    const event = new window.MouseEvent("mousemove", {
      bubbles: true,
      cancelable: true
    });

    event.offsetX = 100;
    svg.querySelector(".sparkz--interaction-layer").dispatchEvent(event);

    snapshot(svg.outerHTML);
  });

  it("renders interactive svg based on the nearest edge", () => {
    const svg = createSVG(100, 30, 2);
    sparkz(svg, [5, 10], {interactive: true});

    const event = new window.MouseEvent("mousemove", {
      bubbles: true,
      cancelable: true
    });

    event.offsetX = 40;
    svg.querySelector(".sparkz--interaction-layer").dispatchEvent(event);
    snapshot(svg.outerHTML);

    event.offsetX = 80;
    svg.querySelector(".sparkz--interaction-layer").dispatchEvent(event);
    snapshot(svg.outerHTML);
  });

  it("triggers onmousemove callback", () => {
    let call;
    const svg = createSVG(100, 30, 2);
    sparkz(svg, [5, 10], {onmousemove: (...args) => call = args});

    const event = new window.MouseEvent("mousemove", {
      bubbles: true,
      cancelable: true
    });

    event.offsetX = 25;
    svg.querySelector(".sparkz--interaction-layer").dispatchEvent(event);

    assert.deepEqual(call[0], event);
    assert.deepEqual(call[1].value, 5);
    assert.deepEqual(call[1].index, 0);
    assert.deepEqual(call[1].x, 4);
    assert.deepEqual(call[1].y, 15);
  });

  it("triggers onmouseout callback", () => {
    let call;
    const svg = createSVG(100, 30, 2);
    sparkz(svg, [5, 10], {interactive: true, onmouseout: (...args) => call = args});

    const event = new window.MouseEvent("mouseout", {
      bubbles: true,
      cancelable: true
    });

    svg.querySelector(".sparkz--interaction-layer").dispatchEvent(event);

    assert.deepEqual(call[0], event);
  });
});
