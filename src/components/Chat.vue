<template>
    <div class="chat">

        <div class="window" v-bind:class="{ open: is_chat_open }">
            <span v-bind:class="{hide: !is_chat_open}">
            <div class="chat-head" style="position: absolute; width: 100%;">
                <h3>Chat With HAYDA</h3>
                <i class="fas fa-times" id="chat-close-button" v-on:click="closeChat"></i>
            </div>
            <div class="message-section" style="margin-top: 40px">
                <div
                        :class="{'bot': message.hasOwnProperty('bot'), 'user': message.hasOwnProperty('user')}"
                        v-for="(message,index) in messages" :key="index">
                    {{ Object.values(message)[0] }}
                </div>

            </div>
            <div class="chat-input-section">
                <textarea v-model="message_entry" @keyup.enter.exact.prevent="sendMessage()" placeholder="Type message here..."></textarea>
            </div>
            </span>
        </div>

        <div class="button" v-bind:class="{ hide: is_chat_open }" v-on:click="openChat">
            <i class="fas fa-comment"></i>
        </div>
    </div>

</template>

<style >

    .chat {
        position: fixed;
        bottom: 50px;
        right: 50px;
        z-index: 100;
    }
    .window {
        height: 0;
        width: 0;
        transition: all 0.6s;
        visibility: hidden;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        background-color: white;
        overflow: scroll;
        padding-bottom: 20px;
    }
    .window .chat-head {
        background: var(--dark-color);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        height: 30px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        color: var(--primary-color);
    }
    .window .chat-head h3 {
        font-size: 1em;
        color: white;
        padding-top: 13px;
    }
    .window .chat-head #chat-close-button {
        cursor: pointer;
    }
    .window .chat-input-section {
        position: absolute;
        bottom: 0;
        height: 30px;
        width: 300px;
    }
    .window .chat-input-section textarea {
        height: inherit;
        width: 300px;
        border: none;
        border-top: 1px solid rgba(128, 128, 128, 0.62);
        padding: 3px;
        overflow: hidden;
        resize: none;
    }
    .window .message-section .bot {
        background-color: var(--primary-color);
        width: 65%;
        margin: 5px 3px;
        padding: 5px;
        border-radius: 0 8px 8px 8px;
        color: white;
        font-size: 0.8em;
        line-height: 16px;
    }
    .window .message-section .user {
        background-color: lightgray;
        width: 65%;
        padding: 5px;
        border-radius: 8px 0 8px 8px;
        margin: 5px 3px 5px auto;
    }
    .open {
        visibility: visible;
        height: 300px;
        width: 300px;
    }
    .button {
        cursor: pointer;
        background: var(--dark-color);
        height: 50px;
        width: 50px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.8em;
        color: var(--primary-color);
    }
    .hide {
        display: none;
    }

</style>

<script>
    import auth from "../services/auth";
    import Api from "../modules/Api";

    export default {
        name: 'Chat',

        data() {
            return {
                is_chat_open: false,
                username: 'guest',
                messages: [
                    {
                        bot: 'Hi admin, this is HAYDA Bot and I\'m here to assist you. How can I help you?'
                    }
                ],
                message_entry: ''
            }
        },

        methods: {
            openChat: function () {
                this.is_chat_open = true;
            },
            closeChat: function () {
                this.is_chat_open = false;
            },
            async sendMessage(){
                this.insertUserMessage(this.message_entry)

                let respond = await Api.post('/chat/chat-bot', {
                    'message': this.message_entry
                })
                this.insertBotMessage(respond.data.message)
                this.message_entry = ''
            },
            scrollMessage(){
                setTimeout(function () {
                    let element = document.getElementsByClassName('window')[0]
                    element.scrollTop = element.scrollHeight
                }, 500)

            },
            insertUserMessage(message){
                let message_obj = {
                    user: message
                }
                this.messages.push(message_obj)
                this.scrollMessage()
            },
            insertBotMessage(message){
                let message_obj = {
                    bot: message
                }
                this.messages.push(message_obj)
                this.scrollMessage()
            }
        },
        created() {
            if(auth.isLogged()){
                this.username = JSON.parse(localStorage.getItem('User')).name
            }
        }
    }
</script>
