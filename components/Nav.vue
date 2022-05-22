<template>
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
      z-50
      bg-white/80
    "
  >
    <h1 class="font-bold text-2xl">
      GRO.<span class="text-red-600">PRO</span>
    </h1>
    <ul class="lg:flex hidden items-center space-x-14">
      <li
        :class="{ 'text-gray-500': activeLink != link }"
        class="group"
        v-for="(link, key) in links"
        :key="`navLinks${key}`"
      >
        <NuxtLink
          to="#"
          :class="{ 'text-black': activeLink == link }"
          class="font-medium group-hover:text-black transition-all duration-300"
        >
          {{ link }}
        </NuxtLink>
        <div
          :class="{ 'bg-black scale-y-100': activeLink == link }"
          class="
            h-0.5
            mt-0.5
            group-hover:scale-y-100 group-hover:bg-black group-hover:block
            w-[80%]
            transition-all
            duration-300
          "
        ></div>
      </li>
    </ul>
    <div class="space-x-8 hidden lg:block">
      <NuxtLink to="#" class="font-medium">Login</NuxtLink>
      <NuxtLink
        to="#"
        class="
          border border-black
          py-3
          px-7
          rounded-full
          font-medium
          hover:bg-black hover:text-white
          transition-all
        "
        @click="showModal = !showModal"
        >Register</NuxtLink
      >
    </div>
    <Modal v-show="showModal" bg-color="bg-white/90">
      <div
        @click.stop=""
        class="
          relative
          bg-white
          rounded-lg
          max-w-lg
          min-w-[400px]
          animate-fade
          shadow-xl
        "
      >
        <div class="flex justify-between p-5 border-b border-gray-300">
          <h1 class="font-bold text-2xl">Register</h1>
          <button @click="showModal = false" class="">
            <CloseIcon
              class="
                w-5
                h-5
                text-gray-400
                hover:text-red-600 hover:rotate-[360deg]
                transition-all
                duration-500
                hover:bg-gray-100
                rounded-full
                focus:outline-dotted focus:outline-gray-300
                active:outline active:outline-gray-300
              "
            ></CloseIcon>
          </button>
        </div>
        <div class="px-4 pb-2 mt-5">
          <form @submit.prevent="">
            <div>
              <label
                for="email"
                class="block mb-1 cursor-pointer text-gray-500 font-medium"
                >Email</label
              >
              <input
                required
                type="email"
                name="email"
                id="email"
                class="
                  w-full
                  py-3
                  rounded-lg
                  border border-gray-300
                  focus:ring-0 focus:border-green-400
                "
              />
            </div>
            <div class="mt-5">
              <button
                type="submit"
                class="
                  block
                  bg-red-600
                  w-full
                  py-3
                  rounded-md
                  font-bold
                  text-white
                "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  </nav>
</template>

<script setup>
// Init Setup
import CloseIcon from "@/assets/icons/close.svg?component";
const activeLink = useState("activeLink", () => "Home");
const links = ["Home", "About Us", "Pricing", "Blog", "Contact"];
const showModal = useState("showModal", () => false);
</script>
