<style scoped>
.title-line {
  color: #1E724A;
  border-bottom-color: #1E724A;
  opacity: 5;
  transform: scaleX(1);
  transform-origin: left;
}
</style>
<template>
  <div class="mt-0 flex h-full w-full items-center justify-between">
    <div class="flex-1">
      <!-- header -->
      <div class="m-auto flex h-32 w-3/4 items-center justify-between">
        <div class="ml-5 flex w-3/4 items-center">
          <router-link to=""><img class="mr-5" src="/public-src/Kullanıcı/Frame137.svg"></router-link>
          <h2 class="text-4xl font-bold leading-9 text-green-800">
            <router-link to="">Araçlarım</router-link>
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
      <div class="m-auto flex h-20 w-3/4 items-center rounded-xl border-2 border-solid border-primary">
        <div class="m-auto flex w-3/4 items-center justify-between text-Dark800">
          <RouterLink
              class=" title-line inline-block rounded-t-lg border-b-2 border-transparent font-bold hover:border-primary hover:text-primary"
              to="/vehicle">ARAÇLARIM
          </RouterLink>
          <router-link
              class="inline-block rounded-t-lg border-b-2 border-transparent font-bold hover:border-primary hover:text-primary"
              to="/userinfo">KULLANICI BİLGİLERİ
          </router-link>
          <router-link
              class="inline-block rounded-t-lg border-b-2 border-transparent font-bold hover:border-primary hover:text-primary"
              to="/otherinfo">DİĞER BİLGİLER
          </router-link>
          <router-link
              class="inline-block rounded-t-lg border-b-2 border-transparent font-bold hover:border-primary hover:text-primary"
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
      <div class="m-auto mt-16 flex w-3/4 items-center justify-between">
        <div class="ml-20 flex w-full items-center justify-around">
          <div class="w-full">
            <div class="">
              <p class="pl-5 text-Dark ">Plaka</p>
              <div class="h-10 w-3/4 rounded-xl bg-GrayLighter ">
                <div class="flex items-center ">
                  <p class="pl-10 pt-2"> 34 HYD 1234 </p>
                </div>
              </div>
            </div>
            <div class="mt-6">
              <p class="pl-5 text-Dark">Araç Türü</p>
              <div class="h-10 w-3/4 rounded-xl bg-GrayLighter ">
                <div class="flex items-center ">
                  <p class="pl-10 pt-2"> Otomobil </p>
                </div>
              </div>
            </div>
            <div class="mt-6">
              <p class="pl-5 text-Dark">Yakıt Cinsi</p>
              <div class="h-10 w-3/4 rounded-xl bg-GrayLighter">
                <div class="flex items-center ">
                  <p class="pl-10 pt-2"> Benzinli</p>
                </div>
              </div>
            </div>
            <div class="mt-6">
              <p class="pl-5 text-Dark">Ruhsat Sahibi</p>
              <div class="h-10 w-3/4 rounded-xl bg-GrayLighter ">
                <div class="flex items-center ">
                  <p class="pl-10 pt-2"> HYİD </p>
                </div>
              </div>
            </div>
            <div class="mt-6">
              <p class="pl-5 text-Dark">dont</p>
              <div class="h-10 w-3/4 rounded-xl bg-GrayLighter ">
                <div class="flex items-center ">
                  <p class="pl-10 pt-2"> dont </p>
                </div>
              </div>
            </div>
            <div class="mt-6">
              <p class="pl-5 text-Dark">Araç Alış Tarihi</p>
              <div class="h-10 w-3/4 rounded-xl bg-GrayLighter ">
                <div class="flex items-center ">
                  <p class="pl-10 pt-2"> 13.09.2022 </p>
                </div>
              </div>
            </div>
            <div class="mt-6">
              <p class="pl-5 text-Dark">KM Son Durum Tarihi</p>
              <div class="h-10 w-3/4 rounded-xl bg-GrayLighter ">
                <div class="flex items-center ">
                  <p class="pl-10 pt-2">14.09.2023 </p>
                </div>
              </div>
            </div>

          </div>
          <div class="w-full">
            <div class="">
              <p class="pl-5 text-Dark">Araç Markası</p>
              <div class="h-10 w-3/4 rounded-xl bg-GrayLighter">
                <p class="pl-10 pt-2">Volkswagen 1.4 Chrome Edition Polo</p>
              </div>
            </div>
            <div class="mt-6">
              <p class="pl-5 text-Dark">Araç Model</p>
              <div class="h-10 w-3/4 rounded-xl bg-GrayLighter">
                <p class="pl-10 pt-2">2013</p>
              </div>
            </div>

            <div class="mt-6">
              <p class="pl-5 text-Dark">Ruhsat Seri NO</p>
              <div class="h-10 w-3/4 rounded-xl bg-GrayLighter">
                <p class="pl-10 pt-2">GE-232425</p>
              </div>
            </div>

            <div class="mt-6">
              <p class="pl-5 text-Dark">Ruhsat Örneği</p>
              <div class="h-10 w-3/4 rounded-xl bg-GrayLighter pl-10 pt-2">
                <a class="font-medium text-blue-600  hover:underline" href="#">https://www.resmigazete.gov.tr/.pdf</a>
              </div>
            </div>
            <div class="mt-6">
              <p class="pl-5 text-Dark">Toplam Masraf</p>
              <div class="h-10 w-3/4 rounded-xl bg-GrayLighter">
                <p class="pl-10 pt-2">₺ 35.890 </p>
              </div>
            </div>
            <div class="mt-6">
              <p class="pl-5 text-Dark">Araç Alış Bedeli</p>
              <div class="h-10 w-3/4 rounded-xl bg-GrayLighter">
                <p class="pl-10 pt-2"> ₺ 100.000,00</p>
              </div>
            </div>
            <div class="mt-6">
              <p class="pl-5 text-Dark">KM Son Durum</p>
              <div class="h-10 w-3/4 rounded-xl bg-GrayLighter">
                <p class="pl-10 pt-2">104.000 KM</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>

</template>
<style scoped>

</style>

<script>


import {defineComponent} from "vue";

export default defineComponent({
  components: {}
})
</script>