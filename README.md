## Sitemap &hairsp; <a href="https://rapidjs.org" target="_blank"><img src="https://rapidjs.org/assets/img/plugin-badge.svg" alt="rJS Plugin"></a>

Simple XML sitemap based on HTML source structure.

### Install

``` console
npm i rapidjs-org/plugin--sitemap
```

<sub><code>__rjs.plugin.json</code></sub>
``` json
{
  "package": "@plugins.rapidjs.org/sitemap"
}
```

### Use

Based on the sourced HTML file structure, a `/sitemap.xml` is generated. Index files (`index.html`) are assigned a priority of `1.0`, other files `0.8`. Files nested 5 or more levels deep are discounted by `0.2`.

```
└─ /src …
   └─ /html
      ├─ __rjs.plugin.json
      ├─ index.html
      ├─ about.html
      └─ /services
         ├─ index.html
         ├─ design.html
         └─ development.html
```

<sub>→ <code>/sitemap.xml</code></sub> 

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.org/index.html</loc>
    <lastmod>2024-11-19T13:25:52.883Z</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://example.org/about.html</loc>
    <lastmod>2024-11-19T13:25:52.883Z</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://example.org/services/index.html</loc>
    <lastmod>2024-11-19T13:25:52.883Z</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://example.org/services/design.html</loc>
    <lastmod>2024-11-19T13:25:52.883Z</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://example.org/services/development.html</loc>
    <lastmod>2024-11-19T13:25:52.883Z</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>
```

### Configure

The generated locations in the sitemap are relative, unless a host is configured (inclusing optional protocol prefix).

<sub><code>__rjs.plugin.json</code></sub>
``` json
{
  "package": "@plugins.rapidjs.org/scss",
  "config": {
    "host": "example.org"
  }
}
```

> It is strongly advised to state the respective host, as most crawlers do not support relativ URIs with sitemaps.

##

<sub>&copy; Thassilo Martin Schiepanski</sub>