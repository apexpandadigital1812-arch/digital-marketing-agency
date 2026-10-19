# Digital Marketing Agency Website

A responsive static website starter for a digital marketing agency. Built with HTML, CSS and vanilla JavaScript for free hosting on GitHub Pages.

## Included
- Home, About, Services, Contact and Privacy pages
- Four individual service pages: SEO, Social Media Management, PPC and Meta Ads
- Blog listing, two sample articles and a manual article template
- Responsive navigation and client-side blog search
- SEO metadata, canonical URL placeholders, sitemap and robots.txt
- Contact form that prepares an email (no server-side form storage)
- Google Search Console and Analytics setup checklist

## Before publishing
1. Open `assets/js/main.js` and replace `brandName`, `email`, and optional WhatsApp number.
2. Search the entire project for `YOUR-USERNAME` and `YOUR-REPOSITORY`. Replace both with your GitHub username and repository name. For example, if the URL is `https://sathwik58259.github.io/digital-marketing-agency/`, use `sathwik58259` and `digital-marketing-agency`.
3. Review About, Privacy Policy and blog copy. Replace placeholders and remove any statements that do not accurately describe your business.
4. Update `sitemap.xml` with the correct final URLs.
5. Test links and contact email before launch.

## Local preview
Open `index.html` in a browser. For a closer hosted preview, use VS Code with the Live Server extension, or run `python -m http.server 8000` from the project folder and visit `http://localhost:8000`.

## Publish on GitHub Pages
1. Create a **public** repository on GitHub.
2. Upload the contents of this folder (not the ZIP file itself) to the repository root.
3. Open repository **Settings → Pages**.
4. Under Build and deployment, choose **Deploy from a branch**.
5. Select branch `main`, folder `/(root)`, then Save.
6. Wait for the Pages build and open the URL shown in Settings → Pages.
7. If you use a project repository, your site URL will usually be `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`.

## Google Search Console
1. Open Google Search Console and add a URL-prefix property matching the exact live HTTPS URL.
2. Use the HTML tag verification method if available: copy the meta verification tag into the `<head>` of `index.html`, then commit and push.
3. After verification, submit the sitemap URL shown on the live website, usually `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/sitemap.xml`.
4. Use URL Inspection to request indexing of important pages and check coverage/indexing reports later. Indexing is not guaranteed.

## Google Analytics 4 (optional)
1. Create a GA4 property and a web data stream for the live URL.
2. If you choose to use Analytics, add the Google-provided measurement snippet to pages (or use a shared script carefully), and update the privacy notice and any consent setup required for your audience and jurisdiction.
3. Verify events and real-time data. Do not add tracking until you have reviewed privacy and consent requirements.

## Contact form limitation
GitHub Pages does not run a server. This form opens the visitor's email app via `mailto:` and requires the visitor to send the email. For direct submissions, integrate a form provider or separate backend and update the privacy policy.

## Blog publishing workflow
1. Copy `blog/article-template.html` and rename it with a short, descriptive slug.
2. Update title, description, canonical URL, headings, author/date and article content.
3. Add a matching article card to `blog/index.html`.
4. Add the final canonical URL to `sitemap.xml`.
5. Check links, preview, then commit and push changes.
