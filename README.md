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
