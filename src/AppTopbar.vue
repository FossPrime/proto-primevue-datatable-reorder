<template>
  <div class="layout-topbar">
    <router-link to="/" class="layout-topbar-logo">
      <img alt="Logo" :src="topbarImage()" />
      <span>SAKAI</span>
    </router-link>
    <button
      class="p-link layout-menu-button layout-topbar-button"
      @click="onMenuToggle"
    >
      <i class="pi pi-bars"></i>
    </button>

    <button
      class="p-link layout-topbar-menu-button layout-topbar-button"
      v-styleclass="{
        selector: '@next',
        enterClass: 'hidden',
        enterActiveClass: 'scalein',
        leaveToClass: 'hidden',
        leaveActiveClass: 'fadeout',
        hideOnOutsideClick: true
      }"
    >
      <i class="pi pi-ellipsis-v"></i>
    </button>
    <ul class="layout-topbar-menu hidden lg:flex origin-top">
      <li>
        <a
          class="p-link layout-topbar-button"
          href="https://github.com/primefaces/primevue"
        >
          <i class="pi pi-calendar"></i>
          <span>PrimeVue website</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    onMenuToggle(event) {
      this.$emit('menu-toggle', event)
    },
    onTopbarMenuToggle(event) {
      this.$emit('topbar-menu-toggle', event)
    },
    topbarImage() {
      return this.$appState.darkTheme
        ? 'images/logo-white.svg'
        : 'images/logo-dark.svg'
    }
  },
  computed: {
    darkTheme() {
      return this.$appState.darkTheme
    }
  }
}
</script>
