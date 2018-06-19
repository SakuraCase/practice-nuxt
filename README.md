# layouts
default.vueに書いたものが、指定しなくても各ページに適用される。    
`<nuxt/>`で記述した場所に各ページのテンプレートが適用される。     
      
個別にlayoutを指定する場合は、`layout: 'hoge'`のように名前を指定する。      
ex. `pages/vuex/classic.vue`    

# pages
ルーティング。テンプレートの表示。      
ファイル名がそのままurlになる。    
_からのファイル名はルーティングパラメータの変数名として使える    

# [vuex](https://ja.nuxtjs.org/guide/vuex-store/)    
### クラシックモード
store/index.jsでストアインスタンスを返す。    
ex. `pages/vuex/classic.vue`       
ex. `store/index.js`

### モジュールモード
store/index.jsでそれぞれexportする。    
ファイル名を別にするとそれが名前空間となる。    
ex. `pages/vuex/module.vue`     
ex. `store/index.js`


# 静的ページ, SSR, PWA
### 静的ページ
`nuxt generate`コマンドで生成される。     
ex. [GitHub Pagesへのデプロイ](https://ja.nuxtjs.org/faq/github-pages)

### SSR
特に設定せずに        
ex. [Herokuへのデプロイ](https://ja.nuxtjs.org/faq/heroku-deployment)

### PWA
1. ` yarn add @nuxtjs/pwa`
1. `nuxt.config.js`の追加
   ```
     modules: [
       '@nuxtjs/pwa'
     ],
     manifest: {
         name: 'PWA',
         lang: 'ja'
     },
   ```
1. `.gitignore`の追加
   ```
   sw.*
   ```
1. `static/icon.png`の追加

 `manifaste`と`static/icon.png`の追加によってモバイル端末のホーム画面に追加してアプリっぽく動作させられる

# css
1. yarn
   ```
   yarn add bulma
   yarn add sass-loader node-sass
   ```

1. `nuxt.config.js` 追加
  ```
    // buildに以下を追加
    // bulma入れたときに出るwarningが出なくなる
    build: {

      postcss: {
        plugins: {
          'postcss-custom-properties': {
            warnings: false
          }
        }
      }
    },

    // cssにbulma追加
    css: [
      'bulma'
    ],
  ```

### 参考
- [Nuxt.jsにBulmaを導入して変数を使ったカスタマイズを行う](https://qiita.com/mnmemo/items/5eb4fb8cbfe17670fd36)
- [CSSフレームワーク BULMA チュートリアル](https://qiita.com/ochiochi/items/de1afd2d3fc8f6d3ea55)
- [Nuxt.js で CSS フレームワークを 3 つ試した。](https://qiita.com/high-u/items/b8c708cd3795d2ab4a13#bulma-scss%E7%B7%A8)
- [Nuxt.jsにBulmaを組み込んだら、Vuexストアが理解できた件](https://qiita.com/isamusuzuki/items/5ec800e423a3a56ef03d)
- [scss公式](https://sass-lang.com/guide)

# [テスト](https://ja.nuxtjs.org/guide/development-tools)
1. `yarn add ava jsdom --dev`
1. テストコード追加
1. `yarn test`

