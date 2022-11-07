<template>
<div class="dashboard">
   <div
      class="flex  items-center justify-between p-4 mb-3 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
      <div class="flex items-center">
        <span>โปรไฟล์</span>
      </div>
      <div>
        <button
          class="bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-xl px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button" v-on:click="editProfile()">
          แก้ไขโปรไฟล์
        </button>
        <div v-if="EditProfile"
          class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
          <div class="relative w-auto my-6 mx-auto max-w-6xl">
            <!--content-->
            <div
              class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <!--header-->
              <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <div class="text-3xl text-black">
                  แก้ไขโปรไฟล์
                </div>
                <button
                  class="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  v-on:click="editProfile()">
                  X
                </button>
              </div>
              <!--body-->
              <form action="#">
                <div class="w-screen-fit">
                  <div class="w-full p-5">
                    <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3">
                      <label class="block text-sm">
                        <span class="text-gray-700 dark:text-gray-400">ชื่อ-สกุล</span>
                        <input type="text" v-model="name1"
                          class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                      </label>
                      <label class="block text-sm">
                        <span class="text-gray-700 dark:text-gray-400">รูปโปรไฟล์</span>
                        <input type="file" :v-model="name5"
                          class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                      </label>
                      <label class="block text-sm">
                        <span class="text-gray-700 dark:text-gray-400">รูปปก</span>
                        <input type="file" :v-model="name5"
                          class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                      </label>
                      <label class="block text-sm">
                        <span class="text-gray-700 dark:text-gray-400">เพศ </span>
                        <input type="text" v-model="name2"
                          class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                      </label>
                      <label class="block text-sm">
                        <span class="text-gray-700 dark:text-gray-400">เบอร์โทร</span>
                        <input type="text" v-model="name3"
                          class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                      </label>
                      <label class="block text-sm">
                        <span class="text-gray-700 dark:text-gray-400">วันเกิด</span>
                        <input type="date" v-model="name5"
                          class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                      </label>
                      <label class="block text-sm">
                        <span class="text-gray-700 dark:text-gray-400">บัตรประจำตัวประชาชน</span>
                        <input type="text" v-model="name4"
                          class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                      </label>
                      <label class="block text-sm">
                        <span class="text-gray-700 dark:text-gray-400">อีเมล</span>
                        <input type="text" v-model="name6"
                          class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                      </label>
                      
                      <label class="block text-sm">
                        <span class="text-gray-700 dark:text-gray-400">เขต</span>
                        <input type="text" v-model="name7"
                          class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                      </label>
                      <label class="block text-sm">
                        <span class="text-gray-700 dark:text-gray-400">ถนน</span>
                        <input type="text" v-model="name8"
                          class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                      </label>
                      <label class="block text-sm">
                        <span class="text-gray-700 dark:text-gray-400">ตรอก/ซอย</span>
                        <input type="text" v-model="name9"
                          class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                      </label>
                      <label class="block text-sm">
                        <span class="text-gray-700 dark:text-gray-400">บ้านเลขที่</span>
                        <input type="text" v-model="name10"
                          class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                      </label>
                      <label class="block text-sm">
                        <span class="text-gray-700 dark:text-gray-400">หมู่ที่</span>
                        <input type="text" v-model="name11"
                          class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                      </label>
                      <label class="block text-sm">
                        <span class="text-gray-700 dark:text-gray-400">ตำบล</span>
                        <input type="text" v-model="name12"
                          class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                      </label>
                      <label class="block text-sm">
                        <span class="text-gray-700 dark:text-gray-400">อำเภอ</span>
                        <input type="text" v-model="name13"
                          class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                      </label>
                      <label class="block text-sm">
                        <span class="text-gray-700 dark:text-gray-400">จังหวัด</span>
                        <input type="text" v-model="name14"
                          class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                      </label>
                      <label class="block text-sm">
                        <span class="text-gray-700 dark:text-gray-400">รหัสไปรษณีย์</span>
                        <input type="text" v-model="name15"
                          class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                      </label>
                    </div>
                  </div>
                  <button type="submit"
                    class="mx-3 p-5 mb-3 py-3  text-xl font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                    อัพเดท
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div v-if="EditProfile" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </div>
    </div>

<!--  -->
<div class="flex flex-wrap items-center justify-center">
  <div class="bg-white w-full mb-3 rounded-lg dark:bg-gray-800 shadow-lg transform duration-200 easy-in-out ">
    <div class="h-2/4 sm:h-64 overflow-hidden">
      <div class="profile">
        <img class="w-full rounded-t p-2" src="../../assets/img/profile.jpg" />
      </div>
    </div>
    <div class="flex justify-start px-5 pt-3 mb-3">
      <span clspanss="block relative h-24 w-24">
        <img alt="Photo by aldi sigun on Unsplash"
        src="../../assets/img/profile00.jpg"
           class="mx-auto object-cover rounded-full h-44 w-44 bg-white p-1" />
      </span>
    </div>
    <div class="">
      <div class="px-7 mb-8">
        <h2 class="text-4xl font-bold text-black-800 dark:text-gray-300">มุซอับ สาแหละ</h2>
        <div class="text-black-500 mt-2  dark:text-gray-400 text-3xl ">ข้อมูลส่วนตัว</div>
        <div class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">เพศ : ชาย, เบอร์โทร : 0656078532, 
          บัตรประจำตัวประชาชน : 1940211369558, วันเกิด : 13/09/2543, อีเมล : musab_salaeh@gmail.com</div>
        <div class="text-black-500 mt-0  dark:text-gray-400 text-3xl ">ข้อมูลที่อยู่</div>
        <div class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">เขต : - ถนน : - ตรอก/ซอย : - บ้านเลขที่ : 123 หมู่ : 06 ตำบล : ลำใหม่ อำเภอ : เมืองยะลา จังหวัด : ยะลา รหัสไปรษณีย์ : 95160</div>
      </div>
    </div>
  </div>
</div>

   <div
      class="flex  items-center justify-between p-4 mb-3 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
      <div class="flex items-center">
        <span>ข้อมูลการศึกษา</span>
      </div>
      <div>
        <button
          class="bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-xl px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button" v-on:click="addDataStudy()">
          เพิ่มข้อมูล
        </button>
        <div v-if="AddDataStudy"
          class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
          <div class="relative w-auto my-6 mx-auto max-w-6xl">
            <!--content-->
            <div
              class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <!--header-->
              <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <div class="text-3xl text-black">
                  เพิ่มข้อมูลการศึกษา
                </div>
                <button
                  class="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  v-on:click="addDataStudy()">
                  X
                </button>
              </div>
              <!--body-->
              <form action="#">
                <div class="w-screen-fit">
                  <div class="w-full p-5">
                    <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3">
                      <label class="block text-sm">
                        <span class="text-gray-700 dark:text-gray-400">ชื่อสถาบัน</span>
                        <input type="text" v-model="name1"
                          class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                      </label>
                      <label class="block text-sm">
                        <span class="text-gray-700 dark:text-gray-400">เริ่มศึกษาปี</span>
                        <input type="text" v-model="name2"
                          class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                      </label>
                      <label class="block text-sm">
                        <span class="text-gray-700 dark:text-gray-400">จบการศึกษาปี</span>
                        <input type="text" v-model="name3"
                          class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                      </label>
                      <label class="block text-sm">
                        <span class="text-gray-700 dark:text-gray-400">ระดับการศึกษา</span>
                        <input type="text" v-model="name4"
                          class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                      </label>
                      <label class="block text-sm">
                        <span class="text-gray-700 dark:text-gray-400">ชื่อสาขาวิชาที่ศึกษา</span>
                        <input type="text" v-model="name4"
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
        <div v-if="AddDataStudy" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </div>
    </div>
  <div class="w-full  overflow-hidden rounded-lg shadow-xs mb-3">
      <div class="w-full overflow-x-auto">
        <table class="w-full whitespace-no-wrap">
          <thead>
            <tr
              class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
              <th class="px-4 py-3"></th>
              <th class="px-4 py-3">ชื่อสถาบัน</th>
              <th class="px-4 py-3">เริ่มศึกษาปี</th>
              <th class="px-4 py-3">จบการศึกษาปี</th>
              <th class="px-4 py-3">ระดับการศึกษา</th>
              <th class="px-4 py-3">ชื่อสาขาวิชาที่ศึกษา</th>
              <th class="px-4 py-3" colspan="2" width="10%"></th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
            <tr class="text-gray-700 dark:text-gray-400">
              <td class="px-4 py-3 text-sm">
                1
              </td>
              <td class="px-4 py-3 text-sm">
                มหาวิทยาลัยราชภัฏยะลา
              </td>
              <td class="px-4 py-3 text-sm">
                2562
              </td>
              <td class="px-4 py-3 text-sm">
                2566
              </td>
              <td class="px-4 py-3 text-sm">
                ปริญญาตรี
              </td>
              <td class="px-4 py-3 text-sm">
                วิทยาการคอมพิวเตอร์
              </td>
              <td class="px-4 py-3  font-semibold  text-sm">
                <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" type="button"
                  v-on:click="editDataStudy()">
                  แก้ไข
                </button>
                <div v-if="EditDataStudy"
                  class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                  <div class="relative w-auto my-6 mx-auto max-w-6xl">
                    <!--content-->
                    <div
                      class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      <!--header-->
                      <div
                        class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 class="text-3xl text-black">
                          แก้ไขข้อมูลการศึกษา
                        </h3>
                        <button
                          class="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          v-on:click="editDataStudy()">
                          X
                        </button>
                      </div>
                      <!--body-->
              <form action="#">
                <div class="w-screen-fit">
                  <div class="w-full p-5">
                    <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3">
                      <label class="block text-sm">
                        <span class="text-gray-700 dark:text-gray-400">ชื่อสถาบัน</span>
                        <input type="text" v-model="name1"
                          class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                      </label>
                      <label class="block text-sm">
                        <span class="text-gray-700 dark:text-gray-400">เริ่มศึกษาปี</span>
                        <input type="text" v-model="name2"
                          class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                      </label>
                      <label class="block text-sm">
                        <span class="text-gray-700 dark:text-gray-400">จบการศึกษาปี</span>
                        <input type="text" v-model="name3"
                          class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                      </label>
                      <label class="block text-sm">
                        <span class="text-gray-700 dark:text-gray-400">ระดับการศึกษา</span>
                        <input type="text" v-model="name4"
                          class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                      </label>
                      <label class="block text-sm">
                        <span class="text-gray-700 dark:text-gray-400">ชื่อสาขาวิชาที่ศึกษา</span>
                        <input type="text" v-model="name4"
                          class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                      </label>
                    </div>
                  </div>
                  <button type="submit"
                    class="mx-3 p-5 mb-3 py-3  text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                    อัพเดท
                  </button>
                </div>
              </form>
                    </div>
                  </div>
                </div>
                <div v-if="EditDataStudy" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </td>
              <td class="px-4 py-3 text-sm">
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">ลบ</button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>

   <div
      class="flex  items-center justify-between mb-3 p-4 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
      <div class="flex items-center">
        <span>ข้อมูลการทำงาน</span>
      </div>
      <div>
        <button
          class="bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-xl px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button" v-on:click="addDataJob()">
          เพิ่มข้อมูล
        </button>
        <div v-if="AddDataJob"
          class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
          <div class="relative w-auto my-6 mx-auto max-w-6xl">
            <!--content-->
            <div
              class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <!--header-->
              <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <div class="text-3xl text-black">
                  เพิ่มข้อมูลการทำงาน
                </div>
                <button
                  class="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  v-on:click="addDataJob()">
                  X
                </button>
              </div>
              <!--body-->
              <form action="#">
                <div class="w-screen-fit">
                  <div class="w-full p-5">
                    <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3">
                      <label class="block text-sm">
                        <span class="text-gray-700 dark:text-gray-400">ชื่อสถานที่ทำงาน</span>
                        <input type="text" v-model="name1"
                          class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                      </label>
                      <label class="block text-sm">
                        <span class="text-gray-700 dark:text-gray-400">เริ่มทำงานปี</span>
                        <input type="text" v-model="name2"
                          class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                      </label>
                      <label class="block text-sm">
                        <span class="text-gray-700 dark:text-gray-400">ทำงานถึงปี</span>
                        <input type="text" v-model="name3"
                          class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                      </label>
                      <label class="block text-sm">
                        <span class="text-gray-700 dark:text-gray-400">ตำแหน่งงาน</span>
                        <input type="text" v-model="name4"
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
        <div v-if="AddDataJob" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </div>
    </div>
  <div class="w-full  overflow-hidden rounded-lg shadow-xs mb-3">
      <div class="w-full overflow-x-auto">
        <table class="w-full whitespace-no-wrap">
          <thead>
            <tr
              class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
              <th class="px-4 py-3"></th>
              <th class="px-4 py-3">ชื่อสถานที่ทำงาน</th>
              <th class="px-4 py-3">เริ่มทำงานปี</th>
              <th class="px-4 py-3">ทำงานถึงปี</th>
              <th class="px-4 py-3">ตำแหน่งงาน</th>
              <th class="px-4 py-3" colspan="2" width="10%"></th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
            <tr class="text-gray-700 dark:text-gray-400">
              <td class="px-4 py-3 text-sm">
                1
              </td>
              <td class="px-4 py-3 text-sm">
                บริษัท It solution
              </td>
              <td class="px-4 py-3 text-sm">
                2564
              </td>
              <td class="px-4 py-3 text-sm">
                2566
              </td>
              <td class="px-4 py-3 text-sm">
                Devloper
              </td>
              <td class="px-4 py-3  font-semibold  text-sm">
                <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" type="button"
                  v-on:click="editDataJob()">
                  แก้ไข
                </button>
                <div v-if="EditDataJob"
                  class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                  <div class="relative w-auto my-6 mx-auto max-w-6xl">
                    <!--content-->
                    <div
                      class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      <!--header-->
                      <div
                        class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 class="text-3xl text-black">
                          แก้ไขข้อมูลการทำงาน
                        </h3>
                        <button
                          class="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          v-on:click="editDataJob()">
                          X
                        </button>
                      </div>
                      <!--body-->
              <form action="#">
                <div class="w-screen-fit">
                  <div class="w-full p-5">
                    <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3">
                      <label class="block text-sm">
                        <span class="text-gray-700 dark:text-gray-400">ชื่อสถานที่ทำงาน</span>
                        <input type="text" v-model="name1"
                          class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                      </label>
                      <label class="block text-sm">
                        <span class="text-gray-700 dark:text-gray-400">เริ่มทำงานปี</span>
                        <input type="text" v-model="name2"
                          class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                      </label>
                      <label class="block text-sm">
                        <span class="text-gray-700 dark:text-gray-400">ทำงานถึงปี</span>
                        <input type="text" v-model="name3"
                          class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                      </label>
                      <label class="block text-sm">
                        <span class="text-gray-700 dark:text-gray-400">ตำแหน่งงาน</span>
                        <input type="text" v-model="name4"
                          class=" text-gray-700 dark:text-gray-400 block w-full mt-1 text-xl  form-input " />
                      </label>
                    </div>
                  </div>
                  <button type="submit"
                    class="mx-3 p-5 mb-3 py-3  text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                    อัพเดท
                  </button>
                </div>
              </form>
                    </div>
                  </div>
                </div>
                <div v-if="EditDataJob" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </td>
              <td class="px-4 py-3 text-sm">
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">ลบ</button>
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
    name: "Pro_File",
    data() {
      return {
        EditProfile: false,
        AddDataStudy: false,
        EditDataStudy: false,
        AddDataJob: false,
        EditDataJob: false,
      }
    },
    methods: {
      editProfile: function () {
        this.EditProfile = !this.EditProfile;
      },
      addDataStudy: function () {
        this.AddDataStudy = !this.AddDataStudy;
      },
      editDataStudy: function () {
        this.EditDataStudy = !this.EditDataStudy;
      },
      addDataJob: function () {
        this.AddDataJob = !this.AddDataJob;
      },
      editDataJob: function () {
        this.EditDataJob = !this.EditDataJob;
      }
    }
    // components:{
    //   Layout
    // }
  }
</script>
<style scoped>
 .profile img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  
}
</style>
<style scoped>
  .dashboard {
    margin-top: 1%;
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
</style>