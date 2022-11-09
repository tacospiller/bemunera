<script lang="ts" setup>
const themes = [
  {
    name: "🌝  light",
    id: "light",
  },
  {
    name: "🌚  dark",
    id: "dark",
  },
  {
    name: "🧁  cupcake",
    id: "cupcake",
  },
  {
    name: "🐝  bumblebee",
    id: "bumblebee",
  },
  {
    name: "✳️  Emerald",
    id: "emerald",
  },
  {
    name: "🏢  Corporate",
    id: "corporate",
  },
  {
    name: "🌃  synthwave",
    id: "synthwave",
  },
  {
    name: "👴  retro",
    id: "retro",
  },
  {
    name: "🤖  cyberpunk",
    id: "cyberpunk",
  },
  {
    name: "🌸  valentine",
    id: "valentine",
  },
  {
    name: "🎃  halloween",
    id: "halloween",
  },
  {
    name: "🌷  garden",
    id: "garden",
  },
  {
    name: "🌲  forest",
    id: "forest",
  },
  {
    name: "🐟  aqua",
    id: "aqua",
  },
  {
    name: "👓  lofi",
    id: "lofi",
  },
  {
    name: "🖍  pastel",
    id: "pastel",
  },
  {
    name: "🧚‍♀️  fantasy",
    id: "fantasy",
  },
  {
    name: "📝  Wireframe",
    id: "wireframe",
  },
  {
    name: "🏴  black",
    id: "black",
  },
  {
    name: "💎  luxury",
    id: "luxury",
  },
  {
    name: "🧛‍♂️  dracula",
    id: "dracula",
  },
  {
    name: "🖨  CMYK",
    id: "cmyk",
  },
  {
    name: "🍁  Autumn",
    id: "autumn",
  },
  {
    name: "💼  Business",
    id: "business",
  },
  {
    name: "💊  Acid",
    id: "acid",
  },
  {
    name: "🍋  Lemonade",
    id: "lemonade",
  },
  {
    name: "🌙  Night",
    id: "night",
  },
  {
    name: "☕️  Coffee",
    id: "coffee",
  },
  {
    name: "❄️  Winter",
    id: "winter",
  },
] as const;

type ThemeIdT = typeof themes[number]["id"];

function changeTheme(themeId: ThemeIdT): void {
  document.getElementsByTagName("html")[0].setAttribute("data-theme", themeId);
  localStorage.setItem("theme", themeId);
}

changeTheme(localStorage.getItem("theme") || "garden");
</script>

<template>
  <div title="Change Theme" class="dropdown dropdown-end">
    <div tabindex="0" class="btn btn-primary gap-1 normal-case">
      <span class="hidden md:inline"> 테마 바꾸기 </span>
    </div>
    <div
      class="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px max-h-96 h-[70vh] w-52 overflow-y-auto shadow-2xl"
    >
      <div class="grid grid-cols-1 gap-3 p-3" tabindex="0">
        <div
          v-for="theme in themes"
          v-bind:key="theme.id"
          class="outline-base-content overflow-hidden rounded-lg outline outline-2 outline-offset-2"
        >
          <div
            :data-theme="theme.id"
            class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
            @click="() => changeTheme(theme.id)"
          >
            <div class="grid grid-cols-5 grid-rows-3">
              <div
                class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4"
              >
                <div class="flex-grow text-sm font-bold">
                  {{ theme.id }}
                </div>
                <div class="flex flex-shrink-0 flex-wrap gap-1">
                  <div class="bg-primary w-2 rounded" />
                  <div class="bg-secondary w-2 rounded" />
                  <div class="bg-accent w-2 rounded" />
                  <div class="bg-neutral w-2 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
