<template>
    <div class="dashboard">
        <div
            class="flex mb-3 items-center justify-between p-4 mb-3 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
            <div class="flex items-center">
                <span>รายวิชา {{course_name}} </span>
            </div>
        </div>
        <!--  -->
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

                </div>
            </div>
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
</template>


<script>
    import 'moment/locale/th';
    import moment from "moment";
    import axios from "axios";
    // import Layout from '@/Layout.vue'
    export default {
        name: "My_Course_Detail",
        data() {
            return {
                tab: 1,
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

                Penroll_count: '',
                lesson_count: '',
            };
        },
        mounted() {
            this.getCourseDetail()
        },
        methods: {
            activeTabOne() {
                this.tab = 1;
            },
            activeTabTwo() {
                this.tab = 2;
            },
            activeTabThree() {
                this.tab = 3;
            },
            getCourseDetail() {
                axios.get('http://elearning-its.test/api/course/detail/' + this.$route.params.id).then((response) => {
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
        },
    }
</script>
<style scoped>
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

    .course_img img {
        max-width: 100%;
        max-height: 450px;
        object-fit: cover;

    }
</style>