document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
const textElement = document.getElementById("p1");
        
// قائمة النصوص التي سيتم التبديل بينها
const texts = ["نحن نؤمن ببناء أفضل المشاريع مع الجودة والاحترافية", " .سرعة في الانجاز ودقة بالعمل ب أعلى معايير الجودة" ,"تصميم يجسد رؤيتك ب تفاصيل تميزنا ب أعمالنا ونجاحكم هدفنا"];

let currentIndex = 0; // تحديد الفهرس الحالي للنص

// دالة لتبديل النص
function switchText() {
    // تحديث النص بناءً على الفهرس الحالي
    textElement.innerText = texts[currentIndex];
    
    // زيادة الفهرس للانتقال إلى النص التالي
    currentIndex = (currentIndex + 1) % texts.length;  // يضمن التكرار بعد النص الثالث
}

// تبديل النص كل 3 ثواني (3000 ملي ثانية)
setInterval(switchText, 3000);

 