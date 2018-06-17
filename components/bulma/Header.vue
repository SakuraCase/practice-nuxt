<template>
  <header>
    <nav clsss="navbar">
      <div class="navbar-menu is-active">
        <div class="navbar-start">
          <a class="navbar-item">
            ひとことSNS
          </a>
        </div>
        <div class="navbar-end">
          <div class="navbar-item field has-addons">
            <div class="control">
              <input class="input" type="search" name="search" placeholder="キーワード検索">
            </div>
            <div class="control">
              <a class="button is-info">検索</a>
            </div>
          </div>
          <div class="navbar-item">
            <a href="#">ログイン</a>
          </div>
        </div>
      </div>
    </nav>

    <div class="hero is-info is-bold">
      <div class="hero-body">
        <h1 class="title">HOGE</h1>
        <h2 class="subtitle">@hoge-bar</h2>
      </div>
    </div>

    <section class="level">
      <div class="level-left"></div>
      <div class="level-right">
        <div class="level-item tabs">
          <ul>
            <li class="is-active"><a>最近のひとこと</a></li>
            <li><a>古いひとこと</a></li>
            <li><a>コメントつき</a></li>
          </ul>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <a class="button is-greyligth">フォロー</a>
        </div>
      </div>
    </section>
  </header>
</template>