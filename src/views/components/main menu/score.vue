<template>
    <div class="dashboard">
        <div
            class="flex mb-3 items-center justify-between p-4 mb-3 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
            <div class="flex items-center">
                <span>รายวิชา อบรม Laravel Framework</span>
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
                                รหัสรายวิชา : WAF2 <br>
                                ชื่อรายวิชา : อบรม Laravel Framework <br>
                                คำอธิบายรายวิชา : เป็นรายวิชาสอนพัฒนาซอฟต์แวร์โดยใช้ Laravel Framework <br>
                                หมวดหมู่รายวิชา : Web Application Framework <br>
                                ประเภทรายวิชา : สาธารณะ <br>
                                สถานะรายวิชา : เผยแพร่ <br>
                                ชื่อติวเตอร์ประจำรายวิชา : มุซอับ สาแหละ
                            </div>
                        </div>
                    </div>
                    <div v-show="tab === 2">
                        <div
                            class="flex mb-3 items-center justify-between p-4 mb-3 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
                            <div class="flex items-center">
                                <span>เนื้อหาการเรียนรู้</span>
                            </div>
                        </div>

                        <div class="w-full  overflow-hidden mb-8 rounded-lg shadow-xs">
                            <div class="w-full overflow-x-auto">
                                <table class="w-full whitespace-no-wrap">
                                    <thead>
                                        <tr
                                            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                            <th class="px-4 py-3">ชื่อบทเรียน</th>
                                            <th class="px-4 py-3">สถานะบทเรียน</th>
                                            <th class="px-4 py-3" colspan="3" width="5%"></th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                        <tr class="text-gray-700 dark:text-gray-400">
                                            <td class="px-4 py-3 text-sm">
                                                บทที่ 1 พื้นฐาน Laravel Framework
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                เผยแพร่
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                <a href="/learning_page">
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
                            class="flex mb-3 items-center justify-between p-4 mb-3 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
                            <div class="flex items-center">
                                <span>รายชื่อผู้ลงทะเบียน</span>
                            </div>
                        </div>

                        <div class="w-full  overflow-hidden mb-8 rounded-lg shadow-xs">
                            <div class="w-full overflow-x-auto">
                                <table class="w-full whitespace-no-wrap">
                                    <thead>
                                        <tr
                                            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                            <th class="px-4 py-3">ชื่อผู้ลงทะเบียน</th>
                                            <th class="px-4 py-3">รูปแบบ</th>
                                            <th class="px-4 py-3">ว/ด/ป ที่ขอเข้าร่วม</th>
                                            <th class="px-4 py-3" width="5%"></th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                        <tr class="text-gray-700 dark:text-gray-400">
                                            <td class="px-4 py-3 text-sm">
                                                มาเรีย กะโด
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                บุคคล
                                            </td>
                                            <td class="px-4 py-3 text-sm">
                                                25/05/65
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
                                <span>วิดีโอการเรียนรู้</span>
                            </div>
                        </div>
                            <div class="mb-8">
                            <div
                                class="flex mb-3 mx-72 p-4 mb-3 text-sm font-bold text-gray-700 bg-white rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
                                <div class="flex items-center">
                                  <span>บันทึกย่อ</span>
                                </div>
                              </div>
                                <div class="w-full shadow-md rounded-lg text-2xl bg-gray-100 p-4">
                                    <textarea name="" class="w-full shadow-lg rounded-lg text-2xl p-4" placeholder="บันทึกเนื้อหาที่สรุปไว้..." rows="5"></textarea>
                                    <button class="p-4 bg-blue-500 text-white shadow-lg rounded-lg ">บันทึก</button>
                              </div>
                            </div>

                          <div class="mb-8">
                            <div
                                class="flex mb-3 mx-72 p-4 mb-3 text-sm font-bold text-gray-700 bg-white rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
                                <div class="flex items-center">
                                  <span>Ep.1</span>
                                </div>
                              </div>
                            <div class="grid grid-cols-5">
                                  <div class="col-start-2 ml-14 col-span-1 ">
                                    <YouTube :src="linky1" class="mb-3" ready="onReady" ref="youtube" :width="size" />
                                  </div>
                            </div>
                            </div>

                          <div class="mb-8">
                            <div
                                class="flex mb-3 mx-72 p-4 mb-3 text-sm font-bold text-gray-700 bg-white rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
                                <div class="flex items-center">
                                  <span>Ep.2</span>
                                </div>
                              </div>
                            <div class="grid grid-cols-5">
                                  <div class="col-start-2 ml-14 col-span-1 ">
                                    <YouTube :src="linky1" class="mb-3" ready="onReady" ref="youtube" :width="size" />
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
                                    ปัจจุบัน Vue.js เป็นหนึ่งใน Web Framework ที่คนนิยมนำมาพัฒนาเว็บไซต์ (3 เจ้าใหญ่ๆ คือ React, Vue, Angular นั่นเอง) 
                                    วันนี้ผมจะมาทำ Tutorial อธิบายว่า Vue.js คืออะไร? ไปจนถึงสอนวิธีการใช้งาน Vue.js ตั้งแต่เริ่มต้น เข้าใจ 
                                    Concept ภาพรวม จนจบบทความ ทุกคนสามารถสร้างเว็บไซต์ได้เองโดยใช้ Vue.js
                                </div>
                            </div>

                            <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                                <div class="text-2xl text-gray-600 dark:text-gray-400">
                                  <b>ศึกษาแนวทางการพัฒนาเว็บแอพพลิเคชั่น โดยใช้ Vue.js</b> <br>
                                    <a href="https://vuejs.org/" target="_blank">
                                        <button class="bg-blue-500 p-4 shadow-lg rounded-lg text-white text-xl">Link : พื้นฐาน Vue.js</button>
                                    </a>
                                </div>
                            </div>
                            
                            <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                                <div class="text-2xl text-gray-600 dark:text-gray-400">
                                 <b>โครงสร้าง Vue.js</b> <br>
                                    <img src="https://miro.medium.com/max/1400/1*k1KNuvr56pZshMTH9Aqgyg.png" :width="size"> 
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
                          <div class="w-full  overflow-hidden rounded-lg shadow-xs">
                            <div class="w-full overflow-x-auto">
                              <table class="w-full whitespace-no-wrap">
                                <thead>
                                  <tr
                                    class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                    <th class="px-4 py-3">ชื่อชุดทดสอบ</th>
                                    <th class="px-4 py-3">สถานะ</th>
                                    <th class="px-4 py-3" colspan="1" width="5%"></th>
                                  </tr>
                                </thead>
                                <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                  <tr class="text-gray-700 dark:text-gray-400">
                                    <td class="px-4 py-3 text-sm">
                                    แบบทดสอบชุดที่ 1
                                    </td>
                                    <td class="px-4 py-3 text-sm">
                                      เผยแพร่
                                    </td>
                                    <td class="px-4 py-3 text-sm ">
                                      <a href="/ans_quiz"><button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">ทำแบบทดสอบ</button></a>
                                    </td>
                                  </tr>

                                </tbody>
                              </table>
                            </div>
                          </div>
                    </div>

                     <div v-show="tab === 7">
                        <div
                            class="flex mb-3 items-center justify-between p-4 mb-3 text-sm font-semibold text-purple-100 bg-yellow-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
                            <div class="flex items-center">
                                <span>รายละเอียดคะแนน-แบบทดสอบชุดที่ 1</span>
                            </div>
                        </div>
                          <div class="w-full  overflow-hidden rounded-lg shadow-xs">
                            <div class="w-full overflow-x-auto">
                              <table class="w-full whitespace-no-wrap">
                                <thead>
                                  <tr
                                    class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                    <th class="px-4 py-3">ครั้งที่</th>
                                    <th class="px-4 py-3">คะแนนที่ทำได้</th>
                                    <th class="px-4 py-3">คะแนนเฉลี่ย</th>
                                    <th class="px-4 py-3">วันที่ส่ง</th>
                                  </tr>
                                </thead>
                                <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                  <tr class="text-gray-700 dark:text-gray-400">
                                    <td class="px-4 py-3 text-sm">
                                    1 
                                    </td>
                                    <td class="px-4 py-3 text-sm">
                                      8/10
                                    </td>
                                    <td class="px-4 py-3 text-sm">
                                      80 %
                                    </td>
                                    <td class="px-4 py-3 text-sm">
                                      25/06/65
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
                                <span>ดูคะแนน</span>
                            </div>
                        </div>
                        
                           <div class="w-full  overflow-hidden rounded-lg shadow-xs">
                            <div class="w-full overflow-x-auto">
                              <table class="w-full whitespace-no-wrap">
                                <thead>
                                  <tr
                                    class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                    <th class="px-4 py-3">ชื่อชุดทดสอบ</th>
                                    <th class="px-4 py-3">คะแนนเฉลี่ย</th>
                                    <th class="px-4 py-3" width="5%"></th>
                                  </tr>
                                </thead>
                                <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                  <tr class="text-gray-700 dark:text-gray-400">
                                    <td class="px-4 py-3 text-sm">
                                        แบบทดสอบชุดที่ 1 
                                    </td>
                                    <td class="px-4 py-3 text-sm">
                                        80 %
                                    </td>
                                    <td class="px-4 py-3 text-sm">
                                       <button class="p-3 bg-green-500 shadow-lg rounded-lg font-bold text-sm text-white">ดูรายละเอียด</button>
                                    </td>
                                  </tr>

                                </tbody>
                              </table>
                            </div>
                          </div>
                    </div>

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
                                    <span
                                        class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
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
                                    <span
                                        class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
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
                                    <span
                                        class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
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
                                    <span
                                        class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
                                </button>
                            </li>
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
                                    <span class="flex-1 ml-3 whitespace-nowrap">ดูคะแนน</span>
                                    <span
                                        class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
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
                                        class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
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
                                        class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
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
import YouTube from 'vue3-youtube';
    // import Layout from '@/Layout.vue'
    export default {
        name: "ScoRe",
        data() {
            return {
                AddLessonModal: false,
                EditLessonModal: false,
                tab: 7,
                linky1 : 'https://www.youtube.com/watch?v=RDentbxLSUs&t=71s',
                size : 700,
            }
        },
        components: { YouTube },
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