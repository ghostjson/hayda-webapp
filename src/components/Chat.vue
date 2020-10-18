<template>
    <div class="chat">

        <div class="window" v-bind:class="{ open: is_chat_open }">
            <span v-bind:class="{hide: !is_chat_open}">
            <div class="chat-head">
                <h3>Chat with Hayda</h3>
                <i class="fas fa-times" id="chat-close-button" v-on:click="closeChat"></i>
            </div>
            <div class="message-section">
                <div class="bot">
                    Hi John, this is Hayda Bot and I'm here to assist you. How can I help you?
                </div>
                <div class="user">
                    Hey there!
                </div>
            </div>
            <div class="chat-input-section">
                <textarea placeholder="Type message here..."></textarea>
            </div>
            </span>
        </div>

        <div class="button" v-bind:class="{ hide: is_chat_open }" v-on:click="openChat">
            <i class="fas fa-comment"></i>
        </div>
    </div>
</template>

<style lang="scss">

    $chat-width: 300px;

    .chat {
        position: fixed;
        bottom: 50px;
        right: 50px;
        z-index: 100;
    }

    .window {
        height: 0;
        width: 0;
        transition: all .6s;
        visibility: hidden;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        background-color: white;

        .chat-head {
            background: var(--dark-color);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 10px;
            height: 30px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;

            h3 {
                font-size: 1em;
                color: white;
                padding-top: 13px;
            }

            #chat-close-button {
                cursor: pointer;
            }

            color: var(--primary-color);
        }

        .chat-input-section {
            position: absolute;
            bottom: 0;
            height: 30px;
            width: $chat-width;

            textarea {
                height: inherit;
                width: $chat-width;
                border: none;
                border-top: 1px solid rgba(128, 128, 128, 0.62);
                padding: 3px;
                overflow: hidden;
                resize: none;
            }
        }

        .message-section {
            .bot {
                background-color: var(--primary-color);
                width: 65%;
                margin: 5px 3px;
                padding: 5px;
                border-radius: 0 8px 8px 8px;
                color: white;
                font-size: 0.8em;
                line-height: 16px;
            }

            .user {
                background-color: lightgray;
                width: 65%;
                padding: 5px;
                border-radius: 8px 0 8px 8px;
                margin: 5px 3px 5px auto;
            }
        }
    }

    .open {
        visibility: visible;
        height: 300px;
        width: $chat-width;
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
    export default {
        name: 'Chat',

        data() {
            return {
                is_chat_open: true
            }
        },

        methods: {
            openChat: function () {
                this.is_chat_open = true;
            },
            closeChat: function () {
                this.is_chat_open = false;
            }
        }
    }
</script>