import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
      }
  ];

  // countClubs(lastRecordId: number){
  //   let increasedNum = Number(lastRecordId.replace('ABC','')) + 1;
  //   let kmsStr = lastRecordId.substr(0,3);
  //   for(let i=0; i< 6 - increasedNum.toString().length; i++){
  //     kmsStr = kmsStr+'0';
  //   }
  //   kmsStr = kmsStr + increasedNum.toString();
  //   console.log(kmsStr);
  // }
}
