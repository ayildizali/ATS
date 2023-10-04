<template>
  <div class="flex h-full w-full items-center justify-between">
    <div class="flex-1">
      <!-- header -->
      <div class="m-auto flex h-32 w-3/4 items-center justify-between">
        <div class="ml-5 flex w-3/4 items-center">
          <router-link to="/otherexpenses"><img class="mr-5" src="/public-src/Kullanıcı/Frame137.svg"></router-link>

          <h2 class="text-4xl font-bold leading-9 text-green-800">
            <router-link to="/otherexpenses">Diğer Harcamalar</router-link>

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
            <input-tag
                :required="true"
                inputclass=""
                label="Tarih"
                placeholder="     Tarih Giriniz..."
                rowclass=""
                type="date"
            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="Plaka"
                placeholder="     Plaka Giriniz..."
                rowclass=""
            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="Araç Kullanıcısı"
                placeholder="     Araç Kullanıcısı Giriniz..."
                rowclass=""
            />
          </div>
          <div class="mt-6">

            <input-tag
                :required="true"
                inputclass=""
                label="İL"
                placeholder="    İL Giriniz..."
                rowclass=""
            />
          </div>
        </div>
        <div class="mt-14 w-full ">
          <div class="">
            <input-tag
                :required="true"
                inputclass=""
                label="Fatura"
                placeholder="     Fatura Giriniz..."
                rowclass=""
            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="Harcama Türü"
                placeholder="     Harcama Türü Giriniz..."
                rowclass=""
            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="Fatura Tutarı"
                placeholder="     Fatura Tutarı Giriniz..."
                rowclass=""
            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass="h-24 border-2 border-Graydarker w-[370px] rounded-xl"
                label="Açiklama"
                placeholder="     Açıklama Giriniz..."
                rowclass=""
            />
          </div>
        </div>
      </div>
      <div class="mt-14 flex w-full items-center justify-center">
        <div class=" mr-44 flex w-2/3 items-center justify-end">
          <button
              class="mb-2 mr-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white  focus:outline-none focus:ring-2 focus:ring-primary "
              type="button">
            <router-link to="/otherexpenses"> Düzenle</router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import inputTag from "../../../components/custom/input.tag.vue";

export default {
  components: {inputTag}
}
</script>