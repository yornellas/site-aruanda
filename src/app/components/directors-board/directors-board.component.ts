import { Component } from '@angular/core';
import { BoardMembers } from './board-members';
import { BoardMembersInterface } from 'src/app/shared/interfaces/board-members.interface';

@Component({
  selector: 'directors-board',
  templateUrl: './directors-board.component.html',
  styleUrls: ['./directors-board.component.scss']
})
export class DirectorsBoardComponent {
  boardMembers: BoardMembersInterface[] = BoardMembers
}
