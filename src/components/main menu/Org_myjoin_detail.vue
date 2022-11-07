<template>
    <div class="dashboard">
        <div
            class="flex mb-3 items-center justify-between p-4 mb-3 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
            <div class="flex items-center">
                <span>ช้อมูลองค์กร {{org_name}}</span>
            </div>
        </div>
        <img width="1830" src="../../assets/img/poster-1.jpg" class="responsive mb-3" />
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
                                ชื่อองค์กร : {{org_name}} <br>
                                ผู้ก่อตั้ง : {{org_owner}}<br>
                                คำอธิบาย : {{description}} <br>
                                เบอร์โทรศัพท์องค์กร : {{org_tel}} <br>
                                ที่อยู่ <br>
                                {{address}}
                            </div>
                        </div>
                    </div>
                    <div v-show="tab === 2">
                        <div
                            class="flex mb-3 items-center justify-between p-4 mb-3 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
                            <div class="flex items-center">
                                <span>รายวิชาที่องค์กรซื้อ</span>
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
                                        class="w-full pl-10 py-2 pr-2 text-xl text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                                        type="text" placeholder="ค้นหา..." aria-label="Search" />
                                </div>
                                <button
                                    class="bg-blue-500 hover:bg-blue-700 text-white font-semibold  py-1 px-2 rounded">ค้นหา</button>
                            </div>
                        </form>
                        <div class="w-full  overflow-hidden rounded-lg shadow-lg">
                            <div class="w-full overflow-x-auto">
                                <table class="w-full whitespace-no-wrap">
                                    <thead>
                                        <tr
                                            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-100 dark:text-gray-400 dark:bg-gray-800">
                                            <th class="px-4 py-6">รหัสรายวิชา</th>
                                            <th class="px-4 py-6">ชื่อรายวิชา</th>
                                            <th class="px-4 py-6">ติวเตอร์ประจำวิชา</th>
                                            <th class="px-4 py-6">ประเภทรายวิชา</th>
                                            <th class="px-4 py-6">สถานะการลงทะเบียน</th>
                                            <th class="px-4 py-6" width="15%"></th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                        <tr class="text-gray-700 dark:text-gray-400" v-for="rows in course"
                                            v-bind:key="rows.id">
                                            <td class="px-4 py-3 text-sm">
                                                {{rows.course_id}}
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                {{rows.course_name}}
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                {{rows.name}} {{rows.surname}}
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                {{rows.course_type}}
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                {{rows.status}}
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                <button
                                                    class="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                                    type="button">ลงทะเบียน</button>
                                            </td>
                                        </tr>
                                        <tr class="text-gray-700 dark:text-gray-400" v-for="rows in course_me_enroll"
                                            v-bind:key="rows.id">
                                            <td class="px-4 py-3 text-sm">
                                                {{rows.course_id}}
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                {{rows.course_name}}
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                {{rows.name}} {{rows.surname}}
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                {{rows.course_type}}
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                {{rows.status}}
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                <button
                                                    class="w-full bg-gray-500 text-white font-bold py-2 px-4 rounded"
                                                    type="button">ลงทะเบียนเเล้ว</button>
                                            </td>
                                        </tr>
                                        <tr class="text-gray-700 dark:text-gray-400" v-for="rows in owner_course"
                                            v-bind:key="rows.id">
                                            <td class="px-4 py-3 text-sm">
                                                {{rows.course_id}}
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                {{rows.course_name}}
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                {{rows.name}} {{rows.surname}}
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                {{rows.course_type}}
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                {{rows.status}}
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                <button
                                                    class=" w-full bg-gray-500 text-white font-bold py-2 px-4 rounded"
                                                    type="button">รายวิชาที่ฉันเปิดสอน</button>
                                            </td>
                                        </tr>
                                        <!-- 
                                                <button
                                                    class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                                    type="button" v-on:click="enrollModal()">
                                                    ลงทะเบียน
                                                </button>
                                                <div v-if="EnrollModal"
                                                    class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                                                    <div class="relative w-auto my-6 mx-auto max-w-6xl">
                                                        <div
                                                            class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
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
                                                            <div class="w-screen-fit">
                                                                <div class="w-full p-5">
                                                                    <div
                                                                        class="px-4 py-3 mb-5 bg-white rounded-lg shadow-md dark:bg-gray-800">
                                                                        <div
                                                                            class="text-2xl text-gray-600 dark:text-gray-400">
                                                                            <img src="https://www.techtalkthai.com/wp-content/uploads/2022/02/flutter-banner.png"
                                                                                width="300" />
                                                                            <b> รายละเอียด วิชา Flutter</b> <br>
                                                                            รหัสรายวิชา : APF4 <br>
                                                                            ชื่อรายวิชา : Flutter <br>
                                                                            คำอธิบายรายวิชา : เรียนรู้ Flutter
                                                                            เบื้องต้นถึงขั้นสูง <br>
                                                                            หมวดหมู่รายวิชา : Application Framework <br>
                                                                            ประเภทรายวิชา : สาธารณะ <br>
                                                                            สถานะรายวิชา : เผยแพร่ <br>
                                                                            ชื่อติวเตอร์ประจำรายวิชา : สุธาวี สะอะ <br>
                                                                            <b> ความรู้ที่คุณจะได้ในรายวิชา Flutter</b>
                                                                            <br>
                                                                            บทเรียนที่ 01 การเขียนภาษา php เบื้องต้น
                                                                            <br>
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
                                                <div v-if="EnrollModal" class="opacity-25 fixed inset-0 z-40 bg-black">
                                                </div>
                                                 -->

                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                    <div v-show="tab === 3">
                        <div
                            class="flex mb-3 items-center justify-between p-4 mb-3 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
                            <div class="flex items-center">
                                <span>สมาชิกทั้งหมด</span>
                            </div>
                        </div>

                        <div class="w-full  overflow-hidden rounded-lg shadow-xlg">
                            <div class="w-full overflow-x-auto">
                                <table class="w-full whitespace-no-wrap">
                                    <thead>
                                        <tr
                                            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-100 dark:text-gray-400 dark:bg-gray-800">
                                            <th class="px-4 py-6">ชื่อ-สกุล</th>
                                            <th class="px-4 py-6">เพศ</th>
                                            <th class="px-4 py-6">เบอร์โทร</th>
                                            <th class="px-4 py-6">อีเมล</th>
                                            <th class="px-4 py-6">เข้าร่วมเมื่อ</th>
                                            <th class="px-4 py-6">รูปแบบ</th>
                                            <th class="px-4 py-6">บทบาท</th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                        <tr class="text-gray-700 dark:text-gray-400" v-for="rows in member_in_org_inv"
                                            v-bind:key="rows.id">
                                            <td class="px-4 py-3 text-sm">
                                                {{rows.name}} {{rows.surname}}
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                {{rows.gender}}
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                {{rows.tel}}
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                {{rows.email}}
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                {{dateTime(rows.created_at)}}
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                เชิญเข้าร่วม
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                สมาชิกทั่วไป
                                            </td>
                                        </tr>
                                        <tr class="text-gray-700 dark:text-gray-400" v-for="rows in member_in_org_req"
                                            v-bind:key="rows.id">
                                            <td class="px-4 py-3 text-sm">
                                                {{rows.name}} {{rows.surname}}
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                {{rows.gender}}
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                {{rows.tel}}
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                {{rows.email}}
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                {{dateTime(rows.created_at)}}
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                ขอเข้าร่วม
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                สมาชิกทั่วไป
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
                                <span class="flex-1 ml-3 whitespace-nowrap">รายวิชาที่องค์กรซื้อ</span>
                                <span
                                    class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                                    {{cio_count}}</span>
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
                                <span class="flex-1 ml-3 whitespace-nowrap">สมาชิกทั้งหมด</span>
                                <span
                                    class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                                    {{mio_count}}</span>
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
        name: "Org_Myjoin_Detail",
        data() {
            return {
                EnrollModal: false,
                tab: 1,
                org_id: '',
                org_name: '',
                description: '',
                org_tel: '',
                address: '',
                org_owner: '',
                course: [],
                course_enr: [],
                course_mio_enr: [],
                course_me_enroll: [],
                owner_course: [],
                member_in_org_inv: [],
                member_in_org_req: [],
                org_request: [],
                member: [],
                member_join: [],
                member_request: [],
                member_invite: [],
                member_owner: [],
                mio_count: [],
                cio_count: [],
                org_r_count: [],
            }
        },
        mounted() {
            this.getDetailMyOrg()
        },
        methods: {
            enrollModal: function () {
                this.EnrollModal = !this.EnrollModal;
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
            getDetailMyOrg() {
                axios.get('http://elearning-its.test/api/org/detail/' + this.$route.params.id).then((response) => {
                    this.org_id = response.data.org_id;
                    this.org_name = response.data.org_name;
                    this.description = response.data.description;
                    this.org_tel = response.data.org_tel;
                    this.address = response.data.address;
                    this.org_owner = response.data.org_owner;
                    this.course = response.data.course;
                    this.course_enr = response.data.course_enr;
                    this.course_mio_enr = response.data.course_mio_enr;
                    this.course_me_enroll = response.data.course_me_enroll;
                    this.owner_course = response.data.owner_course;
                    this.member_in_org_inv = response.data.member_in_org_inv;
                    this.member_in_org_req = response.data.member_in_org_req;
                    this.org_request = response.data.org_request;
                    this.member = response.data.member;
                    this.member_join = response.data.member_join;
                    this.member_request = response.data.member_request;
                    this.member_invite = response.data.member_invite;
                    this.member_owner = response.data.member_owner;
                    this.mio_count = response.data.mio_count;
                    this.cio_count = response.data.cio_count;
                    this.org_r_count = response.data.org_r_count;
                });
            },
            dateTime(date) {
                var strdate = moment(date).add(543, "years");
                //return moment(strdate).format("Do MMMM YYYY")+'   '+"|"+'   '+ moment(strdate).format("hh:mm:ss")+' '+'น.'
                return moment(strdate).format("DD/MM/YYYY");
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