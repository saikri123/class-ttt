class Board extends Player
{
    constructor(x,circle,x_hover,circle_hover,hover_turn)
    {
        super(x,circle)
        this.x_hover=x_hover;
        this.circle_hover=circle_hover;
        this.hover_turn=hover_turn;
        this.mouse_on_it=document.getElementById('board');
    }
    hover()
    {
        this.mouse_on_it.classList.remove(this.x_hover);
        this.mouse_on_it.classList.remove(this.circle_hover);
        let mouse_on=super.current_player_turn(this.hover_turn);
        //console.log('mouse_on '+mouse_on)
        if(mouse_on==this.circle)
        {
            this.mouse_on_it.classList.add(this.x_hover);
        }
        else
        {
            this.mouse_on_it.classList.add(this.circle_hover);
        }
    }
}