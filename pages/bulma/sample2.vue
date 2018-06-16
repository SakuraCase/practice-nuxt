<template>
  <div>
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

    <main class="columns">
      <div class="submenu column is-3">
        <aside class="box">
          ほげほげ
        </aside>
        <aside class="box menu">
          <p class="menu-label">おすすめのひとこと</p>
          <ul class="menu-list">
            <li><a href="#">HogeA<small>@a</small></a></li>
            <li><a href="#">HogeB<small>@b</small></a></li>
            <li><a href="#">HogeC<small>@c</small></a></li>
          </ul>
          <p class="menu-label">キーワード</p>
          <ul class="menu-list">
            <li><a href="#">システム開発</a></li>
            <li><a class="is-active" href="#">技術教育</a>
              <ul>
                <li><a href="#">一社研修</a></li>
                <li><a href="#">定期開催</a></li>
              </ul>
            </li>
            <li><a href="#">ソフトウェア</a></li>
          </ul>
        </aside>
      </div>

      <div class="column">
        <article class="box media">
          <figure class="media-left">
            <p class="image is-64x64">x</p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p><strong>PIYO</strong></p>
            </div>
          </div>
        </article>
        <article class="box media">
          <figure class="media-left">
            <p class="image is-64x64">x</p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p><strong>BAR</strong></p>
            </div>
          </div>
        </article>
      </div>
    </main>

    <footer class="footer">
       <div class="container">
         <div class="content has-text-centered">
           FUGA
         </div>
       </div>
    </footer>

  </div>
</template>

<script>
export default {
}
</script>

<style>
main {
  background-color: #eee;
}
</style>
