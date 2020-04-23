class GameController {
    constructor() {
        this.count = 0;
        this.drw = 0;
    }
    evaluateWinner() {
        let winner = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        let arr = document.querySelectorAll('.cell');
        let win = document.getElementById('win')
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < 3; j++) {
                if (arr[winner[i][j]].classList.contains('x')) {
                    //console.log(cell.chance)
                    this.count++;
                }

            }
            //check for winner
            if (this.count == 3) {

                win.classList.add('show')
                for (let m = 0; m < arr.length; m++) {
                    arr[m].classList.remove('x')
                    arr[m].classList.remove('circle')
                }
                document.getElementById('cond').innerHTML=cell.chance+'is winner'
                let btn = document.getElementById('btn')
                btn.addEventListener('click', this.restart.bind(this))
                restart()
                {
                    let cell = new Cells('x', 'circle', 'circle');
                    cell.placeMark();
                }
                console.log(cell.chance + ' is winner')

            }
            this.count = 0;


            //check for draw match
            for (let k = 0; k < arr.length; k++) {
                if (arr[k].classList.contains('x') || arr[k].classList.contains('circle')) {
                    this.drw++;
                    if (this.drw == arr.length) {
                        win.classList.add('show')
                        for (let m = 0; m < arr.length; m++) {
                            arr[m].classList.remove('x')
                            arr[m].classList.remove('circle')
                        }
                        document.getElementById('cond').innerHTML='draw';
                        let btn = document.getElementById('btn')
                        btn.addEventListener('click', this.restart)
                        restart()
                        {
                            let cell = new Cells('x', 'circle', 'circle');
                            cell.placeMark();
                        }
                        console.log('draw');
                    }

                }
            }
            this.drw = 0;
        }

    }
}
let cell = new Cells('x', 'circle', 'circle');
cell.placeMark();

