<template>
  <div class="flex h-full w-full items-center justify-between">
    <div class="flex-1">
      <!-- header -->
      <div class="m-auto flex h-32 w-3/4 items-center justify-between">
        <div class="ml-5 flex w-3/4 items-center">
          <img class="mr-5" src="/public-src/Kullanıcı/Frame137.svg">
          <h2 class="text-4xl font-bold leading-9 text-green-800">
            Diğer Harcamalar
          </h2>
          <h4 class="ml-8 text-base font-medium text-[#717982]"> / Düzenle </h4>
        </div>
        <div class="flex items-center">
          <nav class="pr-3">
            <img src="/public-src/Kullanıcı/Frame(12).svg">
          </nav>
          <p class="text-sm font-semibold text-gray-500">Muhammed Ali Ay </p>
        </div>
      </div>
      <!-- content-->
      <!-- main -->
      <div class=" m-auto mt-16 flex w-3/4 items-center justify-between">
        <div class="ml-32 mt-0  w-full">
          <div class=" ">
            <p class="pl-5 text-Dark"> Tarih</p>
            <div class="h-10 w-3/4 rounded-xl border border-Graydarker  ">
              <div class="flex items-center ">
                <p class="pl-10 pt-2"></p>
              </div>
            </div>
          </div>
          <div class="mt-6">
            <p class="pl-5 text-Dark">Plaka</p>
            <div class="h-10 w-3/4 rounded-xl border border-Graydarker ">
              <div class="flex items-center ">
                <p class="pl-10 pt-2"></p>
              </div>
            </div>
          </div>
          <div class="mt-6">
            <p class="pl-5 text-Dark">Araç Kullnıcısı</p>
            <div class="h-10 w-3/4 rounded-xl border border-Graydarker">
              <div class="flex items-center ">
                <p class="pl-10 pt-2"></p>
              </div>
            </div>
          </div>
          <div class="mt-6">
            <p class="pl-5 text-Dark">İl </p>
            <div class="h-10 w-3/4 rounded-xl border border-Graydarker ">
              <div class="flex items-center ">
                <p class="pl-10 pt-2"></p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full ">
          <div class="">
            <p class="pl-5 text-Dark">Fatura</p>
            <div class="h-10 w-3/4 rounded-xl border border-Graydarker">
              <p class="pl-10 pt-2"></p>
            </div>
          </div>
          <div class="mt-6">
            <p class="pl-5 text-Dark">Harcama Türü</p>
            <div class="h-10 w-3/4 rounded-xl border border-Graydarker">
              <p class="pl-10 pt-2"></p>
            </div>
          </div>
          <div class="mt-6">
            <p class="pl-5 text-Dark">Fatura Tutarı</p>
            <div class="h-10 w-3/4 rounded-xl border border-Graydarker">
              <p class="pl-10 pt-2"></p>
            </div>
          </div>
          <div class="mt-6">
            <p class="pl-5 text-Dark">Açıklama</p>
            <div class="h-10 w-3/4 rounded-xl border border-Graydarker">
              <p class="pl-10 pt-2"></p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-14 flex w-full items-center justify-center">
        <div class=" mr-44 flex w-2/3 items-center justify-end">
          <button
              class="mb-2 mr-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white  focus:outline-none focus:ring-2 focus:ring-primary "
              type="button">
            Düzenle
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
      name: "EditSpanding",
      components: ""
    }
)
</script>