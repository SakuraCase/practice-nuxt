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