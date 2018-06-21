<template>
  <div>
    <p>Hoge Fuga</p>

    <nav>
      <ul>
        <li><a href="#">Hoge</a></li>
        <li><a href="#">Fuga</a></li>
      </ul>
    </nav>

    <p class="hoge">Hoge Fuga</p>

    <div class="message">Hoge Fuga</div>
    <div class="success">Hoge Fuga</div>
    <div class="error">Hoge Fuga</div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '~assets/_partial.scss';

$font-stack: Helvetica, sans-serif;
$primary-color: #777;

p {
  font: 200% $font-stack;
  color: $primary-color;
}

nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li { display: inline-block; }
  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}

@mixin transform($property) {
  -webkit-transform: $property;
  -ms-transform: $property;
  transform: $property;
}
.box {
  @include transform(rotate(30deg));
}

%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}
.message {
  @extend %message-shared;
}

.success {
  @extend %message-shared;
  border-color: green;
}

.error {
  @extend %message-shared;
  border-color: red;
}
</style>
