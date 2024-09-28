AOS.init();

// Variável apontando para data futura

const dataDoEvento = new Date("Nov 24, 2024, 18:00:00")
const timeStampDoEvento = dataDoEvento.getTime()

const contaAsHoras = setInterval(function() {
    const agora = new Date()
    const timeStampAtual = agora.getTime()

    const distanciaEvento = timeStampDoEvento - timeStampAtual

    const diaEmMs = 1000 * 60 * 60 * 24
    const horaEmMs = 1000 * 60 * 60
    const minutoEmMs = 1000 * 60

    const diasAteEvento = Math.floor(distanciaEvento / diaEmMs)
    const horasAteEvento = Math.floor((distanciaEvento % diaEmMs) / horaEmMs)
    const minutoAteEvento = Math.floor((distanciaEvento % horaEmMs) / minutoEmMs)
    const segundosAteEvento = Math.floor((distanciaEvento % minutoEmMs) / 1000)

    console.log(diasAteEvento)
    console.log(horasAteEvento)
    console.log(minutoAteEvento)
    console.log(segundosAteEvento)

    document.querySelector('#contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutoAteEvento}m ${segundosAteEvento}s`

    
    if (distanciaEvento < 0) {
        clearInterval(contaAsHoras)
        
        document.querySelector('#contador').innerHTML = 'Evento expirado :('
    }
}, 1000)