<template>
  <div class="relative flex min-h-screen  ">
    <div
        :class="{'relative translate-x-0':showsidebar}"
        class="absolute  inset-y-0 left-0 w-80 -translate-x-full space-x-6 bg-[#1E724A] px-2 py-4  transition duration-200 ease-in-out md:relative md:-translate-x-0">
      <img class="m-auto pt-7" src="/public-src/Kullanıcı/HY_Logo%20Yatay%201.svg">
      <div class="mt-10 w-56">

        <nav class="  flex items-center rounded-lg px-4 py-3 pl-12 pt-4 text-sm hover:bg-[#DBF5E9]">
          <img src="/public-src/Kullanıcı/Vector(7).svg">
          <router-link class="pl-4 text-white hover:text-emerald-900" to="/vehicle">Araçlarım</router-link>
        </nav>

        <nav class="flex items-center rounded-lg px-4 py-3 pl-12 pt-4 text-sm hover:bg-[#DBF5E9]">
          <img class="hover:text-primary" src="/public-src/Kullanıcı/Vector(6).svg">
          <router-link class="pl-4 text-white hover:text-emerald-900" to="/management">Araç yönetimi</router-link>
        </nav>

        <nav class="flex items-center rounded-lg px-4 py-3 pl-12 pt-4 text-sm hover:bg-[#DBF5E9]">
          <img src="/public-src/Kullanıcı/Vector(4).svg">
          <router-link class="pl-4 text-white hover:text-emerald-900" to="/payfine">Ceza Ödeme</router-link>
        </nav>

        <nav class="flex items-center rounded-lg px-4 py-3 pl-12 pt-4 text-sm transition-all hover:bg-[#DBF5E9]">
          <img src="/public-src/Kullanıcı/Frame(7).svg">
          <router-link class="pl-4 text-white hover:text-emerald-900" to="/periodic">Periyodik Bakım</router-link>
        </nav>

        <nav class="flex items-center rounded-lg px-4 py-3 pl-12 pt-4 text-sm hover:bg-[#DBF5E9]">
          <a class=" hover:text-emerald-900" href="/public">
            <img src="/public-src/Kullanıcı/Vector(5).svg">
          </a>
          <router-link class="pl-4 text-white hover:text-emerald-900" to="/otherexpenses">Diğer Harcamalar</router-link>
        </nav>

        <nav class="flex items-center rounded-lg px-4 py-3 pl-12 pt-4 text-sm hover:bg-[#DBF5E9]">
          <img src="/public-src/Kullanıcı/Frame(8).svg">
          <router-link class="pl-4 text-white hover:text-emerald-900" to="/usermain">KUllanıcı yönetimi</router-link>
        </nav>
      </div>
      <div class="  absolute  bottom-10  ml-8  flex w-56 items-center   ">
        <nav
            class=" flex items-center justify-center  rounded-lg px-4 py-3 pl-12 pr-10  text-sm hover:bg-[#DBF5E9] hover:text-[#1E724A] ">
          <img src="/public-src/Kullanıcı/Frame(10).svg">
          <span class="pl-2 text-white hover:text-emerald-900">Çıkış Yap</span>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue';

export default {

  setup() {
    const showsidebar = ref(false);

    return {
      showsidebar
    }
  },

}
</script>