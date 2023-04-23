const _password = document.getElementById('possword') //.type = 'password';

const _user = document.getElementById('user')

const singBtn = document.getElementById('login-btn')

const passInp = document.getElementById('possword')

const passMage = document.getElementById('pmgs')
const userMage = document.getElementById('umgs')

singBtn.addEventListener('click', loginBtn)

function loginBtn(event) {
    event.preventDefault()

    userMage.innerText =""
    passMage.innerText = ""
    const passVal = _password.value
    const userval = _user.value
    let flag = 0
    sendDtat = true

    if (userval == '' ||
        (userval.search(/<script/)) >= 0
    ) {
        userMage.innerText = 'Please enter a validet username'
        userMage.classList.add("notval")
        document.getElementById('user').style.border = '2px solid  red'
        sendDtat = false
    } else {
        let _add = userval.match(/@/g)
        if (
            (userval.search(/@/)) < 3 ||
            (_add.length) != 1 ||
            (userval.search(/[!#$+%^&*()_=-]/)) >= 0 ||
            userval.length < 10
        ) {
            flag++
            sendDtat = false
        }
        if (flag != 0) {
            userMage.innerText = 'your username is not validet'
            userMage.classList.add("notval")
            document.getElementById('user').style.border = '2px solid  red'
            sendDtat = false
        } else {

            document.getElementById('user').style.border = '2px solid  green'
        }

    }

    if (
        passVal == ''


    ) {
        passMage.innerText = ('Please enter your possword')
        passMage.classList.add("notval")
        passInp.style.border = '2px solid  red'
        sendDtat = false
    } else {
        if (

            (passVal.search(/[A-z , a-z, 0-9 , #!><,.-=+)()]/)) == -1 ||
            passVal.length < 8

        ) {
            passMage.innerText = ('your possword is to short')
            passMage.classList.add("notval")
            passInp.style.border = '2px solid  red'
            sendDtat = false
        } else {

            passInp.style.border = '2px solid  green'
        }
    }

    if (sendDtat) {
        const body = JSON.stringify({
            username: userval,
            password: passVal,
        })
        const headers = {
            "Content-type": "application/json"
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
                method: "POST",
                body: body,
                header: headers
            })
            .then(respanse => {
                if (respanse.ok) {
                    document.getElementById('logMage').innerText = "You log in successful"
                    document.getElementById('logMage').classList.add('validate')
                }
            })
    }


}