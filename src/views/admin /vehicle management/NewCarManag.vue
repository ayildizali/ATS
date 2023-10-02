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
                label="Araç Türü"
                placeholder="    Araç Türü Giriniz..."
                rowclass=""

            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="Yakıt Cinsi"
                placeholder="    Yakıt Cınsi Giriniz..."
                rowclass=""

            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="Ruhsat Sahibi"
                placeholder="    Ruhsat Sahibi Giriniz..."
                rowclass=""

            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="Araç Alış Tarihi"
                placeholder="    Araç Alış Tarihi Giriniz..."
                rowclass=""

            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="KM Son Durum Tarihi"
                placeholder="    KM Son Durum Tarihi Giriniz..."
                rowclass=""
                type="date"

            />
          </div>
        </div>
        <div class="w-full ">
          <div class="">
            <input-tag
                :required="true"
                inputclass=""
                label="Araç Markası"
                placeholder="    Araç Markası Giriniz..."
                rowclass=""

            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="Araç Model"
                placeholder="    Araç Model Giriniz..."
                rowclass=""

            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="Ruhsat Seri No."
                placeholder="    Ruhsat Seri No. Giriniz..."
                rowclass=""

            />
          </div>
          <div class="mt-6">

            <input-tag
                :required="true"
                inputclass=""
                label="Ruhsat Örneği"
                placeholder="    Ruhsat Örneği Giriniz..."
                rowclass=""

            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="Toplam Masraf"
                placeholder="    Toplam Masraf Giriniz..."
                rowclass=""

            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="Araç Alış Bedeli"
                placeholder="    Araç Alış Bedeli Giriniz..."
                rowclass=""

            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="KM Son Durumu"
                placeholder="   KM Son Durumu Giriniz..."
                rowclass=""

            />
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
import inputTag from "../../../components/custom/input.tag.vue";

export default {
  components: {inputTag}
}
</script>