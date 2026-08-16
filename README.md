# Number Counter

> Put spotlight on important data using the Counter block for Gutenberg. Customize the design with animation effects, flexible layouts and much more.

[![WordPress Plugin Version](https://img.shields.io/wordpress/plugin/v/number-counter.svg)](https://wordpress.org/plugins/number-counter/)
[![WordPress Plugin Rating](https://img.shields.io/wordpress/plugin/r/number-counter.svg)](https://wordpress.org/plugins/number-counter/reviews/)
[![License: GPL v3 or later](https://img.shields.io/badge/license-GPLv3--or--later-blue.svg)](http://www.gnu.org/licenses/gpl-3.0.html)

A single-block WordPress plugin by [WPDeveloper](https://wpdeveloper.com), part of the [Essential Blocks](https://essential-blocks.com/) family.

- **Plugin page:** https://wordpress.org/plugins/number-counter/
- **Documentation:** https://essential-blocks.com/docs/
- **Support forum:** https://wordpress.org/support/plugin/number-counter/
- **Issues & contributions:** https://github.com/EssentialBlocks/number-counter

## Requirements

| | Minimum | Tested up to |
| --- | --- | --- |
| WordPress | 6.0 | 7.0 |
| PHP | 7.4 | 8.5 |

## Installation

### From the block editor

1. Open the WordPress block (Gutenberg) editor.
2. Search for **Number Counter**.
3. Install in one click.

### Manual

1. Upload the `number-counter` folder to `/wp-content/plugins/`.
2. Activate the plugin from the **Plugins** menu in WordPress.
3. Follow the [documentation](https://essential-blocks.com/docs/).

## Development

This plugin is written with ESNext and JSX, so a build step is required.

```bash
git clone --recurse-submodules git@github.com:EssentialBlocks/number-counter.git
cd number-counter
npm install
```

If you cloned without `--recurse-submodules`, pull the `controls` and `lib/style-handler` submodules in afterwards:

```bash
git submodule update --init --recursive
```

| Script | Purpose |
| --- | --- |
| `npm start` | Start the development build with file watching |
| `npm run build` | Produce the production build in `dist/` |
| `npm run format:js` | Format JavaScript sources |
| `npm run lint:js` | Lint JavaScript sources |
| `npm run lint:css` | Lint stylesheets |

### Repository layout

| Path | Contents |
| --- | --- |
| `number-counter.php` | Plugin bootstrap, constants and asset registration |
| `src/` | Block source — `edit.js`, `save.js`, `inspector.js`, `attributes.js`, `deprecated.js` |
| `includes/` | PHP helpers, font loader and post meta handling |
| `dist/` | Compiled editor and frontend bundles (committed) |
| `controls/`, `lib/style-handler/` | Shared Essential Blocks submodules |
| `assets/` | Fonts, CSS and images shipped with the plugin |
| `.wordpress-org/` | WordPress.org banners and icons (not shipped in the plugin zip) |

### Branches

| Branch | Purpose |
| --- | --- |
| `master` | Default branch, mirrors the released state |
| `latest` | Release staging branch |
| `dev` | Active development; also triggers the WordPress.org asset-update workflow |

Releases are published to WordPress.org by pushing a tag, which runs `.github/workflows/deploy.yml`.

## Contributors

| WordPress.org | GitHub |
| --- | --- |
| [@wpdevteam](https://profiles.wordpress.org/wpdevteam/) | [WPDeveloper](https://github.com/WPDevelopers) |
| [@re_enter_rupok](https://profiles.wordpress.org/re_enter_rupok/) | — |
| [@Asif2BD](https://profiles.wordpress.org/asif2bd/) | [@Asif2BD](https://github.com/Asif2BD) |
| [@hztyfoon](https://profiles.wordpress.org/hztyfoon/) | [@hz-tyfoon](https://github.com/hz-tyfoon) |
| [@rahat89](https://profiles.wordpress.org/rahat89/) | — |
| [@fencermonir](https://profiles.wordpress.org/fencermonir/) | [@fencermonir](https://github.com/fencermonir) |
| [@rahatsheikhleon](https://profiles.wordpress.org/rahatsheikhleon/) | [@RahatSheikhLeon](https://github.com/RahatSheikhLeon) |

Contributions are welcome — open an issue or a pull request on [GitHub](https://github.com/EssentialBlocks/number-counter).

## Changelog

The full changelog lives in [`readme.txt`](readme.txt).

## License

GPLv3 or later — see [http://www.gnu.org/licenses/gpl-3.0.html](http://www.gnu.org/licenses/gpl-3.0.html).
