<template>
  <div class="flex h-full w-full items-center justify-between">
    <div class="flex-1">
      <!-- header -->
      <div class="m-auto flex h-32 w-3/4 items-center justify-between">
        <div class="ml-5 flex w-3/4 items-center">
          <router-link to="/management"><img class="mr-5" src="/public-src/Kullanıcı/Frame137.svg"></router-link>
          <h2 class="text-4xl font-bold leading-9 text-green-800">
            <router-link to="/management">Araç Yönetimi</router-link>
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
            <img src="/public-src/genel/Frame178(1).svg">
            <p class="mt-2 text-primary">Araç</p>
          </div>
          <img class="mb-4" src="/public-src/genel/Line43(1).svg">
          <div class="pl-2">
            <img src="/public-src/genel/Frame179.svg">
            <p class="mt-2 text-primary"> Sürücü</p>
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
        <div class=" ml-32 w-full">
          <div class=" ">
            <input-tag
                :required="true"
                inputclass=""
                label="Adı Soyadı"
                placeholder="    Adı Soyadı Giriniz..."
                rowclass=""

            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="T.C. No."
                placeholder="    T.C. No. Giriniz..."
                rowclass=""

            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="Telefon Bilgileri"
                placeholder="    Telefon Bilgileri Giriniz..."
                rowclass=""

            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="E-Mail Bilgileri"
                placeholder="   E-Mail Bilgileri Giriniz..."
                rowclass=""

            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="İkamet Ettiği İl"
                placeholder="    İkamet Ettiği İl Giriniz..."
                rowclass=""

            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="Taşıt Tanıma Durumu"
                placeholder="    Taşıt Tanıma Durumu Giriniz..."
                rowclass=""

            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="Taşıt Tanıma Limit Tutarı"
                placeholder="    Taşıt Tanıma Limit Tutarı Giriniz..."
                rowclass=""

            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="Araç Edinme Tarihi"
                placeholder=""
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
                label="Bağlı Olduğu Birim Adı"
                placeholder="    Bağlı Olduğu Birim Adı Giriniz..."
                rowclass=""

            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="Bulunduğu Yer (İl-İlçe)"
                placeholder="    Bulunduğu Yer (İl-İlçe) Giriniz..."
                rowclass=""

            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="Proje Kodu"
                placeholder="    Proje Kodu Giriniz..."
                rowclass=""

            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="IRD Kodu"
                placeholder="    IRD Kodu Giriniz..."
                rowclass=""

            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="Trafik Sigortası, Bakım ve Diğer Giderleri Ödeme Mükellefi"
                placeholder="    Trafik Sigortası, Bakım ve Diğer Giderleri Ödeme Mükellefi Giriniz..."
                rowclass=""

            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="HGS-OGS-KGS Ödeme Mükellefi"
                placeholder="    HGS-OGS-KGS Ödeme Mükellefi Giriniz..."
                rowclass=""

            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="Trafik Cezası Ödeme Mükellefi"
                placeholder="    Trafik Cezası Ödeme Mükellefi Giriniz..."
                rowclass=""

            />
          </div>
          <div class="mt-6">
            <input-tag
                :required="true"
                inputclass=""
                label="Önceki Kullanıcı"
                placeholder="    Önceki Kullanıcı Giriniz..."
                rowclass=""

            />
          </div>
        </div>
      </div>
      <div class="m-auto mt-14 flex w-full items-center justify-center">
        <div class=" flex w-10/12 items-center justify-between">
          <button
              class="mb-2 mr-2 flex items-center rounded-lg bg-PrimaryLight px-5 py-2.5 text-sm font-medium text-primary  focus:outline-none focus:ring-2 focus:ring-primary "
              type="button">
            <img class="pr-2 text-white" src="/public-src/genel/LeftRounded.svg">
            <router-link to="newcar">önceki</router-link>
          </button>
          <button
              class="mb-2 mr-2 flex items-center rounded-lg bg-PrimaryLight px-5 py-2.5 text-sm font-medium text-primary  focus:outline-none focus:ring-2 focus:ring-primary "
              type="button">
            <router-link to="/newcarthree">Sonraki</router-link>
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