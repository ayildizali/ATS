<template>
    <div class="relative flex min-h-screen  ">
            <div class="absolute  inset-y-0 left-0 w-80 -translate-x-full space-x-6 bg-[#1E724A] px-2 py-4  transition duration-200 ease-in-out md:relative md:-translate-x-0" :class="{'relative translate-x-0':showsidebar}"  >
                <img class="m-auto pt-7" src="/public-src/Kullanıcı/HY_Logo%20Yatay%201.svg">
                <div class="mt-10 w-56">
                    <nav class="  flex items-center rounded-lg px-4 py-3 pl-12 pt-4 text-sm hover:bg-[#DBF5E9]">
                        <img src="/public-src/Kullanıcı/Vector(7).svg" >
                        <span class="pl-4 text-white hover:text-emerald-900" >Araçlarım</span>
                    </nav>
                    <nav class="flex items-center rounded-lg px-4 py-3 pl-12 pt-4 text-sm hover:bg-[#DBF5E9]" >
                        <img src="/public-src/Kullanıcı/Vector(6).svg">
                        <span class="pl-4 text-white hover:text-emerald-900">Araç Yönetimi</span>
                    </nav>
                    <nav class="flex items-center rounded-lg px-4 py-3 pl-12 pt-4 text-sm hover:bg-[#DBF5E9]">
                        <img src="/public-src/Kullanıcı/Vector(4).svg">

                        <span class="pl-4 text-white hover:text-emerald-900">Ceza Ödeme</span>
                    </nav>
                    <nav class="flex items-center rounded-lg px-4 py-3 pl-12 pt-4 text-sm transition-all hover:bg-[#DBF5E9]">
                        <img src="/public-src/Kullanıcı/Frame(7).svg">

                        <span class="pl-4 text-white hover:text-emerald-900">Periyodik Bakım</span>
                    </nav>
                    <nav class="flex items-center rounded-lg px-4 py-3 pl-12 pt-4   text-sm hover:bg-[#DBF5E9]">
                        <a href="/public" class=" hover:text-emerald-900">
                          <img src="/public-src/Kullanıcı/Vector(5).svg">
                        </a>
                        <span class="pl-4 text-white group-hover:text-emerald-900 ">Diğer Harcamalar</span>
                    </nav>
                    <nav class="flex items-center rounded-lg px-4 py-3 pl-12 pt-4   text-sm hover:bg-[#DBF5E9]">
                        <img src="/public-src/Kullanıcı/Frame(8).svg">
                        <span class="pl-4 text-white hover:text-emerald-900">Kullanıcı Yönetimi</span>
                    </nav>
                </div>
                <div class="  absolute  bottom-10  ml-8  flex w-56 items-center   ">
                    <nav class=" flex items-center justify-center  rounded-lg px-4 py-3 pl-12 pr-10  text-sm hover:bg-[#DBF5E9] hover:text-[#1E724A] ">
                       <img src="/public-src/Kullanıcı/Frame(10).svg">
                        <span class="pl-2 text-white hover:text-emerald-900">Çıkış Yap</span>
                    </nav>
                </div>
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