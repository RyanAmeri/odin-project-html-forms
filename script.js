const inputEmail = document.getElementById('input-email');
inputEmail.addEventListener('change', (e) => {
    const emailError = document.getElementById('emailError');
    if (emailIsValid(inputEmail.value)){
        inputEmail.style.background = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAABHVBMVEVHcEwrnxsAAAArnxsroBsAgAAqnhornxsrnxsnnRQroBspnhopnxsrnxosoBwrnxwroBsroBsomhsrnxsamRoroBssoBwrnxwrnxwrgAAonRspnBkqoBssnxwgnxAsoBsmnhcnmxcsoBssnxwrnxselg8qoBsooBkrnxssoBwpnxopnRkroBsroBsrnBUroBsroBsqnxornhopnxornxwsnxwrnxwnnRoroBsmnxoroBsrnxsnnRkrnxgqnhwrnxwXixcrnhspnxwrnxornxwsnxsrnxsrnxwsnxwroBwrnxosnxosnxssoBsroBwrnBgrnhwAmQAolBssnhoqoBwrnxsroBomlxMonxgrnxUrnxsonhgrnxsrnxssoBwRNBgaAAAAXnRSTlMAvwGi2QJPjcQN/kQ4WO6ts6smvQrz9uelBjk+c+8Q/CIh+/DaEUMzrMFQUcOZJLGDbWxFd8DtJ44ovuA0NTfCC0IlmveYgrBA5lp116PxNoEFE5FukGsbIBhyP/Kyd2TKDQAAAjRJREFUOMuNldd64jAQhccs8aYYiE1NKKETQg3pvfe6vZ/3f4wdC4htLDnoBuno/+QzBYnIO0JGP6OFk8mwlukbIQoaC500XCPdWVCiy234RtuQosWY2E31cpFst5uN5HopIcSKEgdR3pg39YQjJXRznsWoz8v6CsvxxqTciLO8su4Vv7CW12Xu9DxvfXMrX1kIW/KwrTBvus7eYA9bBVWSClvs5M13kWMLF9TZL/DZ0XFOOGd5K6hWFvuOjWrBnvTAwpLOyLKYcd3i9M7gDLZFdFyLhpL6NMo3V2eDfy8AU8nOzW4OJyZwwT2ZDnA8Nwtsjl2nQ3Z4qUQAi4/DPknZIfaBm/dZohugTxng9xQs5YAMaUBkCpYigEZcyuwULGW5JSgJdMfCjyUlS10gacPno/XPg8UlFUvnwF+XjV8HwIj2s/THtuEEOPMBI1rCDgPk1OXIS8vYYequgR556M8ylnrANRnucgs6KWPtchuikdbIQ0tYWhONRB1glby0n6VVoGNfRdz8hx5awh5y84s/+Amw79JnZK2yD5yICYfoci0d7BjGm5/KThC7U3HiKvElU62p2VqVL5nSeFUvA00lXWsC5bqzHrCn6p6c3eNzMXAruyxUWjK2xX6x69W+sxNoR5PoETclyoNJub5tPxOx1qkjnbbEM7Nd93+vZIq2uPz3cH9rWbf3D4uXQjBL0lCOm/6nrXmszOjZ1Z2bvLs6Cyxs6OX1Kf74/PwYf3p9mXyO/wMZP5uqB2YqxQAAAABJRU5ErkJggg==)";
        inputEmail.style.backgroundRepeat = "no-repeat";
        inputEmail.style.backgroundPosition = "95% 50%";
        inputEmail.style.backgroundSize = "22px 22px";
        inputEmail.style.outline = "none";
        inputEmail.style.border = "1px solid var(--border-color)";
        inputEmail.style.boxShadow = "none";
        emailError.textContent = ""
        emailError.style.height = "auto";
        emailError.style.visibility = "hidden";

    }
    else {
        inputEmail.style.outline = "none";
        inputEmail.style.border = "1px solid var(--error-color)";
        inputEmail.style.boxShadow = "0 0 10px var(--error-color)";
        emailError.textContent = "Please enter a valid email address."
        emailError.style.height = "auto";
        emailError.style.minHeight = "20px";
        emailError.style.marginTop = "5px";
        emailError.style.marginBottom = "5px";
        emailError.style.lineHeight = "1.2em";
        emailError.style.fontSize = "1.2rem";
        emailError.style.visibility = "visible";
        inputEmail.style.background = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAHMElEQVRYCcWZy49URRSHq6ovE3kkIAtn5k6mZ7o7oDsXQtBEkUEgRgMiyqxYuDJRIzLo8EeACsRHdOeCFYoiRE1AeQwuIOLCpSTTPT2TvjPjAlgIGOiu4+9Ud9W93XNvP+YBlUCdqjp1zjd1Tz1bioUlWege3JRS8lUhZVZK6QsiXwjkJlGA+oAIOVG+oumnzOzENTTRfN3K+XQs+tltSsq9ANkFyJ5ObKDPDPqc0UTfDgT5Xzvpy7odAU/0DTynKHUYDp/v1FGcPuB/r1T0KEb9alx7XF1bwMXudFZ53hH8fXsajZCge4LkeSH1mCBVEqQDWX4QsB55y3whFf7pPrRtFpK2SyGXN9qA5ve6XB4dmJ3Mz22rr2kJzJ9fSnESjh53XTE0+DaniPSJf8T98xuC4K5rayJc9/0VT4iu7VKqfYjiNxDfzj/+8FuwOtwqTFyHOD9TfuZ9jOpRGE6F7XRBa3loYHr8z7Cuc6nYm3tGKToM+1tdb6IKRnukPyh85uoahERgwB7H59xv9TECt/G530oHEz/ausXIJ/3B1+DnG3zBNaE9Ot5fyh8Iy6EUC1z0c/uVFMedGtGN+1LszJXyN1zdIgrjfdn1XSTO4kuud2ZJ748b6TnART+zXQn5iw0DLJiXK3cquzO3J247Y0sgFNYMrkmtTJ0G0IvGPMJDC/FyY0zXAfNqID3vuptgGNnyXb1pqWHt38/Q3gp1zY60mYjl8obo6qGsMue8dFlYjlkOg4cFy/7ZF/s08wVlZqkup9xaTQ6YN4W6dRYTbKli1jqPy41P+A7b5J4qW7XGAfMOFirRhcVeDULbraWqb7pgNaNsBpgnmttusSnwOmuVk/K8n3kSa+nbSe1J9ZN92XcK/uBTSe223jDwBoXEbMzIsgFWQu3lgknYwVptCgzrSXlRKfE1L4G2a6scsAcRl1+mhLrYCtowgMXatIwMLBHkO20Db7dWTso9IbbBcS+383pd7M1+kKRr62uwn3AZI9aTkmoLy81SlKXGKBUC+lk2wB1ReY/PBs2McFs6KHwBZRc2SsljzaCjsNyfNB1Ml/JfsdwsMQszsQ4zMqtSWr3iOpE81+5Bpj8YP9IOdCzsdP6o89lEMCxgsirMik1NZm0FgmPMyW0IraAne7MjCB0TBmwOo/Vhuk1Y517qK6Ess5g79jrDFqU5xzqFNgSGnvJz+GbCLIu18EAR4a3kp9aEgS3lXdnWt8z5jF3bj5nVM3cweyzF4bulgRiFOOio2rxh2QgzSbOYQSYfUjjC9qYQddauzNCY1aON+guChbF6JsnAYbovuuoOQ2FLmxJJHMDrE2kxp65eo3mpgYkAjCt4LS3zyKytttxJbiZYJGZt31ZLntVLyrtSuvZkwBo0zauEAzYXxqSeTeobYTkMouGxEGhSqXAQwephuw4w+6o4fLvtMGHDOFC/GuiP0qWCWQ0m/QzGQ+G2jSWjurmIgel8eJNpx5dhqkYus3JIjLt+fBXvIDEsQNwmQMLAunUXO+LHCx7pOiYaV5UK/ewY8W7AV3FXbiK0grVdE6BjL5i2j80NC5hsmVkVv3VhqGe4ErvScrwb7LAKSTkfK5uNbGO/GOij7RxNmYWZ2B4zMisHByGGz1gn5pHDFhLysqJLOKiaydoYBgld+MDkwgOTcroi9eUkXVsfZakx8rImBD/MWSVs+Hsw6ze4cozA15gHgobg+F1MMBezMap1VQYafcpEQ9mg8HddY0PBMIDFVltGt1FM+tkx/BUv1BQu9pfGt1rlR5FP9eX4ijTEvhEOV9JB3iwIZoS5Eq+I7nyL4hBeZHZz/aNINd8Glv1H2Rxw9cmTTjlAPB/xVciVH5JgfMJ36I5ORZ9jHTArVMqVUcTlLZYxO1cvk/JscXU6fLXkhiVM7It9sm92wyzMFHVZBzw4Wyxg9u+FZrmqJNfJld7phwHNPtgXhmqd8Q0GZmGmRGBuGCjlf8O6MWKVMBE3q1XetVa3XKs/n5xtsw/2FfbXI1WWsIaluhG2TXg1/Byfw225/Ffjlnt1qjf3utVZrJxtsm03sjDMvpkhzodb1uIacXh5Twp1DAGNm71Ll6hCh9Iz+T9czTyEyZ7sRpmSfK3a4rqbUNT8oB0Ly3pNgVmh2Jd9CUr8k8FaLpuEhRE9fxBanrip/z339OzsHdvULP+ru3vlWrVqh1C0D67dpsB9MKo3EbPDcWEQtdkSmJUnugcyKY/f3uSb0c4sw9F/+O88/iDcbqlU1jrQKWW2bVXRvqfwo4yQOLbSZpLmAeaxRhto+w6rwaHGCTZXr40RjnYyPyKmFP/sFZkcUY3OZHyoMd4U+FDTbs+2RrjR2ER3bqvyaBj1uzCy4Y2gUTGmjC8yjeozuixPDs6O8/bbUZoXcMSDnOrJbNT46RZvbFnU46db4SPAzT1M8n1RmlNdoEnkFX667Z8p8GRFuM4v/Q9/oSrJLJDIjQAAAABJRU5ErkJggg==')";
        inputEmail.style.backgroundRepeat = "no-repeat";
        inputEmail.style.backgroundPosition = "95% 50%";
        inputEmail.style.backgroundSize = "22px 22px";
    }
});
function emailIsValid(string) {
    const regex = new RegExp('^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$','gi');
    return regex.test(string);

}

