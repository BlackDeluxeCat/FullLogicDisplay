Events.on(ClientLoadEvent, e => {
    Vars.ui.settings.graphics.checkPref("scaledisplays", false, ck => {
        Vars.content.blocks().each(b => {
            if(b instanceof LogicDisplay) b.scaleFactor = ck ? b.size * Vars.tilesize * 4 / b.displaySize : 1;//BlackDeluxeCat
        });
    });
});

//Mod supporting code needed.