<template>
  <div class="flex h-full w-full items-center justify-between">
    <div class="flex-1">
      <!-- header -->
      <div class="m-auto flex h-32 w-3/4 items-center justify-between">
        <div class="ml-5 flex w-3/4 items-center">
          <img class="mr-5" src="/public-src/Kullanıcı/Frame137.svg">
          <h2 class="text-4xl font-bold leading-9 text-green-800">
            Araç Yönetimi
          </h2>
          <h4 class="ml-8 text-base font-medium text-[#717982]"> / Yeni araç </h4>
        </div>

        <div class="flex items-center">
          <nav class="pr-3">
            <img src="/public-src/Kullanıcı/Frame(12).svg">
          </nav>
          <p class="text-sm font-semibold text-gray-500">Muhammed Ali Ay </p>
        </div>
      </div>
      <!-- content-->
      <div class="m-auto flex w-3/4 items-center justify-center">
        <div class="flex items-center justify-between">
          <div class="pr-2">
            <img src="/public-src/genel/Frame178.svg">
            <p class="mt-2 text-primary">Araç</p>
          </div>
          <img class="mb-4" src="/public-src/genel/Line43.svg">
          <div class="pl-2">
            <img src="/public-src/genel/Frame179.svg">
            <p class="mt-2 text-Dark800"> Sürücü</p>
          </div>
          <img class="mb-4" src="/public-src/genel/Line43.svg">
          <div class="pl-2">
            <img src="/public-src/genel/Frame180.svg">
            <p class="mt-2 text-Dark800">Diğer</p>
          </div>
        </div>
      </div>
      <!-- main -->
      <div class=" m-auto mt-16 flex w-11/12 items-center justify-between">
        <div class="mb-20 ml-32 w-full">
          <div class=" ">
            <p class="pl-5 text-Dark">Plaka</p>
            <div class="h-10 w-3/4 rounded-xl border border-Graydarker  ">
              <div class="flex items-center ">
                <p class="pl-10 pt-2"></p>
              </div>
            </div>
          </div>
          <div class="mt-6">
            <p class="pl-5 text-Dark">Araç Türü</p>
            <div class="h-10 w-3/4 rounded-xl border border-Graydarker ">
              <div class="flex items-center ">
                <p class="pl-10 pt-2"></p>
              </div>
            </div>
          </div>
          <div class="mt-6">
            <p class="pl-5 text-Dark">Yakıt Cinsi</p>
            <div class="h-10 w-3/4 rounded-xl border border-Graydarker">
              <div class="flex items-center ">
                <p class="pl-10 pt-2"></p>
              </div>
            </div>
          </div>
          <div class="mt-6">
            <p class="pl-5 text-Dark">Ruhsat Sahibi</p>
            <div class="h-10 w-3/4 rounded-xl border border-Graydarker ">
              <div class="flex items-center ">
                <p class="pl-10 pt-2"></p>
              </div>
            </div>
          </div>
          <div class="mt-6">
            <p class="pl-5 text-Dark">Araç Alış Tarihi</p>
            <div class="h-10 w-3/4 rounded-xl border border-Graydarker ">
              <div class="flex items-center ">
                <p class="pl-10 pt-2"></p>
              </div>
            </div>
          </div>
          <div class="mt-6">
            <p class="pl-5 text-Dark">Km Son Durum Tarihi</p>
            <div class="h-10 w-3/4 rounded-xl border border-Graydarker ">
              <div class="flex items-center ">
                <p class="pl-10 pt-2"></p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full ">
          <div class="">
            <p class="pl-5 text-Dark">Araç Markası </p>
            <div class="h-10 w-3/4 rounded-xl border border-Graydarker">
              <p class="pl-10 pt-2"></p>
            </div>
          </div>
          <div class="mt-6">
            <p class="pl-5 text-Dark">Araç Model</p>
            <div class="h-10 w-3/4 rounded-xl border border-Graydarker">
              <p class="pl-10 pt-2"></p>
            </div>
          </div>
          <div class="mt-6">
            <p class="pl-5 text-Dark">Ruhsat Seri No.</p>
            <div class="h-10 w-3/4 rounded-xl border border-Graydarker">
              <p class="pl-10 pt-2"></p>
            </div>
          </div>
          <div class="mt-6">
            <p class="pl-5 text-Dark">Ruhsat Örneği</p>
            <div class="h-10 w-3/4 rounded-xl border border-Graydarker">
              <p class="pl-10 pt-2"></p>
            </div>
          </div>
          <div class="mt-6">
            <p class="pl-5 text-Dark">Toplam Masraf</p>
            <div class="h-10 w-3/4 rounded-xl border border-Graydarker">
              <p class="pl-10 pt-2"></p>
            </div>
          </div>
          <div class="mt-6">
            <p class="pl-5 text-Dark">Araç Alış Bedeli</p>
            <div class="h-10 w-3/4 rounded-xl border border-Graydarker">
              <p class="pl-10 pt-2"></p>
            </div>
          </div>
          <div class="mt-6">
            <p class="pl-5 text-Dark">KM Son Durum </p>
            <div class="h-10 w-3/4 rounded-xl border border-Graydarker">
              <p class="pl-10 pt-2"></p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-14 flex w-full items-center justify-center">
        <div class="m-auto mr-44 flex w-11/12 items-center justify-end">
          <button
              class="mb-2 mr-2 flex items-center rounded-lg bg-PrimaryLight px-5 py-2.5 text-sm font-medium text-primary  focus:outline-none focus:ring-2 focus:ring-primary "
              type="button">
            <router-link to="/newcartwo">Sonraki</router-link>
            <img class="pl-2 text-white" src="/public-src/genel/RightRounded.svg">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent(
    {
      name: "NewPunisHment",
      components: ""
    }
)
</script>