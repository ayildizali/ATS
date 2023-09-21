<template>
    <div class=" m-auto flex h-full w-full items-center justify-between">
        <div class="  flex-1">
            <!-- header -->
            <div class="m-auto flex h-32 w-3/4 items-center justify-between" >
                <div class="ml-8 flex w-3/4 items-center">
                    <img src="/public-src/Kullanıcı/Frame137.svg" class="mr-10">
                    <h2 class="ml-8 text-4xl font-bold leading-9 text-green-800">
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
                    <h3 class=" inline-block rounded-t-lg border-b-2 border-transparent font-bold hover:border-primary hover:text-primary">ARAÇ</h3>
                    <h3 class="inline-block rounded-t-lg border-b-2 border-transparent font-bold hover:border-primary hover:text-primary">KULLANICI BİLGİLERİ</h3>
                    <h3 class="inline-block rounded-t-lg border-b-2 border-transparent font-bold hover:border-primary hover:text-primary">DİĞER BİLGİLER</h3>
                    <h3 class="inline-block rounded-t-lg border-b-2 border-transparent font-bold hover:border-primary hover:text-primary">KM/HARCAMALAR</h3>
                    <h3 class="inline-block rounded-t-lg border-b-2 border-transparent font-bold hover:border-primary hover:text-primary">BAKIM</h3>
                    <h3 class="inline-block rounded-t-lg border-b-2 border-transparent font-bold hover:border-primary hover:text-primary">HGS/CEZA</h3>
                </div>

            </div>
            <div class="m-auto flex w-9/12 justify-end">
                <div class="mt-16 h-36  w-64 rounded-lg border-2 border-solid border-b-Graydarker  bg-GrayLightest">
                    <div class=" ">
                        <p class="ml-8 mt-7 flex items-center font-bold text-Dark900" >TOPLAM TUTAR</p>
                        <p class=" mx-3 mt-5 flex items-center border-b-2 border-b-Graydarker"></p>
                        <p class="ml-8 mt-5 flex items-center font-bold text-Dark900 ">₺56.774,00</p>
                    </div>
                </div>
            </div>

            <!-- main -->
            <div class="relative  m-auto mt-16  flex w-3/4 items-center overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-left text-sm text-GrayLightest">
                    <thead class="bg-GrayLightest text-xs uppercase text-Dark900">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                           Araç Kullanıcısı
                        </th>
                        <th scope="col" class="px-6 py-3">
                            tarİh
                        </th>
                        <th scope="col" class="px-6 py-3">
                            fatura
                        </th>
                        <th scope="col" class="px-6 py-3">
                           fatura ünvanı
                        </th>
                        <th scope="col" class="px-6 py-3">
                            plaka
                        </th>
                        <th scope="col" class="px-6 py-3">
                            il
                        </th>
                        <th scope="col" class="px-6 py-3">
                            fatura tutarı
                        </th>
                        <th scope="col" class="px-6 py-3">
                            km
                        </th>
                        <th scope="col" class="px-6 py-3">
                            oto lastik
                        </th>
                        <th scope="col" class="px-6 py-3">
                            bakım türü
                        </th>
                        <th scope="col" class="px-6 py-3">
                           açıklama
                        </th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr class="border-b bg-white ">
                        <th scope="row" class="whitespace-nowrap px-6 py-4 font-medium text-Dark900">
                            Muhammet Mustafa Yaprak
                        </th>
                        <td class="px-6 py-4 text-Dark900">
                            24.03.2023
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                           Fatura
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                           Öz Asm Oto
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                             34 HYD 1234
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            Gaziantep
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            ₺200.000,00
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            150,000 KM
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            205/55 R 16 (Goodyear)
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            Periyodik Bakım
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            4 Adet Lastik Alımı
                        </td>
                    </tr>
                    <tr class="border-b bg-gray-50 text-Graydarker">
                        <th scope="row" class="whitespace-nowrap px-6 py-4 font-medium text-Dark900 ">
                            Muhammet Mustafa Yaprak
                        </th>
                        <td class="px-6 py-4 text-Dark900">
                            24.03.2023
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            Fatura
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            Öz Asm Oto
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            34 HYD 1234
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            Gaziantep
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            ₺200.000,00
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            150,000 KM
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            205/55 R 16 (Goodyear)
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            Periyodik Bakım
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            4 Adet Lastik Alımı
                        </td>
                    </tr>
                    <tr class="border-b bg-white ">
                        <th scope="row" class="whitespace-nowrap px-6 py-4 font-medium text-Dark900">
                            Muhammet Mustafa Yaprak
                        </th>
                        <td class="px-6 py-4 text-Dark900">
                            24.03.2023
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            Fatura
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            Öz Asm Oto
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            34 HYD 1234
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            Gaziantep
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            ₺200.000,00
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            150,000 KM
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            205/55 R 16 (Goodyear)
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            Periyodik Bakım
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            4 Adet Lastik Alımı
                        </td>
                    </tr>
                    <tr class="border-b bg-gray-50 text-Graydarker">
                        <th scope="row" class="whitespace-nowrap px-6 py-4 font-medium text-Dark900 ">
                            Muhammet Mustafa Yaprak
                        </th>
                        <td class="px-6 py-4 text-Dark900">
                            24.03.2023
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            Fatura
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            Öz Asm Oto
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            34 HYD 1234
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            Gaziantep
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            ₺200.000,00
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            150,000 KM
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            205/55 R 16 (Goodyear)
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            Periyodik Bakım
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            4 Adet Lastik Alımı
                        </td>
                    </tr>
                    <tr class="border-b bg-white ">
                        <th scope="row" class="whitespace-nowrap px-6 py-4 font-medium text-Dark900">
                            Muhammet Mustafa Yaprak
                        </th>
                        <td class="px-6 py-4 text-Dark900">
                            24.03.2023
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            Fatura
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            Öz Asm Oto
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            34 HYD 1234
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            Gaziantep
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            ₺200.000,00
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            150,000 KM
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            205/55 R 16 (Goodyear)
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            Periyodik Bakım
                        </td>
                        <td class="px-6 py-4 text-Dark900">
                            4 Adet Lastik Alımı
                        </td>
                    </tr>
                    <tr class="border-b bg-gray-50 text-Graydarker">
                      <th scope="row" class="whitespace-nowrap px-6 py-4 font-medium text-Dark900 ">
                        Muhammet Mustafa Yaprak
                      </th>
                      <td class="px-6 py-4 text-Dark900">
                        24.03.2023
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        Fatura
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        Öz Asm Oto
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        34 HYD 1234
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        Gaziantep
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        ₺200.000,00
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        150,000 KM
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        205/55 R 16 (Goodyear)
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        Periyodik Bakım
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        4 Adet Lastik Alımı
                      </td>
                    </tr>
                    <tr class="border-b bg-white ">
                      <th scope="row" class="whitespace-nowrap px-6 py-4 font-medium text-Dark900">
                        Muhammet Mustafa Yaprak
                      </th>
                      <td class="px-6 py-4 text-Dark900">
                        24.03.2023
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        Fatura
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        Öz Asm Oto
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        34 HYD 1234
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        Gaziantep
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        ₺200.000,00
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        150,000 KM
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        205/55 R 16 (Goodyear)
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        Periyodik Bakım
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        4 Adet Lastik Alımı
                      </td>
                    </tr>
                    <tr class="border-b bg-gray-50 text-Graydarker">
                      <th scope="row" class="whitespace-nowrap px-6 py-4 font-medium text-Dark900 ">
                        Muhammet Mustafa Yaprak
                      </th>
                      <td class="px-6 py-4 text-Dark900">
                        24.03.2023
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        Fatura
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        Öz Asm Oto
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        34 HYD 1234
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        Gaziantep
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        ₺200.000,00
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        150,000 KM
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        205/55 R 16 (Goodyear)
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        Periyodik Bakım
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        4 Adet Lastik Alımı
                      </td>
                    </tr>
                    <tr class="border-b bg-white ">
                      <th scope="row" class="whitespace-nowrap px-6 py-4 font-medium text-Dark900">
                        Muhammet Mustafa Yaprak
                      </th>
                      <td class="px-6 py-4 text-Dark900">
                        24.03.2023
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        Fatura
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        Öz Asm Oto
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        34 HYD 1234
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        Gaziantep
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        ₺200.000,00
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        150,000 KM
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        205/55 R 16 (Goodyear)
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        Periyodik Bakım
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        4 Adet Lastik Alımı
                      </td>
                    </tr>
                    <tr class="border-b bg-gray-50 text-Graydarker">
                      <th scope="row" class="whitespace-nowrap px-6 py-4 font-medium text-Dark900 ">
                        Muhammet Mustafa Yaprak
                      </th>
                      <td class="px-6 py-4 text-Dark900">
                        24.03.2023
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        Fatura
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        Öz Asm Oto
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        34 HYD 1234
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        Gaziantep
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        ₺200.000,00
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        150,000 KM
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        205/55 R 16 (Goodyear)
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        Periyodik Bakım
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        4 Adet Lastik Alımı
                      </td>
                    </tr>
                    <tr class="border-b bg-white ">
                      <th scope="row" class="whitespace-nowrap px-6 py-4 font-medium text-Dark900">
                        Muhammet Mustafa Yaprak
                      </th>
                      <td class="px-6 py-4 text-Dark900">
                        24.03.2023
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        Fatura
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        Öz Asm Oto
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        34 HYD 1234
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        Gaziantep
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        ₺200.000,00
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        150,000 KM
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        205/55 R 16 (Goodyear)
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        Periyodik Bakım
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        4 Adet Lastik Alımı
                      </td>
                    </tr>
                    <tr class="border-b bg-gray-50 text-Graydarker">
                      <th scope="row" class="whitespace-nowrap px-6 py-4 font-medium text-Dark900 ">
                        Muhammet Mustafa Yaprak
                      </th>
                      <td class="px-6 py-4 text-Dark900">
                        24.03.2023
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        Fatura
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        Öz Asm Oto
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        34 HYD 1234
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        Gaziantep
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        ₺200.000,00
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        150,000 KM
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        205/55 R 16 (Goodyear)
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        Periyodik Bakım
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        4 Adet Lastik Alımı
                      </td>
                    </tr>
                    <tr class="border-b bg-white ">
                      <th scope="row" class="whitespace-nowrap px-6 py-4 font-medium text-Dark900">
                        Muhammet Mustafa Yaprak
                      </th>
                      <td class="px-6 py-4 text-Dark900">
                        24.03.2023
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        Fatura
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        Öz Asm Oto
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        34 HYD 1234
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        Gaziantep
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        ₺200.000,00
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        150,000 KM
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        205/55 R 16 (Goodyear)
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        Periyodik Bakım
                      </td>
                      <td class="px-6 py-4 text-Dark900">
                        4 Adet Lastik Alımı
                      </td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "RepAir",
  components: {}
})
</script>