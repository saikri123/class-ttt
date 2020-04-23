class Cells extends Player
{ 
   constructor(x,circle,chance)
   {
      super(x,circle);
      this.chance=chance;
   }
   
   placeMark()
   {
      let cells=document.querySelectorAll('.cell')
      let obj=new Board('x','circle','xhover','circlehover','x')
      obj.hover();
      for(let i=0;i<cells.length;i++)
      {
         cells[i].addEventListener('click',this.mark.bind(this),{once:true});  
      }
   }
   mark(e)
   {
      let current_click=e.currentTarget;
      let player_turn=super.current_player_turn(this.chance);
      let obj=new Board('x','circle','xhover','circlehover',this.chance)
      obj.hover();
      this.chance=player_turn;  
      current_click.classList.add(player_turn);
      let controller=new GameController();
      controller.evaluateWinner();
      
   }  
}