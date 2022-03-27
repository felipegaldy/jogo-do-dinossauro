import { getCustomProperty, incrementCustomProperty, setCustomProperty } from "./updateCustomProperty.js"

const SPEED = .04
const chaoElems = document.querySelectorAll("[data-chao]")

export function setupChao() {
    setCustomProperty(chaoElems[0],'--left', 0)
    setCustomProperty(chaoElems[1],'--left', 300)
}

export function updateChao(delta, speedScale) {

    chaoElems.forEach(chao => {
        incrementCustomProperty(chao, '--left', delta * speedScale * SPEED * -1)
    
        if (getCustomProperty(chao, "--left")<= -300){
            incrementCustomProperty(chao, "--left", 600)
        }
    })

}


