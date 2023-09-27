<template>
  <div class="m-auto flex w-full items-center justify-between">
    <div class="flex-1">
      <!-- header -->
      <div class="m-auto flex h-32 w-3/4 items-center justify-between">
        <div class="ml-5 flex w-3/4 items-center">
          <img class="mr-5" src="/public-src/Kullanıcı/Frame137.svg">
          <h2 class="text-4xl font-bold leading-9 text-green-800">
            Araçlarım
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
        <div class="m-auto flex w-3/4 items-center justify-between text-[#717982]">
          <RouterLink
              class="inline-block rounded-t-lg border-b-2 border-transparent font-bold hover:border-primary hover:text-primary"
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
      <div class="m-60 mt-16 flex w-3/4 items-center  justify-between ">
        <div class="ml-16 w-full ">
          <div class="mb-16">
            <h4 class="flex items-center font-bold leading-5 text-primary">MUAYENE BİLGİLERİ
              <img class="pl-5" src="/public-src/Kullanıcı/Line48.svg"></h4>
            <div class="mb-6 mt-5">
              <p class="text-Dark ">Yaklaşan Muayene Tarihi*</p>
              <div class="h-10 w-3/4 rounded-xl bg-GrayLighter ">
                <div class="flex items-center ">
                  <p class="pl-10 pt-2"> 34 HYD 1234 </p>
                </div>
              </div>
            </div>
            <div class="mt-6">
              <p class="text-Dark">Son Muayene Tarihi*</p>
              <div class="h-10 w-3/4 rounded-xl bg-GrayLighter ">
                <div class="flex items-center ">
                  <p class="pl-10 pt-2"> 19.05.2024 </p>
                </div>
              </div>
            </div>
            <div class="mt-6">
              <p class="text-Dark">Muayene Ücreti</p>
              <div class="h-10 w-3/4 rounded-xl bg-GrayLighter ">
                <div class="flex items-center ">
                  <p class="pl-10 pt-2">₺475,00</p>
                </div>
              </div>
            </div>

          </div>
          <div class="mt-14">
            <h4 class="flex items-center font-bold leading-5 text-primary">MTV BİLGİLERİ
              <img class="pl-5" src="/public-src/Kullanıcı/Line48.svg"></h4>
            <div class="mt-6">
              <p class="text-Dark">Yaklaşan Ödeme Tarihi*</p>
              <div class="h-10 w-3/4 rounded-xl bg-GrayLighter ">
                <div class="flex items-center ">
                  <p class="pl-10 pt-2">13.12.2023</p>
                </div>
              </div>
            </div>
            <div class="mt-6">
              <p class="text-Dark"> Son Ödeme Tarihi*</p>
              <div class="h-10 w-3/4 rounded-xl bg-GrayLighter ">
                <div class="flex items-center ">
                  <p class="pl-10 pt-2">13.09.2023</p>
                </div>
              </div>
            </div>
            <div class="mt-6">
              <p class="text-Dark">Son Ödenen Ücret</p>
              <div class="h-10 w-3/4 rounded-xl bg-GrayLighter ">
                <div class="flex items-center ">
                  <p class="pl-10 pt-2"> ₺1.661,50</p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-14">
            <h4 class="flex items-center font-bold leading-5 text-primary">ARAÇ SERVİS BİLGİLERİ
              <img class="pl-5" src="/public-src/Kullanıcı/Line48.svg"></h4>
            <div class="mt-6">
              <p class="text-Dark">Servisler </p>
              <div class="h-10 w-3/4 rounded-xl bg-GrayLighter ">
                <div class="flex items-center ">
                  <p class="pl-10 pt-2"> Giray Yetkili Servis </p>
                </div>
              </div>
            </div>
            <div class="mt-6">
              <p class="text-Dark">Adres</p>
              <div class="h-10 w-3/4 rounded-xl bg-GrayLighter ">
                <div class="flex items-center ">
                  <p class="pl-10 pt-2">Garyberli Mah. 12 Şubat İlçesi </p>
                </div>
              </div>
            </div>
            <div class="mt-6">
              <p class="text-Dark">Yetkili</p>
              <div class="h-10 w-3/4 rounded-xl bg-GrayLighter ">
                <div class="flex items-center ">
                  <p class="pl-10 pt-2">Damla Hanım</p>
                </div>
              </div>
            </div>
            <div class="mt-6">
              <p class="text-Dark">Telefon</p>
              <div class="h-10 w-3/4 rounded-xl bg-GrayLighter ">
                <div class="flex items-center ">
                  <p class="pl-10 pt-2">0344 236 16 25</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full">
          <div class="mb-16">
            <h4 class="flex items-center font-bold leading-5 text-primary">SİGORTA BİLGİLERİ
              <img class="pl-5" src="/public-src/Kullanıcı/Line48.svg"></h4>
            <div class="mt-6">
              <p class="text-Dark">Yaklaşan Sigorta Tarihi*</p>
              <div class="h-10 w-3/4 rounded-xl bg-GrayLighter">
                <p class="pl-10 pt-2">13.09.2023</p>
              </div>
            </div>
            <div class="mt-6">
              <p class="text-Dark">Son Sigorta Tarihi*</p>
              <div class="h-10 w-3/4 rounded-xl bg-GrayLighter">
                <p class="pl-10 pt-2">13.09.2023</p>
              </div>
            </div>

            <div class="mt-6">
              <p class="text-Dark">Sigorta Ücreti*</p>
              <div class="h-10 w-3/4 rounded-xl bg-GrayLighter">
                <p class="pl-10 pt-2">₺2.427,02</p>
              </div>
            </div>

            <div class="mt-6">
              <p class="text-Dark">Trafik Sigortası*</p>
              <div class="h-10 w-3/4 rounded-xl bg-GrayLighter pl-10 pt-2">
                <a class="font-medium text-blue-600  hover:underline" href="#">https://www.resmigazete.gov.tr/.pdf</a>
              </div>
            </div>
            <div class="mt-6">
              <p class="text-Dark">Kasko Sigortası*</p>
              <div class="h-10 w-3/4 rounded-xl bg-GrayLighter pl-10 pt-2">
                <a class="font-medium text-blue-600  hover:underline" href="#">https://www.resmigazete.gov.tr/.pdf</a>
              </div>
            </div>
            <div class="mt-6">
              <p class="text-Dark">Trafik Sigorta Adı*</p>
              <div class="h-10 w-3/4 rounded-xl bg-GrayLighter">
                <p class="pl-10 pt-2">DOĞA SİGORTA</p>
              </div>
            </div>
            <div class="mt-6">
              <p class="text-Dark">Acenta Adı*</p>
              <div class="h-10 w-3/4 rounded-xl bg-GrayLighter">
                <p class="pl-10 pt-2">104.000 KM</p>
              </div>
            </div>
          </div>
          <div class="">
            <h4 class="flex items-center font-bold leading-5 text-primary">GÜNCEL ARAÇ DEĞERİ
              <img class="pl-5" src="/public-src/Kullanıcı/Line48.svg"></h4>
            <div class="mt-6">
              <p class="text-Dark">Güncel Fiyat Bakılan Tarih</p>
              <div class="h-10 w-3/4 rounded-xl bg-GrayLighter">
                <p class="pl-10 pt-2">13.09.2023</p>
              </div>
            </div>
            <div class="mt-6">
              <p class="text-Dark">Araç Güncel Değer</p>
              <div class="h-10 w-3/4 rounded-xl bg-GrayLighter">
                <p class="pl-10 pt-2"> ₺ 465.900</p>
              </div>
            </div>

            <div class="mt-6">
              <p class="text-Dark">Alınan Bilgi Linki</p>
              <div class="h-[115px] w-3/4 rounded-xl bg-GrayLighter p-6 ">
                <a class="font-medium text-blue-600  hover:underline" href="#">https://www.sahibinden.com/ilan/vasita-otomobil-opel-2008-model-opel-corsa-1.3-cdtit-1124414828/detay</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

</script>