<template>
  <div class=" flex h-full w-full items-center justify-between">
    <div class="flex-1">
      <!-- header -->
      <div class="m-auto flex h-32 w-3/4 items-center justify-between">
        <div class="ml-5 flex w-3/4 items-center">
          <img class="mr-5" src="/public-src/Kullanıcı/Frame137.svg">
          <h2 class="text-4xl font-bold leading-9 text-green-800">
            Araç Yönetimi
          </h2>
          <button
              class="mb-2 ml-5 mr-2 mt-3 flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white ring-primary focus:outline-none focus:ring-2"
              type="button">
            <img class="mr-2 hover:text-primary" src="/public-src/Kullanıcı/Frame(13).svg">
            <router-link to="/newcar">Yeni Araç</router-link>
          </button>
          <button
              class="mx-2 mb-2 mt-3 rounded-lg border-2 border-primary px-5 py-2.5 text-center text-sm font-medium text-primary focus:outline-none "
              type="button"
              @click="toggleModel= !toggleModel">
            Satılan Araç
          </button>
          <div
              v-if="toggleModel"
              class="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden">
            <div v-if="toggleModel" class="relative mx-auto w-auto max-w-2xl">
              <div class="flex h-[663px] w-[530px] items-center rounded-lg bg-white">
                <div class=" h-full w-full pl-28">
                  <div class="mb-5 flex w-full items-center justify-end"
                       @click="toggleModel=false">
                    <img class="" src="/public-src/admin/Frame(1).png">
                  </div>

                  <h3 class="mb-10 flex items-center justify-center pr-20 text-2xl font-bold text-primary ">Araç
                    Satışı</h3>
                  <div class=" ">
                    <input-tag
                        :required="true"
                        inputclass=""
                        label="Plaka"
                        placeholder="    Plaka Giriniz..."
                        rowclass=""

                    />
                  </div>
                  <div class="mt-3">
                    <input-tag
                        :required="true"
                        inputclass=""
                        label="Son KM Durumu"
                        placeholder="    Son KM Durumu Giriniz..."
                        rowclass=""

                    />
                  </div>
                  <div class="mt-3">
                    <input-tag
                        :required="true"
                        inputclass=""
                        label="Araç Satış Tarihi"
                        placeholder="    Araç Satış Tarihi Giriniz..."
                        rowclass=""
                        type="date"
                    />
                  </div>
                  <div class="mt-3">
                    <input-tag
                        :required="true"
                        inputclass=""
                        label="Araç Satış Tutarı"
                        placeholder="    Araç Satış Tutarı Giriniz..."
                        rowclass=""

                    />
                  </div>
                  <div class="mt-3">
                    <input-tag
                        :required="true"
                        inputclass="h-20 w-[310px] rounded-xl border-2 border-Graydarker"
                        label="Açıklama"
                        placeholder="    Açıklama Giriniz..."
                        rowclass=""

                    />
                  </div>
                  <div class="mt-6 ">
                    <button
                        class="mb-3 mr-2 w-3/4 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-2 "
                        type="button"
                        @click="toggleModel=false">
                      Tamamla
                    </button>
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
            <th class="px-6 py-3" scope="col">

            </th>
            <th class="px-6 py-3" scope="col">
              no
            </th>
            <th class="px-6 py-3" scope="col">
              plaka
            </th>
            <th class="px-6 py-3" scope="col">
              araç modeli
            </th>
            <th class="px-6 py-3" scope="col">
              kullanıcı (zimmet)adı
            </th>
            <th class="px-6 py-3" scope="col">
              zimmet yeri
            </th>
            <th class="px-6 py-3" scope="col">
              birim
            </th>
            <th class="px-6 py-3" scope="col">
              araç alış tarihi
            </th>
            <th class="px-6 py-3" scope="col">
              araç alış tutarı
            </th>
            <th class="px-6 py-3" scope="col">
              km durumu
            </th>
            <th class="px-6 py-3" scope="col">
              HGS-KGS-OGS Ödeme Mükellefi
            </th>
            <th class="px-6 py-3" scope="col">
              Taşıt Tanıma Durumu
            </th>
            <th class="px-6 py-3" scope="col">
              Proje Kodları
            </th>
          </tr>
          </thead>
          <tbody>
          <tr class="border-b bg-white ">
            <th class="whitespace-nowrap px-6 py-4 font-medium text-Dark900" scope="row">
              <div class="m-auto flex w-20 items-center">
                <img src="/public-src/admin/Frame(20).svg">
                <img class="pl-2" src="/public-src/admin/Frame(17).svg">
                <img class="pl-2" src="/public-src/admin/Frame(14).svg">
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
            <th class="whitespace-nowrap px-6 py-4 font-medium text-Dark900 " scope="row">
              <div class="m-auto flex w-20 items-center">
                <img src="/public-src/admin/Frame(20).svg">
                <img class="pl-2" src="/public-src/admin/Frame(17).svg">
                <img class="pl-2" src="/public-src/admin/Frame(14).svg">
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
            <th class="whitespace-nowrap px-6 py-4 font-medium text-Dark900" scope="row">
              <div class="m-auto flex w-20 items-center">
                <img src="/public-src/admin/Frame(20).svg">
                <img class="pl-2" src="/public-src/admin/Frame(17).svg">
                <img class="pl-2" src="/public-src/admin/Frame(14).svg">
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
            <th class="whitespace-nowrap px-6 py-4 font-medium text-Dark900 " scope="row">
              <div class="m-auto flex w-20 items-center">
                <img src="/public-src/admin/Frame(20).svg">
                <img class="pl-2" src="/public-src/admin/Frame(17).svg">
                <img class="pl-2" src="/public-src/admin/Frame(14).svg">
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
            <th class="whitespace-nowrap px-6 py-4 font-medium text-Dark900" scope="row">
              <div class="m-auto flex w-20 items-center">
                <img src="/public-src/admin/Frame(20).svg">
                <img class="pl-2" src="/public-src/admin/Frame(17).svg">
                <img class="pl-2" src="/public-src/admin/Frame(14).svg">
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
            <th class="whitespace-nowrap px-6 py-4 font-medium text-Dark900 " scope="row">
              <div class="m-auto flex w-20 items-center">
                <img src="/public-src/admin/Frame(20).svg">
                <img class="pl-2" src="/public-src/admin/Frame(17).svg">
                <img class="pl-2" src="/public-src/admin/Frame(14).svg">
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
            <th class="whitespace-nowrap px-6 py-4 font-medium text-Dark900" scope="row">
              <div class="m-auto flex w-20 items-center">
                <img src="/public-src/admin/Frame(20).svg">
                <img class="pl-2" src="/public-src/admin/Frame(17).svg">
                <img class="pl-2" src="/public-src/admin/Frame(14).svg">
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
            <th class="whitespace-nowrap px-6 py-4 font-medium text-Dark900 " scope="row">
              <div class="m-auto flex w-20 items-center">
                <img src="/public-src/admin/Frame(20).svg">
                <img class="pl-2" src="/public-src/admin/Frame(17).svg">
                <img class="pl-2" src="/public-src/admin/Frame(14).svg">
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
      <div>
        <div class="mt-14 flex w-11/12 items-center justify-end">
          <div class="flex items-center justify-end">
            <img class="pl-5" src="/public-src/admin/rightRounded.svg">
            <img class="pl-5" src="/public-src/admin/Frame72.svg">
            <img class="pl-5" src="/public-src/admin/LeftRounded.svg">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import inputTag from "../../../components/custom/input.tag.vue";

export default {
  name: "MoDel",
  data() {
    return {
      toggleModel: false
    };
  },
  methods: {},
  components: {inputTag}

};
</script>