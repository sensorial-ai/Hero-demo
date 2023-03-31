const fun = (() => {
    const tynChatInput = document.getElementById('tynChatInput');
    const btnSend = document.getElementById('btn-send');
    const botUrl = "http://104.198.237.233/chat/";
    const tynReply = document.getElementById('tynReply');
    const loading = document.getElementById('loading');

    function initPage() {
        btnSend.onclick = (evt) => {
            let msg = tynChatInput.innerText;
            outgoing(msg);
            showLoading(true);
            sendMessage(tynChatInput.innerText.trim());

            tynChatInput.innerText = '';
            tynChatInput.focus();
        }
    }

    function sendMessage(msg) {
        let url = botUrl + 1 + '?message=' + msg;
        
        fetch(url,{
            method: 'POST',
        }).then(rs => rs.json()).then(rs => {
            showLoading(false);
            incoming(rs.message);
        });
    }

    function outgoing(msg) {
        let div = document.createElement('div');
            div.className = 'tyn-reply-item outgoing';
            div.innerHTML = '<div class="tyn-reply-group">' + 
                '<div class="tyn-reply-bubble">' +
                    '<div class="tyn-reply-text">' + msg + '</div>' +
                '</div>' +
            '</div>';

        tynReply.append(div);
    }

    function showLoading(bool) {
        if(bool)
        {
            loading.classList.remove('d-none');
        }
        else
        {
            loading.classList.add('d-none');
        }
    }

    function incoming(msg) {
        let div = document.createElement('div');
            div.className = 'tyn-reply-item incoming';
            div.innerHTML = '<div class="tyn-reply-group">' +
                '<div class="tyn-reply-bubble">' +
                    '<div class="tyn-reply-text">' + msg + '</div>' + 
                '</div>' +
            '</div>';

        tynReply.append(div);
    }

    return {
        initPage
    }
})()

fun.initPage()