document.addEventListener("DOMContentLoaded", function () {
    const startBtn = document.getElementById("startBtn");
    const unlockBtn = document.getElementById("unlockBtn");
    const codeModal = document.getElementById("codeModal");
    const codeInput = document.getElementById("codeInput");
    const errorText = document.getElementById("errorText");
    const mainContainer = document.querySelector(".container");

    // فتح النافذة عند الضغط على زر البداية
    startBtn.addEventListener("click", function () {
        codeModal.style.display = "flex";
    });

    // عند الضغط على زر فتح الهديّة
    unlockBtn.addEventListener("click", function () {
        const code = codeInput.value.trim();

        // التثبت من الكود
        if (code !== "09081981") {
            errorText.style.display = "block";
            return;
        }

        // إخفاء الواجهة والنافذة
        errorText.style.display = "none";
        codeModal.style.display = "none";
        mainContainer.style.display = "none";

        // إنشاء مكان الرسالة
        const messageContainer = document.createElement("div");
        messageContainer.className = "message-container";
        messageContainer.innerHTML = `
            <h1>❤️ Happy Birthday ❤️</h1>
            <p id="message"></p>
        `;
        document.body.appendChild(messageContainer);

        const text = `كُلُّ عامٍ وأنتِ بألفِ خيرٍ يا منولَتَنا الغالية. ❤️

في هذا اليومِ المميّز، أردنا أن نُقدّمَ لكِ هديّةً مختلفة، ليست هديّةً تُشترى، بل هديّةٌ صُنِعَت بكلِّ محبّةٍ من أجلكِ. ❤️

يُقالُ إنَّ العمّاتِ هُنَّ التَّسَسُ (الأفاعي) التي تُخرجُ السُّمَّ، سنقولُ نعم، هذا صحيح... أنتِ التَّسَسُ التي تُخرجُ الدَّواءَ لا السُّمَّ، أنتِ الدَّواءُ لا الدَّاءُ، أنتِ المَنالُ التي ناوَلَتْ قلوبَنا حُبَّها... ❤️

إذا كُنّا نحنُ القلبَ والصمَصومَ والشِّريانَ، فأنتِ الدَّمُ الذي يجري فينا، فبدونِكِ لا معنى للقلبِ، ولا حاجةَ للصمَصومِ، ولا فائدةَ للشِّريانِ... ❤️

نسألُ اللهَ أن يملأَ أيّامَكِ فرحًا، وأن يرزقَكِ الصِّحّةَ والسَّعادةَ وراحةَ البالِ، وأن يُحقّقَ لكِ كلَّ أمنياتِكِ. ❤️

شكرًا لكلِّ لحظةٍ جميلةٍ، ولكلِّ دعوةٍ صادقةٍ، ولكلِّ حُبٍّ وحنانٍ وعبيرٍ منحتِنا إيّاه. ❤️

نُحبُّكِ كثيرًا، ونتمنّى أن يبقى وجهُكِ مُبتسمًا دائمًا. ❤️

كُلُّ عامٍ وأنتِ بخيرٍ، ويوم ميلادٍ سعيدٌ يا تسْتَنا منالَ الغالية. ❤️`;

        let i = 0;
        const messageElement = document.getElementById("message");

        function typeWriter() {
            if (i < text.length) {
                messageElement.textContent += text.charAt(i);
                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth"
                });
                i++;
                setTimeout(typeWriter, 40);
            }
        }

        typeWriter();
    });
});
