const description = 'Description';
const title = 'Title';

// Metadata.
// Each object contains attributes of meta tag.

const seo = [
  // Robots meta tag, see https://developers.google.com/search/docs/advanced/robots/robots_meta_tag
  { name: 'robots', content: 'index, follow' }, // enable crawling

  // Disable hyperlink for tel. numbers in Safari and iOS
  { name: 'format-detection', content: 'telephone=no' },

  // basic SEO
  { name: 'description', content: description },
  { name: 'keywords', content: 'keywords' },
  { name: 'author', content: 'author' },

  // Open Graph, see https://ogp.me
  { property: 'og:type', content: 'website' },
  { property: 'og:locale', content: 'en_US' },
  { property: 'og:title', content: title },
  { property: 'og:description', content: description },

  // Twitter Cards, see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
  { property: 'twitter:title', content: title },
  { property: 'twitter:description', content: description }
];

const noSeo = [
  { name: 'robots', content: 'noindex, nofollow' } // disable crawling
];

const fn = isPortfolio => {
  if (isPortfolio) return noSeo;
  return seo;
};

// const meta
module.exports = fn;
