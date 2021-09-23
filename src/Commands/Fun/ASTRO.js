const Command = require("../../Structures/Command.js");

module.exports = new Command ({
    name: "ASTRO",    
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
        message.channel.send("[                      ]")
        .then(msg => {
            wait(0);
            msg.edit("[                      H]");
            wait(0);
            msg.edit("[                     HE]");
            wait(0)
            msg.edit("[                   HELL]");
            wait(0);
            msg.edit("[                  HELLO]");
            wait(0);
            msg.edit("[                 HELLO ]");
            wait(0);
            msg.edit("[                HELLO I]");
            wait(0);
            msg.edit("[               HELLO I']");
            wait(0);
            msg.edit("[              HELLO I'm]");
            wait(0);
            msg.edit("[             HELLO I'm ]");
            wait(0);
            msg.edit("[            HELLO I'm A]");
            wait(0);
            msg.edit("[           HELLO I'm AS]");
            wait(0);
            msg.edit("[          HELLO I'm AST]");
            wait(0);
            msg.edit("[         HELLO I'm ASTR]");
            wait(0);
            msg.edit("[        HELLO I'm ASTRO]");
            wait(0);
            msg.edit("[       HELLO I'm ASTRO ]");
            wait(0);
            msg.edit("[      HELLO I'm ASTRO  ]");
            wait(0);
            msg.edit("[     HELLO I'm ASTRO   ]");
            wait(0);
            msg.edit("[    HELLO I'm ASTRO    ]")
            wait(0);
            msg.edit("[           ☺           ]")
        })
    }
    });