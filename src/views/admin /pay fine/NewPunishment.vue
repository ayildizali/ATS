<template>
  <div class="flex h-full w-full items-center justify-between">
    <div class="flex-1">
      <!-- header -->
      <div class="m-auto flex h-32 w-3/4 items-center justify-between">
        <div class="ml-5 flex w-3/4 items-center">
          <router-link to="/payfine"><img class="mr-5" src="/public-src/Kullanıcı/Frame137.svg"></router-link>

          <h2 class="text-4xl font-bold leading-9 text-green-800">
            <router-link to="/payfine">Ceza Ödeme</router-link>

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
            <input-tag
                :required="true"
                inputclass=""
                label="Tebliğ Tarih"
                placeholder="   "
                rowclass=""
                type="date"
            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="Evrak No"
                placeholder="    Evrak No Giriniz..."
                rowclass=""
            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="Plaka"
                placeholder="    Plaka Giriniz..."
                rowclass=""
            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="Ceza Türü"
                placeholder="   Ceza Türü Giriniz..."
                rowclass=""
            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="Ceza Tutarı"
                placeholder="    Ceza Tutarı Giriniz..."
                rowclass=""

            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="Erken Ödeme Tutarı"
                placeholder="    Erken Ödeme Tutarı Giriniz..."
                rowclass=""
            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="Erken Ödeme Karı"
                placeholder="    Erken Ödeme Karı Giriniz..."
                rowclass=""
            />
          </div>
        </div>
        <div class="w-full ">
          <div class=" ">
            <input-tag
                :required="true"
                inputclass=""
                label="Tebliğ Türü"
                placeholder="    Tebliğ Türü Giriniz..."
                rowclass=""
            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="Türü"
                placeholder="    Türü Giriniz..."
                rowclass=""
            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="Borçlu"
                placeholder="    Borçlu Giriniz..."
                rowclass=""
            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="Dekont No"
                placeholder="   Dekont No Giriniz..."
                rowclass=""
            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="Ödeme Tarihi"
                placeholder="    Ödeme Tarihi Giriniz..."
                rowclass=""
                type="date"
            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="Ödeme Yeri"
                placeholder="    Ödeme Durumu Giriniz..."
                rowclass=""
            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="Dekont No"
                placeholder="    Dekont No Giriniz..."
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
            <router-link to="/payfine">Tamamla</router-link>

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