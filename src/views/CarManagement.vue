<template>
  <div class=" flex h-full w-full items-center justify-between">
    <div class="flex-1">
      <!-- header -->
      <div class="m-auto flex h-32 w-3/4 items-center justify-between" >
        <div class="ml-8 flex w-3/4 items-center">
          <img src="/public-src/Kullanıcı/Frame137.svg" class="mr-5">
          <h2 class="ml-8 text-4xl font-bold leading-9 text-green-800">
            Araçlarım
          </h2>
          <button  type="button" class="mb-2 ml-5 mr-2 mt-3 flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white ring-primary hover:bg-PrimaryLight hover:text-primary focus:outline-none focus:ring-2">
            <img src="/public-src/Kullanıcı/Frame(13).svg" class="mr-2 hover:text-primary">
            Yeni Araç
          </button>
          <button
              @click="toggleModel= !toggleModel"
              type="button"
              class="mx-2 mb-2 mt-3 rounded-lg border-2 border-primary px-5 py-2.5 text-center text-sm font-medium text-primary focus:outline-none ">Satılan Araç</button>
          <div
              class="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden"
              v-if="toggleModel">
            <div v-if="toggleModel" class="relative mx-auto w-auto max-w-2xl">
              <div class="flex h-[663px] w-[530px] items-center rounded-lg bg-white">
                <div class=" h-full w-full pl-28">
                  <div  @click="toggleModel=false"
                        class="mb-5 flex w-full items-center justify-end">
                    <img src="/public-src/admin/Frame(1).png" class="">
                  </div>

                  <h3 class="mb-10 flex items-center justify-center pr-20 text-2xl font-bold text-primary ">Araç Satışı</h3>
                  <div  class=" ">
                    <p class="text-Dark">Plaka</p>
                    <div class="h-10 w-3/4 rounded-xl border-2 border-primary bg-white ">
                      <div class="flex items-center ">
                        <p class="pl-10 pt-2">34 HYD 1234</p>
                      </div>
                    </div>
                  </div>
                  <div  class="mt-6">
                    <p class="text-Dark">Son KM Durumu</p>
                    <div class="h-10 w-3/4 rounded-xl border-2 border-primary bg-white">
                      <div class="flex items-center ">
                        <p class="pl-10 pt-2"> 123456 KM </p>
                      </div>
                    </div>
                  </div>
                  <div  class="mt-6">
                    <p class="text-Dark">Taraç Satış Tarihi</p>
                    <div class="h-10 w-3/4 rounded-xl border-2 border-primary bg-white ">
                      <div class="flex items-center ">
                        <p class="pl-10 pt-2">28.12.2023</p>
                      </div>
                    </div>
                  </div>
                  <div  class="mt-6">
                    <p class="text-Dark">Araç Satış Tutarı</p>
                    <div class="h-10 w-3/4 rounded-xl border-2 border-primary bg-white ">
                      <div class="flex items-center ">
                        <p class="pl-10 pt-2">₺193.500,00</p>
                      </div>
                    </div>
                  </div>
                  <div  class="mt-6">
                    <p class="text-Dark">Açıklama</p>
                    <div class="h-24 w-3/4 rounded-xl border-2 border-primary bg-white ">
                      <div class="flex items-center ">
                        <p class="pl-10 pt-2"> </p>
                      </div>
                    </div>
                  </div>
                  <div class="mt-6 ">
                    <button  @click="toggleModel=false" type="button" class="mb-3 mr-2 w-3/4 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-2 ">Tamamla</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="toggleModel" class="absolute inset-0 z-40 bg-Dark800 opacity-25"></div>

        </div>

        <div class="flex items-center">
          <nav class="pr-3">
            <img src="/public-src/Kullanıcı/Frame(12).svg">
          </nav>
          <p class="text-sm font-semibold text-gray-500">Muhammed Ali Ay </p>
        </div>
      </div>
      <!-- main -->
      <div class="relative m-auto mt-16  flex w-3/4 items-center overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-left text-sm text-GrayLightest">
          <thead class="bg-GrayLightest text-xs uppercase text-Dark900">
          <tr>
            <th scope="col" class="px-6 py-3">

            </th>
            <th scope="col" class="px-6 py-3">
              no
            </th>
            <th scope="col" class="px-6 py-3">
              plaka
            </th>
            <th scope="col" class="px-6 py-3">
              araç modeli
            </th>
            <th scope="col" class="px-6 py-3">
              kullanıcı (zimmet)adı
            </th>
            <th scope="col" class="px-6 py-3">
              zimmet yeri
            </th>
            <th scope="col" class="px-6 py-3">
              birim
            </th>
            <th scope="col" class="px-6 py-3">
              araç alış tarihi
            </th>
            <th scope="col" class="px-6 py-3">
              araç alış tutarı
            </th>
            <th scope="col" class="px-6 py-3">
              km durumu
            </th>
            <th scope="col" class="px-6 py-3">
              HGS-KGS-OGS Ödeme Mükellefi
            </th>
            <th scope="col" class="px-6 py-3">
              Taşıt Tanıma Durumu
            </th>
            <th scope="col" class="px-6 py-3">
              Proje Kodları
            </th>
          </tr>
          </thead>
          <tbody>
          <tr class="border-b bg-white ">
            <th scope="row" class="whitespace-nowrap px-6 py-4 font-medium text-Dark900">
              <div class="m-auto flex w-20 items-center">
                <img src="/public-src/admin/Frame(20).svg">
                <img src="/public-src/admin/Frame(17).svg" class="pl-2">
                <img src="/public-src/admin/Frame(14).svg" class="pl-2">
              </div>
            </th>
            <td class="px-6 py-4 text-Dark900">
             01
            </td>
            <td class="px-6 py-4 text-Dark900">
              01 AEE 387
            </td>
            <td class="px-6 py-4 text-Dark900">
              DACİA DUSTER OTOMOBİL COMF
            </td>
            <td class="px-6 py-4 text-Dark900">
              Kara Yolları Belgesi
            </td>
            <td class="px-6 py-4 text-Dark900">
              Muhammet Mustafa Yaprak
            </td>
            <td class="px-6 py-4 text-Dark900">
              Genel Merkez - İstanbul
            </td>
            <td class="px-6 py-4 text-Dark900">
              Genel Merkez
            </td>
            <td class="px-6 py-4 text-Dark900">
              13.12.2022
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺3.300.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              300.000 KM
            </td>
            <td class="px-6 py-4 text-Dark900">
              Dernek
            </td>
            <td class="px-6 py-4 text-Dark900">
              2022-EMR-GEN-TR-102
            </td>
          </tr>
          <tr class="border-b bg-gray-50 text-Graydarker">
            <th scope="row" class="whitespace-nowrap px-6 py-4 font-medium text-Dark900 ">
              <div class="m-auto flex w-20 items-center">
                <img src="/public-src/admin/Frame(20).svg">
                <img src="/public-src/admin/Frame(17).svg" class="pl-2">
                <img src="/public-src/admin/Frame(14).svg" class="pl-2">
              </div>
            </th>
            <td class="px-6 py-4 text-Dark900">
              01
            </td>
            <td class="px-6 py-4 text-Dark900">
              01 AEE 387
            </td>
            <td class="px-6 py-4 text-Dark900">
              DACİA DUSTER OTOMOBİL COMF
            </td>
            <td class="px-6 py-4 text-Dark900">
              Kara Yolları Belgesi
            </td>
            <td class="px-6 py-4 text-Dark900">
              Muhammet Mustafa Yaprak
            </td>
            <td class="px-6 py-4 text-Dark900">
              Genel Merkez - İstanbul
            </td>
            <td class="px-6 py-4 text-Dark900">
              Genel Merkez
            </td>
            <td class="px-6 py-4 text-Dark900">
              13.12.2022
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺3.300.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              300.000 KM
            </td>
            <td class="px-6 py-4 text-Dark900">
              Dernek
            </td>
            <td class="px-6 py-4 text-Dark900">
              2022-EMR-GEN-TR-102
            </td>
          </tr>
          <tr class="border-b bg-white ">
            <th scope="row" class="whitespace-nowrap px-6 py-4 font-medium text-Dark900">
              <div class="m-auto flex w-20 items-center">
                <img src="/public-src/admin/Frame(20).svg">
                <img src="/public-src/admin/Frame(17).svg" class="pl-2">
                <img src="/public-src/admin/Frame(14).svg" class="pl-2">
              </div>
            </th>
            <td class="px-6 py-4 text-Dark900">
              01
            </td>
            <td class="px-6 py-4 text-Dark900">
              01 AEE 387
            </td>
            <td class="px-6 py-4 text-Dark900">
              DACİA DUSTER OTOMOBİL COMF
            </td>
            <td class="px-6 py-4 text-Dark900">
              Kara Yolları Belgesi
            </td>
            <td class="px-6 py-4 text-Dark900">
              Muhammet Mustafa Yaprak
            </td>
            <td class="px-6 py-4 text-Dark900">
              Genel Merkez - İstanbul
            </td>
            <td class="px-6 py-4 text-Dark900">
              Genel Merkez
            </td>
            <td class="px-6 py-4 text-Dark900">
              13.12.2022
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺3.300.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              300.000 KM
            </td>
            <td class="px-6 py-4 text-Dark900">
              Dernek
            </td>
            <td class="px-6 py-4 text-Dark900">
              2022-EMR-GEN-TR-102
            </td>
          </tr>
          <tr class="border-b bg-gray-50 text-Graydarker">
            <th scope="row" class="whitespace-nowrap px-6 py-4 font-medium text-Dark900 ">
              <div class="m-auto flex w-20 items-center">
                <img src="/public-src/admin/Frame(20).svg">
                <img src="/public-src/admin/Frame(17).svg" class="pl-2">
                <img src="/public-src/admin/Frame(14).svg" class="pl-2">
              </div>
            </th>
            <td class="px-6 py-4 text-Dark900">
              01
            </td>
            <td class="px-6 py-4 text-Dark900">
              01 AEE 387
            </td>
            <td class="px-6 py-4 text-Dark900">
              DACİA DUSTER OTOMOBİL COMF
            </td>
            <td class="px-6 py-4 text-Dark900">
              Kara Yolları Belgesi
            </td>
            <td class="px-6 py-4 text-Dark900">
              Muhammet Mustafa Yaprak
            </td>
            <td class="px-6 py-4 text-Dark900">
              Genel Merkez - İstanbul
            </td>
            <td class="px-6 py-4 text-Dark900">
              Genel Merkez
            </td>
            <td class="px-6 py-4 text-Dark900">
              13.12.2022
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺3.300.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              300.000 KM
            </td>
            <td class="px-6 py-4 text-Dark900">
              Dernek
            </td>
            <td class="px-6 py-4 text-Dark900">
              2022-EMR-GEN-TR-102
            </td>
          </tr>
          <tr class="border-b bg-white ">
            <th scope="row" class="whitespace-nowrap px-6 py-4 font-medium text-Dark900">
              <div class="m-auto flex w-20 items-center">
                <img src="/public-src/admin/Frame(20).svg">
                <img src="/public-src/admin/Frame(17).svg" class="pl-2">
                <img src="/public-src/admin/Frame(14).svg" class="pl-2">
              </div>
            </th>
            <td class="px-6 py-4 text-Dark900">
              01
            </td>
            <td class="px-6 py-4 text-Dark900">
              01 AEE 387
            </td>
            <td class="px-6 py-4 text-Dark900">
              DACİA DUSTER OTOMOBİL COMF
            </td>
            <td class="px-6 py-4 text-Dark900">
              Kara Yolları Belgesi
            </td>
            <td class="px-6 py-4 text-Dark900">
              Muhammet Mustafa Yaprak
            </td>
            <td class="px-6 py-4 text-Dark900">
              Genel Merkez - İstanbul
            </td>
            <td class="px-6 py-4 text-Dark900">
              Genel Merkez
            </td>
            <td class="px-6 py-4 text-Dark900">
              13.12.2022
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺3.300.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              300.000 KM
            </td>
            <td class="px-6 py-4 text-Dark900">
              Dernek
            </td>
            <td class="px-6 py-4 text-Dark900">
              2022-EMR-GEN-TR-102
            </td>

          </tr>
          <tr class="border-b bg-gray-50 text-Graydarker">
            <th scope="row" class="whitespace-nowrap px-6 py-4 font-medium text-Dark900 ">
              <div class="m-auto flex w-20 items-center">
                <img src="/public-src/admin/Frame(20).svg">
                <img src="/public-src/admin/Frame(17).svg" class="pl-2">
                <img src="/public-src/admin/Frame(14).svg" class="pl-2">
              </div>
            </th>
            <td class="px-6 py-4 text-Dark900">
              01
            </td>
            <td class="px-6 py-4 text-Dark900">
              01 AEE 387
            </td>
            <td class="px-6 py-4 text-Dark900">
              DACİA DUSTER OTOMOBİL COMF
            </td>
            <td class="px-6 py-4 text-Dark900">
              Kara Yolları Belgesi
            </td>
            <td class="px-6 py-4 text-Dark900">
              Muhammet Mustafa Yaprak
            </td>
            <td class="px-6 py-4 text-Dark900">
              Genel Merkez - İstanbul
            </td>
            <td class="px-6 py-4 text-Dark900">
              Genel Merkez
            </td>
            <td class="px-6 py-4 text-Dark900">
              13.12.2022
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺3.300.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              300.000 KM
            </td>
            <td class="px-6 py-4 text-Dark900">
              Dernek
            </td>
            <td class="px-6 py-4 text-Dark900">
              2022-EMR-GEN-TR-102
            </td>
          </tr>
          <tr class="border-b bg-white ">
            <th scope="row" class="whitespace-nowrap px-6 py-4 font-medium text-Dark900">
              <div class="m-auto flex w-20 items-center">
                <img src="/public-src/admin/Frame(20).svg">
                <img src="/public-src/admin/Frame(17).svg" class="pl-2">
                <img src="/public-src/admin/Frame(14).svg" class="pl-2">
              </div>
            </th>
            <td class="px-6 py-4 text-Dark900">
              01
            </td>
            <td class="px-6 py-4 text-Dark900">
              01 AEE 387
            </td>
            <td class="px-6 py-4 text-Dark900">
              DACİA DUSTER OTOMOBİL COMF
            </td>
            <td class="px-6 py-4 text-Dark900">
              Kara Yolları Belgesi
            </td>
            <td class="px-6 py-4 text-Dark900">
              Muhammet Mustafa Yaprak
            </td>
            <td class="px-6 py-4 text-Dark900">
              Genel Merkez - İstanbul
            </td>
            <td class="px-6 py-4 text-Dark900">
              Genel Merkez
            </td>
            <td class="px-6 py-4 text-Dark900">
              13.12.2022
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺3.300.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              300.000 KM
            </td>
            <td class="px-6 py-4 text-Dark900">
              Dernek
            </td>
            <td class="px-6 py-4 text-Dark900">
              2022-EMR-GEN-TR-102
            </td>

          </tr>
          <tr class="border-b bg-gray-50 text-Graydarker">
            <th scope="row" class="whitespace-nowrap px-6 py-4 font-medium text-Dark900 ">
              <div class="m-auto flex w-20 items-center">
                <img src="/public-src/admin/Frame(20).svg">
                <img src="/public-src/admin/Frame(17).svg" class="pl-2">
                <img src="/public-src/admin/Frame(14).svg" class="pl-2">
              </div>
            </th>
            <td class="px-6 py-4 text-Dark900">
              01
            </td>
            <td class="px-6 py-4 text-Dark900">
              01 AEE 387
            </td>
            <td class="px-6 py-4 text-Dark900">
              DACİA DUSTER OTOMOBİL COMF
            </td>
            <td class="px-6 py-4 text-Dark900">
              Kara Yolları Belgesi
            </td>
            <td class="px-6 py-4 text-Dark900">
              Muhammet Mustafa Yaprak
            </td>
            <td class="px-6 py-4 text-Dark900">
              Genel Merkez - İstanbul
            </td>
            <td class="px-6 py-4 text-Dark900">
              Genel Merkez
            </td>
            <td class="px-6 py-4 text-Dark900">
              13.12.2022
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺3.300.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              300.000 KM
            </td>
            <td class="px-6 py-4 text-Dark900">
              Dernek
            </td>
            <td class="px-6 py-4 text-Dark900">
              2022-EMR-GEN-TR-102
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name:"MoDel",
  data(){
    return{
      toggleModel:false
    };
  },
  methods:{}

};
</script>