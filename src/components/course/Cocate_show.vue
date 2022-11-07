<template>
    <div class="dashboard">
        <div
            class="flex mb-3 items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
            <div class="flex items-center">
                <span>หมวดหมู่รายวิชา</span>
            </div>
            <div>
                <button
                    class="bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button" v-on:click="addCocateModal()">
                    เพิ่มหมวดหมู่
                </button>
                <div v-if="AddCocateModal"
                    class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                    <div class="relative w-auto my-6 mx-auto max-w-6xl">
                        <!--content-->
                        <div
                            class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <!--header-->
                            <div
                                class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                <h3 class="text-3xl text-black">
                                    เพิ่มหมวดหมู่
                                </h3>
                                <button
                                    class="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    v-on:click="addCocateModal()">
                                    X
                                </button>
                            </div>
                            <!--body-->
                            <form @submit.prevent="Addcocate">
                                <div class="w-96 p-5">
                                    <label class="block text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">ชื่ออักษรย่อ</span>
                                        <input type="text" v-model="short_name"
                                            class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                    </label>
                                    <label class="block text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">ชื่อหมวดหมู่</span>
                                        <input type="text" v-model="name"
                                            class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
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
                <div v-if="AddCocateModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>

            </div>
        </div>
        <div class="w-full  overflow-hidden rounded-lg shadow-xs">
            <div class="w-full overflow-x-auto">
                <table class="w-full whitespace-no-wrap">
                    <thead>
                        <tr
                            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                            <th class="px-4 py-3">อักษรย่อ</th>
                            <th class="px-4 py-3">ชื่อหมวดหมู่</th>
                            <th class="px-4 py-3" colspan="3" width="5%"></th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                        <tr class="text-gray-700 dark:text-gray-400" v-for="rows in cocate" v-bind:key="rows.id">
                            <td class="px-4 py-3 text-sm">
                                {{rows.short_name}}
                            </td>
                            <td class="px-4 py-3 text-sm">
                                {{rows.name}}
                            </td>
                            <td class="px-4  font-semibold  py-3 text-sm">
                                <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                                    type="button" v-on:click="editCocateModal()">
                                    แก้ไข
                                </button>
                                <div v-if="EditCocateModal"
                                    class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                                    <div class="relative w-auto my-6 mx-auto max-w-6xl">
                                        <!--content-->
                                        <div
                                            class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                            <!--header-->
                                            <div
                                                class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                <h3 class="text-3xl text-black">
                                                    แก้ไขหมวดหมู่-{{rows.cc_id}}
                                                </h3>
                                                <button
                                                    class="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                    v-on:click="editCocateModal()">
                                                    X
                                                </button>
                                            </div>
                                            <!--body-->
                                            <form>
                                                <div class="w-96 p-5">
                                                    <label class="block text-sm">
                                                        <span
                                                            class="text-gray-700 dark:text-gray-400">ชื่ออักษรย่อ</span>
                                                        <input type="text" v-model="short_name"
                                                            class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                                    </label>
                                                    <label class="block text-sm">
                                                        <span
                                                            class="text-gray-700 dark:text-gray-400">ชื่อหมวดหมู่</span>
                                                        <input type="text" v-model="name"
                                                            class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
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
                                <div v-if="EditCocateModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </td>
                            <td class="px-4 py-3 text-sm">
                                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    @click="deleteData(rows.cc_id)">ลบ</button>
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
    import Swal from 'sweetalert2';
    // import Layout from '@/Layout.vue'
    export default {
        name: "Cocate_Show",
        data() {
            return {
                AddCocateModal: false,
                EditCocateModal: false,
                cocate: []
            }
        },
        methods: {
            addCocateModal: function () {
                this.AddCocateModal = !this.AddCocateModal;
            },
            editCocateModal: function () {
                this.EditCocateModal = !this.EditCocateModal;
            },
            Addcocate(e) {
                this.submitted = true;
                e.preventDefault();
                axios.post('http://elearning-its.test/api/course_category/store', {
                    name: this.name,
                    short_name: this.short_name,
                })
                    .then(function () {
                        Swal.fire(
                            'เพิ่มหมวดหมู่ใหม่สำเร็จ!',
                        )
                    })
                    .then(() => {
                        this.getCocate();
                        this.addCocateModal();
                    });


            },
            getCocate() {
                axios.get('http://elearning-its.test/api/course_category/show').then((response) => {
                    this.cocate = response.data; console.log(response.data)
                });
            },
            deleteData(id) {
                axios.delete('http://elearning-its.test/api/course_category/destroy/' + id)
                    .then(() => {
                        this.getCocate();
                    })
                    .then(function () {
                        Swal.fire(
                            'ลบหมวดหมู่สำเร็จ!',
                        )
                    });
            },
        },
        mounted() {
            this.getCocate();
        }
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