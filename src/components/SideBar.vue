<template>
    <div class="relative flex min-h-screen  ">
            <div class="bg-[#1E724A]  w-80 px-2 py-4 space-x-6 absolute inset-y-0 left-0 md:relative  md:-translate-x-0 transform -translate-x-full transition duration-200 ease-in-out " :class="{'relative translate-x-0':showsidebar}"  >
                <img class="pt-7  m-auto" src="/public/public-src/HY_Logo Yatay 1.svg">
                <div class="w-56 mt-10   ">
                    <nav class="  flex items-center py-3 px-4 pl-12 pt-4 hover:bg-[#DBF5E9] rounded-lg text-sm">
                        <img src="/public/public-src/Vector(7).svg" >
                        <span class="text-white pl-4 hover:text-emerald-900" >Araçlarım</span>
                    </nav>
                    <nav class="flex items-center py-3 px-4 pl-12 pt-4 hover:bg-[#DBF5E9] rounded-lg text-sm" >
                        <img src="/public/public-src/Vector(6).svg">
                        <span class="text-white pl-4 hover:text-emerald-900">Araç Yönetimi</span>
                    </nav>
                    <nav class="flex items-center py-3 px-4 pl-12 pt-4 hover:bg-[#DBF5E9] rounded-lg text-sm">
                        <img src="/public/public-src/Vector(4).svg">

                        <span class="text-white pl-4 hover:text-emerald-900">Ceza Ödeme</span>
                    </nav>
                    <nav class="flex items-center py-3 px-4 pl-12 pt-4 hover:bg-[#DBF5E9] transition-all rounded-lg text-sm">
                        <img src="/public/public-src/Frame(7).svg">

                        <span class="text-white pl-4 hover:text-emerald-900">Periyodik Bakım</span>
                    </nav>
                    <nav class="flex items-center py-3 px-4 pl-12 pt-4 hover:bg-[#DBF5E9]   rounded-lg text-sm">
                        <a href="/public" class=" hover:text-emerald-900">
                          <img src="/public/public-src/Vector(5).svg">
                        </a>
                        <span class="text-white pl-4 group-hover:text-emerald-900 ">Diğer Harcamalar</span>
                    </nav>
                    <nav class="flex items-center py-3 px-4 pl-12 pt-4 hover:bg-[#DBF5E9]   rounded-lg text-sm">
                        <img src="/public/public-src/Frame(8).svg">
                        <span class="text-white pl-4 hover:text-emerald-900">Kullanıcı Yönetimi</span>
                    </nav>
                </div>
                <div class="  ml-8  w-56  absolute  bottom-10 flex items-center   ">
                    <nav class=" pr-10 flex items-center  justify-center py-3 px-4 pl-12 hover:bg-[#DBF5E9]  hover:text-[#1E724A] rounded-lg text-sm ">
                       <img src="/public/public-src/Frame(10).svg">
                        <span class="text-white pl-2 hover:text-emerald-900">Çıkış Yap</span>
                    </nav>
                </div>
            </div>
        <div class=" w-full bg-white shadow px-2 py-4">
            <button
                @click="showsidebar = !showsidebar"
                class="text-[#1E724A] sm:hidden flex  justify-center ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <img class="" src="/public/public-src/LogoYesil.svg">
            </button>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue';

export default {

    setup(){
        const showsidebar = ref(false);

        return{
            showsidebar
        }
    },

}
</script>