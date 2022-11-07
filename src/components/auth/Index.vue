<template>
   <div
      class="flex  items-center justify-between p-4 text-sm font-semibold text-black  bg-white rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
      <div class="flex items-center">
        <span><img src="../../assets/img/pluk-ori1.png" width="100"></span>
      </div>
      <span class="px-1">
        <a href="/" class="pr-7">หน้าแรก</a>
        <a href="/login" class="pr-7">เข้าสู่ระบบ</a>
        <a href="/register" class="pr-7">สร้างบัญชีผู้ใช้ใหม่</a>
        </span>
   </div>
    <img width="1900" src="../../assets/img/poster-1.jpg" class="responsive my-3 px-3" />
    <div
        class="flex mb-3 mx-1 items-center justify-between p-4 mb-3 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
        <div class="flex items-center">
            <span>รายวิชาที่น่าสนใจ</span>
        </div>
    </div>
    <section class="flex flex-row flex-wrap mx-auto">
        <div class="transition-all duration-150 flex w-full px-3 py-3 md:w-1/2 lg:w-1/5 " v-for="rows in course "
            v-bind:key="rows.id">
            <div
                class="flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 bg-white rounded-lg shadow-md">
                <div class="md:flex-shrink-0">
                    <img class="w-full rounded-lg rounded-b-none md:h-72" v-if="rows.course_img == ''"
                        src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29udGVudHxlbnwwfHwwfHw%3D&w=1000&q=80">
                    <img class="w-full rounded-lg rounded-b-none md:h-72" v-else
                        :src="'http://elearning-its.test/storage/course/course_img_assets/'+rows.course_img">
                </div>
                <div class="flex flex-wrap items-center flex-1 px-4 py-0 text-center mx-auto">
                    <h2 class="text-2xl font-bold tracking-normal text-gray-800">
                        {{rows.course_name}}
                    </h2>
                </div>
                <p class="flex flex-row flex-wrap w-full px-4 py-0 overflow-hidden text-xl text-justify text-gray-700">
                    {{rows.course_detail}} 
                </p>
                <section class="px-4 py-2 mt-2 text-center">
                    <button class="bg-green-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg 
                        outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button">ลงทะเบียน</button>
                </section>
            </div>
        </div>
    </section>

    <div
        class="flex mb-3 mx-1 items-center justify-between p-4 mb-3 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
        <div class="flex items-center">
            <span>หมวดหมู่</span>
        </div>
    </div>
    <section class="flex flex-row flex-wrap mx-auto">
        <div class="transition-all duration-150 flex w-full px-3 py-3 md:w-1/2 lg:w-1/5 " v-for="rows in cc "
            v-bind:key="rows.id">
            <div
                class="flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 bg-white rounded-lg shadow-md">
                <div class="md:flex-shrink-0">
                    <img src="https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJlcG9ydHxlbnwwfHwwfHw%3D&w=1000&q=80"
                        class="w-full rounded-lg rounded-b-none md:h-72" />
                </div>
                <div class="flex flex-wrap items-center flex-1 px-4 py-0 text-center mx-auto">
                    <h2 class="text-2xl font-bold tracking-normal text-gray-800">
                        {{rows.name}}
                    </h2>
                </div>
                <p class="flex flex-row flex-wrap w-full px-4 py-0 overflow-hidden text-xl text-justify text-gray-700">

                </p>
                <section class="px-4 py-2 mt-2 text-center">
                    <button
                        class="bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                        เข้าดู</button>
                </section>
            </div>
        </div>
    </section>
</template>

<script>
    import axios from "axios";
    export default {
        name: "InDex",
        data() {
            return {
                course: [],
                cc: []
            }
        },
        mounted() {
            this.getDashboard()

        },
        methods: {
            getDashboard() {
                axios.get('http://elearning-its.test/api/dashboard').then((response) => {
                    this.course = response.data.course;
                    this.cc = response.data.cc;
                });
            },
            enrollModal: function () {
                this.EnrollModal = !this.EnrollModal;
            },
        }
    }
</script>

<style scoped>
    .flex button {
        font-size: 22px;
    }

    .flex img {
        max-width: 100%;
        object-fit: cover;
    }

    .dashboard {
        margin-block: 1%;
        margin-inline: 1%;
    }
</style>