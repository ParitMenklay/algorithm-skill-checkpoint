/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer: O(n) เพราะ มีการใช้ for loop มาใช้ในการวนดูข้อมูลทุกตัวใน array ของ student จำนวนการทำงานที่มากที่สุดจะขึ้นอยู่กับ students.length จึงทำให้เมื่อมีจำนวนข้อมูลใน array มากเท่าไหร่ กาทำงานที่มากที่สุดจะเท่ากับ จำนวนข้อมูลใน array นั้น ทำให้ตอบ O(n)


*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer: O(log n) เพราะ มีการใช้ while loop มาใช้ในการวนดูข้อมูลใน array ของ products และมีการกำหนดตัวแปร left right mid เพื่อเป็น index ในการทำ binary search การทำงานคือ เปรียบเทียบกับข้อมูลที่ index mid ก่อน ถ้าข้อมูลตรงกับ index mid ก็ return ข้อมูลที่ index mid เลย แต่ถ้ามากกว่าให้ปรับ index left เป็น mid+1 ถ้าน้อยกว่าให้ปรับ index right เป้น mid-1 โดยที่ข้อมูลต้องเรียงกันก่อน การทำงานของ binary search จึงเป็นการตัดข้อมูลออกครึ่งหนึ่งก่อน และทำไปเรื่อยๆจนเหลือตัวสุดท้ายที่ต้องการ ทำให้ตอบ O(log n)


*/

/* 
Which function is more efficient and why?
Answer: findProductPrice เพราะ ใช้ binary search ในการทำงาน ที่เป็น O(log n) เพื่อการทำงานที่เร็วกว่า ถ้ามีข้อมูลเป็นล้านข้อมูล linear search จะทำงานเป็นล้านรอบ แต่ binary search จะทำงานแบบตัดข้อมูลออกครึ่งหนึ่งก่อน จึงทำให้การทำงานเหลือแค่ ประมาณ 20 รอบเท่านั้น ทำให้ได้ประสิทธิภาพดีกว่า


*/
