<template>
    <div class="m-auto w-full flex items-center justify-between">
        <div class="flex-1">
            <!-- header -->
            <div class="flex items-center justify-between w-3/4 h-32 m-auto" >
                <div class="w-3/4 flex items-center ml-8">
                    <img src="/public-src/Frame137.svg" class="mr-10">
                    <h2 class="leading-9 text-green-800 text-4xl ml-8 font-bold">
                        Araçlarım
                    </h2>
                    <h4 class="text-base text-[#717982] ml-8"> / 34 HYD 1234 VOLKSWAGEN POLO </h4>
                </div>

                <div class="flex items-center">
                    <nav class="pr-3">
                        <img src="/public-src/Frame(12).svg">
                    </nav>
                    <p class="text-sm text-gray-500">Muhammed Ali Ay </p>
                </div>
            </div>
            <!-- content-->

            <div class="w-3/4 h-20 flex items-center m-auto border-solid border-2 border-primary rounded-xl">
                <div class="w-3/4 flex items-center justify-between text-[#717982] m-auto">
                    <h3 class="text-sm hover:text-primary">ARAÇ</h3>
                    <h3 class="text-sm hover:text-primary">KULLANICI BİLGİLERİ</h3>
                    <h3 class="text-sm hover:text-primary">DİĞER BİLGİLER</h3>
                    <h3 class="text-sm hover:text-primary">KM/HARCAMALAR</h3>
                    <h3 class="text-sm hover:text-primary">BAKIM</h3>
                    <h3 class="text-sm hover:text-primary">HGS/CEZA</h3>
                </div>

            </div>
            <div class="w-9/12 m-auto flex justify-end">
                <div class="w-64 h-36  bg-GrayLightest border-solid border-2 border-b-Graydarker mt-16  rounded-lg">
                    <div class=" ">
                        <p class="text-Dark900 flex items-center ml-8 mt-7 font-bold" >TOPLAM TUTAR</p>
                        <p class=" flex items-center border-b-2 border-b-Graydarker mt-5 ml-3 mr-3"></p>
                        <p class="text-Dark900 flex items-center ml-8 mt-5 font-bold ">₺56.774,00</p>
                    </div>
                </div>
            </div>

            <!-- main -->
            <div class="w-3/4 flex items-center  m-auto relative overflow-x-auto shadow-md sm:rounded-lg mt-16">
                <table class="w-full text-sm text-left text-GrayLightest">
                    <thead class="text-xs text-Dark900 uppercase bg-GrayLightest">
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
                    <tr class="bg-white border-b ">
                        <th scope="row" class="px-6 py-4 font-medium text-Dark900 whitespace-nowrap">
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
                        <th scope="row" class="px-6 py-4 font-medium text-Dark900 whitespace-nowrap ">
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
                    <tr class="bg-white border-b ">
                        <th scope="row" class="px-6 py-4 font-medium text-Dark900 whitespace-nowrap">
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
                        <th scope="row" class="px-6 py-4 font-medium text-Dark900 whitespace-nowrap ">
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
                    <tr class="bg-white border-b ">
                        <th scope="row" class="px-6 py-4 font-medium text-Dark900 whitespace-nowrap">
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

</script>