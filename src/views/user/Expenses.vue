<style scoped>
.title-line {

  border-bottom-color: #1E724A;
  opacity: 5;
  transform: scaleX(1);
  transform-origin: left;
}

.title-line :after {
  background-color: #7759c2;
  bottom: 0;
  content: "";
  height: 5px;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform .3s ease, opacity .3s ease;
  width: 100%;
}


</style>
<template>
  <div class="m-auto mt-0 flex h-full w-full items-center justify-between">
    <div class="flex-1">
      <!-- header -->
      <div class="m-auto flex h-32 w-3/4 items-center justify-between">
        <div class="ml-5 flex w-3/4 items-center">
          <router-link to="/"><img class="mr-5" src="/public-src/Kullanıcı/Frame137.svg"></router-link>
          <h2 class="text-4xl font-bold leading-9 text-green-800">
            <router-link to="/dashboard">Araçlarım</router-link>
          </h2>
          <h4 class="ml-8 text-base font-medium text-[#717982]"> / 34 HYD 1234 VOLKSWAGEN POLO </h4>
        </div>

        <div class="flex items-center">
          <nav class="pr-3">
            <img src="/public-src/Kullanıcı/Frame(12).svg">
          </nav>
          <p class="text-sm font-semibold text-gray-500">Muhammed Ali Ay </p>
        </div>
      </div>
      <!-- content-->
      <div class="title m-auto flex h-20 w-3/4 items-center rounded-xl border-2 border-solid border-primary">
        <div class="m-auto flex w-3/4 items-center justify-between text-Dark800">
          <RouterLink
              class=" inline-block rounded-t-lg border-b-2 border-transparent font-bold hover:border-primary hover:text-primary"
              to="/vehicle">ARAÇLARIM
          </RouterLink>
          <router-link
              class=" inline-block rounded-t-lg border-b-2 border-transparent font-bold hover:border-primary hover:text-primary"
              to="/userinfo">KULLANICI BİLGİLERİ
          </router-link>
          <router-link
              class="  inline-block rounded-t-lg border-b-2 border-transparent font-bold hover:border-primary hover:text-primary"
              to="/otherinfo">DİĞER BİLGİLER
          </router-link>
          <router-link
              class=" title-line inline-block rounded-t-lg border-b-2 border-transparent font-bold hover:border-primary hover:text-primary"
              to="/expenses">KM/HARCAMALAR
          </router-link>
          <router-link
              class="inline-block rounded-t-lg border-b-2 border-transparent font-bold hover:border-primary hover:text-primary"
              to="/repair">BAKIM
          </router-link>
          <router-link
              class="inline-block rounded-t-lg border-b-2 border-transparent font-bold hover:border-primary hover:text-primary"
              to="/punishment">HGS/CEZA
          </router-link>
        </div>
      </div>

      <!-- main -->
      <div class="m-auto mt-12 flex w-3/4 items-center">
        <div class=" m-auto w-3/4">
          <div class="mt-8 h-[500px] w-[480px] rounded-lg bg-GrayLightest shadow-xl ">
            <p class="mb-5 ml-8 pt-5 font-bold text-Dark900">ARAÇ KM BİLGİLERİ</p>
            <div class="flex items-center   ">
              <p class="h-16 w-52 border-2 border-Graydarker pl-9 pt-5 text-sm font-bold text-Dark900">9.08.2022</p>
              <p class="h-16 w-72 border-2 border-Graydarker pl-9 pt-5 text-sm font-bold text-Dark900">49.170 KM</p>
            </div>
            <div class="flex items-center   ">
              <p class="h-16 w-52 border-2 border-Graydarker pl-9 pt-5 text-sm font-bold text-Dark900">9.08.2022</p>
              <p class="h-16 w-72 border-2 border-Graydarker pl-9 pt-5 text-sm font-bold text-Dark900">49.170 KM</p>
            </div>
            <div class="flex items-center   ">
              <p class="h-16 w-52 border-2 border-Graydarker pl-9 pt-5 text-sm font-bold text-Dark900">9.08.2022</p>
              <p class="h-16 w-72 border-2 border-Graydarker pl-9 pt-5 text-sm font-bold text-Dark900">49.170 KM</p>
            </div>
            <div class="flex items-center   ">
              <p class="h-16 w-52 border-2 border-Graydarker pl-9 pt-5 text-sm font-bold text-Dark900">9.08.2022</p>
              <p class="h-16 w-72 border-2 border-Graydarker pl-9 pt-5 text-sm font-bold text-Dark900">49.170 KM</p>
            </div>
            <div class="flex items-center   ">
              <p class="h-16 w-52 border-2 border-Graydarker pl-9 pt-5 text-sm font-bold text-Dark900">9.08.2022</p>
              <p class="h-16 w-72 border-2 border-Graydarker pl-9 pt-5 text-sm font-bold text-Dark900">49.170 KM</p>
            </div>
            <div class="flex items-center   ">
              <p class="h-16 w-52 border-2 border-Graydarker pl-9 pt-5 text-sm font-bold text-Dark900">9.08.2022</p>
              <p class="h-16 w-72 border-2 border-Graydarker pl-9 pt-5 text-sm font-bold text-Dark900">49.170 KM</p>
            </div>
          </div>
          <div class="relative mt-12 flex w-[490px] items-center justify-end">
            <nav class="flex items-center  ">
              <a class="pl-2" href="/public">
                <svg class="bi bi-chevron-left text-[#717982]" fill="currentColor" height="25" viewBox="0 0 16 16"
                     width="25" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                      fill-rule="evenodd"/>
                </svg>
              </a>
              <img class="pl-2" src="/public-src/Kullanıcı/Frame72.svg">
              <a class="pl-2" href="/public">
                <svg class="bi bi-chevron-right text-[#717982]" fill="currentColor" height="25" viewBox="0 0 16 16"
                     width="25" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      fill-rule="evenodd"/>
                </svg>
              </a>
            </nav>
          </div>

        </div>
        <div class=" m-auto w-3/4">
          <div class="mt-8 h-[500px] w-[480px] rounded-lg bg-GrayLightest shadow-xl">
            <p class="ml-8 pt-5 font-bold text-Dark900">ARAÇ MASRAFLARI </p>
            <!--                        <p class="border-solid border-2 border-transparent border-b-Graydarker mt-5"></p>-->
            <div class=" mt-5 flex h-16 items-center justify-between border-y-2 border-Gray bg-Gray px-9 pt-2">
              <p class="text-sm font-bold text-Dark900">TOPLAM</p>
              <p></p>
              <p class="text-sm font-bold text-Dark900">₺24.000</p>
            </div>
            <div class="flex items-center   ">
              <p class="h-16 w-48 border-2 border-Graydarker pl-9 pt-5 text-sm font-bold text-Dark900">BAKIM</p>
              <p class="h-16 w-48 border-2 border-Graydarker pl-9 pt-5 text-sm font-bold text-Dark900">03.08.2022</p>
              <p class="h-16 w-48 border-2 border-Graydarker pl-9 pt-5 text-sm font-bold text-Dark900">₺1.000</p>
            </div>
            <div class="flex items-center   ">
              <p class="h-16 w-48 border-2 border-Graydarker pl-9 pt-5 text-sm font-bold text-Dark900">SERVİS</p>
              <p class="h-16 w-48 border-2 border-Graydarker pl-9 pt-5 text-sm font-bold text-Dark900">09.08.2022</p>
              <p class="h-16 w-48 border-2 border-Graydarker pl-9 pt-5 text-sm font-bold text-Dark900">₺4.000</p>
            </div>
            <div class="flex items-center   ">
              <p class="h-16 w-48 border-2 border-Graydarker pl-9 pt-5 text-sm font-bold text-Dark900">YAKIT</p>
              <p class="h-16 w-48 border-2 border-Graydarker pl-9 pt-5 text-sm font-bold text-Dark900">17.08.2022</p>
              <p class="h-16 w-48 border-2 border-Graydarker pl-9 pt-5 text-sm font-bold text-Dark900">₺3.000</p>
            </div>
            <div class="flex items-center   ">
              <p class="h-16 w-48 border-2 border-Graydarker pl-9 pt-5 text-sm font-bold text-Dark900">YAKIT</p>
              <p class="h-16 w-48 border-2 border-Graydarker pl-9 pt-5 text-sm font-bold text-Dark900"></p>
              <p class="h-16 w-48 border-2 border-Graydarker pl-9 pt-5 text-sm font-bold text-Dark900">₺2.000</p>
            </div>
            <div class="flex items-center   ">
              <p class="h-16 w-48 border-2 border-Graydarker pl-9 pt-5 text-sm font-bold text-Dark900">YAKIT</p>
              <p class="h-16 w-48 border-2 border-Graydarker pl-9 pt-5 text-sm font-bold text-Dark900"></p>
              <p class="h-16 w-48 border-2 border-Graydarker pl-9 pt-5 text-sm font-bold text-Dark900">₺6.000</p>
            </div>
          </div>
          <div class="relative mt-12 flex w-[490px] items-center justify-end">
            <nav class="flex items-center  ">
              <a class="pl-2" href="/public">
                <svg class="bi bi-chevron-left text-[#717982]" fill="currentColor" height="25" viewBox="0 0 16 16"
                     width="25" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                      fill-rule="evenodd"/>
                </svg>
              </a>
              <img class="pl-2" src="/public-src/Kullanıcı/Frame72.svg">
              <a class="pl-2" href="/public">
                <svg class="bi bi-chevron-right text-[#717982]" fill="currentColor" height="25" viewBox="0 0 16 16"
                     width="25" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      fill-rule="evenodd"/>
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import {defineComponent} from "vue";

export default defineComponent(
    {
      name: "ExpenSes",
      components: ""
    }
)

</script>