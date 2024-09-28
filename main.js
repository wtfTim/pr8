<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <button id="btn1">Нажми / Отожми</button>
    <button id="btn2">Наведи / Отведи</button>
    <section class="flex">
        <div id="red">

        </div>
        <div id="green">

        </div>
        <div id="blue">

        </div>
    </section>
    <section class="zd3">
        <div id="zd3">

        </div>
    </section>

</body>

<script>
    document.getElementById("btn1").addEventListener("mousedown", function () {
        btn1.style.background = 'white';
        btn1.style.color = 'black';
    })
    document.getElementById("btn1").addEventListener("mouseup", function () {
        btn1.style.background = 'black';
        btn1.style.color = 'white'
    })
    btn2.addEventListener("mouseover", function () {
        btn2.style.color = 'rgb(89, 64, 199)'
        btn2.style.background = 'rgb(93, 236, 22)';
    })
    btn2.addEventListener("mouseout", function () {
        btn2.style.background = 'rgb(89, 64, 199)';
        btn2.style.color = 'rgb(93, 236, 22)';
    })
    document.addEventListener('keydown', function (event) {
        if (event.code == 'KeyR') {
            red.classList.add('red')
            console.log(event.key, event.code)
        } else if (event.code == 'KeyG') {
            green.classList.add('green')
        } else if (event.code == 'KeyB') {
            blue.classList.add('blue')
        }
    })

    document.addEventListener('keyup', function (event) {
        if (event.code == 'KeyR') {
            red.classList.remove('red')
            console.log(event.key, event.code)
        } else if (event.code == 'KeyG') {
            green.classList.remove('green')
        } else if (event.code == 'KeyB') {
            blue.classList.remove('blue')
        }
    })
    let x = 0;
    let y = 0;
    document.addEventListener('keydown', function (event) {
        switch (event.key) {
            case 'w':
                y -= 10;
                break;
            case 'd':
                x += 10;
                break;
            case 's':
                y += 10;
                break;
            case 'a':
                x -= 10;
                break;
        }
        zd3.style.top = `${y}px`;
        zd3.style.left = `${x}px`;
    })

</script>

</html>