const date = new Date().toISOString();

export default async function(rJS, filesystem, config) {
    const sitemap = [];
        filesystem
    .traverse((file) => {
        const host = (config.host ?? "");
        sitemap.push({
            loc: `${
                !/^http(s)?:\/\//.test((host ?? ""))
                ? `https://${host}`
                : host
            }/${file.relativePath}`,
            lastmod: date,
            priority: (
                ((file.name === "index") ? 1.0 : 0.8)
                - (((file.relativePath.match(/\//g) ?? []).length >= 5) ? 0.2 : 0)
            ).toFixed(1)
        });
    }, true);

    return new rJS.File(
        "/sitemap.xml",
        [
            "<?xml version=\"1.0\" encoding=\"UTF-8\"?>",
            "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">",
            ...sitemap
                .map((page) => [
                    "<url>",
                    ...Object.entries(page)
                        .map((entry) => `<${entry[0]}>${entry[1]}</${entry[0]}>`),
                    "</url>"
                ].join("\n")),
            "</urlset>"
        ].join("\n")
    );
}