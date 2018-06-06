# layouts
default.vueに書いたものが、指定しなくても各ページに適用される    
`<nuxt/>`で記述した場所に各ページのテンプレートが適用される     
      
個別にlayoutを指定する場合は、`layout: 'hoge'`のように名前を指定する      
ex. `pages/vuex/classic.vue`    

# PAGES
ルーティング。テンプレートの表示。      
ファイル名がそのままurlになる。    
_からのファイル名はルーティングパラメータの変数名として使える    

# [vuex](https://ja.nuxtjs.org/guide/vuex-store/)    
### クラシックモード
- pages/vuex/classic.vue
- store/index.jsでストアインスタンスを返す

### モジュールモード
- pages/vuex/module.vue
- store/index.jsでそれぞれexportする
- ファイル名を別にするとそれが名前空間となる
