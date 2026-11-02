---
title: "Dark mode, from the same tokens"
description: "How light and dark share one set of names, and why the ink card flips."
pubDate: 2026-10-05
tags: ["theme", "design"]
---

Dark mode is not a second design. Every colour in Ink is a token, and the dark theme only redefines the tokens.

## One name, two values

`--ink` is near-black in light mode and near-white in dark mode. Because buttons, text and the featured card all use `--ink`, they flip together. The featured "ink" card turns light in dark mode, so it still stands out.

## The switch

The toggle in the header saves the choice in `localStorage`. On a first visit the site follows the operating system setting, and a small inline script sets the class before the page paints, so there is no flash.
