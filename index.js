let yesSize = 1.2;
        let noClicks = 0;

        const messages = [
            "Итгэлтэй байна уу?",
            "Дахиад сайн бодоорой...",
            "Гуйж байна шүү дээ 🥺",
            "Намайг ингээд хаях гэж үү?",
            "Зүрх минь өвдөж байна 💔",
            "За яахав, би асуусаар л байх болно!"
        ];

        function handleNo() {
            noClicks++;
            const yesBtn = document.getElementById('yesBtn');
            const noBtn = document.getElementById('noBtn');
            const question = document.getElementById('question');
            yesSize += 0.5;
            yesBtn.style.fontSize = yesSize + "rem";
            yesBtn.style.padding = (15 + noClicks * 10) + "px " + (30 + noClicks * 20) + "px";

            if (noClicks < messages.length) {
                question.innerText = messages[noClicks];
            } else {
                question.innerText = "Одоо зүгээр Тийм гээч дээ! 😂";
            }

            let currentNoSize = 1.2 - (noClicks * 0.1);
            if (currentNoSize > 0.5) {
                noBtn.style.fontSize = currentNoSize + "rem";
            }
        }

        function celebrate() {
            document.getElementById('quiz').style.display = 'none';
            document.getElementById('result').style.display = 'block';
            document.body.style.backgroundColor = "#ffc1e3";
        }