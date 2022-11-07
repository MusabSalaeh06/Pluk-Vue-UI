<template>
    <div class="dashboard">
        <div
            class="flex mb-3 items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
            <div class="flex items-center">
                <span>รายวิชาที่ฉันเปิดสอน</span>
            </div>
            <div>
                <button
                    class="bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button" v-on:click="addMyOpenCoModal()">
                    เปิดรายวิชาใหม่
                </button>
                <div v-if="AddMyOpenCoModal"
                    class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                    <div class="relative w-auto my-6 mx-auto max-w-6xl">
                        <!--content-->
                        <div
                            class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <!--header-->
                            <div
                                class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                <h3 class="text-3xl text-black">
                                    เปิดรายวิชาใหม่
                                </h3>
                                <button
                                    class="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    v-on:click="addMyOpenCoModal()">
                                    X
                                </button>
                            </div>
                            <!--body-->
                            <form @submit.prevent="AddCourse" enctype="multipart/form-data">
                                <div class="w-screen-fit">
                                    <div class="w-full p-5">
                                        <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3">
                                            <label class="block text-sm">
                                                <span class="text-gray-700 dark:text-gray-400">หมวดหมู่รายวิชา</span>
                                                <select
                                                    class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input "
                                                    v-model="cc_id">
                                                    <option v-for="rows in cocate" v-bind:key="rows.id"
                                                        :value="rows.cc_id">{{rows.name}}</option>
                                                </select>
                                            </label>
                                            <label class="block text-sm">
                                                <span class="text-gray-700 dark:text-gray-400">ชื่อรายวิชา</span>
                                                <input type="text" v-model="course_name"
                                                    class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                            </label>
                                            <label class="block text-sm">
                                                <span class="text-gray-700 dark:text-gray-400">คำอธิบายรายวิชา</span>
                                                <textarea
                                                    class="block text-gray-700 dark:text-gray-400 w-full mt-1 text-xl  form-input"
                                                    cols="30" rows="3" v-model="course_detail"></textarea>
                                            </label>
                                            <label class="block text-sm">
                                                <span class="text-gray-700 dark:text-gray-400">ประเภทรายวิชา</span>
                                                <select
                                                    class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input "
                                                    v-model="course_type">
                                                    <option value="สาธารณะ">สาธารณะ</option>
                                                    <option value="ส่วนตัว">ส่วนตัว</option>
                                                </select>
                                            </label>
                                            <label class="block text-sm">
                                                <span class="text-gray-700 dark:text-gray-400">สถานะรายวิชา</span>
                                                <select
                                                    class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input "
                                                    v-model="course_status">
                                                    <option value="เผยแพร่">เผยแพร่</option>
                                                    <option value="ซ่อน">ซ่อน</option>
                                                </select>
                                            </label>
                                            <label class="block text-sm">
                                                <span
                                                    class="text-gray-700 dark:text-gray-400">ติวเตอร์ประจำรายวิชา</span>
                                                <input type="text" v-model="course_owner" class="invisible" />
                                                <input type="text" value="มุซอับ สาแหละ"
                                                    class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input "
                                                    readonly />
                                            </label>
                                            <label class="block text-sm">
                                                <span class="text-gray-700 dark:text-gray-400">ภาพปกรายวิชา</span>
                                                <input type="file" @change="co_image" name="course_img"
                                                    class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input ">
                                            </label>
                                        </div>
                                    </div>
                                    <button type="submit"
                                        class="mx-3 p-5 mb-3 py-1  text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                        บันทึก
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div v-if="AddMyOpenCoModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </div>
        </div>
        <div class="w-full  overflow-hidden rounded-lg shadow-xs">
            <div class="w-full overflow-x-auto">
                <table class="w-full whitespace-no-wrap">
                    <thead>
                        <tr
                            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                            <th class="px-4 py-3">รหัสรายวิชา</th>
                            <th class="px-4 py-3">ชื่อรายวิชา</th>
                            <th class="px-4 py-3">คำอธิบายรายวิชา</th>
                            <th class="px-4 py-3">สถานะรายวิชา</th>
                            <th class="px-4 py-3" colspan="3" width="5%"></th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                        <tr class="text-gray-700 dark:text-gray-400" v-for="rows in my_opencourse" v-bind:key="rows.id">
                            <td class="px-4 py-3 text-sm">
                                {{rows.course_id}}
                            </td>
                            <td class="px-4 py-3 text-sm">
                                {{rows.course_name}}
                            </td>
                            <td class="px-4 py-3 text-sm">
                                {{rows.course_detail}}
                            </td>
                            <td class="px-4 py-3 text-sm">
                                {{rows.course_status}}
                            </td>
                            <td class="px-4 py-3 text-sm">
                                <a :href="'/course_detail/'+rows.id">
                                    <button
                                        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">เข้าดู</button>
                                </a>
                            </td>
                            <td class="px-4 font-semibold py-3 text-sm">
                                <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                                    type="button" v-on:click="editMyOpenCoModal()">
                                    แก้ไข
                                </button>
                                <div v-if="EditMyOpenCoModal"
                                    class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                                    <div class="relative w-auto my-6 mx-auto max-w-6xl">
                                        <!--content-->
                                        <div
                                            class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                            <!--header-->
                                            <div
                                                class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                <h3 class="text-3xl text-black">
                                                    แก้ไขข้อมูลรายวิชา
                                                </h3>
                                                <button
                                                    class="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                    v-on:click="editMyOpenCoModal()">
                                                    X
                                                </button>
                                            </div>
                                            <!--body-->
                                            <form>
                                                <div class="w-screen-fit">
                                                    <div class="w-full p-5">
                                                        <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3">
                                                            <label class="block text-sm">
                                                                <span
                                                                    class="text-gray-700 dark:text-gray-400">หมวดหมู่รายวิชา</span>
                                                                <select
                                                                    class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input "
                                                                    v-model="cc_id">
                                                                    <option v-for="rows in cocate" v-bind:key="rows.id"
                                                                        :value="rows.cc_id">{{rows.name}}</option>
                                                                </select>
                                                            </label>
                                                            <label class="block text-sm">
                                                                <span
                                                                    class="text-gray-700 dark:text-gray-400">ชื่อรายวิชา</span>
                                                                <input type="text" v-model="course_name"
                                                                    class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                                            </label>
                                                            <label class="block text-sm">
                                                                <span
                                                                    class="text-gray-700 dark:text-gray-400">คำอธิบายรายวิชา</span>
                                                                <textarea
                                                                    class="block text-gray-700 dark:text-gray-400 w-full mt-1 text-xl  form-input"
                                                                    cols="30" rows="3"
                                                                    v-model="course_detail"></textarea>
                                                            </label>
                                                            <label class="block text-sm">
                                                                <span
                                                                    class="text-gray-700 dark:text-gray-400">ประเภทรายวิชา</span>
                                                                <select
                                                                    class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input "
                                                                    v-model="course_type">
                                                                    <option value="สาธารณะ">สาธารณะ</option>
                                                                    <option value="ส่วนตัว">ส่วนตัว</option>
                                                                </select>
                                                            </label>
                                                            <label class="block text-sm">
                                                                <span
                                                                    class="text-gray-700 dark:text-gray-400">สถานะรายวิชา</span>
                                                                <select
                                                                    class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input "
                                                                    v-model="course_status">
                                                                    <option value="เผยแพร่">เผยแพร่</option>
                                                                    <option value="ซ่อน">ซ่อน</option>
                                                                </select>
                                                            </label>
                                                            <label class="block text-sm">
                                                                <span
                                                                    class="text-gray-700 dark:text-gray-400">ติวเตอร์ประจำรายวิชา</span>
                                                                <input type="text" v-model="course_owner"
                                                                    class="text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                                            </label>
                                                            <label class="block text-sm">
                                                                <span
                                                                    class="text-gray-700 dark:text-gray-400">ภาพปกรายวิชา</span>
                                                                <input type="file" :v-model="course_img"
                                                                    class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <button type="submit"
                                                        class="mx-3 p-5 mb-3 py-1  text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                                        อัพเดท
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="EditMyOpenCoModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </td>
                            <td class="px-4 py-3 text-sm">
                                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    @click="deleteData(rows.id)">ลบ</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    //import $ from 'jquery'
    import axios from "axios";
    import Swal from 'sweetalert2';
    // import Layout from '@/Layout.vue'
    export default {
        name: "My_Opencourse",
        data() {
            return {
                AddMyOpenCoModal: false,
                EditMyOpenCoModal: false,
                cocate: [],
                my_opencourse: [],
                course_owner_id: 1,
                course_owner_name: "มุซอับ สาแหละ",
                course_img: '',
            }
        },
        mounted() {
            this.getCocate();
            this.getMyOpenCourse();
            this.course_owner = '1';
            //       $('#course_img').change(function() {
            //       $(this).prev('label').clone();
            //       var file = $('#course_img')[0].files[0].name;
            //       $(this).prev('label').text(file); 


            // });
        },
        methods: {
            addMyOpenCoModal: function () {
                this.AddMyOpenCoModal = !this.AddMyOpenCoModal;
            },
            editMyOpenCoModal: function () {
                this.EditMyOpenCoModal = !this.EditMyOpenCoModal;
            },
            AddCourse(e) {
                this.submitted = true;
                e.preventDefault();
                let upload = new FormData();
                upload.append('course_img', this.course_img)
                upload.append('cc_id', this.cc_id)
                upload.append('course_name', this.course_name)
                upload.append('course_detail', this.course_detail)
                upload.append('course_type', this.course_type)
                upload.append('course_status', this.course_status)
                upload.append('course_owner', this.course_owner)
                axios.post('http://elearning-its.test/api/course/store', upload)
                    .then(() => {
                        this.getMyOpenCourse();
                        this.addMyOpenCoModal();
                    })
                    .then(function () {
                        Swal.fire(
                            'เปิดรายวิชาใหม่สำเร็จ!',
                        )
                    });
            },
            co_image(a) {
                this.course_img = a.target.files[0];
                //console.log(a)
            },
            getCocate() {
                axios.get('http://elearning-its.test/api/course/create').then((response) => {
                    this.cocate = response.data; console.log(response.data)
                });
            },
            getMyOpenCourse() {
                axios.get('http://elearning-its.test/api/my_opencourse').then((response) => {
                    this.my_opencourse = response.data; console.log(response.data)
                });
            },
            deleteData(id) {
                axios.delete('http://elearning-its.test/api/course/destroy/' + id)
                    .then(() => {
                        this.getMyOpenCourse();
                    })
                    .then(function () {
                        Swal.fire(
                            'ลบข้อมูลรายวิชาสำเร็จ!',
                        )
                    });
            },
        },
    }
</script>

<style scoped>
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
</style>