<template>
  <div class="relative flex min-h-screen ">
    <div
        :class="{'relative translate-x-0':showsidebar}"
        class="absolute  inset-y-0 left-0 w-80 -translate-x-full space-x-6 bg-primary px-2 py-4  transition duration-200 ease-in-out md:relative md:-translate-x-0">
      <img class="m-auto pt-7" src="/public-src/Kullanıcı/HY_Logo%20Yatay%201.svg">
      <div class="mt-10 h-80 w-56">
        <router-link to="/vehicle">
          <nav
              class="  flex items-center rounded-lg px-4 py-3 pl-12 pt-4 text-sm text-white hover:bg-PrimaryLight hover:text-emerald-900">
            <IconMyTools class="mr-3"/>
            Araçlarım
          </nav>
        </router-link>

        <router-link to="/management">
          <nav
              class="flex items-center rounded-lg px-4 py-3 pl-12 pt-4 text-sm text-white hover:bg-PrimaryLight hover:text-emerald-900">
            <IconVehicleManagment class="mr-3"/>
            Araç yönetimi
          </nav>
        </router-link>

        <router-link to="/payfine">
          <nav
              class="flex items-center rounded-lg px-4 py-3 pl-12 pt-4 text-sm text-white hover:bg-PrimaryLight hover:text-emerald-900">
            <IconPunishment class="mr-3"/>
            Ceza Ödeme
          </nav>
        </router-link>
        <router-link to="/periodic">
          <nav
              class="flex items-center rounded-lg px-4 py-3 pl-12 pt-4 text-sm text-white transition-all hover:bg-PrimaryLight hover:text-emerald-900">
            <IconPeriodic class="mr-3"/>
            Periyodik Bakım
          </nav>
        </router-link>
        <router-link to="/otherexpenses">
          <nav
              class="flex items-center rounded-lg px-4 py-3 pl-12 pt-4 text-sm text-white hover:bg-PrimaryLight hover:text-emerald-900">
            <IconOther class="mr-3"/>
            Diğer Harcamalar
          </nav>
        </router-link>
        <router-link to="/usermain">
          <nav
              class="flex items-center rounded-lg px-4 py-3 pl-12 pt-4 text-sm text-white hover:bg-PrimaryLight hover:text-emerald-900">
            <IconUser class="mr-3"/>
            Kullanıcı yönetimi
          </nav>
        </router-link>
        <div class="absolute ml-8  mt-96 flex w-56 items-center">
          <router-link to="/login">
            <nav
                class=" flex items-center justify-center  rounded-lg px-4 py-3 pl-12 pr-10  text-sm text-white hover:bg-PrimaryLight hover:text-emerald-900 ">
              <IconExit/>
              <span class="pl-2 ">Çıkış Yap</span>
            </nav>
          </router-link>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {ref} from 'vue';
import IconVehicleManagment from "../../public/public-src/Kullanıcı/Vector(6).svg"
import IconMyTools from "../../public/public-src/Kullanıcı/Vector(7).svg"
import IconPunishment from "../../public/public-src/Kullanıcı/Vector(4).svg"
import IconPeriodic from "../../public/public-src/Kullanıcı/Frame(7).svg"
import IconOther from "../../public/public-src/Kullanıcı/Vector(5).svg"
import IconUser from "../../public/public-src/Kullanıcı/Frame(8).svg"
import IconExit from "../../public/public-src/Kullanıcı/Frame(10).svg"


export default {
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    IconVehicleManagment,
    IconMyTools,
    IconPunishment,
    IconPeriodic,
    IconOther,
    IconUser,
    IconExit
  },

  setup() {
    const showsidebar = ref(false);

    return {
      showsidebar
    }
  },

}
</script>