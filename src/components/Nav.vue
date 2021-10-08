<template>
  <nav class="c-nav bg-white" :class="{ 'is-closed': isClosed }">
    <div class="c-nav__header">
      <button @click="isClosed = !isClosed" class="focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          height="24" width="24">
          <use xlink:href="#c-icon-menu"></use>
        </svg>
      </button>
    </div>
    <div class="c-nav__menu flex flex-col justify-between" :class="[ mode === 'mobile' ? 'is-mobile' : '' ]">
      <ul>
        <li class="c-nav__menuitem" v-for="(item, index) in menuListItem" :key="index">
          <router-link :to="item.url"
              :class="{ 'active': item.isActive }"
              class="flex items-center py-4 px-6 text-gray-1 hover:border-l-3 hover:border-solid hover:border-primary-normal  hover:bg-gray-600 hover:text-primary-normal">
            <i :class="item.icon"></i>
            <span class="ml-3 text-sm font-bold">{{ item.title }}</span>
          </router-link>
        </li>
        <li class="c-nav__menuitem">
          <a href="https://store.liveabc.com/" target="_blank"
              class="flex items-center py-4 px-6 text-gray-1 hover:border-l-3 hover:border-solid hover:border-primary-normal  hover:bg-gray-600 hover:text-primary-normal">
            <i class="fas fa-school"></i>
            <span class="ml-3 text-sm font-bold">Live Class</span>
          </a>
        </li>
      </ul>
      <a @click="isClosed = !isClosed" class="p-5 bg-primary-light text-primary w-full cursor-pointer md:hidden">Close</a>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Nav',
    props: {
      mode: {
        type: String
      },
      menuListItem: {
        type: Array
      },
      user: {
        type: Object
      }
    },
    watch: {
      '$store.state.userRole' (newVal, oldVal) {
        if (newVal !== oldVal) {
          this.$router.push({ path: this.menuListItem[0].url }).catch(()=>{})
        }
      }
    },
    data () {
      return {
        isClosed: true,
        personName: this.user.firstName + ' ' + this.user.lastName
      }
    }
  }
</script>

<style>
  .c-nav {
    grid-area: nav;
    width: 215px;
    transition: width .25s cubic-bezier(0.4,0.0,0.2,1);
    overflow: hidden;
  }
  .c-nav.is-closed {
    width: 80px;
  }

  .c-nav__header {
    padding: 30px;
    display: flex;
    justify-content: left;
  }

  .c-nav__user {
    height: 100px;
    padding: 30px;
  }

  .c-nav__menu.is-mobile {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #FFF;
    z-index: 10000;
    transition: opacity .15s ease, transform .3s ease;
    opacity: 1;
    transform: translateX(0);
  }
  .c-nav.is-closed .c-nav__menu.is-mobile {
    opacity: 0;
    transform: translateX(-100%);
  }
  .c-nav__menuitem a {
    width: 100%;
    transition: border .10s linear,
      width .25s cubic-bezier(0.4,0.0,0.2,1),
      background-color .25s cubic-bezier(0.4,0.0,0.2,1),
      color .25s cubic-bezier(0.4,0.0,0.2,1);
  }
  .c-nav__menuitem a svg {
    width: 24px;
    height: 24px;
  }
  .c-nav .c-nav__menuitem a span { transition: visibility .10s .25s cubic-bezier(0.4,0.0,0.2,1); }
  .c-nav.is-closed .c-nav__menuitem a span {
    visibility: hidden;
    transition: visibility .25s cubic-bezier(0.4,0.0,0.2,1);
  }

  /* Actve state */
  .c-nav__menuitem a.is-active {
    border-left-width: 3px;
    border-style: solid;
    border-color: #2e5bff;
    background-color: rgba(46,91,255,.2);
    color: #2e5bff;
  }
  @media (min-width: 768px) {
    .c-nav__menuitem a { width: 215px; }
  }
</style>