# emojicon

[![Deploy Cloudflare Worker](https://github.com/mikesprague/emojicon/actions/workflows/main.yml/badge.svg)](https://github.com/mikesprague/emojicon/actions/workflows/main.yml)

## About

Cloudflare Worker that takes a standard unicode emoji as a path parameter and returns it as an SVG for use in favicon tags or CSS cursors

NOTE: :100:% borrowed from <https://fav.farm/>, all credit goes to the author for the concept

## Usage

A single Unicode emoji should be passed as a path parameter to the Worker URL

### Favicons

Use as the `href` attribute

```html
<link rel="icon" class="favicon" href="https://emojicon.m5ls5e.workers.dev/😻">
```

```html
<link rel="icon" class="favicon" href="https://emojicon.m5ls5e.workers.dev/🍔">
```

```html
<link rel="icon" class="favicon" href="https://emojicon.m5ls5e.workers.dev/🐦">
```

```html
<link rel="icon" class="favicon" href="https://emojicon.m5ls5e.workers.dev/👾">
```

```html
<link rel="icon" class="favicon" href="https://emojicon.m5ls5e.workers.dev/🚀">
```

### Custom Cursors (via CSS)

Use as a `url()` value of the `cursor` property

```css
body {
  cursor: url('https://emojicon.m5ls5e.workers.dev/😝') 15 0, auto; 
}
```

```css
.class-name {
  cursor: url('https://emojicon.m5ls5e.workers.dev/🙅') 15 0, auto; 
}
```

## Deploy Your Own

Use the following button to get started deploying your own version to Cloudflare

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/mikesprague/emojicon)
