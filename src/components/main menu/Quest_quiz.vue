<template>
    <div class="dashboard">
        <div
            class="flex mb-3 items-center justify-between p-4 mb-3 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
            <div class="flex items-center">
                <span>{{lesson_name}} - รายวิชา {{course_name}}</span>
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
                            class="flex mb-3 items-center justify-between p-4  text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
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
                            class="flex mb-3 items-center justify-between p-4 mb-3 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
                            <div class="flex items-center">
                                <span>เนื้อหาการเรียนรู้</span>
                            </div>

                            <button
                                class="bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button" v-on:click="addLessonModal()">
                                เพิ่มบทเรียน
                            </button>
                            <div v-if="AddLessonModal"
                                class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                                <div class="relative w-auto my-6 mx-auto max-w-6xl">
                                    <!--content-->
                                    <div
                                        class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        <!--header-->
                                        <div
                                            class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                            <h3 class="text-3xl text-black">
                                                เพิ่มบทเรียน
                                            </h3>
                                            <button
                                                class="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                v-on:click="addLessonModal()">
                                                X
                                            </button>
                                        </div>
                                        <!--body-->
                                        <form action="#">
                                            <div class="w-96 p-5">
                                                <label class="block text-sm">
                                                    <span class="text-gray-700 dark:text-gray-400">ชื่อบทเรียน</span>
                                                    <input type="text" v-model="name1" placeholder="..."
                                                        class="block text-gray-700 dark:text-gray-400 w-full text-xl rounded-md shadow-md form-input p-3 my-2 mt-1 " />
                                                </label>
                                                <label class="block text-sm">
                                                    <span class="text-gray-700 dark:text-gray-400">สถานะ</span>
                                                    <input type="text" v-model="name2" placeholder="..."
                                                        class="block text-gray-700 dark:text-gray-400 w-full text-xl rounded-md shadow-md form-input p-3 my-2 mt-1 " />
                                                </label>
                                            </div>
                                            <button type="submit"
                                                class="mx-3 p-5 mb-3 py-1  text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                                บันทึก
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div v-if="AddLessonModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </div>

                        <div class="w-full  overflow-hidden mb-8 rounded-lg shadow-lg">
                            <div class="w-full overflow-x-auto">
                                <table class="w-full whitespace-no-wrap">
                                    <thead>
                                        <tr
                                            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-100 dark:text-gray-400 dark:bg-gray-800">
                                            <th class="px-4 py-6">ชื่อบทเรียน</th>
                                            <th class="px-4 py-6">สถานะบทเรียน</th>
                                            <th class="px-4 py-6" colspan="3" width="20%"></th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                        <tr class="text-gray-700 dark:text-gray-400" v-for="rows in lesson_owner"
                                            v-bind:key="rows.id">
                                            <td class="px-4 py-3 text-sm">
                                                {{rows.lesson_name}}
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                {{rows.lesson_status}}
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                <a :href="'/lesson_page/'+rows.lesson_id">
                                                    <button
                                                        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">เข้าดู</button>
                                                </a>
                                            </td>
                                            <td class="px-4 font-semibold py-3 text-sm">

                                                <button
                                                    class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                                                    type="button" v-on:click="editLessonModal()">
                                                    แก้ไข
                                                </button>
                                                <div v-if="EditLessonModal"
                                                    class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                                                    <div class="relative w-auto my-6 mx-auto max-w-6xl">
                                                        <!--content-->
                                                        <div
                                                            class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                            <!--header-->
                                                            <div
                                                                class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                                <h3 class="text-3xl text-black">
                                                                    แก้ไขข้อมูลบทเรียน
                                                                </h3>
                                                                <button
                                                                    class="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                                    v-on:click="editLessonModal()">
                                                                    X
                                                                </button>
                                                            </div>
                                                            <!--body-->
                                                            <form action="#">
                                                                <div class="w-96 p-5">
                                                                    <label class="block text-sm">
                                                                        <span
                                                                            class="text-gray-700 dark:text-gray-400">ชื่อบทเรียน</span>
                                                                        <input type="text" v-model="name1"
                                                                            placeholder="..."
                                                                            class="block text-gray-700 dark:text-gray-400 w-full text-xl rounded-md shadow-md form-input p-3 my-2 mt-1 " />
                                                                    </label>
                                                                    <label class="block text-sm">
                                                                        <span
                                                                            class="text-gray-700 dark:text-gray-400">สถานะ</span>
                                                                        <input type="text" v-model="name2"
                                                                            placeholder="..."
                                                                            class="block text-gray-700 dark:text-gray-400 w-full text-xl rounded-md shadow-md form-input p-3 my-2 mt-1 " />
                                                                    </label>
                                                                </div>
                                                                <button type="submit"
                                                                    class="mx-3 p-3 mb-3  text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                                                    อัพเดท
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div v-if="EditLessonModal"
                                                    class="opacity-25 fixed inset-0 z-40 bg-black"></div>

                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                <button
                                                    class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">ลบ</button>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div v-show="tab === 3">

                        <div
                            class="flex mb-3 items-center justify-between p-4 mb-3 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
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
                                            <th class="px-4 py-6">ว/ด/ป เข้าร่วม</th>
                                            <th class="px-4 py-6">ชื่อผู้ลงทะเบียน</th>
                                            <th class="px-4 py-6">รูปแบบ</th>
                                            <th class="px-4 py-6" width="5%"></th>
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
                                            <td class="px-4 py-3 text-sm">
                                                <a href="/course_detail">
                                                    <button
                                                        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">ลบ</button>
                                                </a>
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
                                            <td class="px-4 py-3 text-sm">
                                                <a href="/course_detail">
                                                    <button
                                                        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">ลบ</button>
                                                </a>
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
                                <span>คำขอลงทะเบียน</span>
                            </div>
                        </div>

                        <div class="w-full  overflow-hidden mb-8 rounded-lg shadow-lg">
                            <div class="w-full overflow-x-auto">
                                <table class="w-full whitespace-no-wrap">
                                    <thead>
                                        <tr
                                            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-100 dark:text-gray-400 dark:bg-gray-800">
                                            <th class="px-4 py-6">ว/ด/ป ที่ขอลงทะเบียน</th>
                                            <th class="px-4 py-6">ชื่อผู้ลงทะเบียน</th>
                                            <th class="px-4 py-6">รูปแบบ</th>
                                            <th class="px-4 py-6" colspan="2" width="20%"></th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                        <tr class="text-gray-700 dark:text-gray-400" v-for="rows in  person_Renroll"
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
                                            <td class="px-4 py-3 text-sm">
                                                <button
                                                    class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">ตอบรับ</button>
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                <button
                                                    class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">ปฏิเสธ</button>
                                            </td>
                                        </tr>
                                        <tr class="text-gray-700 dark:text-gray-400" v-for="rows in org_Renroll"
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
                                            <td class="px-4 py-3 text-sm">
                                                <button
                                                    class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">ตอบรับ</button>
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                <button
                                                    class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">ปฏิเสธ</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div v-show="tab === 5">
                        <div
                            class="flex mb-3 items-center justify-between p-4 mb-3 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
                            <div class="flex items-center">
                                <span>จัดการวิดีโอการเรียนรู้</span>
                            </div>
                        </div>
                        <div class="grid gap-6 mb-3 md:grid-cols-2 xl:grid-cols-2">
                            <button
                                class="bg-white shadow-lg rounded-lg py-2 px-5 text-xl font-semibold text-gray-500 mr-1 "
                                type="button" v-on:click="uploadVideo()">
                                <box-icon class="pt-1" name='upload'></box-icon> อัพโหลดวิดีโอจากเครื่อง
                            </button>
                            <div v-if="UploadVideo"
                                class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                                <div class="relative w-auto my-6 mx-auto max-w-6xl">
                                    <!--content-->
                                    <div
                                        class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        <!--header-->
                                        <div
                                            class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                            <div class="text-3xl text-black px-10">
                                                อัพโหลดวิดีโอจากเครื่อง
                                            </div>
                                            <button
                                                class="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                v-on:click="uploadVideo()">
                                                X
                                            </button>
                                        </div>
                                        <!--body-->
                                        <form action="#">
                                            <div class="w-screen-fit">
                                                <div class="w-full p-5">
                                                    <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-1">
                                                        <label class="block text-sm">
                                                            <span
                                                                class="text-gray-700 dark:text-gray-400">ชื่อวิดีโอ</span>
                                                            <input type="text" v-model="name1"
                                                                class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                                        </label>
                                                        <label class="block text-sm">
                                                            <span
                                                                class="text-gray-700 dark:text-gray-400">อัพโหลดวิดีโอ</span>
                                                            <input type="file" :v-model="name2"
                                                                class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                                        </label>
                                                    </div>
                                                </div>
                                                <button type="submit"
                                                    class="mx-3 p-5 mb-3 py-3  text-xl font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                                    บันทึก
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div v-if="UploadVideo" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            <button class="bg-white shadow-lg rounded-lg py-2 px-5 text-xl font-semibold text-gray-500"
                                type="button" v-on:click="editUploadVideo()">
                                <box-icon type='logo' class="pt-1 " name='youtube'></box-icon> อัพโหลดจากYoutube
                            </button>
                            <div v-if="EditUploadVideo"
                                class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                                <div class="relative w-auto my-6 mx-auto max-w-6xl">
                                    <!--content-->
                                    <div
                                        class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        <!--header-->
                                        <div
                                            class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                            <div class="text-3xl text-black  px-10">
                                                อัพโหลดจากYoutube
                                            </div>
                                            <button
                                                class="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                v-on:click="editUploadVideo()">
                                                X
                                            </button>
                                        </div>
                                        <!--body-->
                                        <form action="#">
                                            <div class="w-screen-fit">
                                                <div class="w-full p-5">
                                                    <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-1">
                                                        <label class="block text-sm">
                                                            <span
                                                                class="text-gray-700 dark:text-gray-400">ชื่อวิดีโอ</span>
                                                            <input type="text" v-model="name1"
                                                                class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                                        </label>
                                                        <label class="block text-sm">
                                                            <span class="text-gray-700 dark:text-gray-400">ลิงค์
                                                                Youtube</span>
                                                            <input type="text" v-model="name2"
                                                                class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                                        </label>
                                                    </div>
                                                </div>
                                                <button type="submit"
                                                    class="mx-3 p-5 mb-3 py-3  text-xl font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                                    บันทึก
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div v-if="EditUploadVideo" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
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
                                <button type="button"
                                    class="bg-yellow-500 mr-1 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow">แก้ไข</button>
                                <button type="button"
                                    class="bg-red-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow">ลบ</button>
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
                                <button type="button"
                                    class="bg-yellow-500 mr-1 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow">แก้ไข</button>
                                <button type="button"
                                    class="bg-red-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow">ลบ</button>
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

                    <div v-show="tab === 6">
                        <div
                            class="flex mb-3 items-center justify-between p-4 mb-3 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
                            <div class="flex items-center">
                                <span>จัดการส่วนเสริมเนื้อหาการเรียนรู้</span>
                            </div>
                        </div>

                        <div class="grid gap-6 mb-3 md:grid-cols-2 xl:grid-cols-4">
                            <button class="bg-white shadow-lg rounded-lg py-2 px-5 text-xl font-semibold text-gray-500"
                                type="button" v-on:click="text()">
                                <box-icon class="pt-1 " name='detail' type='solid'></box-icon> เพิ่มเนื้อหา
                            </button>
                            <div v-if="Text"
                                class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                                <div class="relative w-auto my-6 mx-auto max-w-6xl">
                                    <!--content-->
                                    <div
                                        class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        <!--header-->
                                        <div
                                            class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                            <div class="text-3xl text-black  px-24">
                                                เพิ่มเนื้อหา
                                            </div>
                                            <button
                                                class="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                v-on:click="text()">
                                                X
                                            </button>
                                        </div>
                                        <!--body-->
                                        <form action="#">
                                            <div class="w-screen-fit">
                                                <div class="w-full p-5">
                                                    <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-1">
                                                        <label class="block text-sm">
                                                            <span
                                                                class="text-gray-700 dark:text-gray-400">หัวข้อเนื้อหา</span>
                                                            <input type="text" v-model="name1"
                                                                class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                                        </label>
                                                        <label class="block text-sm">
                                                            <span class="text-gray-700 dark:text-gray-400">เนื้อหา
                                                            </span>
                                                            <textarea
                                                                class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input "
                                                                v-model="name5" cols="30" rows="5"></textarea>
                                                        </label>
                                                    </div>
                                                </div>
                                                <button type="submit"
                                                    class="mx-3 p-5 mb-3 py-3  text-xl font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                                    บันทึก
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div v-if="Text" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            <button
                                class="bg-white shadow-lg rounded-lg py-2 px-5 text-xl font-semibold text-gray-500 mr-1"
                                type="button" v-on:click="image()">
                                <box-icon class="pt-1" name='upload'></box-icon> อัพโหลดรูปภาพจากเครื่อง
                            </button>
                            <div v-if="Image"
                                class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                                <div class="relative w-auto my-6 mx-auto max-w-6xl">
                                    <!--content-->
                                    <div
                                        class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        <!--header-->
                                        <div
                                            class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                            <div class="text-3xl text-black px-10">
                                                อัพโหลดรูปภาพจากเครื่อง
                                            </div>
                                            <button
                                                class="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                v-on:click="image()">
                                                X
                                            </button>
                                        </div>
                                        <!--body-->
                                        <form action="#">
                                            <div class="w-screen-fit">
                                                <div class="w-full p-5">
                                                    <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-1">
                                                        <label class="block text-sm">
                                                            <span
                                                                class="text-gray-700 dark:text-gray-400">ชื่อวิดีโอ</span>
                                                            <input type="text" v-model="name1"
                                                                class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                                        </label>
                                                        <label class="block text-sm">
                                                            <span
                                                                class="text-gray-700 dark:text-gray-400">อัพโหลดวิดีโอ</span>
                                                            <input type="file" :v-model="name2"
                                                                class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                                        </label>
                                                    </div>
                                                </div>
                                                <button type="submit"
                                                    class="mx-3 p-5 mb-3 py-3  text-xl font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                                    บันทึก
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div v-if="Image" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            <button
                                class="bg-white shadow-lg rounded-lg py-2 px-5 text-xl font-semibold text-gray-500 mr-1"
                                type="button" v-on:click="file()">
                                <box-icon class="pt-1" name='upload'></box-icon> อัพโหลดไฟล์จากเครื่อง
                            </button>
                            <div v-if="File"
                                class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                                <div class="relative w-auto my-6 mx-auto max-w-6xl">
                                    <!--content-->
                                    <div
                                        class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        <!--header-->
                                        <div
                                            class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                            <div class="text-3xl text-black  px-10">
                                                อัพโหลดไฟล์จากเครื่อง
                                            </div>
                                            <button
                                                class="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                v-on:click="file()">
                                                X
                                            </button>
                                        </div>
                                        <!--body-->
                                        <form action="#">
                                            <div class="w-screen-fit">
                                                <div class="w-full p-5">
                                                    <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-1">
                                                        <label class="block text-sm">
                                                            <span
                                                                class="text-gray-700 dark:text-gray-400">ชื่อไฟล์</span>
                                                            <input type="text" v-model="name1"
                                                                class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                                        </label>
                                                        <label class="block text-sm">
                                                            <span
                                                                class="text-gray-700 dark:text-gray-400">อัพโหลดไฟล์</span>
                                                            <input type="file" :v-model="name2"
                                                                class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                                        </label>
                                                    </div>
                                                </div>
                                                <button type="submit"
                                                    class="mx-3 p-5 mb-3 py-3  text-xl font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                                    บันทึก
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div v-if="File" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            <button class="bg-white shadow-lg rounded-lg py-2 px-5 text-xl font-semibold text-gray-500"
                                type="button" v-on:click="link()">
                                <box-icon class="pt-1 " name='link'></box-icon> เพิ่มลิงค์
                            </button>
                            <div v-if="Link"
                                class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                                <div class="relative w-auto my-6 mx-auto max-w-6xl">
                                    <!--content-->
                                    <div
                                        class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        <!--header-->
                                        <div
                                            class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                            <div class="text-3xl text-black  px-10">
                                                เพิ่มลิงค์สำหรับภายนอก
                                            </div>
                                            <button
                                                class="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                v-on:click="link()">
                                                X
                                            </button>
                                        </div>
                                        <!--body-->
                                        <form action="#">
                                            <div class="w-screen-fit">
                                                <div class="w-full p-5">
                                                    <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-1">
                                                        <label class="block text-sm">
                                                            <span
                                                                class="text-gray-700 dark:text-gray-400">ชื่อลิงค์</span>
                                                            <input type="text" v-model="name1"
                                                                class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                                        </label>
                                                        <label class="block text-sm">
                                                            <span class="text-gray-700 dark:text-gray-400">เพิ่มลิงค์
                                                            </span>
                                                            <input type="text" v-model="name2"
                                                                class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                                        </label>
                                                    </div>
                                                </div>
                                                <button type="submit"
                                                    class="mx-3 p-5 mb-3 py-3  text-xl font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                                    บันทึก
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div v-if="Link" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
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

                    <div v-show="tab === 7">
                        <div
                            class="flex mb-3 items-center justify-between p-4 mb-3 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
                            <div class="flex items-center">
                                <span>จัดการชุดทดสอบ</span>
                            </div>
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                type="button">
                                เพิ่มชุดทดสอบ
                            </button>
                        </div>
                        <div class="w-full  overflow-hidden rounded-lg shadow-lg">
                            <div class="w-full overflow-x-auto">
                                <table class="w-full whitespace-no-wrap">
                                    <thead>
                                        <tr
                                            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-100 dark:text-gray-400 dark:bg-gray-800">
                                            <th class="px-4 py-6">ชื่อชุดทดสอบ</th>
                                            <th class="px-4 py-6">สถานะ</th>
                                            <th class="px-4 py-6" colspan="3" width="20%"></th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                        <tr class="text-gray-700 dark:text-gray-400" v-for="rows in set_quiz_owner"
                                            v-bind:key="rows.id">
                                            <td class="px-4 py-3 text-sm">
                                                {{rows.set_name}}
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                {{rows.status}}
                                            </td>
                                            <td class="px-4 py-3 text-sm ">
                                                <a :href="'/quest_quiz/'+rows.id"><button
                                                        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">เข้าดู</button></a>
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                <button
                                                    class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                                                    type="button">
                                                    แก้ไข
                                                </button>
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                <button
                                                    class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">ลบ</button>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div v-show="tab === 8">
                        <div
                            class="flex mb-3 items-center justify-between p-4 mb-3 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
                            <div class="flex items-center">
                                <span>เพิ่มคำถาม-{{set_name}}</span>
                            </div>
                            <button type="button"
                                class="bg-blue-500 mr-1 text-white font-bold uppercase text-sm p-3 rounded shadow">เพิ่มคำถาม</button>
                        </div>

                        <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                            <div class="text-2xl text-gray-600 dark:text-gray-400" v-for="rows in h_quiz"
                                v-bind:key="rows.id">
                                <div
                                    class="flex mb-3  px-3 py-5 mb-3 text-sm font-semibold bg-purple-500 text-white rounded-lg shadow-sm ">
                                    <div class="flex items-center mr-auto">
                                        <span>{{rows.header_name}}</span>
                                    </div>
                                    <button type="button"
                                        class="bg-yellow-500 mr-1 text-white font-bold uppercase text-sm p-3 rounded shadow">แก้ไข</button>
                                    <button type="button"
                                        class="bg-red-500 mr-1 text-white font-bold uppercase text-sm p-3 rounded shadow">ลบ</button>
                                    <button type="button"
                                        class="bg-blue-500 mr-1 text-white font-bold uppercase text-sm p-3 rounded shadow">เพิ่มช้อย</button>
                                </div>

                                <div class="w-full  overflow-hidden rounded-lg shadow-xs">
                                    <div class="w-full overflow-x-auto">
                                        <table class="w-full whitespace-no-wrap">
                                            <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                                <tr class="text-gray-700 dark:text-gray-400" v-for="rowses in quiz"
                                                    v-bind:key="rowses.id">
                                                    <ul v-if="rows.qh_id == rowses.qh_id ">
                                                        <td class="px-4 py-3 text-sm">
                                                            <input type="radio" value="4" name="picked1"
                                                                v-model="picked1" />
                                                        </td>
                                                        <td class="px-4 py-3 text-sm" width="90%">
                                                            <span>{{rowses.quiz}}</span>
                                                        </td>
                                                        <td class="px-4 py-3 text-sm" width="5%">
                                                            <button type="button"
                                                                class="bg-yellow-500 mr-1 text-white font-bold uppercase text-sm p-3 rounded shadow">แก้ไข</button>
                                                        </td>
                                                        <td class="px-4 py-3 text-sm" width="5%">
                                                            <button type="button"
                                                                class="bg-red-500 text-white font-bold uppercase text-sm p-3 rounded shadow">ลบ</button>
                                                        </td>
                                                    </ul>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <aside class="w-75" aria-label="Sidebar">
                    <div class="overflow-y-auto py-4 px-3 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-3 ">
                        <ul class="space-y-2">
                            <li>
                                <button @click="activeTabEight"
                                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg aria-hidden="true"
                                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                                        </path>
                                    </svg>
                                    <span class="flex-1 ml-3 whitespace-nowrap">เพิ่มคำถามแบบทดสอบ</span>
                                    <!-- <span
                                        class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                                        0</span> -->
                                </button>
                            </li>
                        </ul>
                    </div>
                </aside>

                <aside class="w-75" aria-label="Sidebar">
                    <div class="overflow-y-auto py-4 px-3 bg-white-200 rounded dark:bg-gray-800 rounded-lg shadow-lg ">
                        <ul class="space-y-2">
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
                                    <span class="flex-1 ml-3 whitespace-nowrap">วิดีโอการเรียนรู้</span>
                                    <!-- <span
                                        class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                                        0</span> -->
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
                                    <span class="flex-1 ml-3 whitespace-nowrap">ส่วนเสริมการเรียนรู้</span>
                                    <!-- <span
                                        class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                                        0</span> -->
                                </button>
                            </li>
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
                                    <span class="flex-1 ml-3 whitespace-nowrap">ชุดทดสอบ</span>
                                    <!-- <span
                                        class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                                        0</span> -->
                                </button>
                            </li>
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
                                        {{lesson_owner_count}}</span>
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
                                    <span class="flex-1 ml-3 whitespace-nowrap">คำขอลงทะเบียน</span>
                                    <span
                                        class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                                        {{Renroll_count}}</span>
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
    import 'boxicons';
    import YouTube from 'vue3-youtube';

    export default {
        name: "Quest_Quiz",
        components: { YouTube },
        data() {
            return {
                AddLessonModal: false,
                EditLessonModal: false,
                tab: 8,
                UploadVideo: false,
                EditUploadVideo: false,
                Youtube: false,
                EditYoutube: false,
                Image: false,
                EditImage: false,
                Link: false,
                EditLink: false,
                File: false,
                EditFile: false,
                Text: false,
                EditText: false,
                linky1: 'https://www.youtube.com/watch?v=RDentbxLSUs&t=71s',
                size: 700,

                set_name: '',
                h_quiz: '',
                quiz: '',

                lesson_id: '',
                lesson_name: '',
                link_y: '',
                video: '',
                link_g: '',
                document: '',
                images: '',
                set_quiz_owner: '',

                course_id: '',
                cc_id: '',
                course_name: '',
                course_detail: '',
                course_status: '',
                course_type: '',
                course_owner: '',
                course_img: '',

                lesson_owner: '',
                person_enroll: '',
                org_enroll: '',
                person_Renroll: '',
                org_Renroll: '',

                Renroll_count: '',
                Penroll_count: '',
                lesson_owner_count: '',
            }
        },
        mounted() {
            this.getCourseDetail()
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
            uploadVideo: function () {
                this.UploadVideo = !this.UploadVideo;
            },
            editUploadVideo: function () {
                this.EditUploadVideo = !this.EditUploadVideo;
            },
            youtube: function () {
                this.Youtube = !this.Youtube;
            },
            editYoutube: function () {
                this.EditYoutube = !this.EditYoutube;
            },
            link: function () {
                this.Link = !this.Link;
            },
            editLink: function () {
                this.EditLink = !this.EditLink;
            },
            image: function () {
                this.Image = !this.Image;
            },
            editImage: function () {
                this.EditImage = !this.EditImage;
            },
            file: function () {
                this.File = !this.File;
            },
            editFile: function () {
                this.EditFile = !this.EditFile;
            },
            text: function () {
                this.Text = !this.Text;
            },
            editText: function () {
                this.EditText = !this.EditText;
            },
            getCourseDetail() {
                axios.get('http://elearning-its.test/api/quest/quiz/' + this.$route.params.id).then((response) => {

                    this.set_name = response.data.set_quiz_data.set_name;
                    this.h_quiz = response.data.h_quiz;
                    this.quiz = response.data.quiz;

                    this.lesson_id = response.data.lesson_data.lesson_id;
                    this.lesson_name = response.data.lesson_data.lesson_name;
                    this.link_y = response.data.link_y;
                    this.video = response.data.video;
                    this.link_g = response.data.link_g;
                    this.document = response.data.document;
                    this.images = response.data.image;
                    this.set_quiz_owner = response.data.set_quiz_owner;

                    this.course_id = response.data.data_course.course_id;
                    this.cc_id = response.data.data_course.cc_id;
                    this.course_name = response.data.data_course.course_name;
                    this.course_detail = response.data.data_course.course_detail;
                    this.course_status = response.data.data_course.course_status;
                    this.course_type = response.data.data_course.course_type;
                    this.course_owner = response.data.data_course.course_owner;
                    this.course_img = response.data.data_course.course_img;

                    this.lesson_owner = response.data.lesson_owner;
                    this.person_enroll = response.data.person_enroll;
                    this.org_enroll = response.data.org_enroll;
                    this.person_Renroll = response.data.person_Renroll;
                    this.org_Renroll = response.data.org_Renroll;

                    this.Renroll_count = response.data.Renroll_count;
                    this.Penroll_count = response.data.Penroll_count;
                    this.lesson_owner_count = response.data.lesson_owner_count;
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