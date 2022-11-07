<template>
    <div class="dashboard">
        <div
            class="flex mb-3 items-center justify-between p-4 my-8 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
            <div class="flex items-center">
                <span>ค้นหารายวิชา</span>
            </div>
        </div>
        <form action="/course_show">
            <div class="flex float-right  mb-3">
                <div class="relative w-full max-w-xl mr-0 focus-within:text-purple-500">
                    <div class="absolute inset-y-0 flex items-center pl-2">
                        <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <input
                        class="w-full pl-8 pr-2 text-xl text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                        type="text" placeholder="ค้นหา..." aria-label="Search" />
                </div>
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-semibold  py-1 px-2 ml-1 rounded">ค้นหา</button>
            </div>
        </form>
        <div class="w-full  overflow-hidden rounded-lg shadow-xs">
            <div class="w-full overflow-x-auto">
                <table class="w-full whitespace-no-wrap">
                    <thead>
                        <tr
                            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                            <th class="px-4 py-3">รหัสรายวิชา</th>
                            <th class="px-4 py-3">ชื่อรายวิชา</th>
                            <th class="px-4 py-3">ติวเตอร์ประจำวิชา</th>
                            <th class="px-4 py-3">ประเภทรายวิชา</th>
                            <th class="px-4 py-3">สถานะการลงทะเบียน</th>
                            <th class="px-4 py-3" colspan="2" width="10%"></th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                        <tr class="text-gray-700 dark:text-gray-400">
                            <td class="px-4 py-3 text-sm">
                                APF4
                            </td>
                            <td class="px-4 py-3 text-sm">
                                อบรม Flutter
                            </td>
                            <td class="px-4 py-3 text-sm">
                                อิลยาส สะมูโด
                            </td>
                            <td class="px-4 py-3 text-sm">
                                สาธารณะ
                            </td>
                            <td class="px-4 py-3 text-sm">
                                ลงทะเบียนเเล้ว
                            </td>
                            <td class="px-4 py-3 text-sm">
                                <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                    type="button" v-on:click="enrollModal()">
                                    ลงทะเบียน
                                </button>
                                <div v-if="EnrollModal"
                                    class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                                    <div class="relative w-auto my-6 mx-auto max-w-6xl">
                                        <!--content-->
                                        <div
                                            class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                            <!--header-->
                                            <div
                                                class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                <h3 class="text-3xl text-black">
                                                    แนะนำรายวิชา อบรม IONIC
                                                </h3>
                                                <button
                                                    class="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                    v-on:click="enrollModal()">
                                                    X
                                                </button>
                                            </div>
                                            <!--body-->
                                            <div class="w-screen-fit">
                                                <div class="w-full p-5">
                                                    <div
                                                        class="px-4 py-3 mb-5 bg-white rounded-lg shadow-md dark:bg-gray-800">
                                                        <div class="text-2xl text-gray-600 dark:text-gray-400">
                                                            <img src="https://www.techtalkthai.com/wp-content/uploads/2022/02/flutter-banner.png"
                                                                width="300" />
                                                            <b> รายละเอียด วิชา Flutter</b> <br>
                                                            รหัสรายวิชา : APF4 <br>
                                                            ชื่อรายวิชา : Flutter <br>
                                                            คำอธิบายรายวิชา : เรียนรู้ Flutter เบื้องต้นถึงขั้นสูง <br>
                                                            หมวดหมู่รายวิชา : Application Framework <br>
                                                            ประเภทรายวิชา : สาธารณะ <br>
                                                            สถานะรายวิชา : เผยแพร่ <br>
                                                            ชื่อติวเตอร์ประจำรายวิชา : สุธาวี สะอะ <br>
                                                            <b> ความรู้ที่คุณจะได้ในรายวิชา Flutter</b> <br>
                                                            บทเรียนที่ 01 การเขียนภาษา php เบื้องต้น <br>
                                                            บทเรียนที่ 02 การประยุกต์ใช้ภาษา php <br>
                                                        </div>
                                                    </div>
                                                    <button
                                                        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">ลงทะเบียน</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="EnrollModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
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
        name: "Course_Show",
        data() {
            return {
                EnrollModal: false,
            }
        },
        methods: {
            enrollModal: function () {
                this.EnrollModal = !this.EnrollModal;
            },
        }
    }
</script>
<style scoped>
    /*  */
    nav {
        /* background-color: rgb(255, 251, 28); */
        max-width: 100%;
        font-size: 24px;
    }

    .tab-content {
        /* background-color: rgb(229, 229, 229); */
        max-width: 100%;
        font-size: 22px;
    }

    img {
        max-width: 100%;
    }

    .table th {
        font-size: 26px;
    }

    .table td {
        font-size: 22px;
    }

    .table button {
        font-size: 22px;
    }

    .dashboard {
        margin-block: 3%;
        margin-inline: 3%;
    }

    table th {
        font-size: 26px;
    }

    table td {
        font-size: 22px;
    }

    table button {
        font-size: 22px;
    }

    .flex button {
        font-size: 22px;
    }

    ::placeholder {
        font-size: 22px;
    }
</style>