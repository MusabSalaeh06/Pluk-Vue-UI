<template>
<div class="dashboard">
              <div class="flex mb-3 items-center justify-between p-4 mb-3 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
              <div class="flex items-center">
                <span>รายวิชาของฉัน</span>
              </div>
            </div>
    <form action="/course_show">
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
                      <th class="px-4 py-3">รหัสรายวิชา</th>
                      <th class="px-4 py-3">ชื่อรายวิชา</th>
                      <th class="px-4 py-3">ติวเตอร์ประจำวิชา</th>
                      <th class="px-4 py-3">ประเภทรายวิชา</th>
                      <th class="px-4 py-3">รูปแบบ</th>
                      <th class="px-4 py-3">สถานะ</th>
                      <th class="px-4 py-3" colspan="3"  width="5%"></th>
                    </tr>
                  </thead>
                  <tbody
                    class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
                  >
                    <tr class="text-gray-700 dark:text-gray-400"  v-for="rows in my_course"  v-bind:key="rows.id">
                      <td class="px-4 py-3 text-sm">
                        {{rows.course_id}}
                      </td>
                      <td class="px-4 py-3 text-sm">
                        {{rows.course_name}}
                      </td>
                      <td class="px-4 py-3 text-sm">
                        {{rows.tutor_name}}
                      </td>
                      <td class="px-4 py-3 text-sm">
                        {{rows.course_type}}
                      </td>
                      <td class="px-4 py-3 text-sm">
                        {{rows.enroll_type}}
                      </td>
                      <td class="px-4 py-3 text-sm">
                        {{rows.enr_status}}
                      </td>
                      <td class="px-4 py-3 text-sm">
                        <a href="/my_course_detail">
                        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">เข้าดู</button>
                        </a>
                      </td>
                      <td class="px-4 py-3 text-sm">
                        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">ดรอป</button>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
</div>
</div>
</template>

<script>
import axios from "axios";
// import Swal from 'sweetalert2';
// import Layout from '@/Layout.vue'
export default {
    name:"my_course",
    data() {
      return {
        my_course:[],
      }
    },
    mounted() {
      this.getMyCourse()
    },
    methods: {
      getMyCourse(){
            axios.get('http://elearning-its.test/api/my_course').then((response)=>{
                this.my_course=response.data;
            });
        },
    },
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