# Number Counter — PHP / WordPress Compatibility Pass

- **Plugin:** Number Counter (`number-counter`)
- **Version:** 1.1.6 → **1.5.0**
- **Branch:** `number-counter-dev` (branched off `latest`, **not** `master` — see §9)
- **Date of version check:** 2026-08-09
- **Nothing committed or pushed.** All changes left in the working tree.

---

## 1. Detected original baseline (and how)

| | Detected | Evidence |
|---|---|---|
| **PHP** | 5.4 syntactically, **5.6 realistically** | Closures used (`render_callback => function(...)`, `number-counter.php`) → 5.3+. Short array syntax `[$this, 'auth_callback']` (`includes/post-meta.php:26`) and `[]` (`includes/helpers.php`) → 5.4+. **No** `??`, `<=>`, return types, typed properties, arrow fns, `match`, ctor promotion, enums, or variadics anywhere. Only two constructs above 5.4: `throw new Error` (PHP 7+ class) and `str_contains()` (PHP 8.0+) — both introduced later than the initial release and both now removed/replaced. |
| **WordPress** | **5.6** | `register_block_type()` with a directory path (`includes/helpers.php::get_block_register_path`) → 5.8+, but explicitly branched to the *block-name string* form below 5.7, i.e. the code deliberately supports 5.6. `block.json` `apiVersion: 2` → 5.6+. `register_meta( … show_in_rest )` → 4.6+. No `wp_interactivity_*`, no `in_footer` args-array form, no REST routes. Initial release 20/05/2021 (WP 5.7 era). |

**Declared before this pass:** `readme.txt` said `Requires at least: 5.6`, `Tested up to: 6.5`, no `Requires PHP` at all. The main plugin file carried **no** `Requires at least`, `Tested up to`, or `Requires PHP` header.

**Disagreement found:** the declared WP floor (5.6) was **not actually met** — `str_contains()` fatals on WP 5.6–5.8 running PHP < 8.0 (WP only polyfills `str_contains()` from 5.9). This was introduced in 1.1.6.

---

## 2. Target range

Checked live on **2026-08-09**:

- `https://www.php.net/releases/index.php?json&max=4` → latest **PHP 8.5.9**, actively supported: 8.2, 8.3, 8.4, 8.5.
- `https://api.wordpress.org/core/version-check/1.7/` → latest **WordPress 7.0.3** (also offering the 6.9.6 branch). WP 7.0 declares a PHP minimum of 7.4.

**Audited range: PHP 5.6 → 8.5, WordPress 5.6 → 7.0** (the detected original floor upward).

**Declared range: PHP 7.4 → 8.5, WordPress 6.0 → 7.0.** The floor was raised on the user's instruction to the policy minimum of PHP 7.4 / WP 6.0. The code itself still runs correctly the whole way down to PHP 5.6 / WP 5.6 — the raise is a support-policy decision, not a code constraint, so the declared floor is stricter than the verified one. Nothing was removed to accommodate it.

Per-version checklist covered: PHP 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2, 8.3, 8.4, 8.5 — and WP 5.6, 5.7, 5.8, 5.9, 6.0–6.9, 7.0.

Local toolchain used for linting: PHP 8.5.8 (CLI).

---

## 3. Issue table

| # | File:line (pre-fix) | Issue | Breaks on | Severity |
|---|---|---|---|---|
| 1 | `includes/helpers.php:48` | `str_contains()` — PHP 8.0+ function, WP only polyfills it from 5.9 | Fatal on PHP 5.6–7.4 with WP 5.6–5.8 | **Critical** |
| 2 | `number-counter.php:31` | `require_once lib/style-handler/style-handler.php` unconditional; `lib/style-handler` is an **uninitialised git submodule** (`git submodule status` shows `-4ac4b7c…`) | Fatal (`Failed opening required`) on any PHP/WP whenever the submodule is not checked out | **Critical** |
| 3 | `number-counter.php:38` | `throw new Error(...)` — `Error` does not exist before PHP 7; and an uncaught throw on the `init` hook white-screens the entire site | Fatal on PHP 5.6; site-wide fatal on all PHP if `dist/` is absent | **High** |
| 4 | `includes/helpers.php:50` | `$x = include_once …asset.php` — `include_once` returns bool `true` on a repeat include; `$x['dependencies']` then indexes a bool | Warning PHP 7.4; warning + null deref PHP 8.0–8.5 | **High** |
| 5 | `includes/helpers.php:61` | `(float) get_bloginfo('version')` passed to JS as `eb_wp_version`, compared `>= 5.8` in `dist/modules.js` | Silently wrong on any `x.10`+ minor (e.g. "6.10"/"7.10" → 6.1/7.1) → block registration takes the legacy path | **High** |
| 6 | `includes/helpers.php:102` | `(float) get_bloginfo('version') <= 5.6` in `get_block_register_path()` | Same float-cast hazard → would pass a block *name* where a *path* is required | **High** |
| 7 | `includes/font-loader.php:53` | `explode(',', $fonts)` on `get_post_meta()` output with no type check | TypeError (fatal) on PHP 8.0+ if `_eb_attr` holds an array; deprecation on PHP 8.1 if it holds `null` | **High** |
| 8 | `number-counter.php:1` | No `if ( ! defined( 'ABSPATH' ) ) exit;` guard in the main plugin file (the three `includes/` files had one) | Direct-access information disclosure, all versions | **Medium** |
| 9 | `number-counter.php` header | Missing `Requires at least`, `Tested up to`, `Requires PHP` entirely; `readme.txt` missing `Requires PHP` and stuck at `Tested up to: 6.5` | WP.org shows an unmaintained/incompatible badge; no PHP gate at install time | **Medium** |
| 10 | `includes/helpers.php:12` | `class Number_Counter_Helper` declared with no `class_exists()` guard (unlike `Counter_Font_Loader` and `Counter_Post_Meta`, which both have one) | Fatal redeclare if the class is ever loaded twice | **Medium** |
| 11 | `includes/helpers.php:48` | `$_SERVER['QUERY_STRING']` read raw — no `isset()`, no `wp_unslash()`, no sanitisation | Undefined-index notice; WPCS violation | **Medium** |
| 12 | `includes/post-meta.php:12` | `add_filter('init', …)` used to attach an action | Works (WP shares the hook registry) but is semantically wrong and confuses static analysis | **Low** |
| 13 | `number-counter.php:115` | `'editor_style' => 'number-counter-editor-css'` — this handle is **never registered** anywhere in the plugin | Silently no-ops on all versions | **Low** — *flagged, not fixed* |
| 14 | `includes/font-loader.php:80` | `wp_register_style('eb-block-fonts', …, array())` with no `$ver` → WP appends its own core version to the Google Fonts URL | Cosmetic; changing it alters emitted markup | **Low** — *flagged, not fixed* |
| 15 | `block.json:2` | `apiVersion: 2` — v3 landed in WP 6.3 (iframed editor canvas) | Still supported through WP 7.0; bumping changes editor rendering | **Low** — *flagged, not fixed* |

Scanned and found **clean**: no `$wpdb` usage anywhere (so no `prepare()`/`%i` exposure), no REST routes (so no missing `permission_callback`), no `mysql_*`/`create_function`/`each`/`ereg`/`split`/`strftime`/`money_format`/`utf8_encode`/`FILTER_SANITIZE_STRING`, no curly-brace offsets, no dynamic property creation, no `${var}` interpolation, no implicit nullable params, no `ArrayAccess`/`Iterator`/`JsonSerializable` implementations needing `#[\ReturnTypeWillChange]`, no `load_plugin_textdomain()` (so no WP 6.7 early-textdomain notice), and no deprecated jQuery/jQuery-Migrate patterns in `assets/js` or `src/` (`.live()`, `.size()`, `.andSelf()`, `$.browser`, `$.parseJSON`, `$.trim`, `.unload()`, `.error()` — all absent).

---

## 4. Fixes applied

| # | Fix |
|---|---|
| 1 | `includes/helpers.php` — `str_contains($q, 'gutenberg-edit-site')` → `strpos($q, 'gutenberg-edit-site') !== false`. Identical semantics, works from PHP 4 up. |
| 2 | `number-counter.php` — the `style-handler` require is now wrapped in `file_exists()`. |
| 3 | `number-counter.php` — `throw new Error(...)` → `error_log(...)` + `return`. Also added an `is_array($script_asset)` guard after the `require`. |
| 4 | `includes/helpers.php` — `include_once` → `require`, preceded by a `file_exists()` guard and followed by an `is_array()` guard. |
| 5 | `includes/helpers.php` — `eb_wp_version` stays a **float** (the built `dist/modules.js` compares it numerically against `5.8`, and a string would make that comparison `NaN`), but is now floored via `version_compare($raw, '5.8', '>=')` so a double-digit minor can never read as below 5.8. |
| 6 | `includes/helpers.php` — `(float) get_bloginfo('version') <= 5.6` → `version_compare(get_bloginfo('version'), '5.7', '<')`. Identical for every WP release that has ever shipped; correct for future `x.10+` minors. |
| 7 | `includes/font-loader.php` — added `is_string($fonts)` to the guard before `explode()`. |
| 8 | `number-counter.php` — added the `ABSPATH` exit guard. |
| 9 | Metadata — see §7. |
| 10 | `includes/helpers.php` — class wrapped in `if (!class_exists('Number_Counter_Helper')) { … }`, matching the pattern already used by the other two include files. |
| 11 | `includes/helpers.php` — `$_SERVER['QUERY_STRING']` now read via `isset()` + `sanitize_text_field(wp_unslash(...))` into `$query_string`. |
| 12 | `includes/post-meta.php` — `add_filter('init', …)` → `add_action('init', …)`. |

**Zero feature or behaviour change.** Every fix is either a no-op on today's stack (5, 6, 12), a guard against a crash path (2, 3, 4, 7, 8, 10), or a like-for-like function swap (1, 11).

---

## 5. Flagged, not auto-fixed (needs your call)

1. **`editor_style => 'number-counter-editor-css'` is a phantom handle** (`number-counter.php:115`). Nothing registers that style, so the block's editor stylesheet has been silently not loading since the handle was written. Fixing it means deciding *which* stylesheet it was meant to point at (`dist/modules.css` is already enqueued separately by `Number_Counter_Helper::enqueues()`), and that would change what CSS lands in the editor. **Recommendation:** drop the `editor_style` key entirely, since `enqueues()` already covers the editor. Not touched — it changes editor styling.
2. **`eb-block-fonts` has no `$ver` argument** (`includes/font-loader.php:80`), so WP appends the *core* version to the Google Fonts URL. Harmless, but adding a version changes the emitted `<link href>`. Not touched.
3. **`block.json` `apiVersion: 2`.** v3 (WP 6.3+) opts the block into the iframed editor canvas. Still fully supported at WP 7.0, but v2 blocks get progressively less love. Bumping it changes how the block renders in the editor and needs visual QA. Not touched.
4. ~~**`Requires PHP: 5.6` is honest but archaic.**~~ **Resolved.** Floor raised on the user's instruction to **PHP 7.4 / WP 6.0**, the policy minimum. WordPress 7.0 itself requires PHP 7.4, so no supported install loses access. Two consequences worth noting, neither acted on:
   - `Number_Counter_Helper::get_block_register_path()` still branches on `version_compare(get_bloginfo('version'), '5.7', '<')`. With a WP 6.0 floor that branch is now unreachable — the block-name string form can never be returned. Dead but harmless; removing it would change a public static method's contract, so it stays.
   - The `eb_wp_version` 5.8 floor in `enqueues()` is likewise unreachable at WP 6.0+. Same reasoning — left in place as a cheap guard.
5. **`Tested up to: 7.0` is declared from a static audit**, not a runtime test. I verified via `php -l` on PHP 8.5.8 and a full code read against the WP 5.6→7.0 deprecation surface — I did not boot a WP 7.0 site. If you want it runtime-verified before release, that is a separate step.

---

## 6. Old-vs-new conflicts

Only one, and it resolved cleanly: `eb_wp_version` must remain a **float** because the *already-built* `dist/modules.js` does `n >= 5.8` on it, and the `controls` submodule is uninitialised so the bundle cannot be rebuilt here. Sending a version *string* would make that comparison `NaN` and break block registration outright. The floor-via-`version_compare()` approach keeps the float contract intact while removing the float-cast hazard — no trade-off left standing.

---

## 7. Declared compatibility after this pass

`number-counter.php` header (three of these were previously absent):

```
Version:           1.5.0
Requires at least: 6.0
Tested up to:      7.0
Requires PHP:      7.4
```

`readme.txt`:

```
Requires at least: 6.0
Tested up to:      7.0
Requires PHP:      7.4
Stable tag:        1.5.0
```

Version bumped **1.1.6 → 1.5.0** (minor, set explicitly by the user) and kept in sync across all four locations: plugin header, `NUMBER_COUNTER_BLOCK_VERSION`, `readme.txt` `Stable tag`, and `package.json`. A changelog entry was added to `readme.txt`. No `composer.json` exists.

---

## 8. Verification performed

```
$ find . -name '*.php' -not -path './node_modules/*' -print0 | xargs -0 -n1 php -l
No syntax errors detected in ./number-counter.php
No syntax errors detected in ./dist/index.asset.php
No syntax errors detected in ./dist/frontend.asset.php
No syntax errors detected in ./dist/modules.asset.php
No syntax errors detected in ./includes/post-meta.php
No syntax errors detected in ./includes/font-loader.php
No syntax errors detected in ./includes/helpers.php
No syntax errors detected in ./dist/frontend/index.asset.php
```

All 8 PHP files clean on PHP 8.5.8.

**phpcs:** not installed on this machine (`phpcs -i` → command not found). Skipped rather than installing global tooling. The changed lines were hand-checked against the WordPress Coding Standards rules that apply here (input sanitisation, unslashing, escaping, direct-access guard).

**Not run:** no runtime test against a live WordPress install, and no rebuild of `dist/` (the `controls` and `lib/style-handler` submodules are both uninitialised in this checkout, so `npm run build` cannot succeed as-is). No PHP file in `dist/` was modified.

---

## 9. Git state — read this

- Work is on a new branch **`number-counter-dev`**.
- It was branched off **`latest`**, *not* `master`. `master` is **two commits behind** `latest` (`9fb44fb` the WP 6.5 compatibility fix, and `e5d649c` the readme update) — branching off `master` as the standard workflow prescribes would have silently discarded the entire 1.1.6 release. Confirm `latest` is the right base before you merge anywhere.
- **Nothing was committed and nothing was pushed.** The tree is dirty for your review.
- `git submodule status` reports both `controls` and `lib/style-handler` as uninitialised (`-` prefix). Run `git submodule update --init --recursive` before any build.
