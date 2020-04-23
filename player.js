class Player
{
    constructor(x,circle)
    {
        this.x=x;
        this.circle=circle;
    }

    current_player_turn(current_turn)
    {
        if(current_turn==this.circle)
        {
            return 'x';
        }
        else
        {
            return 'circle';
        }
    }
}