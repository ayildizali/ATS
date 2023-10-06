<template>
  <section class="bg-primary  ">
    <div class="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">

      <div
          class="w-full rounded-lg bg-white  shadow-2xl sm:max-w-md md:mt-0 xl:p-0">
        <div class="space-y-4 p-6 sm:p-8 md:space-y-6">
          <h1 class="flex items-center justify-center text-xl font-bold leading-tight tracking-tight text-primary md:text-2xl">
            Hesabınıza Giriş Yapın
          </h1>
          <form action="#" class="space-y-4 md:space-y-6">
            <div>
              <label class="mb-2 block text-sm font-medium text-primary" for="email">Kullanıcı Adı</label>
              <input
                  id="email"
                  class="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 "
                  name="email"
                  placeholder="name@company.com"
                  type="email">
            </div>
            <div>
              <label class="mb-2 block text-sm font-medium text-primary "
                     for="password">Parola</label>
              <input
                  id="password"
                  class="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 "
                  name="password" placeholder="••••••••"
                  type="password">
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex h-5 items-center">
                  <input id="remember" aria-describedby="remember"
                         class="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border border-gray-300 bg-gray-50 "
                         type="checkbox">
                </div>
                <div class="ml-3 text-sm">
                  <label class="text-gray-500 " for="remember">Beni Hatırla</label>
                </div>
              </div>
              <a class=" text-xs font-medium text-gray-500 hover:underline" href="#">Parolanızı
                mı unuttunuz?</a>
            </div>
            <button
                class=" w-full rounded-lg   border-2 border-primary px-5 py-2.5 text-center text-sm font-medium text-primary hover:bg-white"
                type="submit">
              Sign in
            </button>

          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
</script>