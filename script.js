function ModeDefinition(){
    let Mode = "none"
    const nowPrice = document.getElementsByClassName("price")[0].innerHTML;
    if (nowPrice == "$19.99"){
        Mode = "Monthly"
    }
    else if (nowPrice == "$199.99"){
        Mode = "Annually"
    }
    return Mode
}

function changeModeText(mode){
    if (mode == "Monthly"){
        document.getElementsByClassName("price")[0].innerHTML = "$199.99";
        document.getElementsByClassName("price")[1].innerHTML = "$249.99";
        document.getElementsByClassName("price")[2].innerHTML = "$399.99";
    }
    else if (mode == "Annually"){
        document.getElementsByClassName("price")[0].innerHTML = "$19.99";
        document.getElementsByClassName("price")[1].innerHTML = "$24.99";
        document.getElementsByClassName("price")[2].innerHTML = "$39.99";
    }
    else if (mode == "none"){
        alert("There is a bug in the code")
    }
}

function changeMode(){
    const modeStatus = ModeDefinition()
    changeModeText(modeStatus)
}