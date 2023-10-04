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
            <img src="/public-src/genel/Frame178(1).svg">
            <p class="mt-2 text-primary"> Sürücü</p>
          </div>
          <img class="mb-4" src="/public-src/genel/Line43.svg">
          <div class="pl-2">
            <img src="/public-src/genel/Frame180(1).svg">
            <p class="mt-2 text-Dark800">Diğer</p>
          </div>
        </div>
      </div>
      <!-- main -->
      <div class="m-auto mt-16 flex w-8/12 items-center justify-between ">
        <div class=" w-full ">
          <div class="mb-16 ">
            <h4 class="flex items-center font-bold leading-5 text-primary">MUAYENE BİLGİLERİ
              <img class="pl-5" src="/public-src/Kullanıcı/Line48.svg"></h4>
            <div class="mb-6 mt-5">
              <input-tag
                  :required="true"
                  inputclass=""
                  label="Yaklaşan Muayene Tarihi"
                  placeholder="    Yaklaşan Muayene Tarihi Giriniz..."
                  rowclass=""
                  type="date"
              />
            </div>
            <div class="mt-6">
              <input-tag
                  :required="true"
                  inputclass=""
                  label="Son Muayene Tarihi"
                  placeholder="    Son Muayene Giriniz..."
                  rowclass=""
                  type="date"
              />
            </div>
            <div class="mt-6">
              <input-tag
                  :required="true"
                  inputclass=""
                  label="Muayene Üçreti"
                  placeholder="    Muayene Üçreti Giriniz..."
                  rowclass=""

              />
            </div>

          </div>
          <div class="mt-14">
            <h4 class="flex items-center font-bold leading-5 text-primary">MTV BİLGİLERİ
              <img class="pl-5" src="/public-src/Kullanıcı/Line48.svg"></h4>
            <div class="mt-6">
              <input-tag
                  :required="true"
                  inputclass=""
                  label="Yaklaşan Ödeme Tarihi"
                  placeholder="    Yaklaşan Ödeme Tarihi Giriniz..."
                  rowclass=""
                  type="date"
              />
            </div>
            <div class="mt-6">
              <input-tag
                  :required="true"
                  inputclass=""
                  label="Son Ödeme Tarihi"
                  placeholder="    Son Ödeme Tarihi Giriniz..."
                  rowclass=""
                  type="date"
              />
            </div>
            <div class="mt-6">
              <input-tag
                  :required="true"
                  inputclass=""
                  label="Son Ödenen Ücret"
                  placeholder="    Son Ödenen Ücret Giriniz..."
                  rowclass=""

              />
            </div>
          </div>
          <div class="mt-24">
            <h4 class="flex items-center font-bold leading-5 text-primary">ARAÇ SERVİS BİLGİLERİ
              <img class="pl-5" src="/public-src/Kullanıcı/Line48.svg"></h4>
            <div class="mt-6">
              <input-tag
                  :required="true"
                  inputclass=""
                  label="Servisler"
                  placeholder="    Servisler Giriniz..."
                  rowclass=""

              />
            </div>
            <div class="mt-6">
              <input-tag
                  :required="true"
                  inputclass=""
                  label="Adres"
                  placeholder="    Adres Giriniz..."
                  rowclass=""

              />
            </div>
            <div class="mt-6">
              <input-tag
                  :required="true"
                  inputclass=""
                  label="Yetkili"
                  placeholder="    Yetkili Giriniz..."
                  rowclass=""

              />
            </div>
            <div class="mt-6">
              <input-tag
                  :required="true"
                  inputclass=""
                  label="Telefon"
                  placeholder="    Telefon Giriniz..."
                  rowclass=""

              />
            </div>
          </div>
        </div>
        <div class="mb-20 w-full">
          <div class="mb-20">
            <h4 class="flex items-center font-bold leading-5 text-primary">SİGORTA BİLGİLERİ
              <img class="pl-5" src="/public-src/Kullanıcı/Line48.svg"></h4>
            <div class="mt-6">
              <input-tag
                  :required="true"
                  inputclass=""
                  label="Yaklaşan Sigorta Tarihi"
                  placeholder="    Yaklaşan Sigorta Tarihi Giriniz..."
                  rowclass=""
                  type="date"
              />
            </div>
            <div class="mt-6">
              <input-tag
                  :required="true"
                  inputclass=""
                  label="Son Sigorta Tarihi"
                  placeholder="    Son Sigorta Tarihi Giriniz..."
                  rowclass=""
                  type="date"
              />
            </div>

            <div class="mt-6">
              <input-tag
                  :required="true"
                  inputclass=""
                  label="Sigorta Ücreti"
                  placeholder="    Sigorta Ücreti Giriniz..."
                  rowclass=""

              />
            </div>

            <div class="mt-6">
              <input-tag
                  :required="true"
                  inputclass=""
                  label="Trafik Sigortası"
                  placeholder="    Trafik Sigortası Giriniz..."
                  rowclass=""

              />
            </div>
            <div class="mt-6">
              <input-tag
                  :required="true"
                  inputclass=""
                  label="Kasko Sİgortası"
                  placeholder="    Kasko Sİgortası Giriniz..."
                  rowclass=""

              />
            </div>
            <div class="mt-6">
              <input-tag
                  :required="true"
                  inputclass=""
                  label="Trafik Sigortası Adi"
                  placeholder="    Trafik Sigortası Adi Giriniz..."
                  rowclass=""

              />
            </div>
            <div class="mt-6">
              <input-tag
                  :required="true"
                  inputclass=""
                  label="Acenta Adı"
                  placeholder="    Acenta Adı Giriniz..."
                  rowclass=""

              />
            </div>
          </div>
          <div class="">
            <h4 class="flex items-center font-bold leading-5 text-primary">GÜNCEL ARAÇ DEĞERİ
              <img class="pl-5" src="/public-src/Kullanıcı/Line48.svg"></h4>
            <div class="mt-6">
              <input-tag
                  :required="true"
                  inputclass=""
                  label="Güncel Fİyat Bakılan Tarih"
                  placeholder="    Güncel Fİyat Bakılan Tarih Giriniz..."
                  rowclass=""
                  type="date"
              />
            </div>
            <div class="mt-6">
              <input-tag
                  :required="true"
                  inputclass=""
                  label="Araç Güncel Değer"
                  placeholder="    Araç Güncel Değer Giriniz..."
                  rowclass=""

              />
            </div>

            <div class="mt-6">
              <input-tag
                  :required="true"
                  inputclass=""
                  label="Alınan Bilgi Linki"
                  placeholder="    Alınan Bilgi Linki Giriniz..."
                  rowclass=""

              />
            </div>
          </div>
        </div>
      </div>
      <div class="m-auto mt-14 flex w-full items-center justify-center">
        <div class=" flex w-10/12 items-center justify-between">
          <button
              class="mb-2 mr-2 flex items-center rounded-lg bg-PrimaryLight px-5 py-2.5 text-sm font-medium text-primary  focus:outline-none focus:ring-2 focus:ring-primary "
              type="button">
            <img class="pr-2 text-white" src="/public-src/genel/LeftRounded.svg">
            <router-link to="newcartwo">Önceki</router-link>
          </button>
          <button
              class="mb-2 mr-2 flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white  focus:outline-none focus:ring-2 focus:ring-primary "
              type="button">
            <router-link
                class="flex items-center" to="/management">
              Tamamla <img class="pl-2 text-white" src="/public-src/genel/Frame(21).svg">
            </router-link>
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