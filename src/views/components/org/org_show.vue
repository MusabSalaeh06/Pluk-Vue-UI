<template>
<div class="dashboard">
              <div class="flex mb-3 items-center justify-between p-4 mb-3 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
              <div class="flex items-center">
                <span>องค์กรที่ฉันเข้าร่วม</span>
              </div>
            </div>
            <form action="/org_show">
              <div class="flex float-right  mb-3">
              <div
                class="relative w-full max-w-xl mr-0 focus-within:text-purple-500"
              >
                <div class="absolute inset-y-0 flex items-center pl-2">
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  class="w-full pl-8 pr-2 text-xl text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                  type="text"
                  placeholder="ค้นหา..."
                  aria-label="Search"
                />
              </div>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-semibold  py-1 px-2 ml-1 rounded">ค้นหา</button>
            </div>
            </form>
<div class="w-full  overflow-hidden rounded-lg shadow-xs">
              <div class="w-full overflow-x-auto">
                <table class="w-full whitespace-no-wrap">
                  <thead>
                    <tr
                      class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
                    >
                      <th class="px-4 py-3">ชื่อองค์กร</th>
                      <th class="px-4 py-3">คำอธิบาย</th>
                      <th class="px-4 py-3">โทรสาร</th>
                      <th class="px-4 py-3">ผู้ก่อตั้ง</th>
                      <th class="px-4 py-3" colspan="3"  width="5%"></th>
                    </tr>
                  </thead>
                  <tbody
                    class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
                  >
                    <tr class="text-gray-700 dark:text-gray-400">
                      <td class="px-4 py-3 text-sm">
                        Southern IOT
                      </td>
                      <td class="px-4 py-3 text-sm">
                        บริษัทพัฒนาซอฟต์แวร์ประยุกต์
                      </td>
                      <td class="px-4 py-3 text-sm">
                        0936658263
                      </td>
                      <td class="px-4 py-3 text-sm">
                        อับดุลเลาะ บากา
                      </td>
                      <td class="px-4 py-3 text-sm">
                        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">เข้าร่วม</button>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
</div>
</div>
</template>

<script>
// import Layout from '@/Layout.vue'
export default {
    name:"org_show",
    // components:{
    //   Layout
    // }
}
</script>

<style scoped>
.dashboard{
  margin-block: 3%;
  margin-inline: 3%;
}
table th {
        font-size: 26px;
    }
table td {
        font-size: 22px;
    }
table button{font-size: 22px;}
</style>