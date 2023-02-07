<template>
  <div class="wrapper">
    <input type="text" placeholder="Search Staff Member" class="search" />
    <span class="icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </span>
  </div>
</template>

<style scoped lang="postcss">
.wrapper {
  @apply relative flex w-full items-stretch;
  .search {
    @apply rounded-md border-0 px-8 py-4 text-slate-900 placeholder-slate-400 outline-none focus:ring focus:ring-blue-500;
  }
  .icon {
    @apply absolute right-0 z-10 py-4 pr-8 text-blue-800;
  }
}
</style>
