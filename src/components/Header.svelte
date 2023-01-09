<script>
  import { link, location } from "svelte-spa-router";
  import active from "svelte-spa-router/active";
  import navLists from '@/js/navLists';

  let currentPath = '';
  $: if ($location) currentPath = `/${$location.split('/')[1]}`;
</script>

<header>
  <h1 class="tit_tesla">Tesla Fan Page</h1>
  <nav>
    <ul class="list_menu">
      {#each navLists as menu (menu.name)}
        <li>
          <a href={menu.path} use:link class="link_menu" class:active={currentPath === menu.path}>
            { menu.name }
          </a>
          <ul class="list_submenu">
            {#each menu.subMenuLists as subMenu (subMenu.name)}
            <li>
              <a href={subMenu.path} use:link use:active class="link_sub">
                { subMenu.name }
              </a>
            </li>
            {/each}
          </ul>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<!-- <div class="wrap_btn">
  <button on:click={() => pop()}>뒤로 가기</button>
  <button on:click={() => history.go(1)}>앞으로 가기</button>
  <button on:click={() => push('/sub/14')}>/sub/14</button>
</div> -->
