import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() adding = new EventEmitter<string>();
  clubs = [
    {
    name: 'FC Platinum',
    games_played: 29,
    games_won: 19,
    games_drew: 7,
    games_lost: 3,
    f_goals: 44,
    conceded: 11,
    goal_difference: 33,
    points: 64
    },
    {
      name: 'Chicken inn',
      games_played: 29,
      games_won: 16,
      games_drew: 6,
      games_lost: 7,
      f_goals: 37,
      conceded: 25,
      goal_difference: 12,
      points: 54
      },
    {
      name: 'Dynamos',
      games_played: 29,
      games_won: 15,
      games_drew: 8,
      games_lost: 6,
      f_goals: 31,
      conceded: 14,
      goal_difference: 17,
      points: 53
      },
      {
        name: 'Ngezi Platinum',
        games_played: 29,
        games_won: 12,
        games_drew: 10,
        games_lost: 7,
        f_goals: 35,
        conceded: 18,
        goal_difference: 17,
        points: 46
        },
        {
          name: 'Highlanders',
          games_played: 29,
          games_won: 11,
          games_drew: 12,
          games_lost: 6,
          f_goals: 39,
          conceded: 26,
          goal_difference: 13,
          points: 45
          },
        {
          name: 'Herentials',
          games_played: 29,
          games_won: 11,
          games_drew: 11,
          games_lost: 7,
          f_goals: 30,
          conceded: 24,
          goal_difference: 6,
          points: 44
          },
        {
          name: 'Triangle United',
          games_played: 29,
          games_won: 11,
          games_drew: 9,
          games_lost: 9,
          f_goals: 33,
          conceded: 29,
          goal_difference: 4,
          points: 42
          },
        {
          name: 'Bulawayo Chiefs',
          games_played: 29,
          games_won: 11,
          games_drew: 9,
          games_lost: 9,
          f_goals: 26,
          conceded: 23,
          goal_difference: 3,
          points: 42
          },
        {
          name: 'Black Rhinos',
          games_played: 29,
          games_won: 9,
          games_drew: 13,
          games_lost: 7,
          f_goals: 31,
          conceded: 27,
          goal_difference: 4,
          points: 42
          },
        {
          name: 'Manica Diamonds',
          games_played: 29,
          games_won: 9,
          games_drew: 12,
          games_lost: 8,
          f_goals: 29,
          conceded: 25,
          goal_difference: 4,
          points: 42
          },
        {
          name: 'Yadah',
          games_played: 29,
          games_won: 8,
          games_drew: 11,
          games_lost: 10,
          f_goals: 23,
          conceded: 26,
          goal_difference: -3,
          points: 35
          },
        {
          name: 'Cranborne Bullets',
          games_played: 29,
          games_won: 10,
          games_drew: 5,
          games_lost: 14,
          f_goals: 29,
          conceded: 38,
          goal_difference: -9,
          points: 35
          },
        {
          name: 'Caps United',
          games_played: 29,
          games_won: 8,
          games_drew: 10,
          games_lost: 11,
          f_goals: 28,
          conceded: 35,
          goal_difference: -7,
          points: 34
          },
        {
          name: 'ZPC Kariba',
          games_played: 29,
          games_won: 6,
          games_drew: 11,
          games_lost: 12,
          f_goals: 14,
          conceded: 25,
          goal_difference: -11,
          points: 29
          },
        {
          name: 'Tenax',
          games_played: 29,
          games_won: 7,
          games_drew: 7,
          games_lost: 15,
          f_goals: 19,
          conceded: 44,
          goal_difference: -25,
          points: 28
          },
        {
          name: 'Harare City',
          games_played: 29,
          games_won: 5,
          games_drew: 12,
          games_lost: 12,
          f_goals: 17,
          conceded: 26,
          goal_difference: -9,
          points: 27
          },
        {
          name: 'Bulawayo City',
          games_played: 29,
          games_won: 6,
          games_drew: 6,
          games_lost: 17,
          f_goals: 20,
          conceded: 40,
          goal_difference: -20,
          points: 24
          },
        {
          name: 'Whawha City',
          games_played: 29,
          games_won: 5,
          games_drew: 5,
          games_lost: 19,
          f_goals: 23,
          conceded: 52,
          goal_difference: -29,
          points: 20
          },
  ];

  constructor(){
    this.addNumber();
    this.sortClubs();
  }

  sortClubs(){
    for (let i = 1; i < this.clubs.length+1; i++){
      console.log("sorting clubs",);
    }
    
  }


  addNumber(){
    for (let i = 1; i < this.clubs.length+1; i++){
      console.log(i);
      // this.adding.emit(console.log(i)); 
    }
  }
}
