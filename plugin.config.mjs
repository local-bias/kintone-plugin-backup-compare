const hp = 'https://konomi.app/';
const commonCdn = 'https://cdn.jsdelivr.net/gh/local-bias/kintone-cdn@latest';
const cdn = 'https://cdn.jsdelivr.net/gh/local-bias/kintone-plugin-template@latest';
const localhost = 'https://127.0.0.1:5500';

/** @type {import('./src/types/plugin-config').PluginConfig} */
export default {
  manifest: {
    base: {
      manifest_version: 1,
      version: '0.1.0',
      type: 'APP',
      name: {
        en: 'Backup & Diff Comparison Plugin',
        ja: 'バックアップ＆差分比較プラグイン',
        zh: '备份与差异比较插件',
      },
      description: {
        en: 'Back up record information at a specific point in time and compare the differences with the current state.',
        ja: '特定の時点のレコード情報をバックアップし、現時点との差分を比較します。',
        zh: '插件模板',
      },
      icon: 'icon.png',
      homepage_url: { ja: hp, en: hp },
      desktop: {
        js: [`${commonCdn}/dist/desktop.js`],
        css: [],
      },
      mobile: {
        js: [`${commonCdn}/dist/desktop.js`],
        css: [],
      },
      config: {
        html: 'config.html',
        js: [`${commonCdn}/dist/config.js`],
        css: [],
        required_params: [],
      },
    },
    dev: {
      desktop: { js: [`${localhost}/dist/dev/desktop/index.js`] },
      mobile: { js: [`${localhost}/dist/dev/desktop/index.js`] },
      config: { js: [`${localhost}/dist/dev/config/index.js`] },
    },
    prod: {
      desktop: { js: [`${cdn}/cdn/desktop.js`] },
      mobile: { js: [`${cdn}/cdn/desktop.js`] },
      config: { js: [`${cdn}/cdn/config.js`] },
    },
  },
};
