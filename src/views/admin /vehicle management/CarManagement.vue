<template>
  <div class=" flex h-full w-full items-center justify-between">
    <popup-modal ref="aracsatis">
      <div class=" z-50 h-[700px] w-[530px] ">
        <router-link to="/management">
          <div class="flex w-[520px] items-center justify-end">
            <img src="/public/Frame(200).svg">
          </div>
        </router-link>
        <h1 class=" mt-3 flex items-center justify-center text-3xl font-bold text-primary">Araç Satış</h1>
        <div class=" ml-9 mt-7 ">
          <div class="mt-4">
            <input-tag
                :required="true"
                inputclass="w-[450px] h-[40px] border-2 border-Dark800 rounded-lg "
                label="Plaka"
                placeholder="    Plaka Giriniz..."
                rowclass=""
            />
          </div>
          <div class="mt-4">
            <input-tag
                :required="true"
                inputclass="w-[450px] h-[40px] border-2 border-Dark800 rounded-lg "
                label="Son Km Durumu "
                placeholder="   Son Km Durumu Giriniz..."
                rowclass=""
            />
          </div>
          <div class="mt-4">
            <input-tag
                :required="true"
                inputclass="w-[450px] h-[40px] border-2 border-Dark800 rounded-lg "
                label="Araç Satış Tarihi"
                placeholder="    Araç Satış Tarihi Giriniz..."
                rowclass=""
            />
          </div>
          <div class="mt-4">
            <input-tag
                :required="true"
                inputclass="w-[450px] h-[40px] border-2 border-Dark800 rounded-lg"
                label="Araç Satış Tutarı"
                placeholder="    Araç Satış Tutarı Giriniz..."
                rowclass=""
            />
          </div>
          <div class="mt-4">
            <input-tag
                :required="true"
                inputclass="w-[450px] h-[135px] border-2 border-Dark800 rounded-lg"
                label="Açıklama"
                placeholder="    Açıklama Giriniz..."
                rowclass=""
            />
          </div>
        </div>
        <router-link to="/management">
          <button class=" ml-9 mt-10 h-[37px] w-[450px] rounded-lg border-2 border-primary bg-primary text-white ">
            Tamamla
          </button>
        </router-link>

      </div>
    </popup-modal>
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
              class="mx-2 mb-2 mt-3 rounded-lg border-2 border-primary px-5 py-2.5 text-center text-sm font-medium text-primary focus:outline-none ">
            <router-link to="/vehiclesold">Satılan Araç</router-link>
          </button>
        </div>
        <div class="flex items-center">
          <nav class="pr-3">
            <img src="/public-src/Kullanıcı/Frame(12).svg">
          </nav>
          <p class="text-sm font-semibold text-gray-500">Muhammed Ali Ay </p>
        </div>
      </div>
      <!-- main -->
      <div class="relative  m-auto  mt-16 flex w-3/4 items-center overflow-x-auto shadow-md sm:rounded-lg">
        <table class="z-40 w-full text-left text-sm text-GrayLightest">
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
            <th class="whitespace-nowrap px-2 py-1 font-medium text-Dark900" scope="row">
              <div class="m-auto flex w-24 items-center">
                <img class="pl-2" src="/public-src/admin/Frame(20).svg">
                <router-link class="pl-2" to="/editvahiclemaneg"><img
                    src="/public-src/admin/Frame(17).svg">
                </router-link>

                <img class="pl-2" src="/public-src/admin/Frame(14).svg" @click="asdasd()">
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
              <div class="m-auto flex w-24 items-center">
                <img class="pl-2" src="/public-src/admin/Frame(20).svg">
                <router-link class="pl-2" to="/editvahiclemaneg"><img
                    src="/public-src/admin/Frame(17).svg">
                </router-link>
                <img class="pl-2" src="/public-src/admin/Frame(14).svg " @click="asdasd()">
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
              <div class="m-auto flex w-24 items-center">
                <img class="pl-2" src="/public-src/admin/Frame(20).svg">
                <router-link class="pl-2" to="/editvahiclemaneg"><img
                    src="/public-src/admin/Frame(17).svg">
                </router-link>
                <img class="pl-2" src="/public-src/admin/Frame(14).svg" @click="asdasd()">
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
              <div class="m-auto flex w-24 items-center">
                <img class="pl-2" src="/public-src/admin/Frame(20).svg">
                <router-link class="pl-2" to="/editvahiclemaneg"><img
                    src="/public-src/admin/Frame(17).svg">
                </router-link>
                <img class="pl-2" src="/public-src/admin/Frame(14).svg" @click="asdasd()">
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
              <div class="m-auto flex w-24 items-center">
                <img class="pl-2" src="/public-src/admin/Frame(20).svg">
                <router-link class="pl-2" to="/editvahiclemaneg"><img
                    src="/public-src/admin/Frame(17).svg">
                </router-link>
                <img class="pl-2" src="/public-src/admin/Frame(14).svg" @click="asdasd()">
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
              <div class="m-auto flex w-24 items-center">
                <img class="pl-2" src="/public-src/admin/Frame(20).svg">
                <router-link class="pl-2" to="/editvahiclemaneg"><img
                    src="/public-src/admin/Frame(17).svg">
                </router-link>
                <img class="pl-2" src="/public-src/admin/Frame(14).svg" @click="asdasd()">
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
              <div class="m-auto flex w-24 items-center">
                <img class="pl-2" src="/public-src/admin/Frame(20).svg">
                <router-link class="pl-2" to="/editvahiclemaneg"><img
                    src="/public-src/admin/Frame(17).svg">
                </router-link>
                <img class="pl-2" src="/public-src/admin/Frame(14).svg" @click="asdasd()">
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
              <div class="m-auto flex w-24 items-center">
                <img class="pl-2" src="/public-src/admin/Frame(20).svg">
                <router-link class="pl-2" to="/editvahiclemaneg"><img
                    src="/public-src/admin/Frame(17).svg">
                </router-link>
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
import PopupModal from "../../../components/PopupModal.vue" // import inputTag from "../../../components/custom/input.tag.vue";
import inputTag from "../../../components/custom/input.tag.vue";

export default {

  components: {PopupModal, inputTag},
  data() {
    return {
      aracsatis: null
    }
  },
  methods: {
    asdasd() {
      this.$refs.aracsatis.openModal()
    }
  },

};
</script>
<style scoped>
input:focus {
  outline: none;
}
</style>