# Getting "Pavanity Global" on Google

This project includes technical SEO so Google can discover and index your site. To get your site to show up when people search **"Pavanity Global"** (and to aim for the first result), do the following.

## What’s already in the project

- **Title & meta description** – Brand and description in `index.html`
- **Structured data (JSON-LD)** – Organization and WebSite schema for Google
- **robots.txt** – Allows crawling and points to your sitemap
- **sitemap.xml** – List of main pages and product categories for Google to crawl
- **Open Graph & Twitter meta** – Better previews when the site is shared

## Steps to get indexed and improve ranking

### 1. Use your real domain everywhere

When you have your live domain (e.g. `https://www.pavanityglobal.com` or `https://pavanityglobal.com`):

- In **index.html**: replace `https://www.pavanityglobal.com` in:
  - `<link rel="canonical" ...>`
  - Both JSON-LD scripts (Organization and WebSite `url` and `@id`)
- In **public/robots.txt**: set `Sitemap:` to  
  `https://YOUR-DOMAIN.com/sitemap.xml`
- In **public/sitemap.xml**: replace `https://www.pavanityglobal.com` with your full domain in every `<loc>` URL.

### 2. Submit the site to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add a property with your **live** site URL (e.g. `https://www.pavanityglobal.com`).
3. Verify ownership (HTML file upload, DNS record, or meta tag – use the option that fits your hosting).
4. After verification, open **Sitemaps** and submit:  
   `https://www.pavanityglobal.com/sitemap.xml`  
   (again, use your real domain).
5. Use **URL Inspection** and “Request indexing” for your homepage and a few important pages (e.g. `/`, `/products`, `/contact`).

This tells Google your site exists and helps it crawl your pages faster.

### 3. Let Google (and time) do the rest

- It can take from a few days to a few weeks for new or updated sites to show in search.
- For the exact query **“Pavanity Global”**, your site has a strong chance to appear at or near the top once it’s indexed, because you’re the official brand.
- Keep the site live, with a clear title and description, and avoid blocking Google in `robots.txt` or with `noindex` on the main pages.

### 4. Optional: speed up indexing

- Share your homepage and key pages on LinkedIn, Twitter, or other channels – links and traffic can help discovery.
- If you use other Google tools (e.g. Google Business Profile, Analytics), link them to the same domain for consistency.

---

**Summary:** Update all URLs to your live domain, verify the site in Google Search Console, submit `sitemap.xml`, and request indexing for the main URLs. After that, Google will crawl your site and “Pavanity Global” can start appearing in search results.
