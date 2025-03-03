document.getElementById("memeForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const templateId = document.getElementById("template").value;
    const topText = document.getElementById("topText").value;
    const bottomText = document.getElementById("bottomText").value;

    const url = `https://api.imgflip.com/caption_image?template_id=${templateId}&username=YOUR_USERNAME&password=YOUR_PASSWORD&text0=${encodeURIComponent(topText)}&text1=${encodeURIComponent(bottomText)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.success) {
            const memeUrl = data.data.url;
            document.getElementById("memeImage").src = memeUrl;
            document.getElementById("memeResult").classList.remove("hidden");
        } else {
            alert("Ошибка при создании мема. Попробуйте снова.");
        }
    } catch (error) {
        console.error("Ошибка:", error);
    }
});

document.getElementById("shareBtn").addEventListener("click", function () {
    alert("Поделитесь мемом в социальных сетях!");
});

document.getElementById("premiumBtn").addEventListener("click", function () {
    alert("Премиум-версия куплена! Спасибо за поддержку.");
    // Здесь можно добавить интеграцию с платежной системой (PayPal, Stripe).
});
