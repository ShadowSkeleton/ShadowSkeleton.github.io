# Translation is parked

The public page currently stays in English. The language button and announcement
are not rendered, and saved language preferences and cross-tab language events
are ignored. Previous preferences are preserved for future use.

To enable translation again:

1. Refine `zh.json`. English source phrases are the keys; Chinese translations are
   the values. Keep product names and technical terms in English where appropriate.
2. Review the two rich-text biography paragraphs in `components/About.jsx`, which
   have separate English and Chinese markup.
3. Set `TRANSLATION_ENABLED = true` in `src/config/features.js`.
4. Run `npm test`, `npm run lint`, and `npm run build`. Check both languages in the
   browser before publishing.

The provider, toggle, translation calls, catalog, and Chinese typography are all
retained. No uncommenting across individual components is necessary. The disabled
production build can omit the unreachable Chinese catalog and bilingual runtime.
