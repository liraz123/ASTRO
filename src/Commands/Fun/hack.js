const Command = require("../../Structures/Command.js");

module.exports = new Command ({
    name: "hack",    
    description: "Hack for fun.",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        function wait(ms){
            let start = new Date().getTime();
            let end = start;
            while(end < start + ms) {
              end = new Date().getTime();
           }
         }

        const taggedUser = message.mentions.users.first();
        if (!taggedUser) {
            return message.channel.send("Please mention somebody to hack!");
        }
        message.channel.send(`Hacking  ${taggedUser}...`);
        message.channel.send("__**Status**__**:** **[          0%          ]**")
        .then(msg => {
            wait(93);
            msg.edit("__**Status**__**:** **[==         7%          ]**");
            wait(100);
            msg.edit("__**Status**__**:** **[==         8%          ]**");
            wait(20)
            msg.edit("__**Status**__**:** **[==         9%          ]**");
            wait(90);
            msg.edit("__**Status**__**:** **[===       12%          ]**");
            wait(60);
            msg.edit("__**Status**__**:** **[===       14%          ]**");
            wait(60);
            msg.edit("__**Status**__**:** **[====      17%          ]**");
            wait(40);
            msg.edit("__**Status**__**:** **[====      20%          ]**");
            wait(10);
            msg.edit("__**Status**__**:** **[=====     21%          ]**");
            wait(12);
            msg.edit("__**Status**__**:** **[=====     22%          ]**");
            wait(13);
            msg.edit("__**Status**__**:** **[=====     24%          ]**");
            wait(80);
            msg.edit("__**Status**__**:** **[======    29%          ]**");
            wait(80);
            msg.edit("__**Status**__**:** **[=======   31%          ]**");
            wait(80);
            msg.edit("__**Status**__**:** **[=======   36%          ]**");
            wait(40);
            msg.edit("__**Status**__**:** **[========= 41%          ]**");
            wait(60);
            msg.edit("__**Status**__**:** **[==========47%          ]**");
            wait(50);
            msg.edit("__**Status**__**:** **[==========53%=         ]**");
            wait(35);
            msg.edit("__**Status**__**:** **[==========58%==        ]**");
            wait(80);
            msg.edit("__**Status**__**:** **[==========66%====      ]**");
            wait(60);
            msg.edit("__**Status**__**:** **[==========74%=====     ]**");
            wait(20);
            msg.edit("__**Status**__**:** **[==========79%======    ]**");
            wait(83);
            msg.edit("__**Status**__**:** **[==========80%======    ]**");
            wait(50);
            msg.edit("__**Status**__**:** **[==========85%=======   ]**");
            wait(14);
            msg.edit("__**Status**__**:** **[==========93%========= ]**");
            wait(70);
            msg.edit("__**Status**__**:** **[==========97%=========-]**");
            wait(90);
            msg.edit("__**Status**__**:** **[==========100%=========]**").then(() => {
                message.channel.send(`Succesfuly hacked ${taggedUser}!`)
            })
        })
    }
    });