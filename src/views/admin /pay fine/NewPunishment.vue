<template>
  <div class="flex h-full w-full items-center justify-between">
    <div class="flex-1">
      <!-- header -->
      <div class="m-auto flex h-32 w-3/4 items-center justify-between">
        <div class="ml-5 flex w-3/4 items-center">
          <img class="mr-5" src="/public-src/Kullanıcı/Frame137.svg">
          <h2 class="text-4xl font-bold leading-9 text-green-800">
            Ceza Ödeme
          </h2>
          <h4 class="ml-8 text-base font-medium text-[#717982]"> / Yeni Ceza </h4>
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
        <div class="ml-32 w-full">
          <div class=" ">
            <p class="text-Dark">Tebliğ Tarihi*</p>
            <div class="h-10 w-3/4 rounded-xl border border-Graydarker  ">
              <div class="flex items-center ">
                <p class="pl-10 pt-2"></p>
              </div>
            </div>
          </div>
          <div class="mt-6">
            <p class="text-Dark">Evrak No</p>
            <div class="h-10 w-3/4 rounded-xl border border-Graydarker ">
              <div class="flex items-center ">
                <p class="pl-10 pt-2"></p>
              </div>
            </div>
          </div>
          <div class="mt-6">
            <p class="text-Dark">Plaka</p>
            <div class="h-10 w-3/4 rounded-xl border border-Graydarker">
              <div class="flex items-center ">
                <p class="pl-10 pt-2"></p>
              </div>
            </div>
          </div>
          <div class="mt-6">
            <p class="text-Dark">Ceza Türü </p>
            <div class="h-10 w-3/4 rounded-xl border border-Graydarker ">
              <div class="flex items-center ">
                <p class="pl-10 pt-2"></p>
              </div>
            </div>
          </div>
          <div class="mt-6">
            <p class="text-Dark">Ceza Tutarı</p>
            <div class="h-10 w-3/4 rounded-xl border border-Graydarker ">
              <div class="flex items-center ">
                <p class="pl-10 pt-2"></p>
              </div>
            </div>
          </div>
          <div class="mt-6">
            <p class="text-Dark">Evrak Ödeme Tutarı</p>
            <div class="h-10 w-3/4 rounded-xl border border-Graydarker ">
              <div class="flex items-center ">
                <p class="pl-10 pt-2"></p>
              </div>
            </div>
          </div>
          <div class="mt-6">
            <p class="text-Dark">Erken Ödeme Karı</p>
            <div class="h-10 w-3/4 rounded-xl border border-Graydarker bg-Graydarker ">
              <div class="flex items-center ">
                <p class="pl-10 pt-2"></p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full ">
          <div class="">
            <p class="text-Dark">Tebliğ Türü</p>
            <div class="h-10 w-3/4 rounded-xl border border-Graydarker">
              <p class="pl-10 pt-2"></p>
            </div>
          </div>
          <div class="mt-6">
            <p class="text-Dark">Türü</p>
            <div class="h-10 w-3/4 rounded-xl border border-Graydarker">
              <p class="pl-10 pt-2"></p>
            </div>
          </div>

          <div class="mt-6">
            <p class="text-Dark">Borçlu</p>
            <div class="h-10 w-3/4 rounded-xl border border-Graydarker">
              <p class="pl-10 pt-2"></p>
            </div>
          </div>

          <div class="mt-6">
            <p class="text-Dark">Dekont No</p>
            <div class="h-10 w-3/4 rounded-xl border border-Graydarker">
              <p class="pl-10 pt-2"></p>
            </div>
          </div>
          <div class="mt-6">
            <p class="text-Dark">Ödeme Tarihi</p>
            <div class="h-10 w-3/4 rounded-xl border border-Graydarker">
              <p class="pl-10 pt-2"></p>
            </div>
          </div>
          <div class="mt-6">
            <p class="text-Dark">Ödeme Yeri</p>
            <div class="h-10 w-3/4 rounded-xl border border-Graydarker">
              <p class="pl-10 pt-2"></p>
            </div>
          </div>
          <div class="mt-6">
            <p class="text-Dark">Ödeme Durumu</p>
            <div class="h-10 w-3/4 rounded-xl border border-Graydarker">
              <p class="pl-10 pt-2"></p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-14 flex w-full items-center justify-center">
        <div class=" mr-44 flex w-2/3 items-center justify-end">
          <button class="mb-2 mr-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white  focus:outline-none focus:ring-2 focus:ring-primary "
                  type="button">
            Tamamla
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