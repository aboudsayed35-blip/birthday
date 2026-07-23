const button = document.getElementById("startBtn");



button.addEventListener("click", function () {
    document.getElementById("codeModal").style.display = "flex";
});

document.getElementById("unlockBtn").addEventListener("click", function () {

    const code = document.getElementById("codeInput").value;

    if (code !== "09081981") {
        document.getElementById("errorText").style.display = "block";
        return;
    }

    document.getElementById("codeModal").style.display = "none";

    const music = document.getElementById("music");
    music.play();

    document.body.innerHTML = `

    <div class="message-container">

        <h1>❤️ Happy Birthday ❤️</h1>

        <p id="message"></p>

    </div>

    `;

    const text = `كُلُّ عامٍ وأنتِ بألفِ خيرٍ يا منولَتَنا الغالية. ❤️

في هذا اليومِ المميّز، أردنا أن نُقدّمَ لكِ هديّةً مختلفة، ليست هديّةً تُشترى، بل هديّةٌ صُنِعَت بكلِّ محبّةٍ من أجلكِ. ❤️

يُقالُ إنَّ العمّاتِ هُنَّ التَّسَسُ (الأفاعي) التي تُخرجُ السُّمَّ، سنقولُ نعم، هذا صحيح... أنتِ التَّسَسُ التي تُخرجُ الدَّواءَ لا السُّمَّ، أنتِ الدَّواءُ لا الدَّاءُ، أنتِ المَنالُ التي ناوَلَتْ قلوبَنا حُبَّها... ❤️

إذا كُنّا نحنُ القلبَ والصمَصومَ والشِّريانَ، فأنتِ الدَّمُ الذي يجري فينا، فبدونِكِ لا معنى للقلبِ، ولا حاجةَ للصمَصومِ، ولا فائدةَ للشِّريانِ... ❤️

نسألُ اللهَ أن يملأَ أيّامَكِ فرحًا، وأن يرزقَكِ الصِّحّةَ والسَّعادةَ وراحةَ البالِ، وأن يُحقّقَ لكِ كلَّ أمنياتِكِ. ❤️

شكرًا لكلِّ لحظةٍ جميلةٍ، ولكلِّ دعوةٍ صادقةٍ، ولكلِّ حُبٍّ وحنانٍ وعبيرٍ منحتِنا إيّاه. ❤️

نُحبُّكِ كثيرًا، ونتمنّى أن يبقى وجهُكِ مُبتسمًا دائمًا. ❤️

كُلُّ عامٍ وأنتِ بخيرٍ، ويوم ميلادٍ سعيدٌ يا تسْتَنا منالَ الغالية. ❤️`;

    let i = 0;

    function typeWriter() {

        if (i < text.length) {

            const message = document.getElementById("message");

            message.innerHTML += text.charAt(i);

            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth"
            });

            i++;

            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();

});
