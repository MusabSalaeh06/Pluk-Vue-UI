<template>
    <div class="dashboard">
        <div
            class="flex mb-3 items-center justify-between p-4 mb-3 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
            <div class="flex items-center">
                <span>รายวิชา อบรม Laravel Framework</span>
            </div>
        </div>
        <div class="course_img">
            <div class=" rounded-lg overflow-hidden shadow-md mb-3">
                <img :src="'http://elearning-its.test/storage/course/course_img_assets/'+course_img" width="1830">
            </div>
        </div>
        <div class="grid grid-cols-6 gap-3">
            <div class="col-span-5">
                <div class="lg:w-full px-4 md:px-0">
                    <div v-show="tab === 1">
                        <div
                            class="flex mb-3 items-center justify-between p-4 mb-3 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
                            <div class="flex items-center">
                                <span>เกี่ยวกับ</span>
                            </div>
                        </div>
                        <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                            <div class="text-2xl text-gray-600 dark:text-gray-400">
                                รหัสรายวิชา : {{course_id}} <br>
                                ชื่อรายวิชา : {{course_name}} <br>
                                คำอธิบายรายวิชา : {{course_detail}} <br>
                                หมวดหมู่รายวิชา : {{cc_id}} <br>
                                ประเภทรายวิชา : {{course_type}} <br>
                                สถานะรายวิชา : {{course_status}} <br>
                                ชื่อติวเตอร์ประจำรายวิชา : {{course_owner}}
                            </div>
                        </div>
                    </div>
                    <div v-show="tab === 2">
                        <div
                            class="flex mb-3 items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
                            <div class="flex items-center">
                                <span>เนื้อหาการเรียนรู้</span>
                            </div>
                        </div>

                        <div class="w-full  overflow-hidden mb-8 rounded-lg shadow-lg">
                            <div class="w-full overflow-x-auto">
                                <table class="w-full whitespace-no-wrap">
                                    <thead>
                                        <tr
                                            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-100 dark:text-gray-400 dark:bg-gray-800">
                                            <th class="px-4 py-6">ชื่อบทเรียน</th>
                                            <th class="px-4 py-6">สถานะบทเรียน</th>
                                            <th class="px-4 py-6" width="10%"></th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                        <tr class="text-gray-700 dark:text-gray-400" v-for="rows in lesson"
                                            v-bind:key="rows.id">
                                            <td class="px-4 py-3 text-sm">
                                                {{rows.lesson_name}}
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                {{rows.lesson_status}}
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                <a :href="'/learning_page/'+rows.lesson_id">
                                                    <button
                                                        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">เข้าดู</button>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div v-show="tab === 3">
                        <div
                            class="flex mb-3 items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
                            <div class="flex items-center">
                                <span>รายชื่อผู้ลงทะเบียน</span>
                            </div>
                        </div>

                        <div class="w-full  overflow-hidden mb-8 rounded-lg shadow-lg">
                            <div class="w-full overflow-x-auto">
                                <table class="w-full whitespace-no-wrap">
                                    <thead>
                                        <tr
                                            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-100 dark:text-gray-400 dark:bg-gray-800">
                                            <th class="px-4 py-6">ว/ด/ป ที่ขอเข้าร่วม</th>
                                            <th class="px-4 py-6">ชื่อผู้ลงทะเบียน</th>
                                            <th class="px-4 py-6">รูปแบบ</th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                        <tr class="text-gray-700 dark:text-gray-400" v-for="rows in person_enroll"
                                            v-bind:key="rows.id">
                                            <td class="px-4 py-3 text-sm">
                                                {{dateTime(rows.created_at)}}
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                {{rows.name}} {{rows.surname}}
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                {{rows.enroll_type}}
                                            </td>
                                        </tr>
                                        <tr class="text-gray-700 dark:text-gray-400" v-for="rows in org_enroll"
                                            v-bind:key="rows.id">
                                            <td class="px-4 py-3 text-sm">
                                                {{dateTime(rows.created_at)}}
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                {{rows.org_name}}
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                {{rows.enroll_type}}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div v-show="tab === 4">
                        <div
                            class="flex mb-3 items-center justify-between p-4 mb-3 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
                            <div class="flex items-center">
                                <span>วิดีโอการเรียนรู้</span>
                            </div>
                        </div>
                        <div class="mb-8">
                            <div class="w-full shadow-md rounded-lg text-2xl bg-gray-100 p-4" v-for="rows in note"
                                v-bind:key="rows.id">
                                <div class="px-4 py-3 mx-72 mb-5 bg-white rounded-lg shadow-md dark:bg-gray-800">
                                    <div class="text-2xl text-gray-600 dark:text-gray-400">
                                        <b>บันทึกย่อ :</b>
                                    </div>
                                </div>
                                <textarea :v-model="note" class="w-full shadow-lg rounded-lg text-2xl p-4"
                                    :value="rows.note" rows="3"></textarea>
                                <button class="p-2 bg-blue-500 text-white shadow-lg rounded-lg ">บันทึก</button>
                            </div>
                        </div>
                        <!-- วิดีโอจากยูทูป -->
                        <div class="mb-8" v-for="rows in link_y" v-bind:key="rows.id">
                            <div
                                class="flex mb-3 mx-72 p-4 mb-3 text-sm font-bold text-gray-700 bg-white rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
                                <div class="flex items-center mr-auto">
                                    <span>
                                        <box-icon name='youtube' type='logo'></box-icon> {{rows.name}}
                                    </span>
                                </div>
                            </div>
                            <div class="grid grid-cols-5">
                                <div class="col-start-2 ml-7 col-span-1 ">
                                    <YouTube :src="rows.link" class="mb-3 border-b shadow-lg rounded-lg" ready="onReady"
                                        ref="youtube" width="750" height="400" />
                                </div>
                            </div>
                        </div>

                        <!-- วิดีโอจากเครื่อง -->
                        <div class="mb-8" v-for="rows in video" v-bind:key="rows.id">
                            <div
                                class="flex mb-3 mx-72 p-4 mb-3 text-sm font-bold text-gray-700 bg-white rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
                                <div class="flex items-center mr-auto">
                                    <span>
                                        <box-icon name='videos' type='solid'></box-icon> {{rows.name}}
                                    </span>
                                </div>
                            </div>
                            <div class="grid grid-cols-5">
                                <div class="col-start-2 ml-7 col-span-1 ">
                                    <iframe :src="'http://elearning-its.test/storage/lesson/video_assets/'+rows.file"
                                        type="video/mp4" width="750" height="400">
                                    </iframe>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div v-show="tab === 5">
                        <div
                            class="flex mb-3 items-center justify-between p-4 mb-3 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
                            <div class="flex items-center">
                                <span>ส่วนเสริมเนื้อหาการเรียนรู้</span>
                            </div>
                        </div>

                        <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                            <div class="text-2xl text-gray-600 dark:text-gray-400">
                                <b>ทำความรู้จัก Vue.js เบื้องต้น</b> <br>
                                ปัจจุบัน Vue.js เป็นหนึ่งใน Web Framework ที่คนนิยมนำมาพัฒนาเว็บไซต์ (3 เจ้าใหญ่ๆ คือ
                                React, Vue, Angular นั่นเอง)
                                วันนี้ผมจะมาทำ Tutorial อธิบายว่า Vue.js คืออะไร? ไปจนถึงสอนวิธีการใช้งาน Vue.js
                                ตั้งแต่เริ่มต้น เข้าใจ
                                Concept ภาพรวม จนจบบทความ ทุกคนสามารถสร้างเว็บไซต์ได้เองโดยใช้ Vue.js
                            </div>
                        </div>

                        <!-- ลิงค์ภายนอก -->
                        <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
                            v-for="rows in link_g" v-bind:key="rows.id">
                            <div class="text-2xl text-gray-600 dark:text-gray-400">
                                <b>
                                    <box-icon class="pt-1" name='link'></box-icon>{{rows.name}}
                                </b> <br>
                                <a :href="rows.link" target="_blank">
                                    <button
                                        class="bg-blue-500 p-4 shadow-lg rounded-lg text-white text-xl">กดที่นี่เพื่อไปที่ลิงค์</button>
                                </a>
                            </div>
                        </div>
                        <!-- ไฟล์เอกสาร -->
                        <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
                            v-for="rows in document" v-bind:key="rows.id">
                            <div class="text-2xl text-gray-600 dark:text-gray-400">
                                <b>
                                    <box-icon name='file' type='solid'></box-icon>{{rows.name}}
                                </b> <br>
                                <a :href="'http://elearning-its.test/storage/lesson/document_assets/'+rows.file"
                                    target="_blank">
                                    <button type="button"
                                        class="p-4 bg-red-500 text-white shadow-md rounded-md hover:bg-red-700">
                                        <h5>กดที่นี่เพื่อเปิดไฟล์</h5>
                                    </button></a>
                            </div>
                        </div>
                        <!-- รูปภาพ -->
                        <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
                            v-for="rows in images" v-bind:key="rows.id">
                            <div class="text-2xl text-gray-600 dark:text-gray-400">
                                <b>
                                    <box-icon name='file-image' type='solid'></box-icon>{{rows.name}}
                                </b> <br>
                                <img :src="'http://elearning-its.test/storage/lesson/image_assets/'+rows.file"
                                    width="750">
                            </div>
                        </div>
                    </div>

                    <div v-show="tab === 6">
                        <div
                            class="flex mb-3 items-center justify-between p-4 mb-3 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
                            <div class="flex items-center">
                                <span>ชุดทดสอบ</span>
                            </div>
                        </div>
                        <div class="w-full  overflow-hidden rounded-lg shadow-lg">
                            <div class="w-full overflow-x-auto">
                                <table class="w-full whitespace-no-wrap">
                                    <thead>
                                        <tr
                                            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-100 rounded-lg dark:text-gray-400 dark:bg-gray-800">
                                            <th class="px-4 py-6">ชื่อชุดทดสอบ</th>
                                            <th class="px-4 py-6">สถานะ</th>
                                            <th class="px-4 py-6" width="15%"></th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                        <tr class="text-gray-700 dark:text-gray-400" v-for="rows in set_quiz"
                                            v-bind:key="rows.id">
                                            <td class="px-4 py-3 text-sm">
                                                {{rows.set_name}}
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                {{rows.status}}
                                            </td>
                                            <td class="px-4 py-3 text-sm ">
                                                <a :href="'/ans_quiz/'+rows.id"><button
                                                        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">ทำแบบทดสอบ</button></a>
                                            </td>
                                        </tr>
                                        <!-- 
                                            <td class="px-4 py-3 text-sm ">
                                                <a href="/ans_quiz"><button
                                                        class="p-3 bg-green-500 shadow-lg rounded-lg font-bold text-sm text-white">ทำแบบทดสอบ</button></a>
                                            </td>
                                  </tr> -->

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div v-show="tab === 7">
                        <div
                            class="flex mb-3 items-center justify-between p-4 mb-3 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
                            <div class="flex items-center">
                                <span>รายละเอียดคะแนน-{{set_name}}</span>
                            </div>
                        </div>
                        <div class="w-full  overflow-hidden rounded-lg shadow-lg">
                            <div class="w-full overflow-x-auto">
                                <table class="w-full whitespace-no-wrap">
                                    <thead>
                                        <tr
                                            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-100 rounded-lg dark:text-gray-400 dark:bg-gray-800">
                                            <th class="px-4 py-6">วันที่ส่ง</th>
                                            <th class="px-4 py-6">คะแนนที่ทำได้</th>
                                            <th class="px-4 py-6">คะแนนเฉลี่ย</th>
                                            <th class="px-4 py-6">ชื่อคนทดสอบ</th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                        <tr class="text-gray-700 dark:text-gray-400" v-for="rows in score"
                                            v-bind:key="rows.id">
                                            <td class="px-4 py-3 text-sm">
                                                {{dateTime(rows.created_at)}}
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                {{rows.value}}/{{co_quiz}}
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                80%
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                {{rows.name}} {{rows.surname}}
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <!-- <div v-show="tab === 8">
                        <div
                            class="flex mb-3 items-center justify-between p-4 mb-3 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
                            <div class="flex items-center">
                                <span>คะแนน</span>
                            </div>
                        </div>

                        <div class="w-full  overflow-hidden rounded-lg shadow-lg">
                            <div class="w-full overflow-x-auto">
                                <table class="w-full whitespace-no-wrap">
                                    <thead>
                                        <tr
                                            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-100 rounded-lg dark:text-gray-400 dark:bg-gray-800">
                                            <th class="px-4 py-6">ชื่อชุดทดสอบ</th>
                                            <th class="px-4 py-6" width="15%"></th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                        <tr class="text-gray-700 dark:text-gray-400" v-for="rows in set_quiz_owner"
                                            v-bind:key="rows.id">
                                            <td class="px-4 py-3 text-sm">
                                                {{rows.set_name}}
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                <a :href="'/score/'+rows.id"><button
                                                        class="p-3 bg-green-500 shadow-lg rounded-lg font-bold text-sm text-white">ดูคะแนน</button></a>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div> -->

                </div>
            </div>
            <div>
                <aside class="w-75" aria-label="Sidebar">
                    <div class="overflow-y-auto py-4 px-3 bg-white-200 rounded dark:bg-gray-800 rounded-lg shadow-lg ">
                        <ul class="space-y-2">
                            <li>
                                <button @click="activeTabSeven"
                                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg aria-hidden="true"
                                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                                        </path>
                                    </svg>
                                    <span class="flex-1 ml-3 whitespace-nowrap">รายละเอียดคะแนน</span>
                                    <!-- <span
                                        class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                                        3</span> -->
                                </button>
                            </li>
                        </ul>
                    </div>
                </aside>

                <aside class="w-75" aria-label="Sidebar">
                    <div class="overflow-y-auto py-4 px-3 bg-white-200 rounded dark:bg-gray-800 rounded-lg shadow-lg ">
                        <ul class="space-y-2">
                            <li>
                                <button @click="activeTabFour"
                                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg aria-hidden="true"
                                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                                        </path>
                                    </svg>
                                    <span class="flex-1 ml-3 whitespace-nowrap">วิดีโอการเรียนรู้</span>
                                    <!-- <span
                                        class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                                        3</span> -->
                                </button>
                            </li>
                            <li>
                                <button @click="activeTabFive"
                                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg aria-hidden="true"
                                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                                        </path>
                                    </svg>
                                    <span class="flex-1 ml-3 whitespace-nowrap">ส่วนเสริมการเรียนรู้</span>
                                    <!-- <span
                                        class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                                        3</span> -->
                                </button>
                            </li>
                            <li>
                                <button @click="activeTabSix"
                                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg aria-hidden="true"
                                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                                        </path>
                                    </svg>
                                    <span class="flex-1 ml-3 whitespace-nowrap">ชุดทดสอบ</span>
                                    <!-- <span
                                        class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                                        3</span> -->
                                </button>
                            </li>
                            <!-- <li>
                                <button @click="activeTabEight"
                                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg aria-hidden="true"
                                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                                        </path>
                                    </svg>
                                    <span class="flex-1 ml-3 whitespace-nowrap">คะแนน</span>
                                    <span
                                        class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
                                </button>
                            </li> -->
                        </ul>
                    </div>
                </aside>

                <aside class="w-75" aria-label="Sidebar">
                    <div class="overflow-y-auto py-4 px-3 bg-white-200 rounded dark:bg-gray-800 rounded-lg shadow-lg ">
                        <ul class="space-y-2">
                            <li>
                                <button @click="activeTabOne"
                                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg aria-hidden="true"
                                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                                        </path>
                                    </svg>
                                    <span class="ml-3">เกี่ยวกับ</span>
                                </button>
                            </li>
                            <li>
                                <button @click="activeTabTwo"
                                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg aria-hidden="true"
                                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                                        </path>
                                    </svg>
                                    <span class="flex-1 ml-3 whitespace-nowrap">เนื้อหาการเรียนรู้</span>
                                    <span
                                        class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                                        {{lesson_count}}</span>
                                </button>
                            </li>
                            <li>
                                <button @click="activeTabThree"
                                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg aria-hidden="true"
                                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                                        </path>
                                    </svg>
                                    <span class="flex-1 ml-3 whitespace-nowrap">รายชื่อผู้ลงทะเบียน</span>
                                    <span
                                        class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                                        {{Penroll_count}}</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    </div>
</template>


<script>
    import 'moment/locale/th';
    import moment from "moment";
    import axios from "axios";
    import YouTube from 'vue3-youtube';
    // import Layout from '@/Layout.vue'
    export default {
        name: "ScoRe",
        components: { YouTube },
        data() {
            return {
                AddLessonModal: false,
                EditLessonModal: false,
                tab: 7,
                linky1: 'https://www.youtube.com/watch?v=RDentbxLSUs&t=71s',
                size: 700,
                course_id: '',
                cc_id: '',
                course_name: '',
                course_detail: '',
                course_status: '',
                course_type: '',
                course_owner: '',
                course_img: '',

                lesson: '',
                person_enroll: '',
                org_enroll: '',
                person_Renroll: '',
                org_Renroll: '',

                lesson_id: '',
                lesson_name: '',

                link_y: '',
                video: '',

                link_g: '',
                document: '',
                images: '',

                set_quiz: '',
                set_name: '',
                score: '',
                co_quiz: '',
                avg: '',

                Renroll_count: '',
                Penroll_count: '',
                lesson_count: '',
            }
        },
        mounted() {
            this.getCourseDetail()
            //this.avg = this.value / this.co_quiz 
        },
        methods: {
            addLessonModal: function () {
                this.AddLessonModal = !this.AddLessonModal;
            },
            editLessonModal: function () {
                this.EditLessonModal = !this.EditLessonModal;
            },
            activeTabOne() {
                this.tab = 1;
            },
            activeTabTwo() {
                this.tab = 2;
            },
            activeTabThree() {
                this.tab = 3;
            },
            activeTabFour() {
                this.tab = 4;
            },
            activeTabFive() {
                this.tab = 5;
            },
            activeTabSix() {
                this.tab = 6;
            },
            activeTabSeven() {
                this.tab = 7;
            },
            activeTabEight() {
                this.tab = 8;
            },
            getCourseDetail() {
                axios.get('http://elearning-its.test/api/score/' + this.$route.params.id).then((response) => {
                    this.lesson_id = response.data.lesson_data.lesson_id;
                    this.lesson_name = response.data.lesson_data.lesson_name;
                    this.link_y = response.data.link_y;
                    this.video = response.data.video;
                    this.link_g = response.data.link_g;
                    this.document = response.data.document;
                    this.images = response.data.image;
                    this.set_quiz = response.data.set_quiz;
                    this.set_name = response.data.set_quiz_data.set_name;
                    this.score = response.data.score;
                    this.co_quiz = response.data.co_quiz;

                    this.course_id = response.data.data_course.course_id;
                    this.cc_id = response.data.data_course.cc_id;
                    this.course_name = response.data.data_course.course_name;
                    this.course_detail = response.data.data_course.course_detail;
                    this.course_status = response.data.data_course.course_status;
                    this.course_type = response.data.data_course.course_type;
                    this.course_owner = response.data.data_course.course_owner;
                    this.course_img = response.data.data_course.course_img;

                    this.lesson = response.data.lesson;
                    this.person_enroll = response.data.person_enroll;
                    this.org_enroll = response.data.org_enroll;
                    this.person_Renroll = response.data.person_Renroll;
                    this.org_Renroll = response.data.org_Renroll;

                    this.Renroll_count = response.data.Renroll_count;
                    this.Penroll_count = response.data.Penroll_count;
                    this.lesson_count = response.data.lesson_count;
                });
            },
            dateTime(date) {
                var strdate = moment(date).add(543, "years");
                //return moment(strdate).format("Do MMMM YYYY")+'   '+"|"+'   '+ moment(strdate).format("hh:mm:ss")+' '+'น.'
                return moment(strdate).format("DD/MM/YYYY")
                    ;
            }
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

    .course_img img {
        max-width: 100%;
        max-height: 450px;
        object-fit: cover;

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
        margin-block: 1%;
        margin-inline: 1%;
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