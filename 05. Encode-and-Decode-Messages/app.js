function encodeAndDecodeMessages() {
    const textareas = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');

    const elements = {
        encode:{
            text: textareas[0],
            btn: buttons[0],
            func:(char)=>{
                return String.fromCharCode(char.charCodeAt(0)+1)
            }
        },
        decode:{
            text: textareas[1],
            btn: buttons[1],
            func:(char)=>{
                return String.fromCharCode(char.charCodeAt(0)-1)
            }
        }

    }

    document.getElementById('main').addEventListener('click', function(e){
        if(e.target.tagName!=='BUTTON'){
            return;
        }
        const type =e.target.textContent.toLowerCase().trim().includes('encode')? 'encode':'decode';
        const message = elements[type].text.value
        .split('')
        .map(elements[type].func)
        .join('');

        elements.encode.text.value = '';
        elements.decode.text.value = message;
    })
}