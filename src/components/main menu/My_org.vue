<template>
    <div class="dashboard">
        <div
            class="flex mb-3 items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
            <div class="flex items-center">
                <span>องค์กรของฉัน</span>
            </div>
            <div>
                <button
                    class="bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button" v-on:click="addOrgModal()">
                    เปิดองค์กรใหม่
                </button>
                <div v-if="AddOrgModal"
                    class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                    <div class="relative w-auto my-6 mx-auto max-w-6xl">
                        <!--content-->
                        <div
                            class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <!--header-->
                            <div
                                class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                <h3 class="text-3xl text-black">
                                    เปิดองค์กรใหม่
                                </h3>
                                <button
                                    class="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    v-on:click="addOrgModal()">
                                    X
                                </button>
                            </div>
                            <!--body-->
                            <form @submit.prevent="AddOrg">
                                <div class="w-screen-fit">
                                    <div class="w-full p-5">
                                        <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3">
                                            <label class="block text-sm">
                                                <span class="text-gray-700 dark:text-gray-400">ชื่อองค์กร</span>
                                                <input type="text" v-model="org_name"
                                                    class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                            </label>
                                            <label class="block text-sm">
                                                <span
                                                    class="text-gray-700 dark:text-gray-400">เบอร์โทรศัพท์องค์กร</span>
                                                <input type="text" v-model="org_tel"
                                                    class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                            </label>
                                            <label class="block text-sm">
                                                <span class="text-gray-700 dark:text-gray-400">คำอธิบาย</span>
                                                <textarea
                                                    class="block text-gray-700 dark:text-gray-400 w-full mt-1 text-xl  form-input"
                                                    cols="30" rows="3" v-model="description"></textarea>
                                            </label>
                                            <label class="block text-sm">
                                                <span class="text-gray-700 dark:text-gray-400">เขต</span>
                                                <input type="text" v-model="county"
                                                    class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                            </label>
                                            <label class="block text-sm">
                                                <span class="text-gray-700 dark:text-gray-400">ถนน</span>
                                                <input type="text" v-model="road"
                                                    class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                            </label>
                                            <label class="block text-sm">
                                                <span class="text-gray-700 dark:text-gray-400">ตรอก/ซอย</span>
                                                <input type="text" v-model="alley"
                                                    class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                            </label>
                                            <label class="block text-sm">
                                                <span class="text-gray-700 dark:text-gray-400">บ้านเลขที่</span>
                                                <input type="text" v-model="house_number"
                                                    class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                            </label>
                                            <label class="block text-sm">
                                                <span class="text-gray-700 dark:text-gray-400">หมู่ที่</span>
                                                <input type="text" v-model="group_no"
                                                    class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                            </label>
                                            <label class="block text-sm">
                                                <span class="text-gray-700 dark:text-gray-400">ตำบล</span>
                                                <input type="text" v-model="sub_district"
                                                    class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                            </label>
                                            <label class="block text-sm">
                                                <span class="text-gray-700 dark:text-gray-400">อำเภอ</span>
                                                <input type="text" v-model="district"
                                                    class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                            </label>
                                            <label class="block text-sm">
                                                <span class="text-gray-700 dark:text-gray-400">จังหวัด</span>
                                                <input type="text" v-model="province"
                                                    class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                            </label>
                                            <label class="block text-sm">
                                                <span class="text-gray-700 dark:text-gray-400">รหัสไปรษณีย์</span>
                                                <input type="text" v-model="ZIP_code"
                                                    class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                            </label>
                                            <label class="block text-sm">
                                                <span class="text-gray-700 dark:text-gray-400">ใบรับรองการก่อตั้งองค์กร
                                                    ( *แนบไฟล์ PDF)</span>
                                                <input type="file"
                                                    class="block text-gray-700 dark:text-gray-400 w-full mt-1 text-black-700 text-xl  form-input"
                                                    :v-model="book_cer" />
                                            </label>
                                            <label class="block text-sm">
                                                <span class="text-gray-700 dark:text-gray-400">ผู้ก่อตั้ง</span>
                                                <input type="text" v-model="org_owner" class="invisible" />
                                                <input type="text" value="มุซอับ สาแหละ"
                                                    class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input "
                                                    readonly />
                                            </label>
                                        </div>
                                    </div>
                                    <button type="submit"
                                        class="mx-3 w-1/12 p-5 mb-3 py-3  text-xl font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                        บันทึก
                                    </button>
                                    <button type="reset"
                                        class="mx-3 w-1/12 p-5 mb-3 py-3  text-xl font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                        รีเซ็ต
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div v-if="AddOrgModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </div>
        </div>
        <div class="w-full  overflow-hidden rounded-lg shadow-xs">
            <div class="w-full overflow-x-auto">
                <table class="w-full whitespace-no-wrap">
                    <thead>
                        <tr
                            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                            <th class="px-4 py-3">ชื่อองค์กร</th>
                            <th class="px-4 py-3">คำอธิบาย</th>
                            <th class="px-4 py-3">โทรสาร</th>
                            <th class="px-4 py-3">ผู้ก่อตั้ง</th>
                            <th class="px-4 py-3" colspan="3" width="5%"></th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                        <tr class="text-gray-700 dark:text-gray-400" v-for="rows in my_org" v-bind:key="rows.id">
                            <td class="px-4 py-3 text-sm">
                                {{rows.org_name}}
                            </td>
                            <td class="px-4 py-3 text-sm">
                                {{rows.description}}
                            </td>
                            <td class="px-4 py-3 text-sm">
                                {{rows.org_tel}}
                            </td>
                            <td class="px-4 py-3 text-sm">
                                {{rows.org_owner}}
                            </td>
                            <td class="px-4 py-3 text-sm ">
                                <router-link :to="'/org_detail/'+rows.org_id" class="nav-link">
                                    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">เข้าดู</button>
                                </router-link>
                                <!--<a href="/org_detail"><button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">เข้าดู</button></a> -->
                            </td>
                            <td class="px-4 py-3 text-sm">
                                <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                                    type="button" @click="editOrgModal(rows.org_id)">
                                    แก้ไข
                                </button>
                                <div v-if="EditOrgModal == true" :data="modalData == rows.org_id"
                                    class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                                    <div class="relative w-auto my-6 mx-auto max-w-6xl">
                                        <!--content-->
                                        <div
                                            class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                            <!--header-->
                                            <div
                                                class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                <h3 class="text-3xl text-black">
                                                    แก้ไขข้อมูลองค์กร - {{modalData}}
                                                </h3>
                                                <button
                                                    class="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                    @click="editOrgModal(rows.org_id)">
                                                    X
                                                </button>
                                            </div>
                                            <!--body-->
                                            <form  @submit.prevent="EditOrg">
                                                <div class="w-screen-fit">
                                                    <div class="w-full p-5">
                                                        <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3">
                                                            <label class="block text-sm">
                                                                <span
                                                                    class="text-gray-700 dark:text-gray-400">ชื่อองค์กร</span>
                                                                <input type="text" :v-model="org_name" :value="rows.org_name"
                                                                    class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                                            </label>
                                                            <label class="block text-sm">
                                                                <span
                                                                    class="text-gray-700 dark:text-gray-400">เบอร์โทรศัพท์องค์กร</span>
                                                                <input type="text" v-model="name2"
                                                                    class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                                            </label>
                                                            <label class="block text-sm">
                                                                <span
                                                                    class="text-gray-700 dark:text-gray-400">คำอธิบาย</span>
                                                                <textarea
                                                                    class="block text-gray-700 dark:text-gray-400 w-full mt-1 text-xl  form-input"
                                                                    cols="30" rows="3" v-model="name"></textarea>
                                                            </label>
                                                            <label class="block text-sm">
                                                                <span
                                                                    class="text-gray-700 dark:text-gray-400">เขต</span>
                                                                <input type="text" v-model="name3"
                                                                    class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                                            </label>
                                                            <label class="block text-sm">
                                                                <span
                                                                    class="text-gray-700 dark:text-gray-400">ถนน</span>
                                                                <input type="text" v-model="name4"
                                                                    class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                                            </label>
                                                            <label class="block text-sm">
                                                                <span
                                                                    class="text-gray-700 dark:text-gray-400">ตรอก/ซอย</span>
                                                                <input type="text" v-model="name5"
                                                                    class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                                            </label>
                                                            <label class="block text-sm">
                                                                <span
                                                                    class="text-gray-700 dark:text-gray-400">บ้านเลขที่</span>
                                                                <input type="text" v-model="name6"
                                                                    class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                                            </label>
                                                            <label class="block text-sm">
                                                                <span
                                                                    class="text-gray-700 dark:text-gray-400">หมู่ที่</span>
                                                                <input type="text" v-model="name7"
                                                                    class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                                            </label>
                                                            <label class="block text-sm">
                                                                <span
                                                                    class="text-gray-700 dark:text-gray-400">ตำบล</span>
                                                                <input type="text" v-model="name8"
                                                                    class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                                            </label>
                                                            <label class="block text-sm">
                                                                <span
                                                                    class="text-gray-700 dark:text-gray-400">อำเภอ</span>
                                                                <input type="text" v-model="name9"
                                                                    class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                                            </label>
                                                            <label class="block text-sm">
                                                                <span
                                                                    class="text-gray-700 dark:text-gray-400">จังหวัด</span>
                                                                <input type="text" v-model="name10"
                                                                    class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                                            </label>
                                                            <label class="block text-sm">
                                                                <span
                                                                    class="text-gray-700 dark:text-gray-400">รหัสไปรษณีย์</span>
                                                                <input type="text" v-model="name11"
                                                                    class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                                            </label>
                                                            <label class="block text-sm">
                                                                <span
                                                                    class="text-gray-700 dark:text-gray-400">ใบรับรองการก่อตั้งองค์กร
                                                                    ( *แนบไฟล์
                                                                    PDF)</span>
                                                                <input type="file"
                                                                    class="block text-gray-700 dark:text-gray-400 w-full mt-1 text-black-700 text-xl  form-input"
                                                                    :v-model="name12" />
                                                            </label>
                                                            <label class="block text-sm">
                                                                <span
                                                                    class="text-gray-700 dark:text-gray-400">ผู้ก่อตั้ง</span>
                                                                <input type="text" v-model="name13"
                                                                    class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <button type="submit"
                                                        class="mx-3 p-5 mb-3 py-1  text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                                        อัพเดท
                                                    </button>
                                                    <button type="reset"
                                                        class="mx-3 p-5 mb-3 py-1  text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                                        รีเซ็ต
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="EditOrgModal" :data="modalData"  class="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </td>
                            <td class="px-4 py-3 text-sm">
                                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    @click="deleteData(rows.org_id)">ลบ</button>
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
        name: "My_Org",
        data() {
            return {
                AddOrgModal: false,
                EditOrgModal: false,
                modalData: null,
                my_org: '',
            }
        },
        mounted() {
            this.getMyorg();
            this.org_owner = '1';
        },
        methods: {
            addOrgModal: function () {
                this.AddOrgModal = !this.AddOrgModal;
            },
            editOrgModal: function (data) {
                //console.log(data)
                this.EditOrgModal = !this.EditOrgModal;
                this.modalData = data
                console.log(this.modalData)
            },
            AddOrg(e) {
                this.submitted = true;
                e.preventDefault();
                axios.post('http://elearning-its.test/api/org/store', {
                    org_name: this.org_name,
                    description: this.description,
                    org_tel: this.org_tel,
                    county: this.county,
                    road: this.road,
                    alley: this.alley,
                    house_number: this.house_number,
                    group_no: this.group_no,
                    sub_district: this.sub_district,
                    district: this.district,
                    province: this.province,
                    ZIP_code: this.ZIP_code,
                    org_owner: this.org_owner,
                })
                    .then(function () {
                        Swal.fire(
                            'เปิดองค์กรใหม่สำเร็จ!',
                        )
                    })
                    .then(() => {
                        this.getMyorg();
                        this.addOrgModal();
                    });
            },
            deleteData(id) {
                axios.delete('http://elearning-its.test/api/org/destroy/' + id)
                    .then(() => {
                        this.getMyorg();
                    })
                    .then(function () {
                        Swal.fire(
                            'ลบข้อมูลองค์กรสำเร็จ!',
                        )
                    });
            },
            getMyorg() {
                axios.get('http://elearning-its.test/api/my_org').then((response) => {
                    this.my_org = response.data.my_org;
                    console.log(this.my_org)
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

    ::placeholder {
        font-size: 22px;
    }
</style>