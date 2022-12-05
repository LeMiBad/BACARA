const [game, gamed] = document.getElementsByClassName('helperContainer')[0].children
const [first, second] = [game.children, gamed.children]
const answer = document.getElementsByClassName('answer')[0]

let currentSteps = []

const render = () => {
    let i = 0
    for(let row of first) {
        for(let cell of row.children) {
            if(currentSteps[i]) {
                cell.classList.remove('red')
                cell.classList.remove('blue')
                cell.classList.remove('green')
                cell.classList.remove('undefined')
                cell.classList.add(currentSteps[i])
                i+=1
            }
            else {
                cell.classList.remove('red')
                cell.classList.remove('blue')
                cell.classList.remove('green')
                cell.classList.remove('undefined')
            }
        }
    }
}


const renderAnswer = (result) => {
    if(result === 'Возврат') {
        answer.classList.add('hidden')
        answer.innerHTML = ''
    }
    else {
        answer.innerHTML = result
        if(result.split(' ')[1] === 'P') {
            answer.classList.add('blue')
            answer.classList.remove('red')
            answer.classList.remove('hidden')
        } 
        else {
            answer.classList.add('red')
            answer.classList.remove('hidden')
            answer.classList.remove('blue')
        }
    }

}


const result = () => {
    const winLine = currentSteps[10]
    const firstWin = currentSteps[11]
    const secondWin = currentSteps[12]
    const thirdWin = currentSteps[13]
    const fourWin = currentSteps[14]
    const fiveWin = currentSteps[15]

    const wins = []


    let counter = 0
    for(let i = 0; i < currentSteps.length; i++) {
        if(currentSteps[i] === 'green') continue
        if(counter > 9) wins.push(currentSteps[i])
        counter +=1
    }


    if(wins[0]) {
        if(wins[0] === 'red') {
            if(wins[1]) {
                if(wins[1] === 'red') {
                    if(wins[2]) {
                        if(wins[2] === 'red') {
                            reset()
                            return 'Возврат'
                        }
                        else if (wins[2] === 'blue') {
                            if(wins[3]) {
                                if(wins[3] === 'red') {
                                    if(wins[4]) {
                                        reset()
                                        return 'Возврат'
                                    }
                                    else return 'Bet P 4 unit'
                                }
                                else if(wins[3] === 'blue') {
                                    reset()
                                    return 'Возврат'
                                }
                            }
                            else return 'Bet P 2 unit'
                        }
                    }
                    else return 'Bet B 1 unit'
                }
                else if(wins[1] === 'blue') {
                    if(wins[2]) {
                        if(wins[2] === 'red') {
                            reset()
                            return 'Возврат'
                        }
                        else if (wins[2] === 'blue') {
                            if(wins[3]) {
                                if(wins[3] === 'red') {
                                    reset()
                                    return 'Возврат'
                                }
                                else if(wins[3] === 'blue') {
                                    if(wins[4]) {
                                        reset()
                                        return 'Возврат'
                                    }
                                    else return 'Bet P 4 unit'
                                }
                            }
                            else return 'Bet B 2 unit'
                        }
                    }
                    else return 'Bet B 1 unit'
                }
            }
        }
        else if(wins[0] === 'blue'){
            if(wins[1]) {
                if(wins[1] === 'red') {
                    if(wins[2]) {
                        if(wins[2] === 'red') {
                            if(wins[3]) {
                                if(wins[3] === 'red') {
                                    if(wins[4]) {
                                        {
                                            reset()
                                            return 'Возврат'
                                        }
                                    }
                                    else return 'Bet B 4 unit'
                                }
                                else if(wins[3] === 'blue') {
                                    reset()
                                    return 'Возврат'
                                }
                            }
                            else return 'Bet P 2 unit'
                        }
                        else if (wins[2] === 'blue') {
                            reset()
                            return 'Возврат'
                        }
                    }
                    else return 'Bet P 1 unit'
                }
                else if(wins[1] === 'blue') {
                    if(wins[2]) {
                        if(wins[2] === 'red') {
                            if(wins[3]) {
                                if(wins[3] === 'blue') {
                                    if(wins[4]) {
                                        reset()
                                        return 'Возврат'
                                    }
                                    else return 'Bet B 4 unit'
                                }
                                else if(wins[3] === 'red') {
                                    reset()
                                    return 'Возврат'
                                }
                            }
                            else return 'Bet B 2 unit'
                        }
                        else if (wins[2] === 'blue') {
                            reset()
                            return 'Возврат'
                        }
                    }
                    else return 'Bet P 1 unit'
                }
            }
        }
    }
    return 'Возврат'
}
render()

function reset () {
    console.log(currentSteps)
    const newArr = []
    for(let i = currentSteps.length-11; i < currentSteps.length; i++) {
        newArr.push(currentSteps[i])
    }
    currentSteps = []
    currentSteps = newArr
    console.log(currentSteps)
    render()
}

const clear = () => {
    for(let row of first) {
        for(let cell of row.children) {
                cell.classList.remove('undefined')
                cell.classList.remove('red')
                cell.classList.remove('blue')
                cell.classList.remove('green')
        }
    }
}

const buttons = document.getElementsByClassName('buttonsWrapper')[0].children
const resetButton = document.getElementsByClassName('reset')[0]


buttons[0].addEventListener('click', () => {
    currentSteps.push('red')
    clear()
    render()
})
buttons[1].addEventListener('click', () => {
    currentSteps.push('blue')
    clear()
    render()
})
buttons[2].addEventListener('click', () => {
    currentSteps.push('green')
    clear()
    render()
})
buttons[3].addEventListener('click', () => {
    currentSteps.pop()
    clear()
    render()
})
resetButton.addEventListener('click', () => {
    currentSteps = [];
    render();
})
for(let button of buttons) button.addEventListener('click', () => {
    console.clear()
    renderAnswer(result())
})
