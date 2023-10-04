<template>
  <div class=" flex h-full w-full items-center justify-between">
    <div class="  flex-1">
      <!-- header -->
      <div class="m-auto flex h-32 w-3/4 items-center justify-between">
        <div class="ml-5 flex w-3/4 items-center">
          <img class="mr-5" src="/public-src/Kullanıcı/Frame137.svg">
          <h2 class="text-4xl font-bold leading-9 text-green-800">
            Kullanıcı Yönetimi
          </h2>
          <button
              class="mb-2 ml-5 mr-2 mt-3 flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white ring-primary focus:outline-none focus:ring-2"
              type="button">
            <img class="mr-2 hover:text-primary" src="/public-src/Kullanıcı/Frame(13).svg">
            <router-link to="/newuser">Yeni İşlem</router-link>

          </button>
        </div>

        <div class="flex items-center">
          <nav class="pr-3">
            <img src="/public-src/Kullanıcı/Frame(12).svg">
          </nav>
          <p class="text-sm font-semibold text-gray-500">Muhammed Ali Ay </p>
        </div>
      </div>
      <!-- content-->

      <div class=" ">
      </div>
      <!-- main -->
      <div class="relative  m-auto mt-16  flex w-3/4 items-center overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-left text-sm text-GrayLightest">
          <thead class="bg-GrayLightest text-xs uppercase text-Dark900">
          <tr>
            <th class="px-6 py-3" scope="col">

            </th>
            <th class="px-6 py-3" scope="col">
              no
            </th>
            <th class="px-6 py-3" scope="col">
              araç kullanıcısı
            </th>
            <th class="px-6 py-3" scope="col">
              T.c.no
            </th>
            <th class="px-6 py-3" scope="col">
              telefon
            </th>
            <th class="px-6 py-3" scope="col">
              e-mail
            </th>
            <th class="px-6 py-3" scope="col">
              plaka
            </th>
            <th class="px-6 py-3" scope="col">
              araç modeli
            </th>
            <th class="px-6 py-3" scope="col">
              bağlı olduğu birim
            </th>
            <th class="px-6 py-3" scope="col">
              bulunduğu yer
            </th>
            <th class="px-6 py-3" scope="col">
              ikamet ettiği il
            </th>
          </tr>
          </thead>
          <tbody>
          <tr class="border-b bg-white ">
            <th class="whitespace-nowrap px-2 py-1 font-medium text-Dark900" scope="row">
              <div class="flex w-24 items-center">
                <router-link to="/editusermanag"><img class="ml-2" src="/public-src/admin/Frame(17).svg"></router-link>
                <img class="ml-2" src="/public-src/admin/Frame(21).svg">
              </div>
            </th>
            <td class="px-6 py-4 text-Dark900">
              01
            </td>
            <td class="px-6 py-4 text-Dark900">
              Muhammet Mustafa Yaprak
            </td>
            <td class="px-6 py-4 text-Dark900">
              12345678910
            </td>
            <td class="px-6 py-4 text-Dark900">
              +90 888 888 88 88
            </td>
            <td class="px-6 py-4 text-Dark900">
              ornekmailadresi
              @hayratyardim.com
            </td>
            <td class="px-6 py-4 text-Dark900">
              01 AEE 3878
            </td>
            <td class="px-6 py-4 text-Dark900">
              M155ARX1 OFF-ROAD
              KAPIKULU M15 YARI RÖMORK
            </td>
            <td class="px-6 py-4 text-Dark900">
              -
            </td>
            <td class="px-6 py-4 text-Dark900">
              -
            </td>
            <td class="px-6 py-4 text-Dark900">
              Adapazaro
            </td>
          </tr>
          <tr class="border-b bg-gray-50 text-Graydarker">
            <th class="whitespace-nowrap px-2 py-1 font-medium text-Dark900" scope="row">
              <div class="flex w-24 items-center">
                <router-link to="/editusermanag"><img class="ml-2" src="/public-src/admin/Frame(17).svg"></router-link>
                <img class="ml-2" src="/public-src/admin/Frame(21).svg">
              </div>
            </th>
            <td class="px-6 py-4 text-Dark900">
              01
            </td>
            <td class="px-6 py-4 text-Dark900">
              Muhammet Mustafa Yaprak
            </td>
            <td class="px-6 py-4 text-Dark900">
              12345678910
            </td>
            <td class="px-6 py-4 text-Dark900">
              +90 888 888 88 88
            </td>
            <td class="px-6 py-4 text-Dark900">
              ornekmailadresi
              @hayratyardim.com
            </td>
            <td class="px-6 py-4 text-Dark900">
              01 AEE 3878
            </td>
            <td class="px-6 py-4 text-Dark900">
              M155ARX1 OFF-ROAD
              KAPIKULU M15 YARI RÖMORK
            </td>
            <td class="px-6 py-4 text-Dark900">
              -
            </td>
            <td class="px-6 py-4 text-Dark900">
              -
            </td>
            <td class="px-6 py-4 text-Dark900">
              Adapazaro
            </td>
          </tr>
          <tr class="border-b bg-white ">
            <th class="whitespace-nowrap px-2 py-1 font-medium text-Dark900" scope="row">
              <div class="flex w-24 items-center">
                <router-link to="/editusermanag"><img class="ml-2" src="/public-src/admin/Frame(17).svg"></router-link>
                <img class="ml-2" src="/public-src/admin/Frame(21).svg">
              </div>
            </th>
            <td class="px-6 py-4 text-Dark900">
              01
            </td>
            <td class="px-6 py-4 text-Dark900">
              Muhammet Mustafa Yaprak
            </td>
            <td class="px-6 py-4 text-Dark900">
              12345678910
            </td>
            <td class="px-6 py-4 text-Dark900">
              +90 888 888 88 88
            </td>
            <td class="px-6 py-4 text-Dark900">
              ornekmailadresi
              @hayratyardim.com
            </td>
            <td class="px-6 py-4 text-Dark900">
              01 AEE 3878
            </td>
            <td class="px-6 py-4 text-Dark900">
              M155ARX1 OFF-ROAD
              KAPIKULU M15 YARI RÖMORK
            </td>
            <td class="px-6 py-4 text-Dark900">
              -
            </td>
            <td class="px-6 py-4 text-Dark900">
              -
            </td>
            <td class="px-6 py-4 text-Dark900">
              Adapazaro
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
import {defineComponent} from "vue";

export default defineComponent({
  name: "OtherExpeneses",
  components: {}
})
</script>