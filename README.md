<div align="center">

[![][logo-url]][docs-url]  

**Tailwind CSS Components**  
Adds component classes like `btn`, `card` and more to Tailwind CSS

[ [See all components][docs-url] ]
  
[![][tweet]][tweet-url]  

</div>

[![][banner-url]][docs-url]  

# mintflowui  
[![][build]][build-url] [![][npm]][npm-url] [![][number-of-components]][docs-url] [![][install-size]][install-size-url]  
[![][dl]][npm-url] [![][commit]][gh-url] [![][license]][license-url]   


- 👉 [ [See all components][docs-url] ]
- 📘 Documents: [mintflowui.com][docs-url]
- 🎲 Try it online: [Tailwind Play][tw-play-url] | [Codepen][codepen-url]
- 📦 Source: [GitHub][gh-url] | [NPM][npm-url] | [Unpkg][unpkg-url] | [JSdeliver][jsdeliver-url]

---

## 🌼 Features   
- **Tailwind CSS plugin**  
  mintflowui is a Tailwind CSS plugin. Install it, add it to your `tailwind.config.js` file.
- **Component classes**  
  Adds component classes to Tailwind. Classes like `btn`, `card`,… So you will end up with a cleaner HTML.
- **Semantic color names**  
  Adds color names like `primary`, `secondary`, `accent`,….
- **Customizable**  
  You can customize the design of components with Tailwind utility classes and CSS variables.
- **Themeable**  
  Add multiple themes and customize colors. You can even set a theme for a specific section of your page.
- **RTL supported**  
  Enable `rtl` config for right to left layouts.
- **Pure CSS**  
  No script file, no dependencies. 2KB gzip!

---

## 👩‍💻 Install now!  

```bash
npm i mintflowui --save
```

or 

```bash
yarn add mintflowui
```

Then add mintflowui to your `tailwind.config.js`  
[ [Read more][docs-url-install] ]
```js
module.exports = {

  plugins: [
    require('mintflowui'),
  ],

}
```


<details>
<summary>
  Or use a CDN
</summary>


>*Loading CSS files from CDN is not recommended for production. It's better to install Tailwind and mintflowui as Nodejs dependencies so you can config/customize everything, and purge unused styles.*  

  
```html
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1/dist/tailwind.min.css" rel="stylesheet" type="text/css" />
<link href="https://cdn.jsdelivr.net/npm/mintflowui@0.28/dist/full.css" rel="stylesheet" type="text/css" />
```
[ [Browse other versions][docs-url-install] ]

</details>

---
## 🎉 Use  
Use component classes like `btn`, `card`, etc… to build your UI.  
```html
<a class="btn">Hello!</a>
```
```html
<div class="shadow card">
  <div class="card-body">
    <h2 class="card-title">Card Title</h2> 
    <p>Card text</p>
  </div>
</div> 
```

👉 [See all components][docs-url]  
🎲 [Try it online][tw-play-url]  

---

## 📘 Documents + Examples  
Read the documents for more info  
[ [mintflowui.com][docs-url] ↗︎ ]

<details>
<summary>
  List of components
</summary>

- [x] Accordion
- [x] Alert
- [x] Artboard
- [ ] App bar
- [x] Avatar
- [ ] Avatar group
- [x] Badge
- [ ] Banner
- [x] Breadcrumb
- [x] Button
- [x] Button group
- [ ] Calendar
- [x] Carousel
- [x] Card
- [ ] Chat bubble
- [ ] Comment
- [x] Countdown
- [ ] Cover
- [x] Divider
- [x] Drawer
- [ ] Empty placeholder
- [ ] Footer
- [ ] Form
  - [x] Select
  - [x] Text input
  - [x] Text area
  - [x] Checkbox
  - [x] Radio
  - [ ] Range slider
  - [ ] Rating
  - [x] Toggle
  - [ ] Upload
- [x] Hero
- [x] Link
- [ ] Loading
- [x] Menu
- [ ] Mockup
  - [ ] Browser
  - [x] Code
  - [x] Phone
  - [x] Window
- [x] Navbar
- [x] Mask
- [x] Modal
- [x] Pagination
- [x] Progress
- [ ] Statistic
- [ ] Steps
- [ ] Tag
- [ ] Table
- [x] Tabs
- [ ] Timeline
- [ ] Toast
- [ ] Tooltip
- [ ] Treeview

</details>

---
  
<div align="center">
  
  
༼ つ ◕_◕ ༽つ  Please share  
  
[![][tweet]][tweet-url]  

</div>



[install-size]: https://badgen.net/bundlephobia/minzip/mintflowui?label=install%20size&color=purple
[build]: https://badgen.net/github/checks/saadeghi/mintflowui?label=build
[npm]: https://badgen.net/npm/v/mintflowui?label=version&color=purple
[dl]: https://badgen.net/npm/dt/mintflowui?icon=npm&color=purple
[commit]: https://badgen.net/github/last-commit/saadeghi/mintflowui?icon=github&color=purple
[license]: https://badgen.net/github/license/saadeghi/mintflowui?color=purple
[tweet]: https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fsaadeghi%2Fmintflowui

[install-size-url]: https://bundlephobia.com/result?p=mintflowui
[license-url]: https://github.com/saadeghi/mintflowui/blob/master/LICENSE
[npm-url]: https://www.npmjs.com/package/mintflowui
[gh-url]: https://github.com/saadeghi/mintflowui
[tw-play-url]: https://play.tailwindcss.com/5du2H2Kyvq
[codepen-url]: https://codepen.io/saadeghi/pen/gOwWKvv
[unpkg-url]: https://unpkg.com/browse/mintflowui/
[jsdeliver-url]: https://www.jsdelivr.com/package/npm/mintflowui
[build-url]: https://github.com/saadeghi/mintflowui/actions
[tweet-url]: https://twitter.com/intent/tweet?text=mintflowui%20%0D%0AUI%20Components%20for%20Tailwind%20CSS%20%0D%0Ahttps://github.com/saadeghi/mintflowui
[number-of-components]: https://badgen.net/badge/components%20added/31/purple

[docs-url-install]: https://mintflowui.com/docs/install
[docs-url]: https://mintflowui.com/
[logo-url]: https://raw.githubusercontent.com/saadeghi/files/main/mintflowui/logo-3.svg
[banner-url]: https://raw.githubusercontent.com/saadeghi/files/main/mintflowui/card-3.png

