<template>
  <header class="">
    <nav
      class="
        flex
        items-center
        justify-between
        py-7
        lg:px-desktop
        mx-auto
        sticky
        top-0
        bg-white/80
      "
    >
      <NuxtLink to="/">
        <h1 class="font-bold text-2xl">
          GRO.<span class="text-red-600">PRO</span>
        </h1>
      </NuxtLink>
      <ul class="lg:flex hidden items-center space-x-14">
        <li
          class="group"
          :class="{ 'text-gray-500': activeLink != link }"
          v-for="(link, key) in links"
          :key="key"
        >
          <NuxtLink
            to="#"
            class="
              font-medium
              group-hover:text-black
              transition-all
              duration-300
            "
          >
            {{ link }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
// Init Setup
const links = ["Home", "About Us", "Pricing", "Blog", "Contact"];
const activeLink = useState("activeLink", () => "Home");
</script>
