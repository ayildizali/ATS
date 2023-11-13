<style scoped>
.title-line {

  border-bottom-color: #1E724A;
  opacity: 5;
  transform: scaleX(1);
  transform-origin: left;
}
</style>
<template>
  <div class=" m-auto mt-0 flex h-full w-full items-center justify-between">
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
              class="inline-block rounded-t-lg border-b-2 border-transparent font-bold hover:border-primary hover:text-primary"
              to="/vehicle">ARAÇLARIM
          </RouterLink>
          <router-link
              class=" title-line inline-block rounded-t-lg border-b-2 border-transparent font-bold hover:border-primary hover:text-primary"
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
        <div class="ml-20 w-full">
          <div class=" ">
            <p class="pl-5 text-Dark">Adı Soyadı</p>
            <div class="h-10 w-3/4 rounded-xl bg-GrayLighter ">
              <div class="flex items-center ">
                <p class="pl-10 pt-2"> Kerem Baha Apuhan</p>
              </div>
            </div>
          </div>
          <div class="mt-6">
            <p class="pl-5 text-Dark">T.C NO</p>
            <div class="h-10 w-3/4 rounded-xl bg-GrayLighter ">
              <div class="flex items-center ">
                <p class="pl-10 pt-2"> 12345678910 </p>
              </div>
            </div>
          </div>
          <div class="mt-6">
            <p class="pl-5 text-Dark">Telefon Bilgileri</p>
            <div class="h-10 w-3/4 rounded-xl bg-GrayLighter ">
              <div class="flex items-center ">
                <p class="pl-10 pt-2"> 555 555 55 55</p>
              </div>
            </div>
          </div>
          <div class="mt-6">
            <p class="pl-5 text-Dark">E-Mail Bilgileri</p>
            <div class="h-10 w-3/4 rounded-xl bg-GrayLighter ">
              <div class="flex items-center ">
                <p class="pl-10 pt-2"> admin123@gmail.com </p>
              </div>
            </div>
          </div>
          <div class="mt-6">
            <p class="pl-5 text-Dark"> İkamet Ettiği İl</p>
            <div class="h-10 w-3/4 rounded-xl bg-GrayLighter ">
              <div class="flex items-center ">
                <p class="pl-10 pt-2"> Ankara </p>
              </div>
            </div>
          </div>
          <div class="mt-6">
            <p class="pl-5 text-Dark">Taşıt Tanıma Durumu</p>
            <div class="h-10 w-3/4 rounded-xl bg-GrayLighter ">
              <div class="flex items-center ">
                <p class="pl-10 pt-2"> Var </p>
              </div>
            </div>
          </div>
          <div class="mt-6">
            <p class="pl-5 text-Dark">Taşıt Tanıma Limit Tutarı</p>
            <div class="h-10 w-3/4 rounded-xl bg-GrayLighter ">
              <div class="flex items-center ">
                <p class="pl-10 pt-2">14.09.2023 </p>
              </div>
            </div>
          </div>
          <div class="mt-6">
            <p class="pl-5 text-Dark">Araç Edinim Tarihi</p>
            <div class="h-10 w-3/4 rounded-xl bg-GrayLighter ">
              <div class="flex items-center ">
                <p class="pl-10 pt-2">14.09.2023 </p>
              </div>
            </div>
          </div>

        </div>
        <div class="w-full ">
          <div class="">
            <p class="pl-5 text-Dark">Bağlı Olduğu Birim Adı</p>
            <div class="h-10 w-3/4 rounded-xl bg-GrayLighter">
              <p class="pl-10 pt-2">Genel Merkez</p>
            </div>
          </div>
          <div class="mt-6">
            <p class="pl-5 text-Dark">Bulunduğu Yer (İl-İlçe)</p>
            <div class="h-10 w-3/4 rounded-xl bg-GrayLighter">
              <p class="pl-10 pt-2">Genel Merkez - Ankara</p>
            </div>
          </div>

          <div class="mt-6">
            <p class="pl-5 text-Dark">Proje Kodu</p>
            <div class="h-10 w-3/4 rounded-xl bg-GrayLighter">
              <p class="pl-10 pt-2">2022-EMR-GEN-TR-102</p>
            </div>
          </div>

          <div class="mt-6">
            <p class="pl-5 text-Dark">IRD Kodu</p>
            <div class="h-10 w-3/4 rounded-xl bg-GrayLighter">
              <p class="pl-10 pt-2">IRD1025</p>
            </div>
          </div>
          <div class="mt-6">
            <p class="pl-5 text-Dark">Trafik Sigortası, Bakım ve Diğer Giderleri Ödeme Mükellefi</p>
            <div class="h-10 w-3/4 rounded-xl bg-GrayLighter">
              <p class="pl-10 pt-2">Dernek</p>
            </div>
          </div>
          <div class="mt-6">
            <p class="pl-5 text-Dark">HGS-OGS-KGS Ödeme Mükellefi</p>
            <div class="h-10 w-3/4 rounded-xl bg-GrayLighter">
              <p class="pl-10 pt-2">Dernek</p>
            </div>
          </div>
          <div class="mt-6">
            <p class="pl-5 text-Dark">Trafik Cezası Ödeme Mükellefi</p>
            <div class="h-10 w-3/4 rounded-xl bg-GrayLighter">
              <p class="pl-10 pt-2">Kendisi</p>
            </div>
          </div>
          <div class="mt-6">
            <p class="pl-5 text-Dark">Önceki Kullanıcı</p>
            <div class="h-10 w-3/4 rounded-xl bg-GrayLighter">
              <p class="pl-10 pt-2">Muhammed Ali Ay</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

</script>