<script>
  import { link, push, pop } from "svelte-spa-router";
  import active from "svelte-spa-router/active";
</script>

<header>
  <h2>Header</h2>
  <div class="inner_head">
    <a
      href="/"
      use:link
      use:active>
      Main
    </a>
  </div>
</header>

<!-- <div class="wrap_btn">
  <button on:click={() => pop()}>뒤로 가기</button>
  <button on:click={() => history.go(1)}>앞으로 가기</button>
  <button on:click={() => push('/sub/14')}>/sub/14</button>
</div> -->
