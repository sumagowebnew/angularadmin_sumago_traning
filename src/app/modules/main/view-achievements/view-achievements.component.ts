import { Component } from '@angular/core';

@Component({
  selector: 'app-view-achievements',
  templateUrl: './view-achievements.component.html',
  styleUrls: ['./view-achievements.component.scss']
})
export class ViewAchievementsComponent {
  achievements:any[]=[
    {
      title:'Purva Diwate',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLYtLDlvHW2qWZR_qy8PmZ_rz-TPcVUGidsLRfe_Ck&s',
      date:new Date('2023-04-12'),
    },
    {
      title:'Purva Diwate',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLYtLDlvHW2qWZR_qy8PmZ_rz-TPcVUGidsLRfe_Ck&s',
      date:new Date('2023-04-12'),
    }

  ];
  deletecontact(index: number){
    this.achievements.splice(index, 1);
  }
}
